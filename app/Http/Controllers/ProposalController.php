<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use Illuminate\Http\Request;

class ProposalController extends Controller
{
    /**
     * Almacena una nueva propuesta desde la landing page.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'project_type' => 'required|string|max:255',
            'budget' => 'nullable|string|max:100',
            'message' => 'required|string|max:5000',
        ]);

        $proposal = Proposal::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'project_type' => $validated['project_type'],
            'budget' => $validated['budget'] ?? 'Por definir',
            'message' => $validated['message'],
            'status' => 'pendiente',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Propuesta recibida exitosamente en el servidor.',
            'data' => $proposal,
        ], 201);
    }

    /**
     * Lista todas las propuestas (para el portal administrativo).
     */
    public function index(Request $request)
    {
        $query = Proposal::query()->latest();

        if ($request->filled('status') && $request->status !== 'todos') {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('project_type', 'like', "%{$search}%");
            });
        }

        $proposals = $query->get();

        $stats = [
            'total' => Proposal::count(),
            'pendientes' => Proposal::where('status', 'pendiente')->count(),
            'en_revision' => Proposal::where('status', 'en_revision')->count(),
            'contactados' => Proposal::where('status', 'contactado')->count(),
            'aceptados' => Proposal::where('status', 'aceptado')->count(),
        ];

        return response()->json([
            'success' => true,
            'stats' => $stats,
            'proposals' => $proposals,
        ]);
    }

    /**
     * Actualiza el estado o notas de una propuesta.
     */
    public function update(Request $request, $id)
    {
        $proposal = Proposal::findOrFail($id);

        $validated = $request->validate([
            'status' => 'nullable|in:pendiente,en_revision,contactado,aceptado,archivado',
            'admin_notes' => 'nullable|string',
        ]);

        $proposal->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Propuesta actualizada correctamente.',
            'data' => $proposal,
        ]);
    }

    /**
     * Elimina una propuesta.
     */
    public function destroy($id)
    {
        $proposal = Proposal::findOrFail($id);
        $proposal->delete();

        return response()->json([
            'success' => true,
            'message' => 'Propuesta eliminada correctamente.',
        ]);
    }
}
