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
        return "bg-danger shadow-danger/50";
      case "follow":
        return "bg-primary shadow-primary/50";
      default:
        return "bg-default shadow-default/50";
    }
  };

  return (
    <div
      className={cn(
        "group relative flex w-full cursor-pointer gap-4 overflow-hidden rounded-xl bg-opacity-30 p-4 transition-all duration-300 hover:scale-[1.02]",
        !notification.read
          ? "border-l-4 border-l-primary bg-primary-50/10 backdrop-blur-md dark:bg-primary-900/10"
          : "border-l-4 border-l-transparent bg-transparent hover:bg-default-100/50 hover:backdrop-blur-sm",
      )}
    >
      <div className="relative shrink-0">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src={notification.user.avatar}
          className="ring-2 ring-content1 transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className={cn(
            "absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full shadow-lg ring-2 ring-background transition-transform duration-300 group-hover:scale-110",
            getIconColor(),
          )}
        >
          {getIcon()}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1">
        <div className="text-sm text-foreground">
          <span className="font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {notification.user.name}
          </span>
          <span className="ml-1 text-default-500 transition-colors group-hover:text-default-600">
            {notification.type === "like"
              ? "liked your post"
              : "started following you"}
          </span>
        </div>
        <span className="text-xs font-medium text-default-400">
          {notification.createdAt}
        </span>
      </div>

      {!notification.read && (
        <div className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 transform animate-pulse rounded-full bg-primary shadow-[0_0_8px_rgba(var(--nextui-primary),0.8)]" />
      )}
    </div>
  );
}
