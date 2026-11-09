@echo off
title Preparar Actualizacion para Hostinger
color 0B

echo ========================================================
echo     PREPARANDO ACTUALIZACION SEGURA PARA HOSTINGER
echo ========================================================
echo.
echo 1. Compilando el codigo de React y Tailwind (npm run build)...
call npm run build

echo.
echo 2. Preparando archivos seguros (omitiendo .env y .htaccess)...
set TEMP_DIR=temp_deploy
set ZIP_FILE=actualizacion_hostinger.zip

if exist %TEMP_DIR% rmdir /s /q %TEMP_DIR%
if exist %ZIP_FILE% del /q %ZIP_FILE%

mkdir %TEMP_DIR%
mkdir %TEMP_DIR%\public

:: Copiar carpetas clave que solemos modificar
xcopy app %TEMP_DIR%\app\ /E /H /C /I /Y >nul
xcopy resources %TEMP_DIR%\resources\ /E /H /C /I /Y >nul
xcopy routes %TEMP_DIR%\routes\ /E /H /C /I /Y >nul
:: De public, solo mandamos el build (React) y las imagenes
xcopy public\build %TEMP_DIR%\public\build\ /E /H /C /I /Y >nul
xcopy public\images %TEMP_DIR%\public\images\ /E /H /C /I /Y >nul

echo.
echo 3. Comprimiendo archivos (ZIP Seguro y sin permisos rotos)...
powershell -noprofile -command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('%CD%\%TEMP_DIR%', '%CD%\%ZIP_FILE%')"

echo.
echo 4. Limpiando archivos temporales...
rmdir /s /q %TEMP_DIR%

echo.
echo ========================================================
echo [EXITO] Se ha creado el archivo: %ZIP_FILE%
echo ========================================================
echo.
pause
