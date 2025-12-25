/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Building2, Check, Plus, Users } from "lucide-react";
import { useState } from "react";

interface SuggestedPage {
  id: number;
  name: string;
  industry: string;
  followers: number;
  logo: string;
}

const fakeData: SuggestedPage[] = [
  {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Information Technology",
    followers: 25420,
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Global Innovations",
    industry: "Software Development",
    followers: 158900,
    logo: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Future Finance",
    industry: "Financial Services",
    followers: 89300,
    logo: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "EcoSmart Systems",
    industry: "Environmental Services",
    followers: 12800,
    logo: "https://plus.unsplash.com/premium_photo-1680085770875-881edf31094e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function SuggestPages() {
  const [followPage, setFollowPage] = useState<number[]>([]);

  const handleFollow = (id: number) => {
    setFollowPage((prev) =>
      prev.includes(id)
        ? prev.filter((profileId: any) => profileId !== id)
        : [...prev, id],
    );
  };

  return (
    <Card className="relative w-full rounded-xl bg-content1 text-foreground">
      <CardHeader className="border-b border-divider/10 pb-4 pt-4">
        <div className="flex items-center gap-3 text-lg font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Building2 className="h-4 w-4" />
          </div>
          Pages you may follow
        </div>
      </CardHeader>
      <CardBody className="custom-scrollbar max-h-[35vh] space-y-4 overflow-y-auto p-4 pb-4">
        {fakeData?.map((page, index) => (
          <motion.div
            key={page?.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative flex items-center justify-between rounded-full p-2 transition-colors hover:bg-default-100/30"
          >
            <div className="flex items-center gap-3">
              <Avatar
                className="h-10 w-10 ring-2 ring-background transition-transform duration-300 group-hover:scale-105"
                src={page.logo}
                isBordered
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {page.name}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-default-500">{page.industry}</p>
                </div>
                <div className="mt-1 flex items-center gap-1 text-xs text-primary/80">
                  <Users className="h-3 w-3" />
                  {page.followers.toLocaleString()}
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10"
            >
              <Button
                onPress={() => handleFollow(page?.id)}
                className={`h-8 w-8 min-w-0 rounded-full transition-all duration-300 ${
                  followPage.includes(page?.id)
                    ? "bg-primary text-white shadow-lg shadow-primary/40"
                    : "bg-default-100 text-default-500 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/40"
                }`}
                size="sm"
                isIconOnly
                aria-label="Follow"
              >
                {followPage.includes(page?.id) ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </CardBody>
    </Card>
  );
}
