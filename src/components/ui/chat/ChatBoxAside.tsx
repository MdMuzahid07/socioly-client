"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { connections } from "../cards/profile/ConnectsCard";

export default function ChatBoxAside({ styles }: { styles: string }) {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePress = (id: any) => {
    router.push(`/chat/${id}`);
  };

  return (
    <section
      className={`sticky top-16 h-full max-h-screen w-full border-r border-default-200 bg-content1 p-6 drop-shadow-sm ${styles}`}
    >
      <div className="mb-10 border-b border-default-200 pb-4">
        <h2 className="text-lg font-semibold text-primary">Connections</h2>
        <p className="text-sm text-default-500">
          Your connections on the platform
        </p>
      </div>
      <div className="custom-scrollbar flex max-h-[70vh] flex-col space-y-6 overflow-y-auto">
        {connections?.map((user) => (
          <motion.div
            onClick={() => handlePress(user?.id)}
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: user.id * 0.1 }}
            className="flex cursor-pointer items-center justify-between"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-8 w-8 rounded-full">
                <Image
                  src="https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"
                  alt={user.name}
                  fill
                  className="rounded-full object-cover"
                />
                <span className="absolute right-0 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600"></span>
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium">{user.name}</h3>
                <p className="text-muted-foreground text-xs">{user.role}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
