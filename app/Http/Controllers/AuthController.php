<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Iniciar sesión administrativa en el portal.
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // Asegurar que exista el usuario administrador principal si aún no fue creado
        $admin = User::firstOrCreate(
            ['email' => 'admin@jjcruz.dev'],
            [
                'name' => 'Ing. J.J. Cruz',
                'password' => Hash::make('admin123'),
                'email_verified_at' => now(),
            ]
        );

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            return response()->json([
                'success' => true,
                'message' => 'Sesión iniciada con éxito.',
                'user' => Auth::user(),
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Credenciales inválidas. Por favor verifique su correo o contraseña.',
        ], 422);
    }

    /**
     * Verificar estado de sesión actual.
     */
    public function checkSession(Request $request)
    {
        if (Auth::check()) {
            return response()->json([
                'authenticated' => true,
                'user' => Auth::user(),
            ]);
        }

        return response()->json([
            'authenticated' => false,
        ]);
    }

    /**
     * Cerrar sesión.
     */
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'success' => true,
            'message' => 'Sesión cerrada correctamente.',
        ]);
    }
}
