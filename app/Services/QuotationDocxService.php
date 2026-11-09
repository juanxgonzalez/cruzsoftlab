<?php

namespace App\Services;

use App\Models\Quotation;
use ZipArchive;

class QuotationDocxService
{
    /**
     * Genera un archivo .docx 100% nativo y validado para Microsoft Word
     * inyectando dinámicamente todos los datos del proyecto, cliente,
     * banner principal, subtítulo, tecnología, descripción de servicios,
     * módulos cotizados e importes económicos.
     */
    public static function generate(Quotation $quotation): string
    {
        $templatePath = resource_path('templates/cotizacion_base.docx');
        if (!file_exists($templatePath)) {
            $altPath = 'C:\\Users\\cruz_\\Downloads\\Cotizacion_Sistema_Cafeteria_Prepago_QR.docx';
            if (file_exists($altPath)) {
                copy($altPath, $templatePath);
            }
        }

        $cleanFolio = preg_replace('/[^A-Za-z0-9_\-]/', '_', $quotation->folio);
        $filename = 'Cotizacion_' . $cleanFolio . '.docx';

        $destDir = storage_path('app/public/quotations');
        if (!file_exists($destDir)) {
            mkdir($destDir, 0777, true);
        }

        $targetPath = $destDir . DIRECTORY_SEPARATOR . $filename;
        $tempPath = sys_get_temp_dir() . DIRECTORY_SEPARATOR . uniqid('docx_') . '.docx';

        // Copiar plantilla a temp para evitar errores de permisos de ZipArchive en Windows
        copy($templatePath, $tempPath);

        $zip = new ZipArchive();
        if ($zip->open($tempPath) === TRUE) {
            $xml = $zip->getFromName('word/document.xml');

            // 1. FECHAS Y VIGENCIA
            $fechaTexto = now()->locale('es')->isoFormat('D [de] MMMM [de] YYYY');
            $xml = str_replace('26 de agosto de 2026', $fechaTexto, $xml);

            // 2. BANNER AZUL PRINCIPAL (PORTADA)
            $projectTitle = htmlspecialchars($quotation->project_title, ENT_XML1, 'UTF-8');
            $xml = str_replace('Sistema de Prepago Móvil Parental y Entrega Express en Cafetería Escolar', $projectTitle, $xml);
            $xml = str_replace('Sistema de Cafetería Escolar Prepago &amp; Despacho Express QR', $projectTitle, $xml);
            $xml = str_replace('Sistema de Cafetería Escolar Prepago & Despacho Express QR', $projectTitle, $xml);
            $xml = str_replace('Cafetería Escolar Prepago', $projectTitle, $xml);

            // Subtítulo del banner azul
            if (!empty($quotation->description)) {
                $customSub = htmlspecialchars(mb_substr($quotation->description, 0, 180), ENT_XML1, 'UTF-8');
                $origSub = 'Plataforma Digital de Pre-orden, Pago en Línea por Tutores y Despacho con Validación QR bajo Normativa SEP de Alimentación Saludable';
                // En el XML original está dividido en varias tags de texto:
                $xml = preg_replace('/<w:t xml:space="preserve">Plataforma Digital de <\/w:t>[\s\S]*?<w:t>, Pago en Línea por Tutores y Despacho con Validación QR bajo Normativa SEP de Alimentación Saludable<\/w:t>/', '<w:t>' . $customSub . '</w:t>', $xml);
            }

            // Píldora de Tecnología en el banner
            $techSummary = 'Tecnología: Laravel 11 · React · Tailwind CSS · Base de Datos · APIs Seguras';
            $xml = preg_replace('/<w:t xml:space="preserve">Tecnología: Laravel 11 · <\/w:t>[\s\S]*?<w:t xml:space="preserve"> · Inertia\.js · Pasarela de Pagos · Códigos QR<\/w:t>/', '<w:t>' . $techSummary . '</w:t>', $xml);

            // 3. TABLA "PREPARADO PARA:"
            $clientName = htmlspecialchars($quotation->client_name, ENT_XML1, 'UTF-8');
            $clientOrg = htmlspecialchars($quotation->client_organization ?: $quotation->client_name, ENT_XML1, 'UTF-8');

            // El bloque [UNIVERSIDAD INTERAMERICANA DEL BRAVO / Preparatoria / Cliente] está segmentado en el XML
            $xml = preg_replace('/<w:t>\[<\/w:t>[\s\S]*?<w:t>UNIVERSIDAD<\/w:t>[\s\S]*?<w:t xml:space="preserve"> INTERAMERICANA DEL <\/w:t>[\s\S]*?<w:t>BRAVO \/<\/w:t>[\s\S]*?<w:t>Preparatoria \/ Cliente\]<\/w:t>/', '<w:t>[' . $clientOrg . ']</w:t>', $xml);

            $xml = str_replace('Lic. Eliud Abib Cadena Toledo', $clientName, $xml);
            $xml = str_replace('[UNIVERSIDAD INTERAMERICANA DEL BRAVO / RECTOR]', '[' . $clientOrg . ']', $xml);
            $xml = str_replace('UNIVERSIDAD INTERAMERICANA DEL BRAVO / RECTOR', $clientOrg, $xml);
            $xml = str_replace('UNIVERSIDAD INTERAMERICANA DEL BRAVO', $clientOrg, $xml);

            // 4. SECCIÓN 1: RESUMEN EJECUTIVO Y ALCANCES
            if (!empty($quotation->description)) {
                $customDesc = htmlspecialchars($quotation->description, ENT_XML1, 'UTF-8');
                $originalDesc = 'El presente proyecto describe el desarrollo e implementación de una solución tecnológica integral que transforma la experiencia de compra en la cafetería escolar para nivel preparatoria/bachillerato. Bajo este modelo optimizado, el padre o madre de familia es quien realiza la selección y pago en línea de los alimentos autorizados desde su dispositivo móvil, permitiendo que el estudiante únicamente se presente en la cafetería a recoger su orden previamente pagada mediante la validación de un código QR o matrícula.';
                $xml = str_replace($originalDesc, $customDesc, $xml);
            }

            // 5. TABLA 4: DESGLOSE DE MÓDULOS DEL PROYECTO
            $modules = $quotation->modules_breakdown;
            if (is_string($modules)) {
                $modules = json_decode($modules, true);
            }

            if (!empty($modules) && is_array($modules)) {
                preg_match_all('/<w:tbl[\s\S]*?<\/w:tbl>/', $xml, $tables);
                if (isset($tables[0][4])) {
                    $table4Xml = $tables[0][4];
                    preg_match_all('/<w:tr[\s\S]*?<\/w:tr>/', $table4Xml, $rows);
                    
                    if (isset($rows[0][0])) {
                        $headerRow = $rows[0][0];
                        $newRowsXml = $headerRow;

                        $totalHours = 0;
                        foreach ($modules as $mod) {
                            $modName = htmlspecialchars($mod['module'] ?? 'Servicio / Módulo', ENT_XML1, 'UTF-8');
                            $hours = (int)($mod['hours'] ?? 0);
                            $totalHours += $hours;
                            $amountFormatted = '$' . number_format((float)($mod['amount'] ?? 0), 2);

                            $rowXml = '<w:tr><w:trPr><w:jc w:val="center"/></w:trPr>'
                                    . '<w:tc><w:tcPr><w:tcW w:w="4500" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="F9FAFB"/><w:tcMar><w:top w:w="120" w:type="dxa"/><w:left w:w="120" w:type="dxa"/><w:bottom w:w="120" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar></w:tcPr><w:p><w:pPr><w:spacing w:after="0"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:color w:val="1F2937"/><w:sz w:val="18"/></w:rPr><w:t>' . $modName . '</w:t></w:r></w:p></w:tc>'
                                    . '<w:tc><w:tcPr><w:tcW w:w="2000" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="F9FAFB"/><w:tcMar><w:top w:w="120" w:type="dxa"/><w:left w:w="120" w:type="dxa"/><w:bottom w:w="120" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar></w:tcPr><w:p><w:pPr><w:spacing w:after="0"/><w:jc w:val="right"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:color w:val="1F2937"/><w:sz w:val="18"/></w:rPr><w:t>' . $hours . ' hrs</w:t></w:r></w:p></w:tc>'
                                    . '<w:tc><w:tcPr><w:tcW w:w="2500" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="F9FAFB"/><w:tcMar><w:top w:w="120" w:type="dxa"/><w:left w:w="120" w:type="dxa"/><w:bottom w:w="120" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar></w:tcPr><w:p><w:pPr><w:spacing w:after="0"/><w:jc w:val="right"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:b/><w:color w:val="1F2937"/><w:sz w:val="18"/></w:rPr><w:t>' . $amountFormatted . '</w:t></w:r></w:p></w:tc>'
                                    . '</w:tr>';
                            $newRowsXml .= $rowXml;
                        }

                        $newTable4Xml = preg_replace('/<w:tr[\s\S]*<\/w:tr>/', $newRowsXml, $table4Xml);
                        $xml = str_replace($table4Xml, $newTable4Xml, $xml);

                        $xml = str_replace('210 horas estimadas', $totalHours . ' horas estimadas', $xml);
                    }
                }
            }

            // 6. TABLA 5: IMPORTES ECONÓMICOS
            $subtotalFormatted = '$' . number_format($quotation->subtotal, 2) . ' MXN';
            $totalFormatted = '$' . number_format($quotation->total, 2) . ' MXN*';

            $xml = str_replace('INVERSIÓN TOTAL:</w:t></w:r></w:p></w:tc><w:tc><w:tcPr><w:tcW w:w="4570" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="1E3A8A"/><w:tcMar><w:top w:w="100" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="100" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar></w:tcPr><w:p w14:paraId="6A2A1BEE" w14:textId="77777777" w:rsidR="00770DC8" w:rsidRPr="0010413C" w:rsidRDefault="00FA2AF8" w:rsidP="00D66506"><w:pPr><w:jc w:val="center"/></w:pPr><w:r w:rsidRPr="0010413C"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:b/><w:color w:val="34D399"/></w:rPr><w:t>$73,500.00 MXN*</w:t>', 'INVERSIÓN TOTAL:</w:t></w:r></w:p></w:tc><w:tc><w:tcPr><w:tcW w:w="4570" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="1E3A8A"/><w:tcMar><w:top w:w="100" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="100" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar></w:tcPr><w:p w14:paraId="6A2A1BEE" w14:textId="77777777" w:rsidR="00770DC8" w:rsidRPr="0010413C" w:rsidRDefault="00FA2AF8" w:rsidP="00D66506"><w:pPr><w:jc w:val="center"/></w:pPr><w:r w:rsidRPr="0010413C"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:b/><w:color w:val="34D399"/></w:rPr><w:t>' . $totalFormatted . '</w:t>', $xml);

            $xml = str_replace('$73,500.00 MXN', $subtotalFormatted, $xml);
            $xml = str_replace('$73,500.00 MXN*', $totalFormatted, $xml);

            // 7. HITOS DE PAGO ESPECÍFICOS
            $p40 = number_format($quotation->total * 0.40, 2);
            $p30 = number_format($quotation->total * 0.30, 2);

            $xml = str_replace('40% Anticipo:', '40% Anticipo ($' . $p40 . ' MXN):', $xml);
            $xml = str_replace('30% Hito Funcional:', '30% Hito Funcional ($' . $p30 . ' MXN):', $xml);
            $xml = str_replace('30% Finiquito:', '30% Finiquito ($' . $p30 . ' MXN):', $xml);

            $zip->addFromString('word/document.xml', $xml);
            $zip->close();
        }

        copy($tempPath, $targetPath);
        @unlink($tempPath);

        return '/api/billing/quotations/' . $quotation->id . '/download';
    }
}
