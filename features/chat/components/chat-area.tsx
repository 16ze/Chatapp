"use client";

import { ChatHeader } from "./chat-header";
import { MessageList } from "./message-list";
import { MessageInput } from "./message-input";

interface ChatAreaProps {
  conversationId: string;
}

/**
 * ChatArea - Main chat interface
 * Structure: [Header] | [Messages] | [Input]
 */
export function ChatArea({ conversationId }: ChatAreaProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <ChatHeader conversationId={conversationId} />

      {/* Messages List */}
      <MessageList conversationId={conversationId} />

      {/* Message Input */}
      <MessageInput conversationId={conversationId} />
    </div>
  );
}
