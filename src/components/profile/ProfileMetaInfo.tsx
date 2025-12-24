/**
 * ProfileMetaInfo Component
 * Displays user metadata (location, join date, website)
 */

"use client";

import { ProfileMetaInfoProps } from "@/types/profile.types";
import { Calendar, LinkIcon, MapPin } from "lucide-react";
import React from "react";

const ProfileMetaInfo: React.FC<ProfileMetaInfoProps> = ({
  location,
  joined,
  website,
}) => {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-default-500">
      {location && (
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      )}
      {joined && (
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>Joined {joined}</span>
        </div>
      )}
      {website && (
        <div className="flex items-center gap-2">
          <LinkIcon size={16} />
          <a
            href={website.startsWith("http") ? website : `https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-all hover:underline"
          >
            {website.replace(/^https?:\/\//, "")}
          </a>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProfileMetaInfo);
