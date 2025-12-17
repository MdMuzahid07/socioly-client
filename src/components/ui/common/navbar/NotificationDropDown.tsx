import { MOCK_NOTIFICATIONS } from "@/lib/data/mockData";
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { Bell } from "lucide-react";
import NotificationCard from "./NotificationCard";

export default function NotificationDropDown() {
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <Dropdown placement="bottom-end" className="w-80" shadow="sm">
      <DropdownTrigger>
        <button className="flex items-center justify-center outline-none">
          <Badge
            content={unreadCount}
            color="danger"
            shape="circle"
            size="sm"
            isInvisible={unreadCount === 0}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-default-100 transition-colors hover:bg-default-200">
              <Bell className="h-5 w-5 text-default-600" />
            </div>
          </Badge>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        className="custom-scrollbar max-h-[400px] overflow-y-auto"
        aria-label="Notifications"
        variant="flat"
      >
        <DropdownSection title="Notifications" showDivider>
          {/* @ts-ignore */}
          {MOCK_NOTIFICATIONS.map((notification) => (
            <DropdownItem
              key={notification.id}
              className="my-1 border-b border-divider p-0 last:border-none"
              textValue={`Notification from ${notification.user.name}`}
            >
              <NotificationCard notification={notification} />
            </DropdownItem>
          ))}
        </DropdownSection>
        {MOCK_NOTIFICATIONS.length === 0 ? (
          <DropdownItem
            key="empty"
            isReadOnly
            className="py-4 text-center text-default-500 opacity-100"
          >
            No new notifications
          </DropdownItem>
        ) : null}
      </DropdownMenu>
    </Dropdown>
  );
}
