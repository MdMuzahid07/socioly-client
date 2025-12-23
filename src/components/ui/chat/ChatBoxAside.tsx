"use client";
import { MOCK_CONNECTIONS } from "@/lib/data/mockData";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function ChatBoxAside({ styles }: { styles: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePress = (userId: string) => {
    // Find conversation ID for this user
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const conversationId = Object.entries(MOCK_CONNECTIONS).find(
      ([, user]) => user.id === userId,
    )?.[0];
    router.push(`/messages/${userId}`);
  };

  const isActive = (userId: string) => {
    return pathname === `/messages/${userId}`;
  };

  return (
    <section
      className={`sticky top-16 h-full max-h-screen w-full border-r border-default-200 bg-content1 p-6 drop-shadow-sm ${styles}`}
    >
      <div className="mb-6 border-b border-default-200 pb-4">
        <h2 className="text-lg font-semibold text-foreground">Connections</h2>
        <p className="text-sm text-default-500">
          Your connections on the platform
        </p>
      </div>
      <div className="custom-scrollbar flex max-h-[calc(100vh-12rem)] flex-col space-y-2 overflow-y-auto pr-2">
        {MOCK_CONNECTIONS.map((user, index) => (
          <motion.div
            onClick={() => handlePress(user.id)}
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={`group flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-all hover:bg-default-100 ${
              isActive(user.id) ? "bg-default-100" : ""
            }`}
          >
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src={user.avatar || "https://i.pravatar.cc/150?u=default"}
                alt={user.name}
                fill
                className="rounded-full object-cover ring-2 ring-default-200 transition-all group-hover:ring-primary"
              />
              {user.isOnline && (
                <span className="absolute bottom-0 right-0 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-medium text-foreground">
                {user.name}
              </h3>
              <p className="truncate text-xs text-default-500">{user.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
