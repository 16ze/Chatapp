# 🔧 Fichiers de Configuration - ChatApp

Ce document liste tous les fichiers de configuration du projet avec leur contenu complet.

---

## 📋 Table des matières

1. [Next.js](#nextjs)
2. [TypeScript](#typescript)
3. [Tailwind CSS](#tailwind-css)
4. [PostCSS](#postcss)
5. [ESLint](#eslint)
6. [Environnement](#environnement)
7. [Supabase](#supabase)
8. [Zustand](#zustand)

---

## Next.js

### `next.config.ts`

**Emplacement :** `/next.config.ts`

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

**Ce que ça configure :**
- Mode strict de React activé
- Images autorisées depuis Supabase
- Support des remote patterns pour les avatars

---

## TypeScript

### `tsconfig.json`

**Emplacement :** `/tsconfig.json`

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
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    },
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Ce que ça configure :**
- Mode strict activé ✅
- Détection des variables non utilisées
- Alias `@/` pour les imports absolus
- Cible ES2022
- Support JSX pour React

**Vérification :**
```bash
npm run type-check
```

---

## Tailwind CSS

### `tailwind.config.ts`

**Emplacement :** `/tailwind.config.ts`

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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ShadCN colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#229ED9",
          light: "#40B3E0",
          dark: "#1A7DAD",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Telegram-inspired colors
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

**Ce que ça configure :**
- Palette Telegram complète (#229ED9 blue + grays)
- Support dark mode (class-based)
- Variables ShadCN/UI
- Animations pour les composants
- Content scanning dans app/, components/, features/

---

## PostCSS

### `postcss.config.mjs`

**Emplacement :** `/postcss.config.mjs`

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

**Ce que ça configure :**
- Tailwind CSS processing
- Autoprefixer pour la compatibilité navigateur

---

## ESLint

### `.eslintrc.json`

**Emplacement :** `/.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

**Ce que ça configure :**
- Règles Next.js + TypeScript
- Variables préfixées par `_` ignorées
- Warnings pour `any` type

**Vérification :**
```bash
npm run lint
```

---

## Environnement

### `.env.example`

**Emplacement :** `/.env.example`

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### `.env.local` (à créer)

**Emplacement :** `/.env.local` (git-ignored)

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-anon-key-réelle
```

**Comment obtenir ces valeurs :**
1. Aller sur [supabase.com](https://supabase.com)
2. Dashboard → Settings → API
3. Copier "Project URL" et "anon public key"

---

## Supabase

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

**Usage :**
```typescript
import { getSupabaseClient } from "@/lib/supabase/client";

const supabase = getSupabaseClient();
const { data } = await supabase.from("users").select("*");
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

**Usage :**
```typescript
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("users").select("*");

  return <div>{/* ... */}</div>;
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

**Ce que ça fait :**
- Vérifie l'authentification sur chaque requête
- Redirige vers `/auth/login` si non authentifié
- Met à jour les cookies de session

---

## Zustand

### `stores/auth-store.ts`

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

**Usage :**
```typescript
import { useAuthStore } from "@/stores";

function Component() {
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  return <button onClick={signOut}>Logout</button>;
}
```

### `stores/conversations-store.ts`

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

**Usage :**
```typescript
import { useConversationsStore } from "@/stores";

function Sidebar() {
  const conversations = useConversationsStore((state) => state.conversations);
  const setActive = useConversationsStore((state) => state.setActiveConversation);

  return (
    <div>
      {conversations.map(conv => (
        <div key={conv.id} onClick={() => setActive(conv.id)}>
          {conv.name}
        </div>
      ))}
    </div>
  );
}
```

---

## Utilitaires ShadCN

### `lib/utils/cn.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage :**
```typescript
import { cn } from "@/lib/utils";

<button className={cn(
  "px-4 py-2 bg-primary",
  isActive && "bg-primary-dark",
  className
)} />
```

---

## Vérification rapide

```bash
# Vérifier tous les configs
npm run type-check   # TypeScript
npm run lint         # ESLint
npm run build        # Build complet

# Vérifier l'environnement
cat .env.local       # Doit contenir les clés Supabase

# Vérifier les dépendances
npm list --depth=0   # Liste des packages installés
```

---

## 📚 Liens vers la documentation

- **Next.js** : https://nextjs.org/docs
- **TypeScript** : https://www.typescriptlang.org/docs
- **Tailwind** : https://tailwindcss.com/docs
- **Supabase** : https://supabase.com/docs
- **Zustand** : https://docs.pmnd.rs/zustand
