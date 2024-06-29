Clear-Host
Write-Host "                                                                                   
██████╗ ██████╗ ██╗   ██╗  ████████╗███████╗███████╗████████╗                     
██╔══██╗██╔══██╗╚██╗ ██╔╝  ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝                     
██████╔╝██████╔╝ ╚████╔╝█████╗██║   █████╗  ███████╗   ██║                        
██╔═══╝ ██╔═══╝   ╚██╔╝ ╚════╝██║   ██╔══╝  ╚════██║   ██║                        
██║     ██║        ██║        ██║   ███████╗███████║   ██║                        
╚═╝     ╚═╝        ╚═╝        ╚═╝   ╚══════╝╚══════╝   ╚═╝                        
                                                                                  
 ██████╗ ██████╗ ███████╗██████╗  █████╗ ██████╗  ██████╗ ██████╗ ███████╗███████╗
██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔════╝██╔════╝
██║   ██║██████╔╝█████╗  ██████╔╝███████║██║  ██║██║   ██║██████╔╝█████╗  ███████╗
██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗██╔══██║██║  ██║██║   ██║██╔══██╗██╔══╝  ╚════██║
╚██████╔╝██║     ███████╗██║  ██║██║  ██║██████╔╝╚██████╔╝██║  ██║███████╗███████║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
                                                                                 " 
$downloadsPath = (New-Object -ComObject Shell.Application).Namespace('shell:Downloads').Self.Path
$actualPath = Get-Location
$nuevaCarpeta = "src"
$actualPath = Join-Path -Path $actualPath -ChildPath $nuevaCarpeta
$jsFiles = Get-ChildItem -Path $downloadsPath -Filter "*.js"
foreach ($file in $jsFiles) {
    if ($file.Name -ne "operadores.js") {
        $newName = Join-Path -Path $downloadsPath -ChildPath "operadores.js"
        Rename-Item -Path $file.FullName -NewName $newName
    }
}
$jsFiles = Get-ChildItem -Path $downloadsPath -Filter "operadores.js"
Move-Item -Path $jsFiles -Destination $actualPath
$jsFiles = Get-ChildItem -Path $actualPath -Filter "operadores.js"
Write-Host "---------------------------------------------------------------------"
Write-Host "Abriendo archivo:" $jsFiles
Write-Host "---------------------------------------------------------------------"
Write-Host "---------------------------------------------------------------------"
Get-Content $jsFiles
Write-Host "---------------------------------------------------------------------"
$ejecucion = node $jsFiles
Write-Host "---------------------------------------------------------------------"
Write-Host "Resultado de la ejecucion:" $ejecucion
Write-Host "---------------------------------------------------------------------"
Remove-Item $jsFiles
