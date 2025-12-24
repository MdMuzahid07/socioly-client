"use client";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="">
        <h2 className="mb-4 text-2xl font-bold text-danger">
          Something went wrong!
        </h2>
        <p className="mb-6">
          {error.message || "An unexpected error has occurred."}
        </p>
        <button
          onClick={reset}
          className="rounded bg-primary px-4 py-2 text-white transition-all hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
