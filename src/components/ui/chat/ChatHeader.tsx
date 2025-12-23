"use client";
import { MOCK_CONNECTIONS } from "@/lib/data/mockData";
import { Button } from "@nextui-org/react";
import { ArrowLeft, MoreVertical, Phone, Video } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

interface ChatHeaderProps {
  styles?: string;
  userId?: string;
  onAudioCall?: () => void;
  onVideoCall?: () => void;
}

export default function ChatHeader({
  styles = "",
  userId,
  onAudioCall,
  onVideoCall,
}: ChatHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const currentUser = useMemo(() => {
    if (userId) {
      return MOCK_CONNECTIONS.find((conn) => conn.id === userId);
    }
    // Extract userId from pathname if not provided
    const pathUserId = pathname?.split("/messages/")[1];
    if (pathUserId) {
      return MOCK_CONNECTIONS.find((conn) => conn.id === pathUserId);
    }
    // Default to first connection
    return MOCK_CONNECTIONS[0];
  }, [userId, pathname]);

  if (!currentUser) {
    return null;
  }

  return (
    <div
      className={`${styles} flex items-center justify-between border-b border-divider bg-content1 px-4 py-3 backdrop-blur-sm`}
    >
      <div className="flex items-center gap-3">
        {/* Back button - visible only on mobile */}
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-default-600 sm:hidden"
          onPress={() => router.push("/messages")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <div className="relative h-10 w-10 flex-shrink-0">
          <Image
            src={currentUser.avatar || "https://i.pravatar.cc/150?u=default"}
            alt={currentUser.name}
            fill
            className="rounded-full object-cover ring-2 ring-default-200"
          />
          {currentUser.isOnline && (
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground">
            {currentUser.name}
          </h3>
          <p className="text-xs text-default-500">
            {currentUser.role}
            {currentUser.isOnline && (
              <span className="ml-2 text-green-500">• Online</span>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Audio Call Button */}
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-default-500 hover:text-foreground"
          aria-label="Start audio call"
          onPress={onAudioCall}
        >
          <Phone className="h-5 w-5" />
        </Button>

        {/* Video Call Button */}
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-default-500 hover:text-foreground"
          aria-label="Start video call"
          onPress={onVideoCall}
        >
          <Video className="h-5 w-5" />
        </Button>

        {/* More Options Button */}
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-default-500 hover:text-foreground"
          aria-label="More options"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
