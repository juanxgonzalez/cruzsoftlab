<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'quotation_id',
        'payment_id',
        'invoice_folio',
        'uuid',
        'rfc_receptor',
        'razon_social_receptor',
        'regimen_fiscal_receptor',
        'codigo_postal_receptor',
        'uso_cfdi',
        'tipo_comprobante',
        'metodo_pago',
        'forma_pago',
        'subtotal',
        'iva',
        'total',
        'status',
        'fecha_emision',
        'pdf_url',
        'xml_url',
        'sat_cert_notes',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'iva' => 'decimal:2',
        'total' => 'decimal:2',
        'fecha_emision' => 'datetime',
    ];

    public function quotation()
    {
        return $this->belongsTo(Quotation::class);
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }
}
