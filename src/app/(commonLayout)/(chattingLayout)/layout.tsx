import ChatBoxAside from "@/components/ui/chat/ChatBoxAside";
import Container from "@/components/ui/common/Container";
import React from "react";

export default function ChattingLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative bg-slate-50 py-1 text-black">
      <Container>
        <div className="min-w-screen grid h-[92vh] overflow-hidden rounded-lg border drop-shadow-sm sm:grid-cols-12">
          <ChatBoxAside styles="sm:col-span-4 md:col-span-3" />
          <div className="w-full sm:col-span-8 md:col-span-9">{children}</div>
        </div>
      </Container>
    </section>
  );
}
