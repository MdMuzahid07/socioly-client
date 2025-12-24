/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Plus, UserRoundCheck, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ISuggestProfiles {
  id: number;
  name: string;
  role: string;
  image: string;
}

const fakeData: ISuggestProfiles[] = [
  {
    id: 1,
    name: "Frances Guerrero",
    role: "News anchor",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826",
  },
  {
    id: 2,
    name: "Lori Ferguson",
    role: "Web Developer",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826",
  },
  {
    id: 3,
    name: "Samuel Bishop",
    role: "News anchor",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826",
  },
  {
    id: 4,
    name: "Dennis Barrett",
    role: "Web Developer at Company",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826",
  },
  {
    id: 5,
    name: "Judy Nguyen",
    role: "News anchor",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826",
  },
];

export default function YouMayLikeToConnect() {
  const [followedProfiles, setFollowedProfiles] = useState<number[]>([]);

  const handleFollow = (id: number) => {
    setFollowedProfiles((prev) =>
      prev.includes(id)
        ? prev.filter((profileId) => profileId !== id)
        : [...prev, id],
    );
  };

  return (
    <Card className="relative h-full max-h-[400px] w-full bg-content1 text-foreground">
      <CardHeader className="border-b border-divider/10 pb-4 pt-4">
        <div className="flex items-center gap-3 text-lg font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Users className="h-4 w-4" />
          </div>
          You may follow
        </div>
      </CardHeader>
      <CardBody className="custom-scrollbar space-y-4 overflow-y-auto p-4">
        {fakeData?.map((profile: any) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: profile.id * 0.1 }}
            className="group flex items-center justify-between rounded-xl p-2 transition-colors hover:bg-default-100/30"
          >
            <motion.div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-background transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {profile.name}
                </h3>
                <p className="line-clamp-1 text-xs text-default-500">
                  {profile.role}
                </p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onPress={() => handleFollow(profile.id)}
                className={`h-8 w-8 min-w-0 rounded-full transition-all duration-300 ${
                  followedProfiles.includes(profile.id)
                    ? "bg-primary text-white shadow-lg shadow-primary/40"
                    : "bg-default-100 text-default-500 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/40"
                }`}
                size="sm"
                isIconOnly
                aria-label="Follow"
              >
                {followedProfiles.includes(profile.id) ? (
                  <UserRoundCheck className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </CardBody>
      <section className="border-t border-divider/10 p-2">
        <button className="w-full rounded-lg bg-default-50/50 py-2.5 text-small font-medium text-default-600 transition-all hover:bg-default-100 hover:text-primary active:scale-[0.98]">
          View more suggestions
        </button>
      </section>
    </Card>
  );
}
