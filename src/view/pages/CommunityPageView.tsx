"use client";

import CreatePageModal from "@/components/modals/CreatePageModal";
import { MOCK_PAGES } from "@/lib/data/mockData";
import { Button, Card, Input, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import CommunityPageCard from "../../components/pages/CommunityPageCard";

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
          className="w-full rounded-full font-semibold sm:w-auto"
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
                inputWrapper:
                  "bg-default-100 border-none dark:bg-default-50  rounded-full",
              }}
              className="flex-1"
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={filter === "all" ? "solid" : "flat"}
                color={filter === "all" ? "primary" : "default"}
                onPress={() => setFilter("all")}
                className="flex-1 rounded-full sm:flex-none"
              >
                All
              </Button>
              <Button
                size="sm"
                variant={filter === "liked" ? "solid" : "flat"}
                color={filter === "liked" ? "primary" : "default"}
                onPress={() => setFilter("liked")}
                className="flex-1 rounded-full sm:flex-none"
              >
                Liked
              </Button>
              <Button
                size="sm"
                variant={filter === "following" ? "solid" : "flat"}
                color={filter === "following" ? "primary" : "default"}
                onPress={() => setFilter("following")}
                className="flex-1 rounded-full sm:flex-none"
              >
                Following
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          filteredPages.map((page, index) => (
            <CommunityPageCard key={page.id} page={page} />
          ))
        }
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
