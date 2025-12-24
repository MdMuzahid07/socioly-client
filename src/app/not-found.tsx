"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-4 py-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 animate-blob rounded-full bg-primary/20 opacity-70 blur-3xl" />
        <div className="animation-delay-2000 absolute right-20 top-40 h-72 w-72 animate-blob rounded-full bg-secondary/20 opacity-70 blur-3xl" />
        <div className="animation-delay-4000 absolute bottom-20 left-1/3 h-72 w-72 animate-blob rounded-full bg-primary/10 opacity-70 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl animate-fade-in">
        {/* Main Card */}
        <div className="glass-panel rounded-3xl p-6 md:p-12">
          <div className="mb-8 flex items-center justify-center">
            <div className="relative">
              <h1 className="text-7xl font-bold text-primary sm:text-8xl md:text-9xl">
                404
              </h1>
              <div className="absolute -right-4 -top-4 h-16 w-16 animate-bounce rounded-full bg-secondary/20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 animate-pulse rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>

          <div className="mb-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              Page Not Found
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base md:text-lg">
              Oops! The page you&apos;re looking for seems to have wandered off.
              It might have been moved, deleted, or never existed.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg"
            >
              <Home className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Go Home
            </Link>

            <button
              onClick={() => router.back()}
              className="border-foreground/20 hover:border-foreground/30 group flex items-center justify-center gap-2 rounded-full border bg-content1 px-6 py-3 font-medium text-foreground transition-all hover:scale-105 hover:shadow-lg"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
          </div>

          <div className="border-foreground/10 mt-8 border-t pt-6">
            <p className="text-foreground/60 mb-3 text-center text-sm font-medium">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/feed"
                className="rounded-full bg-content2 px-4 py-2 text-sm text-foreground transition-all hover:scale-105 hover:bg-content3"
              >
                Feed
              </Link>
              <Link
                href="/profile"
                className="rounded-full bg-content2 px-4 py-2 text-sm text-foreground transition-all hover:scale-105 hover:bg-content3"
              >
                Profile
              </Link>
              <Link
                href="/notifications"
                className="rounded-full bg-content2 px-4 py-2 text-sm text-foreground transition-all hover:scale-105 hover:bg-content3"
              >
                Notifications
              </Link>
              <Link
                href="/messages"
                className="rounded-full bg-content2 px-4 py-2 text-sm text-foreground transition-all hover:scale-105 hover:bg-content3"
              >
                Messages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
