import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { AuthState } from "@/types";
import { getSupabaseClient } from "@/lib/supabase/client";

/**
 * Auth Store - Manages authentication state
 * Uses Zustand for client-side state management
 */
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
        set({
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    { name: "AuthStore" }
  )
);
