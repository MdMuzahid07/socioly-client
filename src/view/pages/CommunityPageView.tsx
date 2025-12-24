"use client";

import CreatePageModal from "@/components/modals/CreatePageModal";
import { MOCK_PAGES } from "@/lib/data/mockData";
import { Avatar, Button, Card, Input, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Heart, Plus, Search, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CommunityPageView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "liked" | "following">("all");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const filteredPages = MOCK_PAGES?.filter((page) => {
    const matchesSearch =
      searchQuery === "" ||
      page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "liked" && page.isLiked) ||
      (filter === "following" && page.isFollowing);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Pages
          </h1>
          <p className="mt-1 text-sm text-default-500 sm:text-base">
            Discover and follow pages you love
          </p>
        </div>
        <Button
          color="primary"
          startContent={<Plus size={18} />}
          className="w-full font-semibold sm:w-auto"
          onPress={onOpen}
        >
          Create Page
        </Button>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-small border-divider bg-content1 p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Input
              placeholder="Search pages..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              startContent={<Search className="text-default-400" size={18} />}
              classNames={{
                inputWrapper: "bg-default-100 border-none dark:bg-default-50",
              }}
              className="flex-1"
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={filter === "all" ? "solid" : "flat"}
                color={filter === "all" ? "primary" : "default"}
                onPress={() => setFilter("all")}
                className="flex-1 sm:flex-none"
              >
                All
              </Button>
              <Button
                size="sm"
                variant={filter === "liked" ? "solid" : "flat"}
                color={filter === "liked" ? "primary" : "default"}
                onPress={() => setFilter("liked")}
                className="flex-1 sm:flex-none"
              >
                Liked
              </Button>
              <Button
                size="sm"
                variant={filter === "following" ? "solid" : "flat"}
                color={filter === "following" ? "primary" : "default"}
                onPress={() => setFilter("following")}
                className="flex-1 sm:flex-none"
              >
                Following
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        {filteredPages.map((page, index) => (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Link href={`/pages/${page.id}`}>
              <Card className="group overflow-hidden border-small border-divider bg-content1 transition-all hover:border-primary hover:shadow-lg">
                {/* Cover Image */}
                <div className="relative h-32 w-full overflow-hidden sm:h-40">
                  <img
                    src={page.coverImage}
                    alt={page.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Profile Image */}
                  <div className="-mt-12 mb-3">
                    <Avatar
                      src={page.profileImage}
                      className="h-16 w-16 border-4 border-content1 sm:h-20 sm:w-20"
                      isBordered
                    />
                  </div>

                  {/* Page Info */}
                  <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary">
                    {page.name}
                  </h3>
                  <p className="mb-2 text-xs text-default-500 sm:text-sm">
                    {page.category}
                  </p>
                  <p className="mb-4 line-clamp-2 text-sm text-default-600">
                    {page.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-default-500 sm:text-sm">
                    <div className="flex items-center gap-1">
                      <Heart
                        size={16}
                        className={
                          page.isLiked ? "fill-danger text-danger" : ""
                        }
                      />
                      <span>{(page.likes / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{(page.followers / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPages.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex min-h-[400px] flex-col items-center justify-center"
        >
          <div className="rounded-full bg-default-100 p-6">
            <Search className="h-12 w-12 text-default-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">No pages found</h3>
          <p className="mt-2 text-sm text-default-500">
            Try adjusting your search or filters
          </p>
        </motion.div>
      )}

      {/* Create Page Modal */}
      <CreatePageModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
