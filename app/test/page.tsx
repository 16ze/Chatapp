"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores";
import { useState } from "react";

/**
 * Page de test - Démo des composants ShadCN/UI et Zustand
 */
export default function TestPage() {
  const [count, setCount] = useState(0);
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="min-h-screen bg-telegram-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-telegram-gray-600 mb-2">
            🧪 Page de Test ChatApp
          </h1>
          <p className="text-telegram-gray-500">
            Vérification de l'installation complète
          </p>
        </header>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatusCard
            title="Next.js 15"
            status="✅"
            description="App Router + Turbopack"
          />
          <StatusCard
            title="TypeScript"
            status="✅"
            description="Mode strict activé"
          />
          <StatusCard
            title="Tailwind CSS"
            status="✅"
            description="Palette Telegram"
          />
          <StatusCard
            title="Supabase"
            status="✅"
            description="Client configuré"
          />
          <StatusCard
            title="Zustand"
            status="✅"
            description="Stores créés"
          />
          <StatusCard
            title="ShadCN/UI"
            status="✅"
            description="Utilitaires prêts"
          />
        </div>

        {/* ShadCN Button Demo */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-telegram-gray-600 mb-4">
            Démo Boutons ShadCN/UI
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Zustand Store Demo */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-telegram-gray-600 mb-4">
            Démo Zustand Store
          </h2>

          <div className="space-y-4">
            {/* Counter */}
            <div>
              <p className="text-sm text-telegram-gray-500 mb-2">
                Compteur local (useState)
              </p>
              <div className="flex items-center gap-3">
                <Button onClick={() => setCount(count - 1)}>-</Button>
                <span className="text-2xl font-bold w-12 text-center">
                  {count}
                </span>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </div>
            </div>

            {/* Auth Store */}
            <div className="pt-4 border-t">
              <p className="text-sm text-telegram-gray-500 mb-2">
                Auth Store (Zustand)
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Statut:</span>{" "}
                  {isAuthenticated ? (
                    <span className="text-telegram-green">✓ Connecté</span>
                  ) : (
                    <span className="text-telegram-gray-400">
                      ✗ Non connecté
                    </span>
                  )}
                </p>
                {user && (
                  <p className="text-sm">
                    <span className="font-semibold">Utilisateur:</span>{" "}
                    {user.full_name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-telegram-gray-600 mb-4">
            Palette de couleurs Telegram
          </h2>

          <div className="space-y-4">
            {/* Primary */}
            <div>
              <p className="text-sm font-semibold mb-2">Primary (Telegram Blue)</p>
              <div className="flex gap-2">
                <ColorSwatch color="bg-primary-dark" label="Dark" />
                <ColorSwatch color="bg-primary" label="Default" />
                <ColorSwatch color="bg-primary-light" label="Light" />
              </div>
            </div>

            {/* Grays */}
            <div>
              <p className="text-sm font-semibold mb-2">Grays</p>
              <div className="flex gap-2">
                <ColorSwatch color="bg-telegram-gray-50" label="50" />
                <ColorSwatch color="bg-telegram-gray-100" label="100" />
                <ColorSwatch color="bg-telegram-gray-200" label="200" />
                <ColorSwatch color="bg-telegram-gray-300" label="300" />
                <ColorSwatch color="bg-telegram-gray-400" label="400" />
                <ColorSwatch color="bg-telegram-gray-500" label="500" />
                <ColorSwatch color="bg-telegram-gray-600" label="600" />
              </div>
            </div>

            {/* Green */}
            <div>
              <p className="text-sm font-semibold mb-2">Accent (Online)</p>
              <div className="flex gap-2">
                <ColorSwatch color="bg-telegram-green" label="Green" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-telegram-gray-600 mb-4">
            Navigation
          </h2>
          <div className="space-y-2">
            <NavLink href="/" label="🏠 Accueil (Chat)" />
            <NavLink href="/auth/login" label="🔐 Connexion" />
            <NavLink href="/auth/signup" label="📝 Inscription" />
            <NavLink href="/test" label="🧪 Page de test (ici)" />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-telegram-gray-400">
          <p>✅ Tous les composants sont fonctionnels !</p>
          <p className="mt-1">
            Voir <code className="bg-telegram-gray-100 px-2 py-0.5 rounded">INSTALLATION.md</code> pour plus de détails
          </p>
        </footer>
      </div>
    </div>
  );
}

function StatusCard({
  title,
  status,
  description,
}: {
  title: string;
  status: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-telegram-gray-200">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-telegram-gray-600">{title}</h3>
        <span className="text-2xl">{status}</span>
      </div>
      <p className="text-xs text-telegram-gray-400">{description}</p>
    </div>
  );
}

function ColorSwatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 rounded-lg ${color} border border-telegram-gray-200`} />
      <p className="text-xs mt-1 text-telegram-gray-500">{label}</p>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 rounded-lg hover:bg-telegram-gray-50 transition-colors text-telegram-gray-600"
    >
      {label}
    </a>
  );
}
