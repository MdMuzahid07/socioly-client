"use client";
import { MOCK_CONNECTIONS } from "@/lib/data/mockData";
import { Button, Modal, ModalContent } from "@nextui-org/react";
import { Phone, PhoneOff, Video, VideoOff, User } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId?: string;
  callType: "audio" | "video";
  callDirection: "incoming" | "outgoing";
  onAccept?: () => void;
  onDecline?: () => void;
  onCancel?: () => void;
}

export default function CallModal({
  isOpen,
  onClose,
  userId,
  callType,
  callDirection,
  onAccept,
  onDecline,
  onCancel,
}: CallModalProps) {
  const user = userId
    ? MOCK_CONNECTIONS.find((conn) => conn.id === userId)
    : MOCK_CONNECTIONS[0];

  useEffect(() => {
    if (isOpen && callDirection === "incoming") {
      // Play ringtone or notification sound
      // You can add audio playback here
    }
  }, [isOpen, callDirection]);

  if (!user) return null;

  const handleAccept = () => {
    onAccept?.();
    onClose();
  };

  const handleDecline = () => {
    onDecline?.();
    onClose();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton
      backdrop="blur"
      className="bg-content1"
      size="sm"
    >
      <ModalContent>
        <div className="flex flex-col items-center justify-center p-8">
          {/* User Avatar */}
          <div className="relative mb-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-primary/20">
              <Image
                src={user.avatar || "https://i.pravatar.cc/150?u=default"}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            {callDirection === "incoming" && (
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>
            )}
          </div>

          {/* User Info */}
          <h2 className="mb-1 text-2xl font-semibold text-foreground">
            {user.name}
          </h2>
          <p className="mb-6 text-sm text-default-500">
            {callDirection === "incoming"
              ? callType === "video"
                ? "Incoming video call"
                : "Incoming audio call"
              : callType === "video"
                ? "Calling..."
                : "Calling..."}
          </p>

          {/* Call Controls */}
          <div className="flex items-center gap-4">
            {callDirection === "incoming" ? (
              <>
                {/* Decline Button */}
                <Button
                  isIconOnly
                  className="h-14 w-14 rounded-full bg-danger text-white shadow-lg hover:bg-danger/90"
                  onPress={handleDecline}
                  aria-label="Decline call"
                >
                  <PhoneOff className="h-6 w-6" />
                </Button>

                {/* Accept Button */}
                <Button
                  isIconOnly
                  className="h-14 w-14 rounded-full bg-success text-white shadow-lg hover:bg-success/90"
                  onPress={handleAccept}
                  aria-label="Accept call"
                >
                  {callType === "video" ? (
                    <Video className="h-6 w-6" />
                  ) : (
                    <Phone className="h-6 w-6" />
                  )}
                </Button>
              </>
            ) : (
              <>
                {/* Cancel Button */}
                <Button
                  isIconOnly
                  className="h-14 w-14 rounded-full bg-danger text-white shadow-lg hover:bg-danger/90"
                  onPress={handleCancel}
                  aria-label="Cancel call"
                >
                  <PhoneOff className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
