/**
 * ProfileActions Component
 * Renders action buttons for profile (Edit, Follow, Message)
 */

"use client";

import { ProfileActionsProps } from "@/types/profile.types";
import { Button } from "@nextui-org/react";
import { MessageCircle, UserPlus } from "lucide-react";
import React from "react";

const ProfileActions: React.FC<ProfileActionsProps> = ({
  isFollowing,
  onEdit,
  onToggleFollow,
  onMessage,
}) => {
  return (
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <Button
        radius="full"
        variant="bordered"
        className="border-divider font-medium"
        onPress={onEdit}
        size="sm"
      >
        Edit profile
      </Button>
      <Button
        color={isFollowing ? "default" : "primary"}
        variant={isFollowing ? "flat" : "solid"}
        radius="full"
        onPress={onToggleFollow}
        startContent={!isFollowing && <UserPlus size={18} />}
        className="font-medium"
        size="sm"
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
      <Button
        isIconOnly
        radius="full"
        variant="flat"
        color="primary"
        onPress={onMessage}
        size="sm"
      >
        <MessageCircle size={20} />
      </Button>
    </div>
  );
};

export default React.memo(ProfileActions);
