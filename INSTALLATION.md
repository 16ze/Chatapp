# 🚀 Guide d'Installation Complet - ChatApp

## ✅ État du projet

Le projet est **entièrement configuré** avec :
- ✓ Next.js 15 + TypeScript
- ✓ Tailwind CSS
- ✓ ShadCN/UI (utilitaires)
- ✓ Supabase (client + server + middleware)
- ✓ Zustand (stores configurés)
- ✓ Architecture feature-based
- ✓ Dépendances installées

---

## 📁 Arborescence du projet

```
chatapp/
├── 📁 app/                          # Next.js 15 App Router
│   ├── 📁 auth/
│   │   ├── 📁 login/
│   │   │   └── page.tsx            # Page de connexion
│   │   └── 📁 signup/
│   │       └── page.tsx            # Page d'inscription
│   ├── layout.tsx                  # Layout racine
│   ├── page.tsx                    # Page d'accueil (chat)
│   ├── globals.css                 # Styles globaux Tailwind
│   └── favicon.ico
│
├── 📁 components/                   # Composants réutilisables
│   ├── 📁 layout/
│   │   └── main-layout.tsx         # Layout principal Telegram-like
│   ├── 📁 ui/                      # Composants UI ShadCN (à venir)
│   └── 📁 shared/                  # Composants partagés
│
├── 📁 features/                     # Architecture feature-based
│   ├── 📁 auth/
│   │   └── 📁 components/
│   │       ├── login-form.tsx      # Formulaire de connexion
│   │       └── signup-form.tsx     # Formulaire d'inscription
│   │
│   ├── 📁 chat/
│   │   └── 📁 components/
│   │       ├── chat-area.tsx       # Zone de chat principale
│   │       ├── chat-header.tsx     # En-tête du chat
│   │       ├── message-list.tsx    # Liste des messages
│   │       ├── message-bubble.tsx  # Bulle de message
│   │       └── message-input.tsx   # Input de saisie
│   │
│   └── 📁 conversations/
│       └── 📁 components/
│           ├── conversations-sidebar.tsx  # Sidebar des conversations
│           ├── sidebar-header.tsx         # En-tête de la sidebar
│           └── conversation-item.tsx      # Item de conversation
│
├── 📁 lib/                          # Bibliothèques et utilitaires
│   ├── 📁 supabase/
│   │   ├── client.ts               # Client Supabase browser
│   │   ├── server.ts               # Client Supabase server
│   │   └── middleware.ts           # Helpers middleware
│   │
│   └── 📁 utils/
│       ├── cn.ts                   # Utilitaire classe (Tailwind)
│       └── index.ts                # Utilitaires divers
│
├── 📁 stores/                       # Zustand stores
│   ├── auth-store.ts               # Store d'authentification
│   ├── conversations-store.ts      # Store de conversations
│   ├── messages-store.ts           # Store de messages
│   └── index.ts                    # Export central
│
├── 📁 types/                        # Types TypeScript
│   ├── index.ts                    # Types métier
│   └── database.ts                 # Types Supabase DB
│
├── 📁 supabase/
│   └── schema.sql                  # Schéma complet de la DB
│
├── middleware.ts                   # Middleware Next.js (auth)
├── next.config.ts                  # Config Next.js
├── tailwind.config.ts              # Config Tailwind
├── tsconfig.json                   # Config TypeScript
├── postcss.config.mjs              # Config PostCSS
├── package.json                    # Dépendances
├── .env.example                    # Variables d'environnement exemple
├── .gitignore
├── README.md
└── SETUP.md                        # Guide de setup Supabase
```

---

## 🛠️ Installation complète (depuis zéro)

### 1️⃣ Initialisation du projet Next.js

```bash
# Commande d'initialisation (déjà exécutée)
npx create-next-app@latest chatapp \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --turbopack \
  --eslint \
  --use-npm
```

### 2️⃣ Installation des dépendances

```bash
cd chatapp

# Installation des dépendances (déjà exécutée)
npm install --legacy-peer-deps \
  @supabase/supabase-js \
  @supabase/ssr \
  zustand \
  clsx \
  tailwind-merge \
  class-variance-authority \
  lucide-react \
  date-fns \
  tailwindcss-animate
```

> ⚠️ **Note** : `--legacy-peer-deps` est utilisé car React 19 n'est pas encore officiellement supporté par toutes les dépendances.

---

## 📝 Fichiers de configuration

### `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
};

export default nextConfig;
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] },
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Telegram-inspired colors
        primary: {
          DEFAULT: "#229ED9",
          light: "#40B3E0",
          dark: "#1A7DAD",
          foreground: "#FFFFFF",
        },
        telegram: {
          blue: "#229ED9",
          "blue-light": "#40B3E0",
          "blue-dark": "#1A7DAD",
          green: "#4DCD5E",
          gray: {
            50: "#F7F7F7",
            100: "#EFEFEF",
            200: "#E5E5E5",
            300: "#CCCCCC",
            400: "#999999",
            500: "#707579",
            600: "#54595E",
          },
        },
        // ShadCN colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... autres couleurs ShadCN
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### `postcss.config.mjs`

```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

---

## 🔧 Configuration Supabase

### `lib/supabase/client.ts` - Client Browser

```typescript
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

let supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createClient();
  }
  return supabaseClient;
}
```

### `lib/supabase/server.ts` - Client Server

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Ignore errors in Server Components
          }
        },
      },
    }
  );
}
```

### `middleware.ts` - Middleware d'authentification

```typescript
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: any) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
```

---

## 🗂️ Zustand Stores

### `stores/auth-store.ts` - Store utilisateur

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { AuthState } from "@/types";
import { getSupabaseClient } from "@/lib/supabase/client";

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      user: null,
      isLoading: true,
      isAuthenticated: false,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
          isLoading: false,
        }),

      setLoading: (isLoading) => set({ isLoading }),

      signOut: async () => {
        const supabase = getSupabaseClient();
        await supabase.auth.signOut();
        set({ user: null, isAuthenticated: false });
      },
    }),
    { name: "AuthStore" }
  )
);
```

### `stores/conversations-store.ts` - Store conversations

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { ConversationsState } from "@/types";

export const useConversationsStore = create<ConversationsState>()(
  devtools(
    (set) => ({
      conversations: [],
      activeConversationId: null,
      isLoading: false,

      setConversations: (conversations) =>
        set({ conversations, isLoading: false }),

      setActiveConversation: (id) => set({ activeConversationId: id }),

      addConversation: (conversation) =>
        set((state) => ({
          conversations: [conversation, ...state.conversations],
        })),

      updateConversation: (id, updates) =>
        set((state) => ({
          conversations: state.conversations.map((conv) =>
            conv.id === id ? { ...conv, ...updates } : conv
          ),
        })),

      setLoading: (isLoading) => set({ isLoading }),
    }),
    { name: "ConversationsStore" }
  )
);
```

---

## 🎨 ShadCN/UI Configuration

### Utilitaire `lib/utils/cn.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Exemple d'utilisation dans un composant

```tsx
import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark",
        className
      )}
      {...props}
    />
  );
}
```

---

## 🚀 Démarrage du projet

### 1. Configuration des variables d'environnement

```bash
# Copier le fichier exemple
cp .env.example .env.local
```

Éditer `.env.local` :

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-anon-key
```

### 2. Configuration de Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Aller dans **SQL Editor**
3. Exécuter le contenu de `supabase/schema.sql`
4. Copier les credentials dans `.env.local`

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## 📦 Scripts disponibles

```bash
npm run dev         # Démarrer en mode développement (Turbopack)
npm run build       # Build de production
npm run start       # Démarrer le serveur de production
npm run lint        # Lancer ESLint
npm run type-check  # Vérifier les types TypeScript
```

---

## 🧪 Test du setup

### Tester l'authentification

1. Aller sur `/auth/signup`
2. Créer un compte
3. Vérifier dans Supabase Dashboard → Authentication

### Tester le layout

1. Se connecter
2. Voir le layout Telegram-like (sidebar + chat)

---

## 📚 Documentation

- **README.md** : Vue d'ensemble du projet
- **SETUP.md** : Guide de configuration Supabase
- **INSTALLATION.md** : Ce fichier (guide d'installation)

---

## 🎯 Prochaines étapes

1. ✅ Projet configuré
2. ⏳ Connecter les données Supabase réelles
3. ⏳ Implémenter les subscriptions Realtime
4. ⏳ Ajouter l'envoi de messages
5. ⏳ Créer de nouvelles conversations
6. ⏳ Upload de fichiers

---

## 🐛 Troubleshooting

### Erreur "Could not resolve dependency"

```bash
npm install --legacy-peer-deps
```

### Erreur Supabase client

Vérifier :
- `.env.local` existe et contient les bonnes clés
- Le schéma SQL a été exécuté dans Supabase

### Erreur TypeScript

```bash
npm run type-check
```

---

## 📞 Support

Pour toute question :
- Voir `SETUP.md` pour la configuration Supabase
- Voir `README.md` pour l'architecture
- Vérifier les types dans `types/index.ts`
