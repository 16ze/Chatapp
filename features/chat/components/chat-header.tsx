"use client";

import { useConversationsStore } from "@/stores";
import { getInitials } from "@/lib/utils";

interface ChatHeaderProps {
  conversationId: string;
}

/**
 * ChatHeader - Top bar of the chat area
 * Shows conversation info and actions
 */
export function ChatHeader({ conversationId }: ChatHeaderProps) {
  const conversation = useConversationsStore((state) =>
    state.conversations.find((c) => c.id === conversationId)
  );

  if (!conversation) return null;

  const displayName =
    conversation.type === "private"
      ? conversation.other_user?.full_name || "Unknown"
      : conversation.name || "Group Chat";

  const displayAvatar =
    conversation.type === "private"
      ? conversation.other_user?.avatar_url
      : conversation.avatar_url;

  const isOnline =
    conversation.type === "private" && conversation.other_user?.is_online;

  const lastSeen =
    conversation.type === "private" && conversation.other_user?.last_seen;

  return (
    <header className="flex items-center gap-3 px-6 py-3 border-b border-telegram-gray-200 bg-white">
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        {displayAvatar ? (
          <img
            src={displayAvatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
            {getInitials(displayName)}
          </div>
        )}

        {isOnline && (
          <div
            className="absolute bottom-0 right-0 w-3 h-3 bg-telegram-green rounded-full border-2 border-white"
            aria-label="Online"
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold text-telegram-gray-600 truncate">
          {displayName}
        </h2>
        {conversation.type === "private" && (
          <p className="text-sm text-telegram-gray-500">
            {isOnline ? "online" : lastSeen ? `last seen ${lastSeen}` : ""}
          </p>
        )}
        {conversation.type === "group" && (
          <p className="text-sm text-telegram-gray-500">
            {conversation.participants.length} members
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button
          className="p-2 hover:bg-telegram-gray-100 rounded-full transition-colors"
          aria-label="Search in conversation"
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button
          className="p-2 hover:bg-telegram-gray-100 rounded-full transition-colors"
          aria-label="More options"
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
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
