import { Notification } from "@/types";
import { Avatar, cn } from "@nextui-org/react";
import { Heart, UserPlus } from "lucide-react";

interface NotificationCardProps {
  notification: Notification;
}

export default function NotificationCard({
  notification,
}: NotificationCardProps) {
  const getIcon = () => {
    switch (notification.type) {
      case "like":
        return <Heart size={14} className="fill-white text-white" />;
      case "follow":
        return <UserPlus size={14} className="text-white" />;
      default:
        return null;
    }
  };

  const getIconColor = () => {
    switch (notification.type) {
      case "like":
        return "bg-danger";
      case "follow":
        return "bg-primary";
      default:
        return "bg-default";
    }
  };

  return (
    <div
      className={cn(
        "flex w-full gap-3 rounded-md px-3 py-3 transition-colors",
        !notification.read ? "bg-primary-50/50" : "hover:bg-default-100",
      )}
    >
      <div className="relative">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src={notification.user.avatar}
        />
        <div
          className={cn(
            "absolute -bottom-1 -right-1 rounded-full border-2 border-background p-1",
            getIconColor(),
          )}
        >
          {getIcon()}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="text-small text-foreground">
          <span className="font-semibold">{notification.user.name}</span>
          <span className="ml-1 text-default-500">
            {notification.type === "like"
              ? "liked your post"
              : "started following you"}
          </span>
        </div>
        <span className="text-tiny text-default-400">
          {notification.createdAt}
        </span>
      </div>
    </div>
  );
}
