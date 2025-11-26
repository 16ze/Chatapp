"use client";

import { formatDate } from "@/lib/utils";
import type { MessageWithSender } from "@/types";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: MessageWithSender;
  isOwn: boolean;
}

/**
 * MessageBubble - Single message bubble
 * Different styling for own messages vs others
 */
export function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  return (
    <div
      className={cn("flex items-end gap-2", isOwn ? "flex-row-reverse" : "")}
    >
      {/* Avatar (only for other's messages) */}
      {!isOwn && (
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
          {message.sender?.full_name?.[0]?.toUpperCase() || "U"}
        </div>
      )}

      {/* Message content */}
      <div
        className={cn(
          "max-w-[65%] rounded-2xl px-4 py-2",
          isOwn
            ? "bg-primary text-white rounded-br-sm"
            : "bg-white text-telegram-gray-600 rounded-bl-sm shadow-sm"
        )}
      >
        {/* Sender name (only in group chats for other's messages) */}
        {!isOwn && message.sender && (
          <p className="text-xs font-semibold text-primary mb-1">
            {message.sender.full_name}
          </p>
        )}

        {/* Message text */}
        <p className="text-[15px] leading-relaxed break-words">
          {message.content}
        </p>

        {/* Timestamp and status */}
        <div
          className={cn(
            "flex items-center gap-1 mt-1 text-xs",
            isOwn ? "text-white/70 justify-end" : "text-telegram-gray-400"
          )}
        >
          <time>{formatDate(message.created_at)}</time>

          {isOwn && (
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-label={message.is_read ? "Read" : "Sent"}
            >
              {message.is_read ? (
                // Double check (read)
                <>
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" transform="translate(4, 0)" />
                </>
              ) : (
                // Single check (sent)
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              )}
            </svg>
          )}

          {message.is_edited && (
            <span className="text-xs">(edited)</span>
          )}
        </div>
      </div>
    </div>
  );
}
