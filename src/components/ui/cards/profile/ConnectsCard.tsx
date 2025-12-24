"use client";

import { MOCK_CONNECTIONS } from "@/lib/data/mockData";
import { Avatar, Button, Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConnectsCard() {
  const router = useRouter();

  return (
    <Card className="mt-4 rounded-none border-none text-foreground shadow-none">
      <CardBody>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            Connections ({MOCK_CONNECTIONS.length})
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_CONNECTIONS.map((connection, index) => (
            <motion.div
              key={connection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="group flex cursor-pointer items-center gap-3 rounded-lg border border-default-200 p-4 transition-all hover:border-primary hover:bg-default-50"
              onClick={() => router.push(`/profile/${connection.id}`)}
            >
              <div className="relative">
                <Avatar
                  src={connection.avatar}
                  size="lg"
                  className="h-14 w-14 ring-2 ring-default-200 transition-all group-hover:ring-primary"
                />
                {connection.isOnline && (
                  <span className="absolute bottom-0 right-0 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 ring-2 ring-background"></span>
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-foreground">
                  {connection.name}
                </h3>
                <p className="truncate text-xs text-default-500">
                  {connection.role}
                </p>
                {connection.username && (
                  <p className="truncate text-xs text-default-400">
                    {connection.username}
                  </p>
                )}
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <Button
                  size="sm"
                  variant="flat"
                  color="primary"
                  className="flex-shrink-0"
                  startContent={<UserPlus className="h-4 w-4" />}
                  onPress={() => {
                    // Handle connect/message action
                  }}
                >
                  Connect
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
