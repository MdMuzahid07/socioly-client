"use client";
import ChatSidebar from "@/components/chat/ChatSidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background text-foreground md:flex-row">
      <div className="hidden h-full w-80 border-r border-default-200 md:block">
        <div className="flex h-16 items-center border-b border-default-200 px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-default-500 hover:text-foreground"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Feed</span>
          </Link>
        </div>
        <ChatSidebar />
      </div>
      <main className="relative h-full w-full flex-1">{children}</main>
    </div>
  );
}
