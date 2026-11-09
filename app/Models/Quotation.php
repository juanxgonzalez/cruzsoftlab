<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quotation extends Model
{
    use HasFactory;

    protected $fillable = [
        'folio',
        'client_name',
        'client_organization',
        'client_email',
        'client_phone',
        'project_title',
        'description',
        'subtotal',
        'tax_amount',
        'total',
        'currency',
        'status',
        'valid_until',
        'document_url',
        'modules_breakdown',
        'milestones_terms',
        'notes',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'total' => 'decimal:2',
        'modules_breakdown' => 'array',
        'milestones_terms' => 'array',
        'valid_until' => 'date',
    ];

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
