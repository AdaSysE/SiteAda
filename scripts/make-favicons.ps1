Add-Type -AssemblyName System.Drawing

function Resize-Png {
    param(
        [string]$SrcPath,
        [string]$DstPath,
        [int]$Size
    )
    $src = [System.Drawing.Bitmap]::FromFile($SrcPath)
    $dst = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $Size, $Size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dst)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, 0, 0, $Size, $Size)
    $g.Dispose()
    $dst.Save($DstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $dst.Dispose()
    $src.Dispose()
    Write-Output "$DstPath ($Size x $Size)"
}

$root = "C:\Lucas\Pessoal\ERP\Site\Novo Site\Site Ada"
$src = "$root\public\brand\simbolo-cor.png"

Resize-Png $src "$root\app\icon.png" 512
Resize-Png $src "$root\app\apple-icon.png" 180
Resize-Png $src "$root\public\brand\simbolo-cor-192.png" 192
