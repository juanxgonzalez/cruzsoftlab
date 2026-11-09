<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BillingController;
use App\Http\Controllers\LicenseManagementController;

Route::get('/', function () {
    return view('welcome');
});
Route::view('/licencias', 'welcome');
Route::view('/admin/licencias', 'welcome');

// Endpoint público para consulta de licencias de software (ej. /licenses/sistemaacademicounib.json)
Route::get('/licenses/{slug}', [LicenseManagementController::class, 'serveJson'])->where('slug', '.*');

// API Routes
Route::prefix('api')->group(function () {
    // Contact / Proposals
    Route::post('/proposals', [ProposalController::class, 'store']);
    Route::get('/admin/proposals', [ProposalController::class, 'index']);
    Route::patch('/admin/proposals/{id}', [ProposalController::class, 'update']);
    Route::delete('/admin/proposals/{id}', [ProposalController::class, 'destroy']);

    // Auth
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/auth/check', [AuthController::class, 'checkSession']);

    // MÃ³dulo Financiero: Cobro, Pagos (Anticipos, Abonos), Cotizaciones y FacturaciÃ³n
    Route::get('/billing/metrics', [BillingController::class, 'dashboardMetrics']);
    
    // Cotizaciones
    Route::get('/billing/quotations', [BillingController::class, 'getQuotations']);
    Route::post('/billing/quotations', [BillingController::class, 'storeQuotation']);
    Route::patch('/billing/quotations/{id}/status', [BillingController::class, 'updateQuotationStatus']);
    Route::put('/billing/quotations/{id}', [BillingController::class, 'updateQuotation']);
    Route::match(['post', 'put'], '/billing/quotations/{id}/update', [BillingController::class, 'updateQuotation']);
    Route::delete('/billing/quotations/{id}', [BillingController::class, 'destroyQuotation']);
    Route::get('/billing/quotations/{id}/download', [BillingController::class, 'downloadQuotationDocx']);

    // Pagos / Anticipos / Abonos
    Route::get('/billing/payments', [BillingController::class, 'getPayments']);
    Route::post('/billing/payments', [BillingController::class, 'storePayment']);
    Route::put('/billing/payments/{id}', [BillingController::class, 'updatePayment']);
    Route::post('/billing/payments/{id}/update', [BillingController::class, 'updatePayment']);
    Route::delete('/billing/payments/{id}', [BillingController::class, 'destroyPayment']);

    // Facturación CFDI
    Route::get('/billing/invoices', [BillingController::class, 'getInvoices']);
    Route::post('/billing/invoices', [BillingController::class, 'storeInvoice']);

    // Módulo de Licencias y Control Remoto de Software SaaS
    Route::get('/licenses', [LicenseManagementController::class, 'index']);
    Route::post('/licenses', [LicenseManagementController::class, 'store']);
    Route::patch('/licenses/{id}/toggle-blocked', [LicenseManagementController::class, 'toggleBlocked']);
    Route::post('/licenses/{id}/extend', [LicenseManagementController::class, 'extend']);
    Route::delete('/licenses/{id}', [LicenseManagementController::class, 'destroy']);
});

