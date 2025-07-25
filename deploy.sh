#!/bin/bash

# Script de déploiement pour copier le dossier JFJKDPROD vers le serveur

# Clone le dépôt complet
git clone https://github.com/Shadojin94/jkd-seminar-landingjkd-seminar-landing.git temp-deploy

# Copie le dossier JFJKDPROD vers le répertoire cible
cp -r temp-deploy/JFJKDPROD/* /var/www/vhosts/cercleonline.com/httpdocs/JFJKDPROD/

# Nettoie le dossier temporaire
rm -rf temp-deploy

echo "Déploiement terminé avec succès"
