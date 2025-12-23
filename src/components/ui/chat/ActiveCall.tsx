"use client";
import { MOCK_CONNECTIONS } from "@/lib/data/mockData";
import { Button } from "@nextui-org/react";
import {
  PhoneOff,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Maximize2,
  Minimize2,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ActiveCallProps {
  userId?: string;
  callType: "audio" | "video";
  onEndCall: () => void;
  onToggleVideo?: () => void;
  onToggleMute?: () => void;
  isMinimized?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export default function ActiveCall({
  userId,
  callType,
  onEndCall,
  onToggleVideo,
  onToggleMute,
  isMinimized = false,
  onMinimize,
  onMaximize,
}: ActiveCallProps) {
  const user = userId
    ? MOCK_CONNECTIONS.find((conn) => conn.id === userId)
    : MOCK_CONNECTIONS[0];

  const [isVideoOn, setIsVideoOn] = useState(callType === "video");
  const [isMuted, setIsMuted] = useState(false);

  if (!user) return null;

  const handleToggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    onToggleVideo?.();
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    onToggleMute?.();
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg bg-content1 p-3 shadow-lg ring-1 ring-default-200">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={user.avatar || "https://i.pravatar.cc/150?u=default"}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">{user.name}</p>
          <p className="text-xs text-default-500">
            {callType === "video" ? "Video call" : "Audio call"}
          </p>
        </div>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={onMaximize}
          aria-label="Maximize call"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="text-danger"
          onPress={onEndCall}
          aria-label="End call"
        >
          <PhoneOff className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Video/Audio Area */}
      <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-default-100 to-default-50">
        {callType === "video" && isVideoOn ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative h-full w-full">
              {/* Remote video would go here */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-primary/20">
                  <Image
                    src={user.avatar || "https://i.pravatar.cc/150?u=default"}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Local video preview (small, bottom right) */}
              <div className="absolute bottom-4 right-4 h-32 w-24 overflow-hidden rounded-lg border-2 border-default-200 bg-default-100">
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-8 w-8 text-default-400" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-primary/20">
              <Image
                src={user.avatar || "https://i.pravatar.cc/150?u=default"}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* User Info Overlay */}
        <div className="absolute left-0 top-0 p-6">
          <div className="rounded-lg bg-content1/80 px-4 py-2 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-foreground">
              {user.name}
            </h3>
            <p className="text-sm text-default-500">
              {callType === "video" ? "Video call" : "Audio call"}
            </p>
          </div>
        </div>
      </div>

      {/* Call Controls */}
      <div className="border-t border-divider bg-content1 p-6">
        <div className="mx-auto flex max-w-md items-center justify-center gap-4">
          {/* Mute Toggle */}
          <Button
            isIconOnly
            className={`h-12 w-12 rounded-full ${
              isMuted
                ? "bg-danger text-white"
                : "bg-default-200 text-foreground hover:bg-default-300"
            }`}
            onPress={handleToggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <MicOff className="h-5 w-5" />
            ) : (
              <Mic className="h-5 w-5" />
            )}
          </Button>

          {/* Video Toggle (only for video calls) */}
          {callType === "video" && (
            <Button
              isIconOnly
              className={`h-12 w-12 rounded-full ${
                isVideoOn
                  ? "bg-default-200 text-foreground hover:bg-default-300"
                  : "bg-danger text-white"
              }`}
              onPress={handleToggleVideo}
              aria-label={isVideoOn ? "Turn off video" : "Turn on video"}
            >
              {isVideoOn ? (
                <Video className="h-5 w-5" />
              ) : (
                <VideoOff className="h-5 w-5" />
              )}
            </Button>
          )}

          {/* Minimize */}
          <Button
            isIconOnly
            className="h-12 w-12 rounded-full bg-default-200 text-foreground hover:bg-default-300"
            onPress={onMinimize}
            aria-label="Minimize call"
          >
            <Minimize2 className="h-5 w-5" />
          </Button>

          {/* End Call */}
          <Button
            isIconOnly
            className="h-12 w-12 rounded-full bg-danger text-white hover:bg-danger/90"
            onPress={onEndCall}
            aria-label="End call"
          >
            <PhoneOff className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
