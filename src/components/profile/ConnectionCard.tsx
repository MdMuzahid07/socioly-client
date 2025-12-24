/**
 * ConnectionCard Component
 * Displays a single connection with actions
 */

"use client";

import { ConnectionCardProps } from "@/types/profile.types";
import { Avatar, Button, Card, Chip } from "@nextui-org/react";
import { MessageCircle, MoreVertical, Phone, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const ConnectionCard: React.FC<ConnectionCardProps> = ({
  connection,
  onMessageClick,
}) => {
  const router = useRouter();

  const handleProfileClick = useCallback(() => {
    router.push(`/profile/${connection.id}`);
  }, [connection.id, router]);

  const handleMessageClick = useCallback(() => {
    onMessageClick(connection.id);
  }, [connection.id, onMessageClick]);

  return (
    <Card className="group border-small border-divider bg-content1 transition-all hover:border-primary hover:shadow-lg">
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div
            className="flex cursor-pointer items-center gap-4"
            onClick={handleProfileClick}
          >
            <div className="relative">
              <Avatar
                src={connection.avatar}
                size="lg"
                isBordered
                color={connection.isOnline ? "success" : "default"}
              />
              {connection.isOnline && (
                <span className="absolute bottom-0 right-0 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-success ring-2 ring-background" />
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-semibold">{connection.name}</h3>
                {connection.isOnline && (
                  <Chip
                    size="sm"
                    variant="flat"
                    color="success"
                    className="h-5 text-[10px]"
                  >
                    Online
                  </Chip>
                )}
              </div>
              <p className="truncate text-sm text-default-500">
                {connection.role}
              </p>
            </div>
          </div>
          <Button
            isIconOnly
            variant="light"
            size="sm"
            className="text-default-400"
          >
            <MoreVertical size={16} />
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="flat"
            color="primary"
            className="flex-1"
            startContent={<MessageCircle size={16} />}
            onPress={handleMessageClick}
          >
            Message
          </Button>
          <Button isIconOnly size="sm" variant="flat">
            <Phone size={16} />
          </Button>
          <Button isIconOnly size="sm" variant="flat">
            <Video size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(ConnectionCard);
