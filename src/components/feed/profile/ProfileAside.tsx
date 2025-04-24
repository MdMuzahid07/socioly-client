"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Users2, Bell, ExternalLink, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button, Card, Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ProfileAside() {
  const router = useRouter();

  const handleProfileView = (profileId: string) => {
    router.push(`/profile/${profileId}`);
  };

  return (
    <Card className="relative w-full overflow-hidden rounded-lg text-black">
      {/* Cover Image with Gradient */}
      <section className="relative h-28">
        <Image
          src="https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826"
          alt="Cover"
          className="object-cover"
          fill
          priority
        />

        {/* Online Status */}
        {/* <div
                    className="absolute top-4 right-4"
                >
                    <Chip color="success" variant="dot">
                        Online
                    </Chip>
                </div> */}
      </section>

      {/* Profile Section */}
      <div className="relative px-6 pb-6">
        <motion.div
          className="absolute -top-10 left-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative h-20 w-20 rounded-full shadow-xl ring-4 ring-background ring-blue-700">
            <Image
              src="https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826"
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
              <h2 className="text-lg font-semibold">Md. Muzahid</h2>
              <BadgeCheck className="h-4 w-4" />
            </div>
            <p className="text-muted-foreground text-xs">Software Developer</p>
            <p className="text-muted-foreground/90 mt-2 text-xs font-medium">
              I&apos;d love to change the world, but they won&apos;t give me the source code.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              className="hover:bg-accent cursor-pointer rounded-xl p-2 text-center"
              whileHover={{ y: -2 }}
            >
              <div className="text-lg font-semibold">256</div>
              <div className="text-muted-foreground text-xs">Post</div>
            </motion.div>
            <motion.div
              className="hover:bg-accent cursor-pointer rounded-xl p-2 text-center"
              whileHover={{ y: -2 }}
            >
              <div className="text-lg font-semibold">2.5K</div>
              <div className="text-muted-foreground text-xs">Followers</div>
            </motion.div>
            <motion.div
              className="hover:bg-accent cursor-pointer rounded-xl p-2 text-center"
              whileHover={{ y: -2 }}
            >
              <div className="text-lg font-semibold">365</div>
              <div className="text-muted-foreground text-xs">Following</div>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              // { icon: Home, label: "Feed", indicator: 3 },
              { icon: Users, label: "Connections", indicator: 12 },
              // { icon: Globe, label: "Latest News" },
              // { icon: Calendar, label: "Events", indicator: 1 },
              { icon: Users2, label: "Groups" },
              { icon: Bell, label: "Notifications", indicator: 5 },
              // { icon: Settings, label: "Settings" },
            ]?.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href="#"
                  className="hover:bg-accent group flex items-center justify-between rounded-lg px-3 text-sm transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="text-muted-foreground h-4 w-4 transition-colors group-hover:text-foreground" />
                    {item.label}
                  </span>
                  {item.indicator && (
                    <Chip className="bg-primary/10 text-primary hover:bg-primary/20">
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
            className="group w-full rounded-full bg-blue-700 text-white"
          >
            View Profile
            <ExternalLink className="ml-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
