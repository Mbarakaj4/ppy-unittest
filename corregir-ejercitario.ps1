Clear-Host
Write-Host "                                                                                   
██████╗ ██████╗ ██╗   ██╗  ████████╗███████╗███████╗████████╗                   
██╔══██╗██╔══██╗╚██╗ ██╔╝  ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝                   
██████╔╝██████╔╝ ╚████╔╝█████╗██║   █████╗  ███████╗   ██║                      
██╔═══╝ ██╔═══╝   ╚██╔╝ ╚════╝██║   ██╔══╝  ╚════██║   ██║                      
██║     ██║        ██║        ██║   ███████╗███████║   ██║                      
╚═╝     ╚═╝        ╚═╝        ╚═╝   ╚══════╝╚══════╝   ╚═╝                      
                                                                                
███████╗     ██╗███████╗██████╗  ██████╗██╗████████╗ █████╗ ██████╗ ██╗ ██████╗ 
██╔════╝     ██║██╔════╝██╔══██╗██╔════╝██║╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗
█████╗       ██║█████╗  ██████╔╝██║     ██║   ██║   ███████║██████╔╝██║██║   ██║
██╔══╝  ██   ██║██╔══╝  ██╔══██╗██║     ██║   ██║   ██╔══██║██╔══██╗██║██║   ██║
███████╗╚█████╔╝███████╗██║  ██║╚██████╗██║   ██║   ██║  ██║██║  ██║██║╚██████╔╝
╚══════╝ ╚════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ 
                                                                                "
$downloadsPath = (New-Object -ComObject Shell.Application).Namespace('shell:Downloads').Self.Path
$actualPath = Get-Location
$nuevaCarpeta = "src"
$actualPath = Join-Path -Path $actualPath -ChildPath $nuevaCarpeta
$jsFiles = Get-ChildItem -Path $downloadsPath -Filter "*.js"
foreach ($file in $jsFiles) {
    if ($file.Name -ne "ejercitario.js") {
        $newName = Join-Path -Path $downloadsPath -ChildPath "ejercitario.js"
        Rename-Item -Path $file.FullName -NewName $newName
    }
}
$jsFiles = Get-ChildItem -Path $downloadsPath -Filter "ejercitario.js"
Move-Item -Path $jsFiles -Destination $actualPath
$jsFiles = Get-ChildItem -Path $actualPath -Filter "ejercitario.js"
Write-Host "---------------------------------------------------------------------"
Write-Host "Abriendo archivo:" $jsFiles
Write-Host "---------------------------------------------------------------------"
Write-Host "---------------------------------------------------------------------"
Get-Content $jsFiles
Write-Host "---------------------------------------------------------------------"
node $jsFiles
Write-Host "---------------------------------------------------------------------"
Write-Host "Ejecutar test a:" $jsFiles
Write-Host "---------------------------------------------------------------------"
Read-Host
npm run test tarea-ejercitario
Remove-Item $jsFiles
