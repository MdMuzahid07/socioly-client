"use client";

import NotificationCard from "@/components/ui/common/navbar/NotificationCard";
import { MOCK_NOTIFICATIONS } from "@/lib/data/mockData";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { CheckCheck, Filter } from "lucide-react";
import { useState } from "react";

export default function NotificationPageView() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNotifications = MOCK_NOTIFICATIONS.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    return true;
  });

  return (
    <div className="flex w-full flex-col gap-6 p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Notifications
          </h1>
          <p className="mt-1 text-sm text-default-500">
            Stay updated with your latest interactions and alerts.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            startContent={<CheckCheck size={18} />}
            className="font-medium text-default-600 hover:text-primary"
          >
            Mark all as read
          </Button>
          <Button
            isIconOnly
            variant="flat"
            className="bg-default-100 text-default-600"
          >
            <Filter size={20} />
          </Button>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="flex flex-col gap-6">
        <Tabs
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
          variant="light"
          classNames={{
            tabList:
              "gap-4 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-primary font-medium",
          }}
          aria-label="Notification filters"
        >
          <Tab key="all" title="All Notifications" />
          <Tab key="unread" title="Unread" />
        </Tabs>

        <Card className="bg-background/60 border-none shadow-none backdrop-blur-lg">
          <CardBody className="p-0">
            {filteredNotifications.length > 0 ? (
              <div className="flex flex-col gap-2">
                {/* @ts-ignore */}
                {filteredNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-default-100/50">
                  <CheckCheck className="h-12 w-12 text-default-300" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  All caught up!
                </h3>
                <p className="text-default-500">
                  You have no {activeTab === "unread" ? "unread" : "new"}{" "}
                  notifications.
                </p>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
