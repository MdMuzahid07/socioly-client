import { MOCK_NOTIFICATIONS } from "@/lib/data/mockData";
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Link,
  ScrollShadow,
} from "@nextui-org/react";
import { Bell, CheckCheck } from "lucide-react";
import NotificationCard from "./NotificationCard";

export default function NotificationDropDown() {
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <Dropdown
      placement="bottom-end"
      className="w-full min-w-[380px] max-w-[420px]"
      classNames={{
        content:
          "bg-background/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-default-200/50 dark:border-default-100/10 shadow-2xl rounded-2xl",
      }}
    >
      <DropdownTrigger>
        <button className="group flex h-10 w-10 items-center justify-center rounded-full outline-none transition-transform active:scale-95">
          <Badge
            content={unreadCount}
            color="danger"
            shape="circle"
            size="sm"
            isInvisible={unreadCount === 0}
            className="border-2 border-background shadow-[0_0_8px_rgba(243,18,96,0.6)]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-default-100 text-default-500 transition-colors group-hover:bg-default-200 group-hover:text-foreground sm:h-9 sm:w-9">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </Badge>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        className="p-0"
        aria-label="Notifications"
        itemClasses={{
          base: "gap-4",
          title: "font-semibold",
        }}
        closeOnSelect={false}
      >
        <DropdownItem
          key="header"
          isReadOnly
          className="cursor-default opacity-100"
          textValue="Notifications"
        >
          <div className="flex items-center justify-between px-2 pt-2">
            <h3 className="text-lg font-bold text-foreground">Notifications</h3>
            {unreadCount > 0 && (
              <Button
                size="sm"
                variant="light"
                className="h-8 text-tiny font-medium text-primary hover:bg-primary/10"
                startContent={<CheckCheck size={14} />}
              >
                Mark all as read
              </Button>
            )}
          </div>
        </DropdownItem>
        <DropdownSection showDivider>
          <DropdownItem
            key="list"
            className="h-[400px] p-0 data-[hover=true]:bg-transparent"
            isReadOnly
          >
            <ScrollShadow className="h-full w-full">
              {MOCK_NOTIFICATIONS.length > 0 ? (
                <div className="flex flex-col gap-1 p-2">
                  {/* @ts-ignore */}
                  {MOCK_NOTIFICATIONS.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-default-100/50">
                    <Bell className="h-10 w-10 text-default-300" />
                  </div>
                  <div className="px-8">
                    <p className="font-semibold text-foreground">
                      No notifications yet
                    </p>
                    <p className="text-sm text-default-500">
                      When you get notifications, they&apos;ll show up here
                    </p>
                  </div>
                </div>
              )}
            </ScrollShadow>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="footer"
            className="p-2"
            textValue="View all notifications"
          >
            <Button
              className="w-full font-medium"
              color="primary"
              variant="flat"
              as={Link}
              href="/notifications"
            >
              View all notifications
            </Button>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
