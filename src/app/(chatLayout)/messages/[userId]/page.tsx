"use client";
import ActiveCall from "@/components/ui/chat/ActiveCall";
import CallModal from "@/components/ui/chat/CallModal";
import ChatCard from "@/components/ui/chat/ChatCard";
import ChatHeader from "@/components/ui/chat/ChatHeader";
import ChatInput from "@/components/ui/chat/ChatInput";
import {
  MOCK_CONNECTIONS,
  MOCK_MESSAGES,
  MOCK_USERS,
} from "@/lib/data/mockData";
import { use, useEffect, useMemo, useState } from "react";

export default function ChatPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = use(params);
  const currentUser = MOCK_CONNECTIONS.find((conn) => conn.id === userId);
  const currentUserId = MOCK_USERS.current.id;

  // Find conversation ID for this user
  const conversationId = useMemo(() => {
    // Map userId to conversation ID (simplified - in real app, this would be from API)
    const convMap: Record<string, string> = {
      u2: "c1",
      u3: "c2",
      u4: "c3",
      u5: "c4",
      u6: "c5",
    };
    return convMap[userId] || "c1";
  }, [userId]);

  const messages =
    MOCK_MESSAGES[conversationId as keyof typeof MOCK_MESSAGES] || [];

  const [localMessages, setLocalMessages] = useState(messages);

  // Call state management
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [activeCall, setActiveCall] = useState<{
    type: "audio" | "video";
    direction: "incoming" | "outgoing";
  } | null>(null);
  const [isCallMinimized, setIsCallMinimized] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: `m${Date.now()}`,
      senderId: currentUserId,
      content,
      createdAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setLocalMessages([...localMessages, newMessage]);
  };

  // Call handlers
  const handleAudioCall = () => {
    setCallModalOpen(true);
    setActiveCall({ type: "audio", direction: "outgoing" });
  };

  const handleVideoCall = () => {
    setCallModalOpen(true);
    setActiveCall({ type: "video", direction: "outgoing" });
  };

  const handleAcceptCall = () => {
    if (activeCall) {
      setCallModalOpen(false);
      setIsCallMinimized(false);
      // Call is now active, modal will close and ActiveCall will show
    }
  };

  const handleDeclineCall = () => {
    setCallModalOpen(false);
    setActiveCall(null);
  };

  const handleCancelCall = () => {
    setCallModalOpen(false);
    setActiveCall(null);
  };

  const handleEndCall = () => {
    setActiveCall(null);
    setIsCallMinimized(false);
  };

  // Auto-connect outgoing calls after a short delay (simulating connection)
  useEffect(() => {
    if (activeCall && activeCall.direction === "outgoing" && callModalOpen) {
      const timer = setTimeout(() => {
        setCallModalOpen(false);
        setIsCallMinimized(false);
      }, 2000); // Simulate 2 second connection time

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [activeCall, callModalOpen]);

  if (!currentUser) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-default-500">User not found</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-full w-full flex-col overflow-hidden bg-background">
        <ChatHeader
          userId={userId}
          styles="sticky top-0 z-10"
          onAudioCall={handleAudioCall}
          onVideoCall={handleVideoCall}
        />

        {/* Chat Messages Area */}
        <div className="relative flex-1 overflow-y-auto bg-gradient-to-b from-background via-background to-default-50/30">
          <div className="mx-auto flex min-h-full max-w-4xl flex-col justify-end gap-4 p-4 pb-6">
            {localMessages.length === 0 ? (
              <div className="flex h-full items-center justify-center">
                <p className="text-default-500">
                  No messages yet. Start the conversation!
                </p>
              </div>
            ) : (
              localMessages.map((message, index) => {
                const isMine = message.senderId === currentUserId;
                const prevMessage = index > 0 ? localMessages[index - 1] : null;
                const showAvatar =
                  !prevMessage || prevMessage.senderId !== message.senderId;

                return (
                  <ChatCard
                    key={message.id}
                    text={message.content}
                    isMine={isMine}
                    senderId={message.senderId}
                    timestamp={message.createdAt}
                    showAvatar={showAvatar}
                    senderName={currentUser.name}
                    senderAvatar={currentUser.avatar}
                  />
                );
              })
            )}
          </div>
        </div>

        <ChatInput
          styles="sticky bottom-0 z-10"
          onSendMessage={handleSendMessage}
        />
      </div>

      {/* Call Modal for Incoming/Outgoing Calls */}
      {activeCall && (
        <CallModal
          isOpen={callModalOpen}
          onClose={() => setCallModalOpen(false)}
          userId={userId}
          callType={activeCall.type}
          callDirection={activeCall.direction}
          onAccept={handleAcceptCall}
          onDecline={handleDeclineCall}
          onCancel={handleCancelCall}
        />
      )}

      {/* Active Call UI */}
      {activeCall && !callModalOpen && (
        <ActiveCall
          userId={userId}
          callType={activeCall.type}
          onEndCall={handleEndCall}
          isMinimized={isCallMinimized}
          onMinimize={() => setIsCallMinimized(true)}
          onMaximize={() => setIsCallMinimized(false)}
        />
      )}
    </>
  );
}
