"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabase/client";

/**
 * SignUpForm - Form for user registration
 */
export function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const supabase = getSupabaseClient();

      // Sign up the user
      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            username: formData.username,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      // If successful, redirect to home
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
        {/* Full Name Input */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-telegram-gray-600 mb-2"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-telegram-gray-50 rounded-lg text-telegram-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="John Doe"
            aria-label="Full name"
          />
        </div>

        {/* Username Input */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-telegram-gray-600 mb-2"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-telegram-gray-50 rounded-lg text-telegram-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="johndoe"
            aria-label="Username"
          />
        </div>

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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full px-4 py-3 bg-telegram-gray-50 rounded-lg text-telegram-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="••••••••"
            aria-label="Password"
          />
          <p className="mt-1 text-xs text-telegram-gray-400">
            Must be at least 6 characters
          </p>
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
          {isLoading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-6 text-center text-sm text-telegram-gray-500">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-primary font-semibold hover:underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
