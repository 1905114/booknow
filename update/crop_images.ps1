Add-Type -AssemblyName System.Drawing

function Crop-Image($sourcePath, $targetPath, $x, $y, $width, $height) {
    if (-not (Test-Path $sourcePath)) {
        Write-Warning "Source file not found: $sourcePath"
        return
    }
    
    $source = New-Object System.Drawing.Bitmap($sourcePath)
    $intWidth = [int]$width
    $intHeight = [int]$height
    $intX = [int]$x
    $intY = [int]$y
    
    $target = New-Object System.Drawing.Bitmap($intWidth, $intHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($target)
    
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $intWidth, $intHeight)
    $srcRect = New-Object System.Drawing.Rectangle($intX, $intY, $intWidth, $intHeight)
    
    $graphics.DrawImage($source, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $target.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $graphics.Dispose()
    $target.Dispose()
    $source.Dispose()
}

$grids = @(
    @{ Name = "grid4.png"; Start = 0;   Width = 1008; Cards = 1..3 },
    @{ Name = "grid5.png"; Start = 105; Width = 1004; Cards = 4..6 },
    @{ Name = "grid6.png"; Start = 0;   Width = 1003; Cards = 7..9 },
    @{ Name = "grid7.png"; Start = 0;   Width = 1003; Cards = 10..12 }
)

$targetDir = "d:\client_spiritual_website-main\public\services"
$cropHeight = 215 # Approximate height of the image part

foreach ($grid in $grids) {
    $sourcePath = "$targetDir\$($grid.Name)"
    $cardWidth = [Math]::Floor($grid.Width / 3)
    
    for ($i = 0; $i -lt 3; $i++) {
        $cardNumber = $grid.Cards[$i]
        $targetPath = "$targetDir\card_img_$($cardNumber).png"
        
        $x = $grid.Start + ($i * $cardWidth)
        # Add 2px offset to avoid left edge artifacts, and reduce width by 4px to avoid right edge
        $finalX = $x + 2
        $finalWidth = $cardWidth - 4
        
        Write-Host "Cropping Card $cardNumber from $($grid.Name) at X=$finalX, Width=$finalWidth"
        Crop-Image $sourcePath $targetPath $finalX 0 $finalWidth $cropHeight
    }
}

Write-Host "Done! All images re-cropped with precise boundaries."
