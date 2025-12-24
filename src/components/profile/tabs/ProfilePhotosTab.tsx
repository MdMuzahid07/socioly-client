import { ProfilePhotosTabProps } from "@/types/profile.types";
import LightGallery from "lightgallery/react";
import React from "react";

// Import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ProfilePhotosTab: React.FC<ProfilePhotosTabProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-default-500">No photos to display</p>
      </div>
    );
  }

  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
    >
      {images.slice(0, 12).map((img, idx) => (
        <a
          key={idx}
          href={img}
          data-src={img}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
        >
          <img
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      ))}
    </LightGallery>
  );
};

export default React.memo(ProfilePhotosTab);
