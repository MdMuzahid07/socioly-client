"use client";
import ChatBoxAside from "@/components/ui/chat/ChatBoxAside";
import Container from "@/components/ui/common/Container";
import { usePathname } from "next/navigation";
import React from "react";

export default function ChattingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChatPage = pathname?.includes("/chat/") && pathname !== "/chat";

  return (
    <section className="relative bg-background py-1 text-foreground">
      <Container>
        <div className="min-w-screen grid h-[92vh] overflow-hidden rounded-lg border drop-shadow-sm sm:grid-cols-12">
          {/* Sidebar - hidden on mobile when chat is open */}
          <div
            className={`${isChatPage ? "hidden sm:block" : "block"} sm:col-span-4 md:col-span-3`}
          >
            <ChatBoxAside styles="h-full" />
          </div>

          {/* Chat Area - hidden on mobile when on /chat page (no chat selected) */}
          <div
            className={`hero-pattern-chat-box-bg w-full ${!isChatPage ? "hidden sm:block" : "block"} sm:col-span-8 md:col-span-9`}
          >
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
