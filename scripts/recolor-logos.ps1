Add-Type -AssemblyName System.Drawing

# Remaps the brand purple (#7E07D9) to the manual purple (#5B499E) in-place,
# while preserving white (negative space) and alpha (edges) untouched.
function Recolor-Purple {
    param(
        [string]$Path,
        [byte]$OldG = 7,
        [byte]$NewR = 91, [byte]$NewG = 73, [byte]$NewB = 158
    )

    # Load fully into memory first - Bitmap.FromFile keeps an OS file lock alive
    # even after Dispose(), which corrupts a subsequent in-place overwrite.
    $fileBytes = [System.IO.File]::ReadAllBytes($Path)
    $ms = New-Object System.IO.MemoryStream(,$fileBytes)
    $src = [System.Drawing.Bitmap]::FromStream($ms)
    $w = $src.Width
    $h = $src.Height

    $bmp = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g2 = [System.Drawing.Graphics]::FromImage($bmp)
    $g2.DrawImage($src, 0, 0, $w, $h)
    $g2.Dispose()
    $src.Dispose()
    $ms.Dispose()

    $rect = New-Object -TypeName System.Drawing.Rectangle -ArgumentList 0, 0, $w, $h
    $bd = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    $bytes = New-Object byte[] ($bd.Stride * $h)
    [System.Runtime.InteropServices.Marshal]::Copy($bd.Scan0, $bytes, 0, $bytes.Length)

    $spanG = 255 - $OldG
    $changed = 0

    for ($y = 0; $y -lt $h; $y++) {
        $rowOffset = $y * $bd.Stride
        for ($x = 0; $x -lt $w; $x++) {
            $i = $rowOffset + $x * 4
            $a = $bytes[$i + 3]
            if ($a -eq 0) { continue }

            $g = $bytes[$i + 1]
            $t = (255 - [double]$g) / $spanG
            if ($t -lt 0) { $t = 0 }
            if ($t -gt 1) { $t = 1 }

            if ($t -gt 0.02) {
                $outR = [byte]([Math]::Round(255 * (1 - $t) + $NewR * $t))
                $outG = [byte]([Math]::Round(255 * (1 - $t) + $NewG * $t))
                $outB = [byte]([Math]::Round(255 * (1 - $t) + $NewB * $t))
                $bytes[$i]     = $outB
                $bytes[$i + 1] = $outG
                $bytes[$i + 2] = $outR
                $changed++
            }
        }
    }

    [System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $bd.Scan0, $bytes.Length)
    $bmp.UnlockBits($bd)

    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "$Path recolored ($changed px)"
}

$brand = "C:\Lucas\Pessoal\ERP\Site\Novo Site\Site Ada\public\brand"
Recolor-Purple "$brand\simbolo-cor.png"
Recolor-Purple "$brand\tipografia-cor.png"
Recolor-Purple "$brand\logo-completo.png"
Recolor-Purple "$brand\triangulo-roxo.png"
