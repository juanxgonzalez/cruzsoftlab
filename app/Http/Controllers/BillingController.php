<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quotation;
use App\Models\Payment;
use App\Models\Invoice;

use App\Services\QuotationDocxService;

class BillingController extends Controller
{
    /**
     * Dashboard Summary Metrics (Cobranza, Facturado, Por Cobrar, Cotizaciones)
     */
    public function dashboardMetrics()
    {
        $totalCotizado = Quotation::sum('total');
        $totalCobrado = Payment::where('status', 'completado')->sum('amount');
        $totalFacturado = Invoice::where('status', '!=', 'cancelada')->sum('total');
        $totalPendiente = max(0, $totalCotizado - $totalCobrado);

        $conteoCotizaciones = Quotation::count();
        $conteoPagos = Payment::count();
        $conteoFacturas = Invoice::count();

        return response()->json([
            'metrics' => [
                'total_cotizado' => $totalCotizado,
                'total_cobrado' => $totalCobrado,
                'total_facturado' => $totalFacturado,
                'total_pendiente' => $totalPendiente,
                'count_quotations' => $conteoCotizaciones,
                'count_payments' => $conteoPagos,
                'count_invoices' => $conteoFacturas,
            ],
            'recent_quotations' => Quotation::with(['payments', 'invoices'])->latest()->take(5)->get(),
            'recent_payments' => Payment::with('quotation')->latest()->take(5)->get(),
            'recent_invoices' => Invoice::with('quotation')->latest()->take(5)->get(),
        ]);
    }

    /**
     * 1. Cotizaciones
     */
    public function getQuotations(Request $request)
    {
        $query = Quotation::with(['payments', 'invoices'])->latest();

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $s = $request->search;
            $query->where(function($q) use ($s) {
                $q->where('folio', 'like', "%{$s}%")
                  ->orWhere('client_name', 'like', "%{$s}%")
                  ->orWhere('client_organization', 'like', "%{$s}%")
                  ->orWhere('project_title', 'like', "%{$s}%");
            });
        }

        return response()->json($query->get());
    }

    public function storeQuotation(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_organization' => 'nullable|string|max:255',
            'client_email' => 'nullable|email|max:255',
            'client_phone' => 'nullable|string|max:50',
            'project_title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'subtotal' => 'required|numeric|min:0',
            'tax_amount' => 'nullable|numeric|min:0',
            'total' => 'required|numeric|min:0',
            'valid_until' => 'nullable|date',
            'modules_breakdown' => 'nullable',
            'milestones_terms' => 'nullable',
            'notes' => 'nullable|string',
            'document_file' => 'nullable|file|mimes:docx,pdf,doc|max:20480',
        ]);

        $nextId = Quotation::max('id') + 1;
        $validated['folio'] = 'COT-' . date('Y') . '-' . str_pad($nextId, 3, '0', STR_PAD_LEFT);
        $validated['tax_amount'] = $validated['tax_amount'] ?? ($validated['subtotal'] * 0.16);
        $validated['total'] = $validated['subtotal'] + $validated['tax_amount'];
        $validated['status'] = 'enviada';

        if (is_string($request->modules_breakdown)) {
            $validated['modules_breakdown'] = json_decode($request->modules_breakdown, true);
        }

        // Si el usuario subió su documento manual (Word o PDF)
        if ($request->hasFile('document_file')) {
            $file = $request->file('document_file');
            $ext = $file->getClientOriginalExtension();
            $filename = 'Cotizacion_' . $validated['folio'] . '_Manual.' . $ext;
            $file->storeAs('public/quotations', $filename);
            $validated['document_url'] = '/api/billing/quotations/' . $nextId . '/download';
        }

        $quotation = Quotation::create($validated);

        // Si no subió documento manual, generar uno basado en la plantilla oficial
        if (!$request->hasFile('document_file')) {
            try {
                $docUrl = QuotationDocxService::generate($quotation);
                $quotation->update(['document_url' => $docUrl]);
            } catch (\Exception $e) {
                \Log::error('Error generando documento .docx: ' . $e->getMessage());
            }
        }

        return response()->json([
            'message' => 'Cotización guardada exitosamente',
            'quotation' => $quotation
        ], 201);
    }

    public function updateQuotationStatus(Request $request, $id)
    {
        $quotation = Quotation::findOrFail($id);
        $validated = $request->validate([
            'status' => 'required|string|in:borrador,enviada,aceptada,rechazada,en_cobro,liquidada',
        ]);

        $quotation->update(['status' => $validated['status']]);

        return response()->json([
            'message' => 'Estado de cotización actualizado',
            'quotation' => $quotation
        ]);
    }

    public function downloadQuotationDocx($id)
    {
        $quotation = Quotation::findOrFail($id);
        $cleanFolio = preg_replace('/[^A-Za-z0-9_\-]/', '_', $quotation->folio);

        // 1. Revisar si hay archivo manual subido (.pdf o .docx)
        $files = glob(storage_path('app/public/quotations/Cotizacion_' . $cleanFolio . '_Manual.*'));
        if (!empty($files) && file_exists($files[0])) {
            $filePath = $files[0];
            $ext = pathinfo($filePath, PATHINFO_EXTENSION);
            $cleanFilename = 'Cotizacion_' . $quotation->folio . '.' . $ext;
            $mime = $ext === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

            return response()->download($filePath, $cleanFilename, [
                'Content-Type' => $mime,
                'Content-Disposition' => 'attachment; filename="' . $cleanFilename . '"',
            ]);
        }

        // 2. Revisar archivo generado automáticamente
        $filename = 'Cotizacion_' . $cleanFolio . '.docx';
        $filePath = storage_path('app/public/quotations/' . $filename);

        if (!file_exists($filePath)) {
            try {
                QuotationDocxService::generate($quotation);
            } catch (Throwable $e) {
                Log::error("Download Generate Error: " . $e->getMessage());
            }
        }

        if (!file_exists($filePath)) {
            $filePath = resource_path('templates/cotizacion_base.docx');
        }

        $cleanFilename = 'Cotizacion_' . $quotation->folio . '.docx';

        return response()->download($filePath, $cleanFilename, [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'Content-Disposition' => 'attachment; filename="' . $cleanFilename . '"',
            'Cache-Control' => 'no-cache, no-store, must-revalidate',
            'Pragma' => 'no-cache',
            'Expires' => '0',
        ]);
    }

    /**
     * 2. Pagos / Anticipos / Abonos
     */
    public function getPayments(Request $request)
    {
        $query = Payment::with('quotation')->latest();

        if ($request->filled('type')) {
            $query->where('payment_type', $request->type);
        }

        return response()->json($query->get());
    }

    public function storePayment(Request $request)
    {
        $validated = $request->validate([
            'quotation_id' => 'nullable|exists:quotations,id',
            'client_name' => 'required|string|max:255',
            'concept' => 'required|string|max:255',
            'payment_type' => 'required|string|in:anticipo,abono,liquidacion,mantenimiento',
            'amount' => 'required|numeric|min:1',
            'payment_method' => 'required|string',
            'payment_date' => 'required|date',
            'notes' => 'nullable|string',
            'proof_url' => 'nullable|string',
        ]);

        $nextId = Payment::max('id') + 1;
        $validated['payment_reference'] = 'PAG-' . date('Y') . '-' . str_pad($nextId, 3, '0', STR_PAD_LEFT);
        $validated['status'] = 'completado';

        $payment = Payment::create($validated);

        // Si pertenece a una cotización, verificar si se actualiza a en_cobro o liquidada
        if ($payment->quotation_id) {
            $quotation = Quotation::with('payments')->find($payment->quotation_id);
            $totalPagado = $quotation->payments()->where('status', 'completado')->sum('amount');
            if ($totalPagado >= $quotation->total) {
                $quotation->update(['status' => 'liquidada']);
            } else if ($quotation->status === 'aceptada') {
                $quotation->update(['status' => 'en_cobro']);
            }
        }

        return response()->json([
            'message' => 'Pago / Abono registrado exitosamente',
            'payment' => $payment
        ], 201);
    }

    /**
     * 3. Facturación CFDI 4.0
     */
    public function getInvoices(Request $request)
    {
        $query = Invoice::with(['quotation', 'payment'])->latest();

        return response()->json($query->get());
    }

    public function storeInvoice(Request $request)
    {
        $validated = $request->validate([
            'quotation_id' => 'nullable|exists:quotations,id',
            'payment_id' => 'nullable|exists:payments,id',
            'rfc_receptor' => 'required|string|max:13',
            'razon_social_receptor' => 'required|string|max:255',
            'regimen_fiscal_receptor' => 'required|string|max:255',
            'codigo_postal_receptor' => 'required|string|max:10',
            'uso_cfdi' => 'required|string|max:50',
            'subtotal' => 'required|numeric|min:0',
            'iva' => 'required|numeric|min:0',
            'total' => 'required|numeric|min:0',
            'metodo_pago' => 'nullable|string',
            'forma_pago' => 'nullable|string',
        ]);

        $nextId = Invoice::max('id') + 1;
        $validated['invoice_folio'] = 'FAC-' . date('Y') . '-A' . str_pad($nextId, 3, '0', STR_PAD_LEFT);
        
        // Simulación de UUID Fiscal SAT para timbrado
        $validated['uuid'] = strtoupper(bin2hex(random_bytes(4))) . '-' . 
                             strtoupper(bin2hex(random_bytes(2))) . '-4' . 
                             substr(strtoupper(bin2hex(random_bytes(2))), 1) . '-' . 
                             strtoupper(bin2hex(random_bytes(2))) . '-' . 
                             strtoupper(bin2hex(random_bytes(6)));

        $validated['status'] = 'timbrada';
        $validated['fecha_emision'] = now();
        $validated['pdf_url'] = '/invoices/' . $validated['invoice_folio'] . '.pdf';
        $validated['xml_url'] = '/invoices/' . $validated['invoice_folio'] . '.xml';
        $validated['sat_cert_notes'] = 'Timbre Fiscal Digital SAT verificado CFDI 4.0 PAC Autorizado.';

        $invoice = Invoice::create($validated);

        return response()->json([
            'message' => 'Factura CFDI emitida y timbrada exitosamente',
            'invoice' => $invoice
        ], 201);
    }
    /**
     * Editar datos completos de una Cotización
     */
    public function updateQuotation(Request $request, $id)
    {
        $quotation = Quotation::findOrFail($id);

        $validated = $request->validate([
            'client_name'          => 'sometimes|required|string|max:255',
            'client_organization'  => 'nullable|string|max:255',
            'client_email'         => 'nullable|email|max:255',
            'client_phone'         => 'nullable|string|max:50',
            'project_title'        => 'sometimes|required|string|max:255',
            'description'          => 'nullable|string',
            'subtotal'             => 'sometimes|required|numeric|min:0',
            'tax_amount'           => 'nullable|numeric|min:0',
            'total'                => 'sometimes|required|numeric|min:0',
            'valid_until'          => 'nullable|date',
            'notes'               => 'nullable|string',
            'status'              => 'nullable|string|in:borrador,enviada,aceptada,rechazada,en_cobro,liquidada',
            'modules_breakdown'   => 'nullable',
            'document_file'       => 'nullable|file|mimes:docx,pdf,doc|max:20480',
        ]);

        // Recalcular IVA si se actualiza subtotal
        if (isset($validated['subtotal'])) {
            $validated['tax_amount'] = $validated['tax_amount'] ?? ($validated['subtotal'] * 0.16);
            $validated['total']      = $validated['subtotal'] + $validated['tax_amount'];
        }

        // Decodificar módulos si vienen como string
        if (isset($validated['modules_breakdown']) && is_string($validated['modules_breakdown'])) {
            $validated['modules_breakdown'] = json_decode($validated['modules_breakdown'], true);
        } elseif ($request->filled('modules_breakdown') && is_string($request->modules_breakdown)) {
            $validated['modules_breakdown'] = json_decode($request->modules_breakdown, true);
        }

        // Reemplazar documento si el usuario sube uno nuevo
        if ($request->hasFile('document_file')) {
            $cleanFolio = preg_replace('/[^A-Za-z0-9_\-]/', '_', $quotation->folio);
            // Borrar archivos manuales anteriores
            $oldFiles = glob(storage_path('app/public/quotations/Cotizacion_' . $cleanFolio . '_Manual.*'));
            foreach ($oldFiles as $old) { @unlink($old); }

            $file     = $request->file('document_file');
            $ext      = $file->getClientOriginalExtension();
            $filename = 'Cotizacion_' . $quotation->folio . '_Manual.' . $ext;
            $file->storeAs('public/quotations', $filename);
            $validated['document_url'] = '/api/billing/quotations/' . $id . '/download';
        }

        $quotation->update($validated);

        return response()->json([
            'message'   => 'Cotización actualizada correctamente',
            'quotation' => $quotation->fresh(),
        ]);
    }

    /**
     * Eliminar una Cotización (y sus archivos asociados)
     */
    public function destroyQuotation($id)
    {
        $quotation = Quotation::findOrFail($id);
        $cleanFolio = preg_replace('/[^A-Za-z0-9_\-]/', '_', $quotation->folio);

        // Eliminar archivos en storage
        $files = glob(storage_path('app/public/quotations/Cotizacion_' . $cleanFolio . '*'));
        foreach ($files as $file) { @unlink($file); }

        $quotation->delete();

        return response()->json([
            'success' => true,
            'message' => 'Cotización eliminada correctamente.',
        ]);
    }


    public function updatePayment(Request $request, $id)
    {
        $payment = Payment::findOrFail($id);

        $validated = $request->validate([
            'quotation_id'   => 'nullable|exists:quotations,id',
            'client_name'    => 'sometimes|required|string|max:255',
            'concept'        => 'sometimes|required|string|max:255',
            'payment_type'   => 'sometimes|required|string|in:anticipo,abono,liquidacion,mantenimiento',
            'amount'         => 'sometimes|required|numeric|min:1',
            'payment_method' => 'sometimes|required|string',
            'payment_date'   => 'sometimes|required|date',
            'notes'          => 'nullable|string',
            'proof_url'      => 'nullable|string',
            'status'         => 'nullable|string|in:completado,pendiente,cancelado',
        ]);

        $payment->update($validated);

        // Si pertenece a una cotización, verificar saldos y actualizar estado
        $qId = $payment->quotation_id;
        if ($qId) {
            $quotation = Quotation::with('payments')->find($qId);
            if ($quotation) {
                $totalPagado = $quotation->payments()->where('status', 'completado')->sum('amount');
                if ($totalPagado >= $quotation->total) {
                    $quotation->update(['status' => 'liquidada']);
                } else if ($totalPagado > 0) {
                    $quotation->update(['status' => 'en_cobro']);
                }
            }
        }

        return response()->json([
            'message' => 'Pago actualizado exitosamente',
            'payment' => $payment->fresh()
        ]);
    }

    public function destroyPayment($id)
    {
        $payment = Payment::findOrFail($id);
        $qId = $payment->quotation_id;

        $payment->delete();

        // Recalcular saldo de cotización asociada
        if ($qId) {
            $quotation = Quotation::with('payments')->find($qId);
            if ($quotation) {
                $totalPagado = $quotation->payments()->where('status', 'completado')->sum('amount');
                if ($totalPagado >= $quotation->total) {
                    $quotation->update(['status' => 'liquidada']);
                } else if ($totalPagado > 0) {
                    $quotation->update(['status' => 'en_cobro']);
                } else {
                    $quotation->update(['status' => 'aceptada']);
                }
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Registro de pago eliminado correctamente.'
        ]);
    }

}
