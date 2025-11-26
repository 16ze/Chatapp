/**
 * Core TypeScript type definitions for the ChatApp
 */

// ============================================
// Database Types (matching Supabase schema)
// ============================================

export interface User {
  id: string;
  email: string;
  username: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
  is_online: boolean;
  last_seen: string;
  created_at: string;
  updated_at: string;
}

export interface Conversation {
  id: string;
  type: "private" | "group";
  name?: string; // For group chats
  avatar_url?: string;
  created_at: string;
  updated_at: string;
  last_message?: Message;
  unread_count?: number;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  type: "text" | "image" | "file";
  file_url?: string;
  is_edited: boolean;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  sender?: User;
}

export interface ConversationParticipant {
  id: string;
  conversation_id: string;
  user_id: string;
  role: "admin" | "member";
  joined_at: string;
  last_read_at?: string;
}

// ============================================
// UI Types
// ============================================

export interface ConversationWithParticipants extends Conversation {
  participants: User[];
  other_user?: User; // For private chats
}

export interface MessageWithSender extends Message {
  sender: User;
}

// ============================================
// Store Types (for Zustand)
// ============================================

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  signOut: () => Promise<void>;
}

export interface ConversationsState {
  conversations: ConversationWithParticipants[];
  activeConversationId: string | null;
  isLoading: boolean;
  setConversations: (conversations: ConversationWithParticipants[]) => void;
  setActiveConversation: (id: string | null) => void;
  addConversation: (conversation: ConversationWithParticipants) => void;
  updateConversation: (id: string, updates: Partial<Conversation>) => void;
  setLoading: (isLoading: boolean) => void;
}

export interface MessagesState {
  messagesByConversation: Record<string, MessageWithSender[]>;
  isLoading: boolean;
  setMessages: (conversationId: string, messages: MessageWithSender[]) => void;
  addMessage: (conversationId: string, message: MessageWithSender) => void;
  updateMessage: (
    conversationId: string,
    messageId: string,
    updates: Partial<Message>
  ) => void;
  deleteMessage: (conversationId: string, messageId: string) => void;
  setLoading: (isLoading: boolean) => void;
}

// ============================================
// API Types
// ============================================

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface PaginationParams {
  limit?: number;
  offset?: number;
}

export interface CreateMessagePayload {
  conversation_id: string;
  content: string;
  type?: "text" | "image" | "file";
  file_url?: string;
}

export interface CreateConversationPayload {
  type: "private" | "group";
  participant_ids: string[];
  name?: string;
  avatar_url?: string;
}
