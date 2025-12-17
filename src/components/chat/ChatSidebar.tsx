"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetConversationsQuery } from "@/lib/store/features/api/apiSlice";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

export default function ChatSidebar() {
  const { data: conversations, isLoading } = useGetConversationsQuery();

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr); // Mock data might use human readable string, but let's assume valid date or just return string
    // Simple robust check
    if (isNaN(date.getTime())) return dateStr;

    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="h-full w-full overflow-y-auto p-2">
      <h2 className="mb-4 px-2 text-xl font-bold">Messages</h2>
      <div className="space-y-1">
        {conversations?.map((conv) => (
          <Link
            key={conv.id}
            href={`/messages/${conv.id}`}
            className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-default-100"
          >
            <div className="relative">
              <Avatar src={conv.user.avatar} size="md" />
              {conv.unreadCount ? (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] text-white">
                  {conv.unreadCount}
                </span>
              ) : null}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between">
                <p className="text-small font-semibold">{conv.user.name}</p>
                <p className="text-tiny text-default-400">
                  {conv.lastMessageTime}
                </p>
              </div>
              <p className="truncate text-small text-default-500">
                {conv.lastMessage}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
