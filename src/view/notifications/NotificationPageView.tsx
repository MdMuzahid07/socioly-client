"use client";

import NotificationCard from "@/components/ui/common/navbar/NotificationCard";
import { MOCK_NOTIFICATIONS } from "@/lib/data/mockData";
import { Button, Card, Chip, Tab, Tabs } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { useState } from "react";

export default function NotificationPageView() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNotifications = MOCK_NOTIFICATIONS.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    return true;
  });

  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section - Fixed/Sticky */}
      <div className="bg-background/80 sticky top-0 z-10 border-b border-divider backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Notifications
              </h1>
              <p className="mt-0.5 text-sm text-default-500">
                Stay updated with your latest interactions
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="flat"
                startContent={<CheckCheck size={16} />}
                className="hidden font-medium sm:flex"
              >
                Mark all read
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4">
            <Tabs
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(key as string)}
              variant="underlined"
              classNames={{
                base: "w-full",
                tabList: "gap-8 w-full p-0",
                cursor: "w-full bg-primary",
                tab: "h-10 px-0",
                tabContent:
                  "group-data-[selected=true]:text-primary font-semibold text-default-600",
              }}
            >
              <Tab
                key="all"
                title={
                  <div className="flex items-center gap-2">
                    <span>All</span>
                    <Chip
                      size="sm"
                      variant="flat"
                      className="h-5 min-w-5 bg-default-100 px-1.5 text-xs font-semibold"
                    >
                      {MOCK_NOTIFICATIONS.length}
                    </Chip>
                  </div>
                }
              />
              <Tab
                key="unread"
                title={
                  <div className="flex items-center gap-2">
                    <span>Unread</span>
                    {unreadCount > 0 && (
                      <Chip
                        size="sm"
                        color="primary"
                        variant="solid"
                        className="h-5 min-w-5 px-1.5 text-xs font-semibold"
                      >
                        {unreadCount}
                      </Chip>
                    )}
                  </div>
                }
              />
            </Tabs>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {filteredNotifications.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-small border-divider bg-content1 shadow-sm">
                <div className="divide-y divide-divider">
                  {filteredNotifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <NotificationCard notification={notification} />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-small border-divider bg-content1 shadow-sm">
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <CheckCheck className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {activeTab === "unread"
                      ? "You're all caught up!"
                      : "No notifications yet"}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-default-500">
                    {activeTab === "unread"
                      ? "You've read all your notifications. Check back later for new updates."
                      : "When someone interacts with your content, you'll see it here."}
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
