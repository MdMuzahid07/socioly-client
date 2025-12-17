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
    logo: "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Global Innovations",
    industry: "Software Development",
    followers: 158900,
    logo: "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Future Finance",
    industry: "Financial Services",
    followers: 89300,
    logo: "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "EcoSmart Systems",
    industry: "Environmental Services",
    followers: 12800,
    logo: "https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid",
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
    <Card className="max-h-[300px] w-full rounded-lg border-none bg-content1 shadow-sm">
      <CardHeader className="flex gap-3 pb-2">
        <Building2 className="h-4 w-4 text-default-500" />
        <p className="text-md font-semibold text-foreground">
          Pages you may follow
        </p>
      </CardHeader>
      <CardBody>
        <div className="custom-scrollbar space-y-4 overflow-y-auto pb-4">
          {fakeData?.map((page, index) => (
            <motion.div
              key={page?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8" src={page.logo} isBordered />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {page.name}
                  </p>
                  <p className="text-xs text-default-500">{page.industry}</p>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-default-400">
                    <Users className="h-3 w-3" />
                    {page.followers.toLocaleString()}
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onPress={() => handleFollow(page?.id)}
                  className={`h-8 w-8 min-w-0 rounded-full ${
                    followPage.includes(page?.id)
                      ? "bg-blue-700 text-white"
                      : "bg-default-100 text-default-500 hover:bg-blue-700 hover:text-white"
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
        </div>
      </CardBody>
    </Card>
  );
}
