"use client";

import { Button, Card, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BadgeCheck, Bell, ExternalLink, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileAside() {
  const router = useRouter();

  const handleProfileView = (profileId: string) => {
    router.push(`/profile/${profileId}`);
  };

  return (
    <Card className="relative w-full overflow-hidden rounded-lg bg-content1 text-foreground">
      {/* Cover Image with Gradient */}
      <section className="relative h-28 bg-gradient-to-r from-blue-700 to-indigo-700">
        <Image
          src="https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826"
          alt="Cover"
          className="object-cover opacity-90"
          fill
          priority
        />
      </section>

      {/* Profile Section */}
      <div className="relative px-6 pb-6">
        <motion.div
          className="absolute -top-10 left-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative h-20 w-20 rounded-full bg-content1 shadow-xl ring-4 ring-background">
            <Image
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="Profile"
              className="rounded-full object-cover"
              fill
              priority
            />
          </div>
        </motion.div>

        <div className="mt-14 space-y-6">
          {/* User Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground">
                Md. Muzahid
              </h2>
              <BadgeCheck className="h-4 w-4 text-blue-500" />
            </div>
            <p className="text-xs text-default-500">Software Developer</p>
            <p className="mt-2 text-xs font-medium text-default-500/90">
              I&apos;d love to change the world, but they won&apos;t give me the
              source code.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              className="cursor-pointer rounded-xl p-2 text-center transition-colors hover:bg-default-100"
              whileHover={{ y: -2 }}
            >
              <div className="text-lg font-semibold text-foreground">256</div>
              <div className="text-xs text-default-500">Post</div>
            </motion.div>
            <motion.div
              className="cursor-pointer rounded-xl p-2 text-center transition-colors hover:bg-default-100"
              whileHover={{ y: -2 }}
            >
              <div className="text-lg font-semibold text-foreground">2.5K</div>
              <div className="text-xs text-default-500">Followers</div>
            </motion.div>
            <motion.div
              className="cursor-pointer rounded-xl p-2 text-center transition-colors hover:bg-default-100"
              whileHover={{ y: -2 }}
            >
              <div className="text-lg font-semibold text-foreground">365</div>
              <div className="text-xs text-default-500">Following</div>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { icon: Users2, label: "Groups" },
              { icon: Bell, label: "Notifications", indicator: 5 },
            ]?.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href="#"
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-default-100"
                >
                  <span className="flex items-center gap-3 text-default-600 group-hover:text-foreground">
                    <item.icon className="h-4 w-4 text-default-400 transition-colors group-hover:text-foreground" />
                    {item.label}
                  </span>
                  {item.indicator && (
                    <Chip
                      size="sm"
                      variant="flat"
                      color="primary"
                      className="h-5 text-xs"
                    >
                      {item.indicator}
                    </Chip>
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* View Profile Button */}
          <Button
            onPress={() => handleProfileView("8745")}
            className="group w-full rounded-full bg-blue-700 font-medium text-white shadow-lg shadow-blue-500/20"
          >
            View Profile
            <ExternalLink className="ml-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
