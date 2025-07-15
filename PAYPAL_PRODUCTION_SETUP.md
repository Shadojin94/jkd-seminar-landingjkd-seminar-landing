# Configuration PayPal pour la Production

## ⚠️ IMPORTANT - Action Requise

Le Client ID actuellement configuré semble être un Client ID de **SANDBOX** (test), pas de production. Pour accepter de vrais paiements, votre client doit fournir un Client ID de **PRODUCTION**.

## Instructions pour votre client (Sifu Abe Santos)

### 1. Obtenir le Client ID de Production

1. Aller sur https://developer.paypal.com/
2. **Se connecter avec le compte PayPal commercial** (pas personnel)
3. **Basculer en mode "Live"** (pas "Sandbox") - voir le toggle en haut à droite
4. Aller dans "My Apps & Credentials"
5. Créer une nouvelle app ou utiliser une app existante
6. **Copier le Client ID de la section "Live"**

### 2. Vérifications importantes

- ✅ Le compte PayPal doit être un **compte Business** vérifié
- ✅ Le compte doit être approuvé pour recevoir des paiements
- ✅ Les informations bancaires doivent être configurées
- ✅ Le compte doit être en règle avec PayPal

### 3. Configuration actuelle

```
Environment: PRODUCTION (configuré pour les vrais paiements)
Client ID actuel: AYTQ54_joX4rcLj87eAFr6FG1C5aXRp2v3dt78BXm6NyabrQSXsnWB_piWDBquonEvrdO0SgHheTp5NY
Status: ⚠️ À VÉRIFIER - Semble être un ID Sandbox
```

### 4. Comment mettre à jour

Une fois le vrai Client ID de production obtenu :

1. Ouvrir le fichier `src/config/paypal.ts`
2. Remplacer la valeur `production` dans `clientIds`:

```typescript
clientIds: {
  sandbox: 'AYTQ54_joX4rcLj87eAFr6FG1C5aXRp2v3dt78BXm6NyabrQSXsnWB_piWDBquonEvrdO0SgHheTp5NY',
  production: 'NOUVEAU_CLIENT_ID_DE_PRODUCTION_ICI' // ← Remplacer ici
}
```

### 5. Test de validation

Pour vérifier que c'est bien en production :
- L'URL PayPal doit être `https://www.paypal.com/checkoutnow` (pas sandbox.paypal.com)
- Les paiements de test ne fonctionneront plus
- Seuls les vrais paiements avec de vraies cartes/comptes PayPal fonctionneront

## 🚨 Rappel de sécurité

- Ne jamais partager les Client IDs publiquement
- Garder les secrets/clés privées confidentiels
- Tester d'abord en sandbox avant de passer en production

## Support

Si des problèmes surviennent :
1. Vérifier que le compte PayPal est bien en mode Business
2. Contacter le support PayPal Developer
3. Vérifier les logs de la console du navigateur
