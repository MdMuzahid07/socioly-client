"use client";

import { useEffect, useState } from "react";
import { WifiOff, RefreshCw } from "lucide-react";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    setIsOnline(navigator.onLine);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleRetry = () => {
    if (isOnline) {
      window.location.href = "/";
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-4 w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-gray-200 p-6 dark:bg-gray-700">
            <WifiOff className="h-16 w-16 text-gray-600 dark:text-gray-400" />
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          You&apos;re Offline
        </h1>

        <p className="mb-8 text-gray-600 dark:text-gray-400">
          It looks like you&apos;re not connected to the internet. Please check
          your connection and try again.
        </p>

        <div className="space-y-4">
          <button
            onClick={handleRetry}
            disabled={!isOnline}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <RefreshCw
              className={`h-5 w-5 ${!isOnline ? "animate-spin" : ""}`}
            />
            {isOnline ? "Go to Home" : "Retry Connection"}
          </button>

          {isOnline && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Connection restored! Click the button above to continue.
            </p>
          )}
        </div>

        <div className="mt-12 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Tip:</strong> Some features may still work offline thanks to
            our offline support. Try navigating to pages you&apos;ve visited
            before.
          </p>
        </div>
      </div>
    </div>
  );
}
