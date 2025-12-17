"use client";
import { MessageSquareDashed } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center text-default-400">
      <MessageSquareDashed size={64} strokeWidth={1} />
      <h2 className="mt-4 text-xl font-semibold text-foreground">
        Your Messages
      </h2>
      <p className="max-w-xs">
        Select a conversation from the sidebar to start chatting.
      </p>
    </div>
  );
}
