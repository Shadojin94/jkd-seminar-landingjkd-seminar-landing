# Script de déploiement PowerShell pour copier le dossier JFJKDPROD vers le serveur

# Clone le dépôt complet
git clone https://github.com/Shadojin94/jkd-seminar-landingjkd-seminar-landing.git temp-deploy

# Copie le dossier JFJKDPROD vers le répertoire cible
Copy-Item -Path "temp-deploy/JFJKDPROD/*" -Destination "/var/www/vhosts/cercleonline.com/httpdocs/JFJKDPROD/" -Recurse -Force

# Nettoie le dossier temporaire
Remove-Item -Path "temp-deploy" -Recurse -Force

Write-Host "Déploiement terminé avec succès"
