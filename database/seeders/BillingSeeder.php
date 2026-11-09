<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Quotation;
use App\Models\Payment;
use App\Models\Invoice;

class BillingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Cotización Cafetería Prepago QR (de acuerdo al documento docx del usuario)
        $cafeteria = Quotation::updateOrCreate(
            ['folio' => 'COT-2026-001'],
            [
                'client_name' => 'Lic. Eliud Abib Cadena Toledo',
                'client_organization' => 'Universidad Interamericana del Bravo (UNIB)',
                'client_email' => 'rectoria@universidadunib.edu.mx',
                'client_phone' => '+52 (899) 922-4500',
                'project_title' => 'Sistema de Cafetería Escolar Prepago & Despacho Express QR',
                'description' => 'Solución tecnológica integral Click & Collect con semáforo nutricional SEP/Salud NOM-051, tickets digitales QR cifrados para alumnos y cobro en línea para padres.',
                'subtotal' => 73500.00,
                'tax_amount' => 11760.00, // 16% IVA
                'total' => 85260.00,
                'currency' => 'MXN',
                'status' => 'en_cobro',
                'valid_until' => '2026-09-26',
                'document_url' => '/docs/Cotizacion_Sistema_Cafeteria_Prepago_QR.docx',
                'modules_breakdown' => [
                    ['module' => 'Portal Móvil para Padres (PWA) + Catálogo con Semáforo SEP', 'hours' => 50, 'amount' => 17500.00],
                    ['module' => 'Módulo de Pagos en Línea (Pasarela de Pago + Monedero Digital)', 'hours' => 45, 'amount' => 15750.00],
                    ['module' => 'Módulo de Despacho Express en Cafetería + Validador de QR', 'hours' => 45, 'amount' => 15750.00],
                    ['module' => 'Sistema de Notificaciones en Tiempo Real + Alertas de Entrega', 'hours' => 35, 'amount' => 12250.00],
                    ['module' => 'Panel de Administración Escolar, Reportes Financieros y Despliegue', 'hours' => 35, 'amount' => 12250.00],
                ],
                'milestones_terms' => [
                    ['milestone' => 'Anticipo (Firma y arranque UI/UX y arquitectura)', 'percentage' => 40, 'amount' => 34104.00, 'status' => 'pagado'],
                    ['milestone' => 'Hito Funcional (Flujo de compra por padres y lector QR pruebas)', 'percentage' => 30, 'amount' => 25578.00, 'status' => 'pendiente'],
                    ['milestone' => 'Finiquito (Entrega en producción, VPS final y capacitación)', 'percentage' => 30, 'amount' => 25578.00, 'status' => 'pendiente'],
                ],
                'notes' => 'Incluye 60 días naturales de garantía para corrección de incidencias o ajustes técnicos y entrega de código fuente al liquidar.',
            ]
        );

        // 2. Registro de Anticipo pagado (40%) para Cafetería
        $anticipo = Payment::updateOrCreate(
            ['payment_reference' => 'PAG-2026-001'],
            [
                'quotation_id' => $cafeteria->id,
                'client_name' => 'Universidad Interamericana del Bravo (UNIB)',
                'concept' => 'Anticipo del 40% - Arranque de Desarrollo Sistema Cafetería QR',
                'payment_type' => 'anticipo',
                'amount' => 34104.00, // Total con IVA del 40%
                'payment_method' => 'SPEI',
                'payment_date' => '2026-08-28',
                'status' => 'completado',
                'proof_url' => 'SPEI-BBVA-984210375',
                'notes' => 'Transferencia interbancaria confirmada por Tesorería UNIB.',
            ]
        );

        // 3. Factura CFDI 4.0 emitida por el Anticipo
        Invoice::updateOrCreate(
            ['invoice_folio' => 'FAC-2026-A104'],
            [
                'quotation_id' => $cafeteria->id,
                'payment_id' => $anticipo->id,
                'uuid' => '4A8F9B2C-1E3D-4A5F-8C7E-9D0E1F2A3B4C',
                'rfc_receptor' => 'UIB980312KP4',
                'razon_social_receptor' => 'UNIVERSIDAD INTERAMERICANA DEL BRAVO A.C.',
                'regimen_fiscal_receptor' => '603 - Personas Morales con Fines no Lucrativos',
                'codigo_postal_receptor' => '88620',
                'uso_cfdi' => 'G03 - Gastos en general',
                'tipo_comprobante' => 'I - Ingreso',
                'metodo_pago' => 'PUE - Pago en una sola exhibición',
                'forma_pago' => '03 - Transferencia electrónica de fondos',
                'subtotal' => 29400.00, // 40% de 73,500
                'iva' => 4704.00,       // 16% de 29,400
                'total' => 34104.00,
                'status' => 'timbrada',
                'fecha_emision' => '2026-08-28 14:35:20',
                'pdf_url' => '/invoices/FAC-2026-A104.pdf',
                'xml_url' => '/invoices/FAC-2026-A104.xml',
                'sat_cert_notes' => 'Certificado SAT 00001000000504465028. Timbrado PAC Autorizado.',
            ]
        );

        // 4. Cotización CBTis 239 Módulo Integral de Servicios Escolares
        $cbtis = Quotation::updateOrCreate(
            ['folio' => 'COT-2026-002'],
            [
                'client_name' => 'Dirección de Servicios Escolares',
                'client_organization' => 'CBTis No. 239',
                'client_email' => 'escolares@cbtis239.edu.mx',
                'client_phone' => '+52 (899) 955-1234',
                'project_title' => 'Módulo Integral de Inscripción y Kárdex Digital',
                'description' => 'Plataforma para reinscripción en línea, consulta de boletas de calificaciones y generación de constancias oficiales.',
                'subtotal' => 45000.00,
                'tax_amount' => 7200.00,
                'total' => 52200.00,
                'currency' => 'MXN',
                'status' => 'aceptada',
                'valid_until' => '2026-09-30',
                'document_url' => null,
                'modules_breakdown' => [
                    ['module' => 'Portal del Alumno y Generador de Constancias', 'hours' => 30, 'amount' => 18000.00],
                    ['module' => 'Kárdex Digital y Calificaciones por Periodo', 'hours' => 25, 'amount' => 15000.00],
                    ['module' => 'Panel de Control Administrativo y Exportación DGETI', 'hours' => 20, 'amount' => 12000.00],
                ],
                'milestones_terms' => [
                    ['milestone' => '50% Anticipo de Contrato', 'percentage' => 50, 'amount' => 26100.00, 'status' => 'pendiente'],
                    ['milestone' => '50% Finiquito contra Entrega', 'percentage' => 50, 'amount' => 26100.00, 'status' => 'pendiente'],
                ],
                'notes' => 'Acuerdo institucional DGETI.',
            ]
        );
    }
}
