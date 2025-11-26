# 📋 Commandes à lancer - ChatApp

## ✅ État actuel

Le projet est **entièrement configuré et prêt** !

```
✓ Next.js 15 installé
✓ TypeScript configuré (strict mode)
✓ Tailwind CSS installé
✓ Supabase configuré (client + server)
✓ Zustand stores créés
✓ Architecture feature-based
✓ Dépendances installées (node_modules présent)
✓ Compilation TypeScript OK (0 erreurs)
```

---

## 🚀 Commandes dans l'ordre

### 1️⃣ Configuration Supabase (OBLIGATOIRE avant de lancer)

```bash
# 1. Copier le fichier d'environnement
cp .env.example .env.local

# 2. Éditer .env.local avec vos credentials Supabase
# Remplacer les valeurs par celles de votre projet
nano .env.local  # ou vim, code, etc.
```

**Contenu de `.env.local` :**
```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-anon-key-ici
```

**Où trouver ces valeurs ?**
1. Aller sur [supabase.com](https://supabase.com)
2. Créer/ouvrir votre projet
3. Settings → API
4. Copier "Project URL" et "anon/public key"

### 2️⃣ Créer la base de données Supabase

```bash
# Dans le dashboard Supabase :
# 1. SQL Editor → New Query
# 2. Copier-coller le contenu de supabase/schema.sql
# 3. Run (Exécuter)
```

### 3️⃣ Lancer le serveur de développement

```bash
npm run dev
```

**Le serveur démarre sur :** http://localhost:3000

---

## 🧪 Pages de test

Une fois le serveur lancé :

| URL | Description |
|-----|-------------|
| `http://localhost:3000` | Page d'accueil (chat - nécessite connexion) |
| `http://localhost:3000/auth/login` | Page de connexion |
| `http://localhost:3000/auth/signup` | Page d'inscription |
| `http://localhost:3000/test` | **Page de test des composants** ⭐ |

---

## 📦 Scripts NPM disponibles

```bash
# Développement
npm run dev          # Lancer le dev server (Turbopack)

# Production
npm run build        # Build pour production
npm run start        # Lancer le serveur de production

# Qualité de code
npm run lint         # Lancer ESLint
npm run type-check   # Vérifier les types TypeScript
```

---

## 🔍 Vérifications post-installation

### Vérifier que tout fonctionne :

```bash
# 1. Vérifier les dépendances
ls node_modules | wc -l
# Devrait afficher ~330 packages

# 2. Vérifier TypeScript
npm run type-check
# Devrait afficher : (aucune erreur)

# 3. Vérifier la structure
tree -L 2 -d
# Devrait montrer tous les dossiers

# 4. Lancer le dev server
npm run dev
# Devrait démarrer sur localhost:3000
```

### Checklist de vérification :

- [ ] `.env.local` créé avec les bonnes valeurs
- [ ] Schéma SQL exécuté dans Supabase
- [ ] `npm run dev` démarre sans erreur
- [ ] http://localhost:3000/test affiche la page de test
- [ ] Les boutons ShadCN s'affichent correctement
- [ ] La palette Telegram est visible

---

## 🆘 Dépannage

### Problème 1 : "Module not found"

```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Problème 2 : "Supabase client error"

```bash
# Vérifier que .env.local existe
cat .env.local

# Vérifier que les variables sont chargées
npm run dev
# Regarder les logs au démarrage
```

### Problème 3 : Port 3000 déjà utilisé

```bash
# Lancer sur un autre port
npm run dev -- -p 3001
```

### Problème 4 : Erreurs TypeScript

```bash
# Nettoyer le cache TypeScript
rm -rf .next tsconfig.tsbuildinfo
npm run type-check
```

---

## 📝 Ordre recommandé pour tester

1. **Configuration** :
   ```bash
   cp .env.example .env.local
   # Éditer .env.local avec vos credentials
   ```

2. **Supabase** :
   - Créer projet sur supabase.com
   - Exécuter `supabase/schema.sql` dans SQL Editor

3. **Lancer** :
   ```bash
   npm run dev
   ```

4. **Tester** :
   - Aller sur http://localhost:3000/test
   - Vérifier que tous les composants s'affichent
   - Créer un compte sur `/auth/signup`
   - Se connecter sur `/auth/login`
   - Voir le chat sur `/`

---

## 🎯 Prochaines étapes après le test

Une fois que tout fonctionne :

1. **Implémenter la connexion Supabase réelle** :
   - Fetch des conversations
   - Fetch des messages
   - Subscriptions Realtime

2. **Ajouter les fonctionnalités** :
   - Envoi de messages
   - Création de conversations
   - Upload de fichiers

3. **Optimiser** :
   - Pagination
   - Cache
   - Lazy loading

---

## 📚 Documentation complète

- **INSTALLATION.md** : Guide d'installation détaillé
- **SETUP.md** : Configuration Supabase
- **README.md** : Vue d'ensemble du projet

---

## 💡 Aide rapide

**Problème de connexion ?**
→ Vérifier `.env.local` et que le schéma SQL est exécuté

**Page blanche ?**
→ Ouvrir la console du navigateur (F12) pour voir les erreurs

**Erreurs TypeScript ?**
→ `npm run type-check` pour voir les détails

**Build ne passe pas ?**
→ `rm -rf .next && npm run build`

---

✨ **Tout est prêt ! Lance `npm run dev` et va sur `/test` pour vérifier !**
