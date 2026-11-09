<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoftwareLicense extends Model
{
    use HasFactory;

    protected $table = 'software_licenses';

    protected $fillable = [
        'client_name',
        'system_slug',
        'system_url',
        'active',
        'blocked',
        'cutoff_date',
        'grace_days',
        'monthly_amount',
        'extension_code',
        'alert_message',
        'contact_whatsapp',
        'contact_email',
        'notes',
        'last_ping_at',
    ];

    protected $casts = [
        'active' => 'boolean',
        'blocked' => 'boolean',
        'cutoff_date' => 'date',
        'grace_days' => 'integer',
        'monthly_amount' => 'decimal:2',
        'last_ping_at' => 'datetime',
    ];
}

