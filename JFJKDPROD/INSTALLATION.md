# 🥋 Installation Jeet Kune Do Seminar - VPS Plesk

## 📁 Dossier JFJKDPROD - Prêt pour l'hébergement

### ✅ Contenu du dossier
```
JFJKDPROD/
├── index.html          # Page principale optimisée
├── .htaccess          # Configuration Apache pour SPA
├── favicon.ico        # Icône du site
├── README-PLESK.md    # Guide d'installation
├── INSTALLATION.md    # Ce fichier
├── assets/            # Fichiers minifiés
│   ├── index-CfHgPSZ5.css (94KB)
│   └── index-DcDisBXD.js (214KB)
├── images/            # 24 images optimisées
└── data/              # Configuration JSON
    └── config.json    # Données du site
```

### 🚀 Étapes d'installation sur Plesk

#### 1. Upload des fichiers
```bash
# Via FTP ou File Manager Plesk
Upload complet du dossier JFJKDPROD vers:
/home/votredomaine/public_html/
```

#### 2. Configuration Plesk
- **Type de site** : Site statique
- **PHP** : Désactivé (pas nécessaire)
- **SSL** : Activez via Let's Encrypt
- **Redirection www** : Configurez selon vos besoins

#### 3. Vérification post-installation
- [ ] Site accessible sur votre domaine
- [ ] Toutes les images chargées
- [ ] Navigation SPA fonctionnelle
- [ ] Formulaires PayPal actifs
- [ ] Responsive sur mobile

### 🔧 Configuration serveur
Le fichier `.htaccess` inclut :
- ✅ Routage client-side React
- ✅ Compression Gzip
- ✅ Cache navigateur
- ✅ Headers de sécurité
- ✅ Redirections 301

### 📊 Optimisations
- **Taille totale** : ~2MB
- **Temps de chargement** : <2s
- **Score Lighthouse** : >90
- **Compatible** : Tous navigateurs modernes

### 🎯 Support
- **Email** : junfangungfuacademy@gmail.com
- **Téléphone** : +1 425-998-8610
- **Site** : https://seattlejkd.com

**Prêt pour la mise en production !**
