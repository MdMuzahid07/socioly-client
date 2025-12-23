"use client";
import { MOCK_USERS } from "@/lib/data/mockData";
import { Avatar } from "@nextui-org/react";

interface ChatCardProps {
  styles?: string;
  text: string;
  isMine: boolean;
  senderId?: string;
  timestamp?: string;
  showAvatar?: boolean;
  senderName?: string;
  senderAvatar?: string;
}

export default function ChatCard({
  styles = "",
  text,
  isMine,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  senderId,
  timestamp,
  showAvatar = true,
  senderName,
  senderAvatar,
}: ChatCardProps) {
  const currentUser = MOCK_USERS.current;
  const displayName = isMine
    ? currentUser.name.split(" ")[0]
    : senderName || "User";
  const displayAvatar = isMine
    ? currentUser.avatar
    : senderAvatar || "https://i.pravatar.cc/150?u=default";

  return (
    <div
      className={`flex w-full gap-2 ${isMine ? "justify-end" : "justify-start"} ${styles}`}
    >
      {!isMine && showAvatar && (
        <Avatar
          src={displayAvatar}
          size="sm"
          className="mt-auto flex-shrink-0"
        />
      )}

      <div
        className={`flex max-w-[75%] flex-col gap-1 ${isMine ? "items-end" : "items-start"}`}
      >
        <div
          className={`group relative rounded-2xl px-4 py-2.5 shadow-sm transition-all ${
            isMine
              ? "rounded-br-md bg-primary text-primary-foreground"
              : "rounded-bl-md bg-default-100 text-foreground"
          }`}
        >
          <p className="break-words text-sm leading-relaxed">{text}</p>
        </div>

        {timestamp && (
          <div className="flex items-center gap-1.5 px-1">
            <span className="text-[10px] text-default-500">{timestamp}</span>
            {isMine && (
              <span className="text-[10px] text-default-400">
                {displayName}
              </span>
            )}
          </div>
        )}
      </div>

      {isMine && showAvatar && (
        <Avatar
          src={displayAvatar}
          size="sm"
          className="mt-auto flex-shrink-0"
        />
      )}
    </div>
  );
}
