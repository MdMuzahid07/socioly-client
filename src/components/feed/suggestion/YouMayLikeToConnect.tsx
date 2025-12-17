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
    <Card className="relative h-full max-h-[350px] rounded-lg border-none bg-content1 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Users className="h-4 w-4" />
          You may follow
        </div>
      </CardHeader>
      <CardBody className="space-y-3">
        {fakeData?.map((profile: any) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: profile.id * 0.1 }}
            className="flex items-center justify-between"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-default-100">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {profile.name}
                </h3>
                <p className="text-xs text-default-500">{profile.role}</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onPress={() => handleFollow(profile.id)}
                className={`h-8 w-8 min-w-0 rounded-full ${
                  followedProfiles.includes(profile.id)
                    ? "bg-blue-700 text-white"
                    : "bg-default-100 text-default-500 hover:bg-blue-700 hover:text-white"
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
        <section className="absolute bottom-0 left-0 right-0 w-full border-t border-divider">
          <button className="w-full bg-default-50 py-2 text-small font-medium text-default-600 transition-colors hover:bg-default-100">
            View more
          </button>
        </section>
      </CardBody>
    </Card>
  );
}
