# ChatApp - Configuration Guide

Ce guide explique comment configurer et démarrer le projet ChatApp.

## 📋 Prérequis

- Node.js 18 ou supérieur
- npm ou yarn
- Compte Supabase (gratuit)

## 🚀 Installation

### 1. Installer les dépendances

```bash
npm install --legacy-peer-deps
```

> Note: On utilise `--legacy-peer-deps` car certaines librairies ne supportent pas encore React 19 officiellement.

### 2. Configuration Supabase

#### A. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Notez votre **Project URL** et **anon key**

#### B. Configurer la base de données

1. Dans le dashboard Supabase, allez dans **SQL Editor**
2. Créez une nouvelle query
3. Copiez-collez le contenu du fichier `supabase/schema.sql`
4. Exécutez la query

Cela va créer :
- Tables: `users`, `conversations`, `conversation_participants`, `messages`
- Policies RLS (Row Level Security) pour la sécurité
- Triggers pour la synchronisation
- Realtime subscriptions

#### C. Configuration de l'authentification

1. Dans le dashboard Supabase, allez dans **Authentication** > **Settings**
2. Configurez les **Email Auth** settings:
   - Activez "Enable Email Confirmations" (optionnel pour dev)
   - Configurez "Site URL" vers `http://localhost:3000`
   - Configurez "Redirect URLs" vers `http://localhost:3000/**`

### 3. Variables d'environnement

1. Copiez `.env.example` vers `.env.local`:

```bash
cp .env.example .env.local
```

2. Remplissez les valeurs dans `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Démarrer le serveur de développement

```bash
npm run dev
```

Le projet sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture du projet

```
/app                    # Next.js App Router
  /auth                 # Pages d'authentification
    /login             # Page de connexion
    /signup            # Page d'inscription
  layout.tsx           # Layout racine
  page.tsx             # Page d'accueil (chat)
  globals.css          # Styles globaux

/components            # Composants réutilisables
  /layout             # Composants de layout
  /ui                 # Composants UI génériques
  /shared             # Composants partagés

/features              # Modules organisés par feature
  /auth               # Feature d'authentification
    /components       # Composants auth (LoginForm, SignUpForm)
  /chat               # Feature de chat
    /components       # Composants chat (ChatArea, MessageList, etc.)
  /conversations      # Feature de conversations
    /components       # Composants conversations (Sidebar, etc.)

/lib                   # Bibliothèques et utilitaires
  /supabase           # Configuration Supabase
    client.ts         # Client browser
    server.ts         # Client serveur
    middleware.ts     # Middleware auth
  /utils              # Fonctions utilitaires

/stores                # État global Zustand
  auth-store.ts       # Store d'authentification
  conversations-store.ts  # Store de conversations
  messages-store.ts   # Store de messages

/types                 # Définitions TypeScript
  index.ts            # Types principaux
  database.ts         # Types DB Supabase

/supabase             # Configuration Supabase
  schema.sql          # Schéma de base de données
```

## 🎨 Stack Technique

- **Framework**: Next.js 15 (App Router) avec TypeScript strict
- **Styling**: Tailwind CSS avec palette Telegram-inspired
- **UI Components**: Custom components (style Telegram)
- **Backend**: Supabase (PostgreSQL + Realtime + Auth)
- **State Management**: Zustand
- **Icons**: SVG inline (pas de dépendance externe pour l'instant)

## 🎯 Fonctionnalités actuelles

### ✅ Implémenté

- ✅ Architecture complète (feature-based)
- ✅ Configuration TypeScript stricte
- ✅ Layout Telegram-like (Sidebar + Chat area)
- ✅ Pages d'authentification (Login/Signup)
- ✅ Configuration Supabase (client, server, middleware)
- ✅ Stores Zustand pour state management
- ✅ Types TypeScript complets
- ✅ Middleware d'authentification Next.js
- ✅ Composants UI de base (Sidebar, Chat, Messages)
- ✅ Palette de couleurs Telegram

### 🚧 À implémenter

- ⏳ Connexion Supabase réelle (fetch conversations, messages)
- ⏳ Realtime subscriptions (nouveaux messages en temps réel)
- ⏳ Envoi de messages
- ⏳ Création de conversations
- ⏳ Upload de fichiers/images
- ⏳ Recherche de conversations
- ⏳ Notifications
- ⏳ Présence utilisateur (online/offline)

## 🔧 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement (avec Turbopack)
- `npm run build` - Build de production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Lance ESLint
- `npm run type-check` - Vérifie les types TypeScript

## 🐛 Troubleshooting

### Problème: "Could not resolve dependency"

**Solution**: Utilisez `npm install --legacy-peer-deps` pour installer les dépendances.

### Problème: "Supabase client error"

**Solution**: Vérifiez que :
1. Les variables d'environnement dans `.env.local` sont correctes
2. Le schéma SQL a été exécuté dans Supabase
3. Les policies RLS sont activées

### Problème: "Middleware redirect loop"

**Solution**: Vérifiez que :
1. Le middleware est correctement configuré dans `middleware.ts`
2. Les routes auth sont bien dans le matcher du middleware

## 📚 Prochaines étapes

Pour continuer le développement, tu peux :

1. **Connecter les données réelles** : Implémenter les hooks pour fetch les conversations et messages depuis Supabase
2. **Realtime** : Ajouter les subscriptions Realtime pour les nouveaux messages
3. **Features avancées** : Upload de fichiers, emojis, typing indicators, etc.
4. **Tests** : Ajouter des tests (Jest, React Testing Library)
5. **Optimisations** : Pagination, lazy loading, etc.

## 🎨 Design System

### Couleurs principales

- **Primary Blue**: `#229ED9` (Telegram-inspired)
- **Success Green**: `#4DCD5E` (pour "online")
- **Grays**: Palette de gris de 50 à 600
- **Background**: `#F7F7F7` (gris très clair)

### Conventions

- **Border radius**: `rounded-2xl` pour les cards, `rounded-full` pour les avatars
- **Spacing**: Multiple de 4px (Tailwind par défaut)
- **Typography**: Font Inter, tailles cohérentes
- **Shadows**: Minimaliste, `shadow-sm` principalement

## 📄 License

MIT
