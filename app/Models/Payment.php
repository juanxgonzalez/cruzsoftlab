<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'quotation_id',
        'payment_reference',
        'client_name',
        'concept',
        'payment_type',
        'amount',
        'payment_method',
        'payment_date',
        'status',
        'proof_url',
        'notes',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'payment_date' => 'date',
    ];

    public function quotation()
    {
        return $this->belongsTo(Quotation::class);
    }

    public function invoice()
    {
        return $this->hasOne(Invoice::class);
    }
}
