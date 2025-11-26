import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { MessagesState } from "@/types";

/**
 * Messages Store - Manages messages for all conversations
 * Uses Zustand for client-side state management
 */
export const useMessagesStore = create<MessagesState>()(
  devtools(
    (set) => ({
      messagesByConversation: {},
      isLoading: false,

      setMessages: (conversationId, messages) =>
        set((state) => ({
          messagesByConversation: {
            ...state.messagesByConversation,
            [conversationId]: messages,
          },
          isLoading: false,
        })),

      addMessage: (conversationId, message) =>
        set((state) => {
          const existingMessages =
            state.messagesByConversation[conversationId] || [];
          return {
            messagesByConversation: {
              ...state.messagesByConversation,
              [conversationId]: [...existingMessages, message],
            },
          };
        }),

      updateMessage: (conversationId, messageId, updates) =>
        set((state) => {
          const messages = state.messagesByConversation[conversationId] || [];
          return {
            messagesByConversation: {
              ...state.messagesByConversation,
              [conversationId]: messages.map((msg) =>
                msg.id === messageId ? { ...msg, ...updates } : msg
              ),
            },
          };
        }),

      deleteMessage: (conversationId, messageId) =>
        set((state) => {
          const messages = state.messagesByConversation[conversationId] || [];
          return {
            messagesByConversation: {
              ...state.messagesByConversation,
              [conversationId]: messages.filter((msg) => msg.id !== messageId),
            },
          };
        }),

      setLoading: (isLoading) => set({ isLoading }),
    }),
    { name: "MessagesStore" }
  )
);
