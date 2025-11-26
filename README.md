# ChatApp - Real-time Messaging Application

A modern, real-time messaging application inspired by Telegram's UI/UX, built with Next.js 15, TypeScript, Supabase, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + ShadCN/UI
- **Backend**: Supabase (Auth, Database, Realtime)
- **State Management**: Zustand
- **UI Components**: ShadCN/UI + Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Architecture

```
/app              - Next.js App Router pages
/components       - Shared UI components
/features         - Feature-based modules (auth, chat, conversations)
/lib              - Utilities, Supabase client, helpers
/stores           - Zustand state stores
/types            - TypeScript type definitions
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Design Philosophy

- **Clean Architecture**: Feature-based organization following SOLID principles
- **Type Safety**: Strict TypeScript configuration
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Performance**: Optimized with Next.js 15 App Router and Turbopack
- **Minimalist UI**: Telegram-inspired, flat design with a blue color palette

## License

MIT
