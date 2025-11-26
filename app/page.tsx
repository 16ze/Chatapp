import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { MainLayout } from "@/components/layout/main-layout";

/**
 * Home Page - Main application entry point
 * Checks authentication and renders the main chat interface
 */
export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect to login if not authenticated
  if (!user) {
    redirect("/auth/login");
  }

  return <MainLayout />;
}
