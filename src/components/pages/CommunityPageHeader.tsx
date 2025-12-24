"use client";

import { Avatar, Button, Card } from "@nextui-org/react";
import { CheckCircle2, Heart, Share2, UserPlus } from "lucide-react";
import React from "react";

// Define the Page interface locally or import it if it's shared
// For now mirroring the structure from CommunityPageDetails to avoid import issues until I refactor types
interface Page {
  id: string;
  name: string;
  category: string;
  description: string;
  coverImage: string;
  profileImage: string;
  likes: number;
  followers: number;
  posts: number;
  isLiked?: boolean;
  isFollowing?: boolean;
}

interface CommunityPageHeaderProps {
  page: Page;
  isLiked: boolean;
  isFollowing: boolean;
  onLike: () => void;
  onFollow: () => void;
  onShare?: () => void;
}

function CommunityPageHeader({
  page,
  isLiked,
  isFollowing,
  onLike,
  onFollow,
  onShare,
}: CommunityPageHeaderProps) {
  return (
    <div className="relative w-full">
      {/* Cover Image Section */}
      <div className="relative z-0 h-[100px] w-full overflow-hidden rounded-t-xl sm:h-[150px]">
        {/* Gradient Overlay similar to ProfileHeader */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />

        <img
          src={page.coverImage}
          alt={page.name}
          className="absolute inset-0 z-10 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative">
        <Card className="premium-shadow relative z-30 overflow-visible rounded-b-xl rounded-t-none border-small border-divider bg-content1 p-4 sm:p-6">
          <div className="relative">
            <div className="relative inline-block -translate-y-1/2">
              <div className="rounded-full border-2 border-content1 bg-content1 p-1.5 ring-4 ring-content1">
                <Avatar
                  src={page.profileImage}
                  className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
                  isBordered
                  color="primary"
                />
              </div>

              {/* Online/Status Indicator (Optional, mirroring ProfileHeader) */}
              <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full bg-green-500 ring-2 ring-content1 sm:h-4 sm:w-4 md:bottom-3 md:right-3" />
            </div>
          </div>

          <div className="-mt-5 flex flex-col gap-4 sm:-mt-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div className="max-w-4xl flex-1">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                      {page.name}
                    </h1>
                    <CheckCircle2 className="h-5 w-5 fill-primary/20 text-primary md:h-6 md:w-6" />
                  </div>

                  {/* Actions */}
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
                      onPress={onLike}
                      className="flex-1 rounded-full sm:flex-none"
                      size="sm"
                    >
                      {isLiked ? "Liked" : "Like"}
                    </Button>
                    <Button
                      color={isFollowing ? "default" : "primary"}
                      variant={isFollowing ? "flat" : "solid"}
                      startContent={<UserPlus size={18} />}
                      onPress={onFollow}
                      className="flex-1 rounded-full sm:flex-none"
                      size="sm"
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                    <Button
                      isIconOnly
                      variant="flat"
                      onPress={onShare}
                      className="rounded-full sm:flex-none"
                      size="sm"
                    >
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>

                <div className="mt-1">
                  <div className="flex min-w-0 items-center gap-2 md:gap-3">
                    <span className="flex-shrink-0 font-medium text-default-500">
                      {page.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed text-default-600">
              {page.description}
            </p>

            <div className="h-px w-full bg-divider" />

            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-sm sm:gap-6">
              <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                <span className="text-lg font-bold text-foreground">
                  {(page.likes / 1000).toFixed(1)}K
                </span>
                <span className="text-sm text-default-500">Likes</span>
              </div>
              <div className="h-10 w-px bg-divider" />
              <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                <span className="text-lg font-bold text-foreground">
                  {(page.followers / 1000).toFixed(1)}K
                </span>
                <span className="text-sm text-default-500">Followers</span>
              </div>
              <div className="h-10 w-px bg-divider" />
              <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                <span className="text-lg font-bold text-foreground">
                  {page.posts}
                </span>
                <span className="text-sm text-default-500">Posts</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default React.memo(CommunityPageHeader);
