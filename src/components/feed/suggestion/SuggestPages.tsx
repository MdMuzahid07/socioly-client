/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, Avatar, Button } from "@nextui-org/react";
import { Building2, Users, Plus, Check } from "lucide-react";

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
      prev.includes(id) ? prev.filter((profileId: any) => profileId !== id) : [...prev, id]
    );
  };

  return (
    <Card className="max-h-[300px] w-full rounded-lg text-black">
      <CardHeader className="flex gap-3">
        <Building2 className="h-4 w-4" />
        <p className="text-md font-semibold">Pages you may follow</p>
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
                <Avatar className="h-8 w-8" src={page.logo} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm">{page.name}</p>
                  <p className="text-xs">{page.industry}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="h-3 w-3" />
                    {page.followers}
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute right-3 top-3"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onPress={() => handleFollow(page?.id)}
                  className={`rounded-full bg-white hover:border hover:bg-blue-700 ${followPage.includes(page?.id) ? "bg-blue-700 text-white" : ""}`}
                  size="sm"
                  isIconOnly
                  aria-label="Like"
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
