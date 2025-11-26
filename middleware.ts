import { updateSession } from "@/lib/supabase/middleware";

/**
 * Next.js Middleware - Runs on every request
 * Handles authentication and session management with Supabase
 */
export async function middleware(request: any) {
  return await updateSession(request);
}

/**
 * Matcher configuration - specifies which routes the middleware should run on
 * Excludes static files, images, and Next.js internal files
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
