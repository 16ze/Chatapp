# ⚡ QuickStart - ChatApp

> **Le projet est 100% configuré et prêt !** Il suffit de lancer 3 commandes. ⬇️

---

## 🚀 Démarrage rapide (3 étapes)

### 1. Configurer Supabase

```bash
# Copier le fichier d'environnement
cp .env.example .env.local
```

Puis éditer `.env.local` :
```env
NEXT_PUBLIC_SUPABASE_URL=https://VOTRE-PROJET.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=VOTRE-ANON-KEY
```

💡 **Où trouver ces valeurs ?**
1. Créer un projet sur [supabase.com](https://supabase.com)
2. Dashboard → Settings → API
3. Copier "Project URL" et "anon public key"

### 2. Créer la base de données

Dans Supabase Dashboard :
1. SQL Editor → New Query
2. Copier-coller le contenu de **`supabase/schema.sql`**
3. Run

### 3. Lancer !

```bash
npm run dev
```

**Ouvrir :** http://localhost:3000

---

## 🧪 Page de test

**Aller sur :** http://localhost:3000/test

Cette page affiche :
- ✅ Statut de toutes les dépendances
- 🎨 Démo des boutons ShadCN/UI
- 📊 Démo du store Zustand
- 🎨 Palette de couleurs Telegram
- 🔗 Navigation vers toutes les pages

---

## 📂 Structure du projet

```
chatapp/
├── 📁 app/                    # Pages Next.js
│   ├── auth/login            # Page de connexion
│   ├── auth/signup           # Page d'inscription
│   ├── test/                 # Page de test ⭐
│   └── page.tsx              # Accueil (chat)
│
├── 📁 features/               # Features organisées
│   ├── auth/                 # Authentification
│   ├── chat/                 # Chat
│   └── conversations/        # Conversations
│
├── 📁 components/             # Composants réutilisables
│   ├── ui/                   # ShadCN/UI components
│   └── layout/               # Layouts
│
├── 📁 lib/                    # Bibliothèques
│   ├── supabase/             # Clients Supabase
│   └── utils/                # Utilitaires
│
├── 📁 stores/                 # Zustand stores
│   ├── auth-store.ts         # État auth
│   ├── conversations-store.ts # État conversations
│   └── messages-store.ts     # État messages
│
├── 📁 types/                  # Types TypeScript
│
└── 📁 supabase/
    └── schema.sql            # Schéma DB complet
```

---

## 📚 Documentation complète

| Fichier | Contenu |
|---------|---------|
| **QUICKSTART.md** | Ce fichier (démarrage rapide) |
| **COMMANDES.md** | Toutes les commandes + dépannage |
| **INSTALLATION.md** | Guide d'installation détaillé |
| **SETUP.md** | Configuration Supabase |
| **README.md** | Vue d'ensemble du projet |

---

## ✅ Ce qui est déjà fait

- ✅ Next.js 15 + App Router
- ✅ TypeScript (strict mode)
- ✅ Tailwind CSS (palette Telegram)
- ✅ ShadCN/UI (Button component)
- ✅ Supabase (client + server + middleware)
- ✅ Zustand (3 stores configurés)
- ✅ Architecture feature-based
- ✅ Pages auth (login/signup)
- ✅ Layout Telegram-like
- ✅ Composants UI de base
- ✅ Types TypeScript complets
- ✅ Schéma DB Supabase
- ✅ 0 erreurs TypeScript
- ✅ Page de test

---

## 🎯 Prochaines étapes (après test)

1. **Connecter Supabase** :
   - Fetch conversations depuis DB
   - Fetch messages
   - Realtime subscriptions

2. **Implémenter messaging** :
   - Envoi de messages
   - Création de conversations
   - Upload de fichiers

3. **Features avancées** :
   - Typing indicators
   - Online/offline status
   - Notifications

---

## 🆘 Problème ?

**Le serveur ne démarre pas ?**
```bash
rm -rf .next node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

**Erreur Supabase ?**
→ Vérifier `.env.local` et que le schéma SQL est exécuté

**Page blanche ?**
→ Ouvrir la console (F12) pour voir les erreurs

**Plus d'aide ?** → Voir `COMMANDES.md` (section Dépannage)

---

## 💻 Commandes utiles

```bash
npm run dev          # Lancer le dev server
npm run build        # Build de production
npm run lint         # Linter
npm run type-check   # Vérifier TypeScript
```

---

**🎉 C'est tout ! Le projet est prêt à l'emploi.**

**Prochaine action :** `npm run dev` → Ouvrir http://localhost:3000/test
