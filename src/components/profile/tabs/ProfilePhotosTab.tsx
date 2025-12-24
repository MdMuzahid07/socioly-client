/**
 * ProfilePhotosTab Component
 * Displays user photos in a grid layout
 */

"use client";

import { ProfilePhotosTabProps } from "@/types/profile.types";
import React, { useState } from "react";

const ProfilePhotosTab: React.FC<ProfilePhotosTabProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-default-500">No photos to display</p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.slice(0, 12).map((img, idx) => (
        <div
          key={idx}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
          onClick={() => setSelectedImage(img)}
        >
          <img
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProfilePhotosTab);
