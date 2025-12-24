"use client";
import { MessageSquareDashed } from "lucide-react";

export default function MessagePageView() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-default-100 p-6">
          <MessageSquareDashed
            size={64}
            strokeWidth={1.5}
            className="text-default-400"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Your Messages
          </h2>
          <p className="max-w-sm text-default-500">
            Select a conversation from the sidebar to start chatting with your
            connections.
          </p>
        </div>
      </div>
    </div>
  );
}
