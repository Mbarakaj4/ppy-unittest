Clear-Host
Write-Host "                                                                                   
██████╗ ██████╗ ██╗   ██╗  ████████╗███████╗███████╗████████╗            
██╔══██╗██╔══██╗╚██╗ ██╔╝  ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝            
██████╔╝██████╔╝ ╚████╔╝█████╗██║   █████╗  ███████╗   ██║               
██╔═══╝ ██╔═══╝   ╚██╔╝ ╚════╝██║   ██╔══╝  ╚════██║   ██║               
██║     ██║        ██║        ██║   ███████╗███████║   ██║               
╚═╝     ╚═╝        ╚═╝        ╚═╝   ╚══════╝╚══════╝   ╚═╝               
                                                                         
███████╗██╗   ██╗███╗   ██╗ ██████╗██╗ ██████╗ ███╗   ██╗███████╗███████╗
██╔════╝██║   ██║████╗  ██║██╔════╝██║██╔═══██╗████╗  ██║██╔════╝██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║     ██║██║   ██║██╔██╗ ██║█████╗  ███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║     ██║██║   ██║██║╚██╗██║██╔══╝  ╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗██║╚██████╔╝██║ ╚████║███████╗███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝
                                                                         "
$downloadsPath = (New-Object -ComObject Shell.Application).Namespace('shell:Downloads').Self.Path
$actualPath = Get-Location
$nuevaCarpeta = "src"
$actualPath = Join-Path -Path $actualPath -ChildPath $nuevaCarpeta
$jsFiles = Get-ChildItem -Path $downloadsPath -Filter "*.js"
foreach ($file in $jsFiles) {
    if ($file.Name -ne "funciones.js") {
        $newName = Join-Path -Path $downloadsPath -ChildPath "funciones.js"
        Rename-Item -Path $file.FullName -NewName $newName
    }
}
$jsFiles = Get-ChildItem -Path $downloadsPath -Filter "funciones.js"
$lineToAdd = "
module.exports = { cualEsMayor };"
Move-Item -Path $jsFiles -Destination $actualPath
$jsFiles = Get-ChildItem -Path $actualPath -Filter "funciones.js"
Write-Host "---------------------------------------------------------------------"
Write-Host "Abriendo archivo:" $jsFiles
Write-Host "---------------------------------------------------------------------"

Add-Content -Path $jsFiles -Value $lineToAdd
Write-Host "---------------------------------------------------------------------"
Get-Content $jsFiles
Write-Host "---------------------------------------------------------------------"
node $jsFiles
Write-Host "---------------------------------------------------------------------"
Write-Host "Ejecutar test a:" $jsFiles
Write-Host "---------------------------------------------------------------------"
Read-Host
npm run test tarea-funciones
Remove-Item $jsFiles
 
