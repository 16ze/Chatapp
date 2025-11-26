"use client";

import { useEffect } from "react";
import { useMessagesStore, useAuthStore } from "@/stores";
import { MessageBubble } from "./message-bubble";

interface MessageListProps {
  conversationId: string;
}

/**
 * MessageList - Scrollable list of messages
 * Auto-scrolls to bottom on new messages
 */
export function MessageList({ conversationId }: MessageListProps) {
  const user = useAuthStore((state) => state.user);
  const messages =
    useMessagesStore(
      (state) => state.messagesByConversation[conversationId]
    ) || [];
  const isLoading = useMessagesStore((state) => state.isLoading);

  // TODO: Fetch messages from Supabase
  useEffect(() => {
    // This will be implemented later
  }, [conversationId]);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-telegram-gray-50">
        <div className="text-telegram-gray-400">Loading messages...</div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-telegram-gray-50">
        <div className="text-center">
          <p className="text-telegram-gray-400">No messages yet</p>
          <p className="text-telegram-gray-400 text-sm mt-1">
            Start the conversation!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin bg-telegram-gray-50 px-6 py-4">
      <div className="space-y-2">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.sender_id === user?.id}
          />
        ))}
      </div>
    </div>
  );
}
