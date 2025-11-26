"use client";

import { useConversationsStore } from "@/stores";
import { formatDate, getInitials } from "@/lib/utils";
import type { ConversationWithParticipants } from "@/types";
import { cn } from "@/lib/utils";

interface ConversationItemProps {
  conversation: ConversationWithParticipants;
}

/**
 * ConversationItem - Single conversation in the sidebar list
 * Shows avatar, name, last message, and timestamp
 */
export function ConversationItem({ conversation }: ConversationItemProps) {
  const activeConversationId = useConversationsStore(
    (state) => state.activeConversationId
  );
  const setActiveConversation = useConversationsStore(
    (state) => state.setActiveConversation
  );

  const isActive = activeConversationId === conversation.id;

  // For private chats, use the other user's info
  const displayName =
    conversation.type === "private"
      ? conversation.other_user?.full_name || "Unknown"
      : conversation.name || "Group Chat";

  const displayAvatar =
    conversation.type === "private"
      ? conversation.other_user?.avatar_url
      : conversation.avatar_url;

  const lastMessage = conversation.last_message?.content || "No messages yet";
  const lastMessageTime = conversation.last_message?.created_at
    ? formatDate(conversation.last_message.created_at)
    : "";

  const unreadCount = conversation.unread_count || 0;

  return (
    <button
      onClick={() => setActiveConversation(conversation.id)}
      className={cn(
        "w-full px-4 py-3 flex items-center gap-3 hover:bg-telegram-gray-50 transition-colors border-b border-telegram-gray-100",
        isActive && "bg-primary/5 hover:bg-primary/10"
      )}
      aria-label={`Open conversation with ${displayName}`}
      aria-current={isActive ? "true" : undefined}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        {displayAvatar ? (
          <img
            src={displayAvatar}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
            {getInitials(displayName)}
          </div>
        )}

        {/* Online indicator for private chats */}
        {conversation.type === "private" &&
          conversation.other_user?.is_online && (
            <div
              className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-telegram-green rounded-full border-2 border-white"
              aria-label="Online"
            />
          )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="font-semibold text-telegram-gray-600 truncate">
            {displayName}
          </h3>
          {lastMessageTime && (
            <time className="text-xs text-telegram-gray-400 flex-shrink-0">
              {lastMessageTime}
            </time>
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-telegram-gray-500 truncate">
            {lastMessage}
          </p>
          {unreadCount > 0 && (
            <span className="flex-shrink-0 min-w-[1.25rem] h-5 px-1.5 bg-primary text-white text-xs font-semibold rounded-full flex items-center justify-center">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
