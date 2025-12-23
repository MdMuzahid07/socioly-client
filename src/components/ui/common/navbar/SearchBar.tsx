"use client";

import { MOCK_POSTS, MOCK_USERS } from "@/lib/data/mockData";
import { Post, User } from "@/types";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  MessageCircle,
  Search,
  TrendingUp,
  UserPlus,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SearchBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("people");
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save recent searches
  const saveRecentSearch = (query: string) => {
    if (!query.trim()) return;
    const updated = [query, ...recentSearches.filter((s) => s !== query)].slice(
      0,
      5,
    );
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  // Simulate search delay
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    }
    setIsSearching(false);
    return undefined;
  }, [searchQuery]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Search users
  const searchUsers = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return Object.values(MOCK_USERS).filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.handle?.toLowerCase().includes(query) ||
        user.bio?.toLowerCase().includes(query) ||
        user.work?.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  // Search posts
  const searchPosts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return MOCK_POSTS.filter(
      (post) =>
        post.content.toLowerCase().includes(query) ||
        post.user.name.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleUserClick = (userId: string, userName: string) => {
    saveRecentSearch(userName);
    router.push(`/profile/${userId}`);
    onOpenChange();
  };

  const handlePostClick = (postId: string) => {
    // Navigate to post or open post modal
    router.push(`/post/${postId}`);
    onOpenChange();
  };

  const handleRecentSearchClick = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const hasResults = searchUsers.length > 0 || searchPosts.length > 0;
  const showRecentSearches = !searchQuery.trim() && recentSearches.length > 0;

  return (
    <>
      <button
        onClick={onOpen}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-default-100 transition-colors hover:bg-default-200 sm:h-9 sm:w-9"
        aria-label="Search"
      >
        <Search className="h-4 w-4 text-default-600 sm:h-5 sm:w-5" />
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        hideCloseButton
        isDismissable={true}
        isKeyboardDismissDisabled={false}
        backdrop="blur"
        classNames={{
          base: "max-w-2xl",
          body: "p-0",
        }}
      >
        <ModalContent>
          <div className="flex flex-col">
            {/* Header with Search Input */}
            <ModalHeader className="flex items-center gap-2 border-b border-divider bg-content1 px-4 py-3">
              <div className="relative flex-1">
                <Input
                  ref={inputRef}
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                  placeholder="Search people, posts, and more..."
                  size="lg"
                  radius="full"
                  startContent={<Search className="h-5 w-5 text-default-400" />}
                  endContent={
                    searchQuery && (
                      <button
                        onClick={clearSearch}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-default-200 text-default-500 hover:bg-default-300"
                        aria-label="Clear search"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    )
                  }
                  classNames={{
                    inputWrapper:
                      "bg-default-100 hover:bg-default-200 transition-colors",
                    input: "text-base",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      onOpenChange();
                    }
                  }}
                />
              </div>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onPress={onOpenChange}
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </Button>
            </ModalHeader>

            {/* Tabs */}
            {searchQuery.trim() && (
              <div className="border-b border-divider bg-content1 px-4">
                <Tabs
                  selectedKey={activeTab}
                  onSelectionChange={(key) => setActiveTab(key as string)}
                  variant="underlined"
                  classNames={{
                    tabList: "gap-6",
                    cursor: "w-full bg-primary",
                    tab: "px-0 h-12",
                  }}
                >
                  <Tab
                    key="people"
                    title={
                      <div className="flex items-center gap-2">
                        <span>People</span>
                        {searchUsers.length > 0 && (
                          <span className="rounded-full bg-default-200 px-2 py-0.5 text-xs">
                            {searchUsers.length}
                          </span>
                        )}
                      </div>
                    }
                  />
                  <Tab
                    key="posts"
                    title={
                      <div className="flex items-center gap-2">
                        <span>Posts</span>
                        {searchPosts.length > 0 && (
                          <span className="rounded-full bg-default-200 px-2 py-0.5 text-xs">
                            {searchPosts.length}
                          </span>
                        )}
                      </div>
                    }
                  />
                </Tabs>
              </div>
            )}

            {/* Results Body */}
            <ModalBody className="max-h-[60vh] overflow-y-auto p-0">
              {isSearching ? (
                <div className="flex items-center justify-center py-12">
                  <Spinner size="lg" />
                </div>
              ) : showRecentSearches ? (
                <div className="p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-default-400" />
                    <h3 className="text-sm font-semibold text-default-600">
                      Recent Searches
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearchClick(search)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-default-100"
                      >
                        <Clock className="h-4 w-4 text-default-400" />
                        <span className="text-sm text-default-700">
                          {search}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchQuery.trim() && !hasResults ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="rounded-full bg-default-100 p-4">
                    <Search className="h-8 w-8 text-default-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    No results found
                  </h3>
                  <p className="mt-2 text-sm text-default-500">
                    Try searching for something else
                  </p>
                </div>
              ) : searchQuery.trim() && hasResults ? (
                <div className="p-4">
                  <AnimatePresence mode="wait">
                    {activeTab === "people" && (
                      <motion.div
                        key="people"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-2"
                      >
                        {searchUsers.map((user) => (
                          <UserResultCard
                            key={user.id}
                            user={user}
                            onClick={() => handleUserClick(user.id, user.name)}
                          />
                        ))}
                      </motion.div>
                    )}
                    {activeTab === "posts" && (
                      <motion.div
                        key="posts"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        {searchPosts.map((post) => (
                          <PostResultCard
                            key={post.id}
                            post={post}
                            onClick={() => handlePostClick(post.id)}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-default-400" />
                    <h3 className="text-sm font-semibold text-default-600">
                      Trending Searches
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {["React", "Next.js", "TypeScript", "Web Development"].map(
                      (trend, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchQuery(trend)}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-default-100"
                        >
                          <TrendingUp className="h-4 w-4 text-default-400" />
                          <span className="text-sm text-default-700">
                            {trend}
                          </span>
                        </button>
                      ),
                    )}
                  </div>
                </div>
              )}
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

// User Result Card Component
function UserResultCard({
  user,
  onClick,
}: {
  user: User;
  onClick: () => void;
}) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Card
      className="cursor-pointer border border-default-200 transition-all hover:border-primary hover:shadow-md"
      onClick={onClick}
    >
      <CardBody className="p-4">
        <div className="flex items-center gap-4">
          <Avatar
            src={user.avatar}
            size="lg"
            className="h-12 w-12 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-base font-semibold text-foreground">
                {user.name}
              </h4>
            </div>
            <p className="text-sm text-default-500">{user.handle}</p>
            {user.work && (
              <p className="mt-1 text-xs text-default-400">{user.work}</p>
            )}
            <div className="mt-2 flex items-center gap-4 text-xs text-default-500">
              {user.followers && <span>{user.followers} followers</span>}
              {user.following && <span>{user.following} following</span>}
            </div>
          </div>
          <div
            className="flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              size="sm"
              variant={isFollowing ? "flat" : "solid"}
              color={isFollowing ? "default" : "primary"}
              radius="full"
              onPress={() => setIsFollowing(!isFollowing)}
              startContent={!isFollowing && <UserPlus className="h-4 w-4" />}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              radius="full"
              onPress={() => {
                // Handle message
              }}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

// Post Result Card Component
function PostResultCard({
  post,
  onClick,
}: {
  post: Post;
  onClick: () => void;
}) {
  return (
    <Card
      className="cursor-pointer border border-default-200 transition-all hover:border-primary hover:shadow-md"
      onClick={onClick}
    >
      <CardBody className="p-4">
        <div className="flex items-start gap-3">
          <Avatar src={post.user.avatar} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">
                {post.user.name}
              </span>
              <span className="text-xs text-default-500">
                {post.timeAgo || "Recently"}
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-default-700">
              {post.content}
            </p>
            {post.images && post.images.length > 0 && (
              <div className="mt-2 flex gap-2">
                {post.images.slice(0, 2).map((img, idx) => (
                  <div
                    key={idx}
                    className="h-16 w-16 overflow-hidden rounded-lg bg-default-100"
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="mt-2 flex items-center gap-4 text-xs text-default-500">
              <span>{post.likesCount} likes</span>
              <span>{post.commentsCount} comments</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
