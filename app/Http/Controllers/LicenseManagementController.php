<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SoftwareLicense;
use Illuminate\Support\Carbon;

class LicenseManagementController extends Controller
{
    /**
     * Endpoint público que consulta el software cliente (ej. sistemaacademicounib).
     * URL: /licenses/{slug}.json
     */
    public function serveJson(string $slug)
    {
        $slugLimpio = preg_replace('/\.json$/i', '', $slug);

        $license = SoftwareLicense::where('system_slug', $slugLimpio)->first();

        if (!$license) {
            return response()->json([
                'error' => 'Licencia de software no encontrada',
                'sistema' => $slugLimpio,
            ], 404, ['Access-Control-Allow-Origin' => '*']);
        }

        // Registrar telemetría del último ping de conexión
        $license->update(['last_ping_at' => now()]);

        return response()->json([
            'cliente' => $license->client_name,
            'sistema' => $license->system_slug,
            'activo' => (bool) $license->active,
            'fecha_corte' => $license->cutoff_date ? $license->cutoff_date->format('Y-m-d') : null,
            'dias_gracia' => (int) $license->grace_days,
            'bloqueado' => (bool) $license->blocked,
            'codigo_prorroga' => $license->extension_code,
            'mensaje_alerta' => $license->alert_message,
            'contacto_whatsapp' => $license->contact_whatsapp,
            'contacto_email' => $license->contact_email,
            'actualizado_en' => $license->updated_at->format('Y-m-d H:i:s'),
        ], 200, [
            'Access-Control-Allow-Origin' => '*',
            'Cache-Control' => 'no-cache, private',
        ]);
    }

    /**
     * API del panel de control de CruzSoftLabs para listar softwares y métricas.
     */
    public function index()
    {
        $licenses = SoftwareLicense::orderBy('client_name')->get();

        $hoy = now()->startOfDay();
        $proximosAVencer = 0;

        $listaFormateada = $licenses->map(function ($lic) use ($hoy, &$proximosAVencer) {
            $diasRestantes = null;
            $estaVencido = false;

            if ($lic->cutoff_date) {
                $fechaLimite = Carbon::parse($lic->cutoff_date)->startOfDay()->addDays((int) $lic->grace_days);
                $diasRestantes = (int) round($hoy->diffInDays($fechaLimite, false));

                if ($diasRestantes < 0) {
                    $estaVencido = true;
                } elseif ($diasRestantes <= 7) {
                    $proximosAVencer++;
                }
            }

            return [
                'id' => $lic->id,
                'client_name' => $lic->client_name,
                'system_slug' => $lic->system_slug,
                'system_url' => $lic->system_url,
                'active' => (bool) $lic->active,
                'blocked' => (bool) $lic->blocked,
                'cutoff_date' => $lic->cutoff_date ? $lic->cutoff_date->format('Y-m-d') : null,
                'grace_days' => $lic->grace_days,
                'monthly_amount' => (float) $lic->monthly_amount,
                'extension_code' => $lic->extension_code,
                'alert_message' => $lic->alert_message,
                'contact_whatsapp' => $lic->contact_whatsapp,
                'contact_email' => $lic->contact_email,
                'notes' => $lic->notes,
                'dias_restantes' => $diasRestantes,
                'esta_vencido' => $estaVencido,
                'last_ping_at' => $lic->last_ping_at ? $lic->last_ping_at->format('d/m/Y H:i:s') : 'Nunca',
                'json_url' => url("/licenses/{$lic->system_slug}.json"),
            ];
        });

        $metrics = [
            'total' => $licenses->count(),
            'active' => $licenses->where('active', true)->where('blocked', false)->count(),
            'blocked' => $licenses->where('blocked', true)->count(),
            'expiring_soon' => $proximosAVencer,
            'total_mrr' => $licenses->sum('monthly_amount'),
        ];

        return response()->json([
            'licenses' => $listaFormateada,
            'metrics' => $metrics,
        ]);
    }

    /**
     * Crear o actualizar una licencia / suscripción.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'id' => 'nullable|integer|exists:software_licenses,id',
            'client_name' => 'required|string|max:255',
            'system_slug' => 'required|string|max:100',
            'system_url' => 'nullable|string|max:255',
            'active' => 'boolean',
            'blocked' => 'boolean',
            'cutoff_date' => 'nullable|date',
            'grace_days' => 'integer|min:0|max:60',
            'monthly_amount' => 'numeric|min:0',
            'extension_code' => 'nullable|string|max:50',
            'alert_message' => 'nullable|string',
            'contact_whatsapp' => 'nullable|string|max:30',
            'contact_email' => 'nullable|email|max:100',
            'notes' => 'nullable|string',
        ]);

        try {
            if (!empty($validated['id'])) {
                $license = SoftwareLicense::findOrFail($validated['id']);
                $license->update($validated);
            } else {
                // Si ya existe una licencia con el mismo slug, actualizarla automáticamente (evita error de clave duplicada)
                $existente = SoftwareLicense::where('system_slug', $validated['system_slug'])->first();
                if ($existente) {
                    $existente->update($validated);
                    $license = $existente;
                } else {
                    $license = SoftwareLicense::create($validated);
                }
            }

            return response()->json([
                'success' => true,
                'license' => $license,
                'message' => 'Licencia guardada y actualizada correctamente.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al guardar la licencia: ' . $e->getMessage(),
            ], 422);
        }
    }

    /**
     * Alternar estado de bloqueo (Activar / Suspender al instante).
     */
    public function toggleBlocked($id)
    {
        $license = SoftwareLicense::findOrFail($id);
        $license->update(['blocked' => !$license->blocked]);

        return response()->json([
            'success' => true,
            'blocked' => $license->blocked,
            'message' => $license->blocked 
                ? "El software {$license->client_name} ha sido SUSPENDIDO." 
                : "El software {$license->client_name} ha sido REACTIVADO con éxito.",
        ]);
    }

    /**
     * Extender la fecha de corte (ej. +30 días por pago de abono).
     */
    public function extend(Request $request, $id)
    {
        $dias = (int) $request->input('days', 30);
        $license = SoftwareLicense::findOrFail($id);

        $base = $license->cutoff_date && Carbon::parse($license->cutoff_date)->isFuture()
            ? Carbon::parse($license->cutoff_date)
            : now();

        $nuevaFecha = $base->addDays($dias);

        $license->update([
            'cutoff_date' => $nuevaFecha,
            'blocked' => false,
        ]);

        return response()->json([
            'success' => true,
            'cutoff_date' => $nuevaFecha->format('Y-m-d'),
            'message' => "Se han extendido {$dias} días de servicio hasta el " . $nuevaFecha->format('d/m/Y') . ".",
        ]);
    }

    /**
     * Eliminar licencia.
     */
    public function destroy($id)
    {
        $license = SoftwareLicense::findOrFail($id);
        $license->delete();

        return response()->json([
            'success' => true,
            'message' => 'Licencia eliminada.',
        ]);
    }
}

