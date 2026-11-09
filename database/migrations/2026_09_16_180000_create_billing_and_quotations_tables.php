<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Cotizaciones (Quotations)
        Schema::create('quotations', function (Blueprint $table) {
            $table->id();
            $table->string('folio')->unique(); // e.g. COT-2026-001
            $table->string('client_name');
            $table->string('client_organization')->nullable();
            $table->string('client_email')->nullable();
            $table->string('client_phone')->nullable();
            $table->string('project_title');
            $table->text('description')->nullable();
            $table->decimal('subtotal', 12, 2)->default(0);
            $table->decimal('tax_amount', 12, 2)->default(0); // IVA (16%)
            $table->decimal('total', 12, 2)->default(0);
            $table->string('currency', 10)->default('MXN');
            $table->string('status')->default('borrador'); // borrador, enviada, aceptada, rechazada, en_cobro, liquidada
            $table->date('valid_until')->nullable();
            $table->string('document_url')->nullable(); // Enlace a docx / pdf si aplica
            $table->json('modules_breakdown')->nullable(); // desglose de módulos y horas
            $table->json('milestones_terms')->nullable(); // 40% anticipo, 30% hito, 30% finiquito
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        // 2. Pagos / Anticipos / Abonos (Payments)
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quotation_id')->nullable()->constrained('quotations')->onDelete('set null');
            $table->string('payment_reference')->unique(); // REC-001, SPEI-xxx, STRIPE-xxx
            $table->string('client_name');
            $table->string('concept'); // Anticipo 40%, Abono Hito 30%, Finiquito 30%, etc.
            $table->string('payment_type'); // anticipo, abono, liquidacion, mantenimiento
            $table->decimal('amount', 12, 2);
            $table->string('payment_method')->default('SPEI'); // SPEI, Transferencia, Tarjeta (Stripe), Efectivo, Cheque
            $table->date('payment_date');
            $table->string('status')->default('completado'); // pendiente, verificado, completado, cancelado
            $table->string('proof_url')->nullable(); // comprobante bancario
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        // 3. Facturación / CFDI 4.0 (Invoices)
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quotation_id')->nullable()->constrained('quotations')->onDelete('set null');
            $table->foreignId('payment_id')->nullable()->constrained('payments')->onDelete('set null');
            $table->string('invoice_folio')->unique(); // FAC-A001
            $table->string('uuid')->nullable()->unique(); // Folio Fiscal SAT UUID
            $table->string('rfc_receptor');
            $table->string('razon_social_receptor');
            $table->string('regimen_fiscal_receptor')->default('601'); // General de Ley, etc.
            $table->string('codigo_postal_receptor');
            $table->string('uso_cfdi')->default('G03'); // G03 Gastos en general, etc.
            $table->string('tipo_comprobante')->default('I'); // I: Ingreso, E: Egreso, P: Pago
            $table->string('metodo_pago')->default('PPD'); // PUE o PPD
            $table->string('forma_pago')->default('03'); // 03: Transferencia, 04: Tarjeta
            $table->decimal('subtotal', 12, 2);
            $table->decimal('iva', 12, 2);
            $table->decimal('total', 12, 2);
            $table->string('status')->default('emitida'); // emitida, timbrada, pagada, cancelada
            $table->dateTime('fecha_emision');
            $table->string('pdf_url')->nullable();
            $table->string('xml_url')->nullable();
            $table->text('sat_cert_notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('quotations');
    }
};
