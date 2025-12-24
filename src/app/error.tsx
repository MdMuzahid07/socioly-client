"use client";
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Home,
  RefreshCcw,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-4 py-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 animate-blob rounded-full bg-red-500/20 opacity-70 blur-3xl" />
        <div className="animation-delay-2000 absolute right-20 top-40 h-72 w-72 animate-blob rounded-full bg-orange-500/20 opacity-70 blur-3xl" />
        <div className="animation-delay-4000 absolute bottom-20 left-1/3 h-72 w-72 animate-blob rounded-full bg-red-500/10 opacity-70 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl animate-fade-in">
        {/* Main Card */}
        <div className="glass-panel rounded-3xl p-6 md:p-12">
          {/* Error Icon */}
          <div className="mb-8 flex items-center justify-center">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 sm:h-24 sm:w-24 md:h-32 md:w-32">
                <AlertTriangle className="h-10 w-10 animate-pulse text-red-500 sm:h-12 sm:w-12 md:h-16 md:w-16" />
              </div>
              <div className="absolute -right-2 -top-2 h-12 w-12 animate-bounce rounded-full bg-orange-500/20 blur-xl" />
              <div className="absolute -bottom-2 -left-2 h-16 w-16 animate-pulse rounded-full bg-red-500/20 blur-xl" />
            </div>
          </div>

          {/* Message */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              Something Went Wrong
            </h1>
            <p className="text-foreground/70 text-sm sm:text-base md:text-lg">
              We encountered an unexpected error. Don&apos;t worry, our team has
              been notified and we&apos;re working on it.
            </p>
          </div>

          {/* Error Message */}
          <div className="mb-6 rounded-full bg-content2 p-4">
            <p className="text-sm font-medium text-red-500">
              {error.message || "An unexpected error has occurred."}
            </p>
            {error.digest && (
              <p className="text-foreground/50 mt-2 text-xs">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          {/* Error Details Toggle (Development) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mb-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex w-full items-center justify-between rounded-full bg-content2 p-4 text-left transition-all hover:bg-content3"
              >
                <span className="text-sm font-medium text-foreground">
                  Technical Details
                </span>
                {showDetails ? (
                  <ChevronUp className="text-foreground/60 h-5 w-5" />
                ) : (
                  <ChevronDown className="text-foreground/60 h-5 w-5" />
                )}
              </button>

              {showDetails && (
                <div className="mt-2 rounded-full bg-content1 p-4">
                  <pre className="text-foreground/70 max-h-60 overflow-auto text-xs">
                    {error.stack || "No stack trace available"}
                  </pre>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={reset}
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg"
            >
              <RefreshCcw className="h-5 w-5 transition-transform group-hover:rotate-180" />
              Try Again
            </button>

            <Link
              href="/"
              className="border-foreground/20 hover:border-foreground/30 group flex items-center justify-center gap-2 rounded-full border bg-content1 px-6 py-3 font-medium text-foreground transition-all hover:scale-105 hover:shadow-lg"
            >
              <Home className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Go Home
            </Link>
          </div>

          {/* Support Info */}
          <div className="border-foreground/10 mt-8 border-t pt-6 text-center">
            <p className="text-foreground/60 text-sm">
              If this problem persists, please{" "}
              <Link
                href="/support"
                className="font-medium text-primary hover:underline"
              >
                contact support
              </Link>{" "}
              or try refreshing the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
