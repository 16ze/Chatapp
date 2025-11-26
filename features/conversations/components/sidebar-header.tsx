"use client";

import { useAuthStore } from "@/stores";
import { getInitials } from "@/lib/utils";

/**
 * SidebarHeader - Top section of the conversations sidebar
 * Shows user avatar, name, and action buttons
 */
export function SidebarHeader() {
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <header className="flex items-center gap-3 px-4 py-3 border-b border-telegram-gray-200 bg-white">
      {/* Menu Button */}
      <button
        className="p-2 hover:bg-telegram-gray-100 rounded-full transition-colors"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6 text-telegram-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* User Info */}
      <div className="flex-1 flex items-center gap-3 min-w-0">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
          {user ? getInitials(user.full_name) : "U"}
        </div>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <h1 className="font-semibold text-telegram-gray-600 truncate">
            {user?.full_name || "User"}
          </h1>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        {/* New Chat Button */}
        <button
          className="p-2 hover:bg-telegram-gray-100 rounded-full transition-colors"
          aria-label="New conversation"
        >
          <svg
            className="w-5 h-5 text-telegram-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        {/* Sign Out Button */}
        <button
          onClick={signOut}
          className="p-2 hover:bg-telegram-gray-100 rounded-full transition-colors"
          aria-label="Sign out"
        >
          <svg
            className="w-5 h-5 text-telegram-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
