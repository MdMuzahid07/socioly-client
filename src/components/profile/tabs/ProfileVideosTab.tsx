/**
 * ProfileVideosTab Component
 * Displays user videos in a grid layout
 */

"use client";

import { ProfileVideosTabProps } from "@/types/profile.types";
import React from "react";

const ProfileVideosTab: React.FC<ProfileVideosTabProps> = ({
  videoCount = 6,
}) => {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: videoCount }).map((_, item) => (
        <div
          key={item}
          className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-black shadow-lg"
        >
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/uq5LClqn3cE?controls=0&rel=0"
            title="Nature Short"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProfileVideosTab);
