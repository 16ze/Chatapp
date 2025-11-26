import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { ConversationsState } from "@/types";

/**
 * Conversations Store - Manages conversations list and active conversation
 * Uses Zustand for client-side state management
 */
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
