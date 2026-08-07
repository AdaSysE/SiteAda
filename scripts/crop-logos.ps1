Add-Type -AssemblyName System.Drawing

function Crop-Transparent {
    param(
        [string]$SrcPath,
        [string]$DstPath,
        [int]$Padding = 8
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($SrcPath)
    $w = $bmp.Width
    $h = $bmp.Height

    $rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
    $bd = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    $bytes = New-Object byte[] ($bd.Stride * $h)
    [System.Runtime.InteropServices.Marshal]::Copy($bd.Scan0, $bytes, 0, $bytes.Length)
    $bmp.UnlockBits($bd)

    $minX = $w; $minY = $h; $maxX = -1; $maxY = -1

    for ($y = 0; $y -lt $h; $y++) {
        $rowOffset = $y * $bd.Stride
        for ($x = 0; $x -lt $w; $x++) {
            $alpha = $bytes[$rowOffset + $x * 4 + 3]
            if ($alpha -gt 10) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }

    if ($maxX -lt 0) {
        Write-Output "No opaque pixels found in $SrcPath"
        $bmp.Dispose()
        return
    }

    $minX = [Math]::Max(0, $minX - $Padding)
    $minY = [Math]::Max(0, $minY - $Padding)
    $maxX = [Math]::Min($w - 1, $maxX + $Padding)
    $maxY = [Math]::Min($h - 1, $maxY + $Padding)

    $cropW = $maxX - $minX + 1
    $cropH = $maxY - $minY + 1

    $cropRect = New-Object -TypeName System.Drawing.Rectangle -ArgumentList $minX, $minY, $cropW, $cropH
    $cropped = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $cropW, $cropH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $cropped.Save($DstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "$SrcPath -> $DstPath  (${w}x${h} -> ${cropW}x${cropH})"

    $cropped.Dispose()
    $bmp.Dispose()
}

$root = "C:\Lucas\Pessoal\ERP\Site\Novo Site\Site Ada"
$srcDir = "$root\Identidade Visual\logo"
$dstDir = "$root\public\brand"

Crop-Transparent "$srcDir\completo\logo-completo.png" "$dstDir\logo-completo.png" 6
Crop-Transparent "$srcDir\simbolo\simbolo-cor.png" "$dstDir\simbolo-cor.png" 0
Crop-Transparent "$srcDir\tipografia\tipografia-cor.png" "$dstDir\tipografia-cor.png" 6
Crop-Transparent "$srcDir\tipografia\tipografia-branca.png" "$dstDir\tipografia-branca.png" 6
Crop-Transparent "$srcDir\elemento-triangulo\triangulo-branco.png" "$dstDir\triangulo-branco.png" 4
Crop-Transparent "$srcDir\elemento-triangulo\triangulo-roxo.png" "$dstDir\triangulo-roxo.png" 4
