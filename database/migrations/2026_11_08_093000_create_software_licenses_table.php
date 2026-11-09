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
        if (!Schema::hasTable('software_licenses')) {
            Schema::create('software_licenses', function (Blueprint $table) {
                $table->id();
                $table->string('client_name');
                $table->string('system_slug')->unique(); // e.g. sistemaacademicounib
                $table->string('system_url')->nullable();
                $table->boolean('active')->default(true);
                $table->boolean('blocked')->default(false);
                $table->date('cutoff_date')->nullable();
                $table->unsignedInteger('grace_days')->default(3);
                $table->decimal('monthly_amount', 10, 2)->default(0.00);
                $table->string('extension_code', 50)->nullable()->default('CRUZ2026');
                $table->text('alert_message')->nullable();
                $table->string('contact_whatsapp', 30)->nullable()->default('528781135411');
                $table->string('contact_email', 100)->nullable()->default('soporte@cruzsoftlabs.com');
                $table->text('notes')->nullable();
                $table->timestamp('last_ping_at')->nullable();
                $table->timestamps();

                $table->index(['system_slug', 'active']);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('software_licenses');
    }
};

