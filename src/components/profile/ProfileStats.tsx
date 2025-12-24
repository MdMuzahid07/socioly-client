"use client";

import { ProfileStatsProps } from "@/types/profile.types";
import React from "react";

/**
 * ProfileStats Component
 * Displays user statistics (following, followers, posts)
 */
const ProfileStats: React.FC<ProfileStatsProps> = ({
  following,
  followers,
  posts,
  onFollowingClick,
  onFollowersClick,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPostsClick,
}) => {
  const formatNumber = (num: number | string): string => {
    const value = typeof num === "string" ? parseInt(num, 10) : num;
    if (isNaN(value)) return "0";

    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  return (
    <div className="flex gap-6 text-sm">
      <button
        className="group flex items-center gap-1 hover:text-foreground"
        onClick={onFollowingClick}
        type="button"
      >
        <span className="font-bold text-foreground group-hover:text-primary">
          {formatNumber(following)}
        </span>
        <span className="text-default-00">Following</span>
      </button>
      <button
        className="group flex items-center gap-1 hover:text-foreground"
        onClick={onFollowersClick}
        type="button"
      >
        <span className="font-bold text-foreground group-hover:text-primary">
          {formatNumber(followers)}
        </span>
        <span className="text-default-500">Followers</span>
      </button>
      <div className="flex items-center gap-1">
        <span className="font-bold text-foreground">{formatNumber(posts)}</span>
        <span className="text-default-500">Posts</span>
      </div>
    </div>
  );
};

export default React.memo(ProfileStats);
