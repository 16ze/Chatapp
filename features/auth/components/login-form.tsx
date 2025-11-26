"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabase/client";

/**
 * LoginForm - Form for user authentication
 */
export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-telegram-gray-600 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-telegram-gray-50 rounded-lg text-telegram-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="you@example.com"
            aria-label="Email address"
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-telegram-gray-600 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-telegram-gray-50 rounded-lg text-telegram-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="••••••••"
            aria-label="Password"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="mt-6 text-center text-sm text-telegram-gray-500">
        Don't have an account?{" "}
        <Link
          href="/auth/signup"
          className="text-primary font-semibold hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
