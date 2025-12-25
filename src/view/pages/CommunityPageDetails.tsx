"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import WriteReviewModal from "@/components/modals/WriteReviewModal";
import CommunityPageHeader from "@/components/pages/CommunityPageHeader";
import { MOCK_PAGES, MOCK_REVIEWS } from "@/lib/data/mockData";
import { Button, Card, Tab, Tabs, useDisclosure } from "@nextui-org/react";
import { PenLine } from "lucide-react";
import { notFound } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CommunityPageDetails({ pageId }: { pageId: string }) {
  const page = MOCK_PAGES.find((p) => p.id === pageId);
  const [isLiked, setIsLiked] = useState(page?.isLiked || false);
  const [isFollowing, setIsFollowing] = useState(page?.isFollowing || false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  const handleShare = () => {
    toast.success("Share functionality coming soon!");
  };

  return (
    <div className="min-h-screen bg-background">
      <CommunityPageHeader
        page={page}
        isLiked={isLiked}
        isFollowing={isFollowing}
        onLike={handleLike}
        onFollow={handleFollow}
        onShare={handleShare}
      />

      <div className="mx-auto mt-6 max-w-7xl">
        <Tabs
          aria-label="Page Tabs"
          color="primary"
          variant="underlined"
          classNames={{
            base: "w-full",
            tabList:
              "gap-8 w-full relative rounded-none p-0 border-b border-divider bg-content1/50 backdrop-blur-sm",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-4 h-14",
            tabContent:
              "group-data-[selected=true]:text-primary font-semibold text-base",
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
          <Tab key="reviews" title="Reviews">
            <div className="py-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">Community Reviews</h3>
                <Button
                  onPress={onOpen}
                  className="group rounded-full bg-primary font-medium text-white shadow-lg shadow-primary/20"
                >
                  <PenLine className="mr-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
                  Write a Review
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {MOCK_REVIEWS.map((review, i) => (
                  <ReviewCard
                    key={i}
                    name={review.name}
                    username={review.username}
                    rating={review.rating}
                    review={review.review}
                    date={review.date}
                    image={review.image}
                  />
                ))}
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>

      <WriteReviewModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        pageName={page?.name || "Page"}
      />
    </div>
  );
}
