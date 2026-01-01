# RideTogether - Site Vitrine

Site vitrine statique pour l'application mobile RideTogether, une plateforme permettant aux motards et passionnés de voitures de partager, organiser et discuter de leurs balades en France.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec SSR
- **React 18+** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **next-seo** - Optimisation SEO

## 📁 Structure du projet

```
balade_moto_site/
├── components/          # Composants React réutilisables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Features.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   └── ContactForm.tsx
├── pages/              # Pages Next.js
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── privacy-policy.tsx
│   ├── terms.tsx
│   └── contact.tsx
├── public/             # Fichiers statiques
│   ├── logo.png
│   ├── bg-home.png
│   └── mockups/
│       ├── screen1.png
│       └── screen2.png
├── styles/            # Styles globaux
│   └── globals.css
└── package.json
```

## 🎨 Charte graphique

- **Couleur principale** : `#1F1F1F` (noir carbone)
- **Couleur secondaire** : `#00B894` (vert néon/mint)
- **Fond clair** : `#F9F9F9`
- **Typographie** : Poppins / Outfit

## 🛠️ Installation

1. **Cloner le projet** (si applicable) ou naviguer dans le dossier

2. **Installer les dépendances** :
```bash
npm install
```

3. **Ajouter les images nécessaires** dans le dossier `public/` :
   - `logo.png` - Logo de RideTogether
   - `bg-home.png` - Image de fond pour la hero section
   - `mockups/screen1.png` - Screenshot 1 de l'app
   - `mockups/screen2.png` - Screenshot 2 de l'app

4. **Lancer le serveur de développement** :
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📦 Build de production

Pour créer une version optimisée pour la production :

```bash
npm run build
npm start
```

## 🚀 Déploiement sur Vercel

### Option 1 : Déploiement via l'interface Vercel

1. **Créer un compte** sur [vercel.com](https://vercel.com) (gratuit)

2. **Installer Vercel CLI** (optionnel) :
```bash
npm i -g vercel
```

3. **Connecter votre projet** :
   - Allez sur [vercel.com/new](https://vercel.com/new)
   - Importez votre repository GitHub/GitLab/Bitbucket
   - Ou utilisez la CLI : `vercel` dans le dossier du projet

4. **Configuration automatique** :
   - Vercel détectera automatiquement Next.js
   - Les paramètres par défaut fonctionnent généralement
   - Cliquez sur "Deploy"

5. **Variables d'environnement** (si nécessaire) :
   - Ajoutez-les dans les paramètres du projet sur Vercel

### Option 2 : Déploiement via CLI

```bash
# Installer Vercel CLI globalement
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

### Configuration Vercel recommandée

Le fichier `vercel.json` n'est généralement pas nécessaire pour Next.js, mais vous pouvez créer un fichier de configuration si besoin :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

## 📝 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.js` pour changer les couleurs de la charte graphique :

```javascript
colors: {
  primary: '#1F1F1F',
  secondary: '#00B894',
  light: '#F9F9F9',
}
```

### Modifier le contenu

- **Pages** : Modifiez les fichiers dans `pages/`
- **Composants** : Modifiez les fichiers dans `components/`
- **SEO** : Modifiez les métadonnées dans `pages/_app.tsx` et chaque page

### Ajouter des images

1. Placez vos images dans `public/`
2. Utilisez-les avec le composant `Image` de Next.js :
```tsx
import Image from 'next/image';
<Image src="/votre-image.jpg" alt="Description" width={800} height={600} />
```

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une build de production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 📱 Pages disponibles

- `/` - Page d'accueil
- `/contact` - Formulaire de contact
- `/privacy-policy` - Politique de confidentialité
- `/terms` - Conditions générales d'utilisation

## 🎯 Fonctionnalités

- ✅ Design responsive (mobile/tablette/desktop)
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation sticky
- ✅ SEO optimisé avec next-seo
- ✅ Formulaire de contact (mailto)
- ✅ Dark mode ready (structure prête)
- ✅ Accessibilité de base

## 📄 Licence

Ce projet est privé et propriété de RideTogether.

## 🤝 Support

Pour toute question, contactez : contact@ridetogether.fr

---

**Développé avec ❤️ pour la communauté RideTogether**

