# 📧 Configuration de l'envoi d'emails

Le formulaire de contact envoie des emails via SMTP Gmail sans ouvrir Outlook.

## 🔧 Configuration

### 1. Créer un mot de passe d'application Gmail

1. Allez sur [Google Account](https://myaccount.google.com/)
2. Sécurité → Validation en 2 étapes (doit être activée)
3. Mots de passe des applications → Sélectionner "Autre" → Nommer "RideTogether"
4. Copier le mot de passe généré (16 caractères)

### 2. Créer le fichier `.env.local`

Copiez `.env.local.example` vers `.env.local` et remplissez les valeurs :

```bash
cp .env.local.example .env.local
```

Puis éditez `.env.local` :

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=kevin.radlowski@gmail.com
EMAIL_PASS=votre_mot_de_passe_application_16_caracteres
EMAIL_FROM="Formulaire de contact Balades Moto <kevin.radlowski@gmail.com>"
CONTACT_TO=kevin.radlowski@gmail.com
```

⚠️ **Important** : Ne commitez JAMAIS `.env.local` dans Git (déjà dans `.gitignore`)

### 3. Installer les dépendances

```bash
npm install
```

## 🚀 Utilisation

Le formulaire de contact (`/contact`) envoie automatiquement un email à `kevin.radlowski@gmail.com` avec :

- **Sujet** : `[RideTogether - Contact] Nom - Email`
- **Contenu** : Message + informations expéditeur + date/heure + user agent

## 🔒 Sécurités implémentées

✅ **Validation des champs** : nom, email, message obligatoires  
✅ **Validation email** : format email valide  
✅ **Limite de taille** : message max 5000 caractères  
✅ **Honeypot** : champ invisible "website" pour bloquer les bots  
✅ **Rate limiting** : max 5 messages/heure par IP  
✅ **Sanitization** : nettoyage des entrées utilisateur  
✅ **Codes HTTP propres** : 200, 400, 429, 500  

## 📝 Structure de l'API

**Route** : `POST /api/contact`

**Body** :
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Mon message...",
  "website": "" // Honeypot (doit être vide)
}
```

**Réponses** :
- `200` : Email envoyé avec succès
- `400` : Erreur de validation
- `429` : Rate limit dépassé
- `500` : Erreur serveur

## 🐛 Dépannage

### Erreur "Invalid login"
- Vérifiez que vous utilisez un **mot de passe d'application** (pas votre mot de passe Gmail)
- Vérifiez que la validation en 2 étapes est activée

### Erreur "Server configuration error"
- Vérifiez que toutes les variables d'environnement sont définies dans `.env.local`
- Redémarrez le serveur après modification de `.env.local`

### Emails non reçus
- Vérifiez les spams
- Vérifiez les logs du serveur (`npm run dev`)
- Testez avec un autre email dans `CONTACT_TO`

## 🌐 Déploiement sur Vercel

1. Ajoutez les variables d'environnement dans les paramètres du projet Vercel
2. Redéployez le projet
3. Les emails fonctionneront automatiquement

