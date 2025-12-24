"use client";

import { MOCK_PAGES } from "@/lib/data/mockData";
import { Avatar, Button, Card, Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Heart, Share2, UserPlus } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CommunityPageDetails({ pageId }: { pageId: string }) {
  const page = MOCK_PAGES.find((p) => p.id === pageId);
  const [isLiked, setIsLiked] = useState(page?.isLiked || false);
  const [isFollowing, setIsFollowing] = useState(page?.isFollowing || false);

  if (!page) {
    notFound();
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Removed from liked pages" : "Page liked!");
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? "Unfollowed page" : "Following page!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[150px] w-full overflow-hidden rounded-t-xl sm:h-[200px]">
        <Image
          src={page.coverImage}
          alt={page.name}
          fill={true}
          className="h-[100px] w-full object-cover sm:min-h-[150px]"
          sizes="(max-width: 640px) 100vw, 640px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Card className="premium-shadow relative -mt-12 overflow-visible rounded-none rounded-b-xl border-small border-divider bg-content1 p-4 sm:-mt-16 sm:p-6 md:-mt-20">
          <div className="">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="-mt-12 sm:-mt-16 md:-mt-20"
            >
              <Avatar
                src={page.profileImage}
                className="h-20 w-20 border-4 border-content1 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
                isBordered
                color="primary"
              />
            </motion.div>

            <div className="mt-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-xl font-bold text-foreground sm:text-3xl">
                    {page.name}
                  </h1>
                  <p className="mt-1 text-sm text-default-500 sm:text-base">
                    {page.category}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    color={isLiked ? "danger" : "default"}
                    variant={isLiked ? "solid" : "bordered"}
                    startContent={
                      <Heart
                        size={18}
                        className={isLiked ? "fill-current" : ""}
                      />
                    }
                    onPress={handleLike}
                    className="flex-1 sm:flex-none"
                    size="sm"
                  >
                    {isLiked ? "Liked" : "Like"}
                  </Button>
                  <Button
                    color={isFollowing ? "default" : "primary"}
                    variant={isFollowing ? "flat" : "solid"}
                    startContent={<UserPlus size={18} />}
                    onPress={handleFollow}
                    className="flex-1 sm:flex-none"
                    size="sm"
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button
                    isIconOnly
                    variant="flat"
                    className="sm:flex-none"
                    size="sm"
                  >
                    <Share2 size={20} />
                  </Button>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-default-600 sm:text-base">
                {page.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm sm:gap-6">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground">
                    {(page.likes / 1000).toFixed(1)}K
                  </span>
                  <span className="text-default-500">Likes</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground">
                    {(page.followers / 1000).toFixed(1)}K
                  </span>
                  <span className="text-default-500">Followers</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground">
                    {page.posts}
                  </span>
                  <span className="text-default-500">Posts</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-6">
          <Tabs
            aria-label="Page Tabs"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider bg-content1/50 backdrop-blur-sm",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent:
                "group-data-[selected=true]:text-primary font-semibold",
            }}
          >
            <Tab key="posts" title="Posts">
              <div className="py-6">
                <Card className="border-small border-divider bg-content1 p-8">
                  <p className="text-center text-default-500">No posts yet</p>
                </Card>
              </div>
            </Tab>
            <Tab key="about" title="About">
              <div className="py-6">
                <Card className="border-small border-divider bg-content1 p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    About {page.name}
                  </h3>
                  <p className="leading-relaxed text-default-600">
                    {page.description}
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-default-500">
                    <p>
                      <span className="font-semibold">Category:</span>{" "}
                      {page.category}
                    </p>
                    <p>
                      <span className="font-semibold">Created:</span>{" "}
                      {new Date(page.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
