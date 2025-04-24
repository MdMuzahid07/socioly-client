import ChatCard from "@/components/ui/chat/ChatCard";
import ChatHeader from "@/components/ui/chat/ChatHeader";
import ChatInput from "@/components/ui/chat/ChatInput";
import React from "react";

interface IMessage {
  _id: number;
  senderId: number;
  receiverId: number;
  sender: string;
  text: string;
  timestamp: string;
}

const messages: IMessage[] = [
  {
    _id: 3,
    text: "Hey, are we still on for today?",
    sender: "me",
    senderId: 245245,
    receiverId: 5243,
    timestamp: "2025-04-24T10:15:00Z",
  },
  {
    _id: 234,
    text: "Yes, absolutely! See you at 3 PM.",
    sender: "other",
    senderId: 5243,
    receiverId: 245245,
    timestamp: "2025-04-24T10:16:20Z",
  },
  {
    _id: 23,
    text: `Great, I'll bring the documents.`,
    sender: "me",
    senderId: 245245,
    receiverId: 5243,
    timestamp: "2025-04-24T10:17:05Z",
  },
  {
    _id: 456,
    text: "Perfect. Thanks!",
    sender: "other",
    senderId: 5243,
    receiverId: 245245,
    timestamp: "2025-04-24T10:18:10Z",
  },
  {
    _id: 457,
    text: "No problem. 😊",
    sender: "me",
    senderId: 245245,
    receiverId: 5243,
    timestamp: "2025-04-24T10:19:00Z",
  },
  {
    _id: 458,
    text: "Do you need anything else before we meet?",
    sender: "me",
    senderId: 245245,
    receiverId: 5243,
    timestamp: "2025-04-24T10:20:15Z",
  },
  {
    _id: 459,
    text: "Hmm, maybe a printout of the last month’s report?",
    sender: "other",
    senderId: 5243,
    receiverId: 245245,
    timestamp: "2025-04-24T10:21:10Z",
  },
  {
    _id: 460,
    text: "Got it. I'll bring a couple of copies.",
    sender: "me",
    senderId: 245245,
    receiverId: 5243,
    timestamp: "2025-04-24T10:22:05Z",
  },
  {
    _id: 461,
    text: "Awesome. You're the best!",
    sender: "other",
    senderId: 5243,
    receiverId: 245245,
    timestamp: "2025-04-24T10:22:45Z",
  },
  {
    _id: 462,
    text: "Haha, don’t mention it. 😄",
    sender: "me",
    senderId: 245245,
    receiverId: 5243,
    timestamp: "2025-04-24T10:23:30Z",
  },
];

export default function ChatInbox() {
  return (
    <section className="relative h-full w-full text-black">
      <ChatHeader styles="w-full bg-white drop-shadow-sm h-14 px-4 border-b" />

      <section className="custom-scrollbar relative max-h-[79.8vh] overflow-y-scroll p-4 pb-10">
        {messages?.map((msg) => (
          <div
            key={msg?._id}
            className={`mb-10 flex w-full ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <ChatCard text={msg.text} isMine={msg.sender === "me"} />
          </div>
        ))}
      </section>

      <ChatInput styles="absolute bottom-0 drop-shadow-sm left-0 h-14 bg-white  w-full border-t px-4" />
    </section>
  );
}
