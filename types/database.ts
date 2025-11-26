/**
 * Database types generated from Supabase schema
 * This file should be regenerated when the database schema changes
 *
 * To regenerate: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > types/database.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          username: string;
          full_name: string;
          avatar_url: string | null;
          bio: string | null;
          is_online: boolean;
          last_seen: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          username: string;
          full_name: string;
          avatar_url?: string | null;
          bio?: string | null;
          is_online?: boolean;
          last_seen?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          username?: string;
          full_name?: string;
          avatar_url?: string | null;
          bio?: string | null;
          is_online?: boolean;
          last_seen?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      conversations: {
        Row: {
          id: string;
          type: "private" | "group";
          name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          type: "private" | "group";
          name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          type?: "private" | "group";
          name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          conversation_id: string;
          sender_id: string;
          content: string;
          type: "text" | "image" | "file";
          file_url: string | null;
          is_edited: boolean;
          is_read: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          conversation_id: string;
          sender_id: string;
          content: string;
          type?: "text" | "image" | "file";
          file_url?: string | null;
          is_edited?: boolean;
          is_read?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          conversation_id?: string;
          sender_id?: string;
          content?: string;
          type?: "text" | "image" | "file";
          file_url?: string | null;
          is_edited?: boolean;
          is_read?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      conversation_participants: {
        Row: {
          id: string;
          conversation_id: string;
          user_id: string;
          role: "admin" | "member";
          joined_at: string;
          last_read_at: string | null;
        };
        Insert: {
          id?: string;
          conversation_id: string;
          user_id: string;
          role?: "admin" | "member";
          joined_at?: string;
          last_read_at?: string | null;
        };
        Update: {
          id?: string;
          conversation_id?: string;
          user_id?: string;
          role?: "admin" | "member";
          joined_at?: string;
          last_read_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      conversation_type: "private" | "group";
      message_type: "text" | "image" | "file";
      participant_role: "admin" | "member";
    };
  };
}
