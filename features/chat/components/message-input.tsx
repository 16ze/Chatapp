"use client";

import { useState } from "react";

interface MessageInputProps {
  conversationId: string;
}

/**
 * MessageInput - Bottom input area for typing messages
 * Telegram-like design with emoji, attach, and send buttons
 */
export function MessageInput({ conversationId: _conversationId }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    // TODO: Send message to Supabase
    // For now, just clear the input
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="px-6 py-4 bg-white border-t border-telegram-gray-200">
      <div className="flex items-end gap-3">
        {/* Attach Button */}
        <button
          className="p-2 hover:bg-telegram-gray-100 rounded-full transition-colors flex-shrink-0"
          aria-label="Attach file"
        >
          <svg
            className="w-6 h-6 text-telegram-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>

        {/* Input Field */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="w-full px-4 py-2 pr-12 bg-telegram-gray-50 rounded-full text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Message input"
          />

          {/* Emoji Button */}
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-telegram-gray-100 rounded-full transition-colors"
            aria-label="Add emoji"
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
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Send message"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
