"use client";
import { useAuth } from "@/context/AuthContext";
import {
  useGetConversationsQuery,
  useGetMessagesQuery,
  useSendMessageMutation,
} from "@/lib/store/features/api/apiSlice";
import { Avatar, Button, Input, Spinner } from "@nextui-org/react";
import { MoreVertical, Phone, Send, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  conversationId: string;
}

export default function ChatWindow({ conversationId }: Props) {
  const { user: currentUser } = useAuth();
  const { data: messages, isLoading: isMessagesLoading } =
    useGetMessagesQuery(conversationId);
  const { data: conversations } = useGetConversationsQuery();
  const [sendMessage] = useSendMessageMutation();

  const conversation = conversations?.find((c) => c.id === conversationId);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      await sendMessage({ conversationId, content: newMessage }).unwrap();
      // Optimistic update handled by RTK Query tags ideally, or list auto-refetches
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  if (isMessagesLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p>Conversation not found.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-default-200 p-4">
        <div className="flex items-center gap-3">
          <Avatar src={conversation.user.avatar} />
          <div>
            <h3 className="font-semibold">{conversation.user.name}</h3>
            <p className="text-tiny text-default-500">Active now</p>
          </div>
        </div>
        <div className="flex gap-2 text-default-500">
          <Button isIconOnly variant="light" radius="full">
            <Phone size={20} />
          </Button>
          <Button isIconOnly variant="light" radius="full">
            <Video size={20} />
          </Button>
          <Button isIconOnly variant="light" radius="full">
            <MoreVertical size={20} />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages?.map((msg) => {
          const isMe =
            msg.senderId === currentUser?.id ||
            msg.senderId === "me" ||
            msg.senderId === "u1"; // 'u1' is mock current user ID
          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  isMe
                    ? "rounded-br-none bg-primary text-white"
                    : "rounded-bl-none bg-default-100 text-foreground"
                }`}
              >
                <p>{msg.content}</p>
                <p
                  className={`mt-1 text-[10px] opacity-70 ${isMe ? "text-right" : "text-left"}`}
                >
                  {msg.createdAt}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-default-200 p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            radius="full"
            classNames={{
              inputWrapper: "bg-default-100",
            }}
          />
          <Button
            isIconOnly
            color="primary"
            radius="full"
            onPress={handleSendMessage}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
