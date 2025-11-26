"use client";

import { useEffect } from "react";
import { useAuthStore, useConversationsStore } from "@/stores";
import { ConversationItem } from "./conversation-item";
import { SidebarHeader } from "./sidebar-header";

/**
 * ConversationsSidebar - Left sidebar showing all conversations
 * Telegram-inspired design with search and conversation list
 */
export function ConversationsSidebar() {
  const user = useAuthStore((state) => state.user);
  const conversations = useConversationsStore((state) => state.conversations);
  const isLoading = useConversationsStore((state) => state.isLoading);

  // TODO: Fetch conversations from Supabase
  useEffect(() => {
    // This will be implemented later
  }, [user]);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <SidebarHeader />

      {/* Search Bar */}
      <div className="px-3 py-2 border-b border-telegram-gray-200">
        <div className="relative">
          <input
            type="search"
            placeholder="Search conversations..."
            className="w-full px-10 py-2 bg-telegram-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Search conversations"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-telegram-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <div className="text-telegram-gray-400">Loading...</div>
          </div>
        ) : conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 px-6 text-center">
            <p className="text-telegram-gray-400 text-sm">
              No conversations yet
            </p>
            <p className="text-telegram-gray-400 text-xs mt-1">
              Start a new conversation to get chatting
            </p>
          </div>
        ) : (
          conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
            />
          ))
        )}
      </div>
    </div>
  );
}
