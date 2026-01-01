# 🚀 Démarrage rapide

## Installation en 3 étapes

### 1. Installer les dépendances
```bash
npm install
```

### 2. Ajouter les images (optionnel pour tester)
Le site fonctionnera même sans images, mais pour un rendu optimal, ajoutez :
- `public/logo.png` - Logo de RideTogether
- `public/bg-home.png` - Image de fond hero section

### 3. Lancer le serveur de développement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ✅ Checklist avant déploiement

- [ ] Ajouter `logo.png` dans `public/`
- [ ] Ajouter `bg-home.png` dans `public/`
- [ ] Ajouter les screenshots dans `public/mockups/` (optionnel)
- [ ] Vérifier les liens dans le Footer (réseaux sociaux)
- [ ] Vérifier l'email de contact dans le formulaire
- [ ] Personnaliser le contenu si nécessaire
- [ ] Tester sur mobile/tablette/desktop

## 🎨 Personnalisation rapide

### Changer les couleurs
Éditez `tailwind.config.js` :
```javascript
colors: {
  primary: '#1F1F1F',    // Votre couleur principale
  secondary: '#00B894',  // Votre couleur accent
  light: '#F9F9F9',      // Votre couleur de fond clair
}
```

### Modifier le contenu
- **Page d'accueil** : `pages/index.tsx`
- **Composants** : `components/*.tsx`
- **SEO** : `pages/_app.tsx` et chaque page individuelle

## 📦 Build de production

```bash
npm run build
npm start
```

## 🌐 Déploiement sur Vercel

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre projet GitHub/GitLab
3. Cliquez sur "Deploy"
4. C'est tout ! 🎉

Ou via CLI :
```bash
npm i -g vercel
vercel
```

---

**Besoin d'aide ?** Consultez le [README.md](README.md) complet.

