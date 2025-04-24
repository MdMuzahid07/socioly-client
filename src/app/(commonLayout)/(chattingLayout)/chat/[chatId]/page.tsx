import ChatCard from "@/components/ui/chat/ChatCard";
import ChatHeader from "@/components/ui/chat/ChatHeader";
import ChatInput from "@/components/ui/chat/ChatInput";
import React from "react";

export default function ChatInbox() {
  return (
    <section className="relative h-full w-full text-black">
      <ChatHeader styles="w-full bg-white drop-shadow-sm h-14 px-4 border-b" />

      <section className="custom-scrollbar relative max-h-[79.8vh] overflow-y-scroll p-4 pb-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div key={index}>
            <ChatCard styles=" float-right" />
            <ChatCard styles=" mt-20" />
          </div>
        ))}
      </section>

      <ChatInput styles="absolute bottom-0 drop-shadow-sm left-0 h-14 bg-white  w-full border-t px-4" />
    </section>
  );
}
