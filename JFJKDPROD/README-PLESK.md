# Installation Jeet Kune Do Seminar - Plesk VPS

## 📋 Instructions d'installation rapide

### 1. Upload sur votre VPS
1. Connectez-vous à votre Plesk
2. Créez un nouveau domaine ou sous-domaine
3. Upload tous les fichiers du dossier `JFJKDPROD` via FTP ou File Manager
4. Assurez-vous que tous les fichiers sont bien uploadés

### 2. Configuration Plesk
1. **PHP Settings** : Pas de configuration PHP nécessaire (site statique)
2. **Apache & Nginx** : Assurez-vous que le module `mod_rewrite` est activé
3. **SSL** : Activez le certificat SSL via Let's Encrypt

### 3. Structure des fichiers
```
JFJKDPROD/
├── index.html          # Page principale
├── .htaccess          # Configuration Apache
├── assets/            # CSS et JS minifiés
│   ├── index-CfHgPSZ5.css
│   └── index-DcDisBXD.js
├── images/            # Toutes les images
├── data/              # Configuration JSON
└── use.txt            # Fichier de documentation
```

### 4. Vérification
- URL principale : `https://votredomaine.com`
- Toutes les pages doivent rediriger vers index.html
- Les images doivent s'afficher correctement

### 5. Optimisations incluses
- ✅ Build de production React
- ✅ CSS/JS minifiés
- ✅ Images optimisées
- ✅ Configuration Apache (.htaccess)
- ✅ Compression et cache activés
- ✅ Headers de sécurité

### 6. Support technique
- Site statique : aucune dépendance serveur
- Compatible avec tous les hébergements Plesk
- Pas de base de données requise

## 🚀 Mise en production
1. Upload complet du dossier
2. Test de toutes les fonctionnalités
3. Activation SSL
4. Monitoring via Plesk
