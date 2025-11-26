"use client";

import { ConversationsSidebar } from "@/features/conversations/components/conversations-sidebar";
import { ChatArea } from "@/features/chat/components/chat-area";
import { useConversationsStore } from "@/stores";

/**
 * MainLayout - Telegram-like layout with sidebar and chat area
 * Structure: [Sidebar (320px)] | [Chat Area (flex-1)]
 */
export function MainLayout() {
  const activeConversationId = useConversationsStore(
    (state) => state.activeConversationId
  );

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Conversations Sidebar */}
      <aside className="w-80 flex-shrink-0 border-r border-telegram-gray-200">
        <ConversationsSidebar />
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        {activeConversationId ? (
          <ChatArea conversationId={activeConversationId} />
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}

/**
 * EmptyState - Shown when no conversation is selected
 */
function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center bg-telegram-gray-50">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-telegram-gray-600 mb-2">
          Select a conversation
        </h2>
        <p className="text-telegram-gray-500">
          Choose a conversation from the sidebar to start messaging
        </p>
      </div>
    </div>
  );
}
