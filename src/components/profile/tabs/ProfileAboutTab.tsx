/**
 * ProfileAboutTab Component
 * Displays user bio and interests
 */

"use client";

import { ProfileAboutTabProps } from "@/types/profile.types";
import { Card, Chip } from "@nextui-org/react";
import React from "react";

const ProfileAboutTab: React.FC<ProfileAboutTabProps> = ({ user }) => {
  const interests = [
    "Photography",
    "Hiking",
    "Coding",
    "React",
    "Travel",
    "Nature",
    "Ocean",
  ];

  return (
    <div className="py-8">
      <Card className="mb-8 border-small border-divider bg-content1 p-6">
        <h3 className="mb-4 text-xl font-bold">About {user.name}</h3>
        <div className="space-y-4 text-default-600">
          <p className="leading-relaxed">
            Passionate nature lover and software engineer. I spend my days
            coding complex applications and my weekends exploring the great
            outdoors. Believer in clean code and cleaner oceans.
          </p>
          <p className="italic leading-relaxed">
            &quot;Look deep into nature, and then you will understand everything
            better.&quot; - Albert Einstein
          </p>
        </div>
      </Card>

      <Card className="border-small border-divider bg-content1 p-6">
        <h4 className="mb-4 text-lg font-semibold">Interests</h4>
        <div className="flex flex-wrap gap-2">
          {interests.map((tag) => (
            <Chip
              key={tag}
              variant="flat"
              color="primary"
              size="md"
              className="font-medium"
            >
              {tag}
            </Chip>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default React.memo(ProfileAboutTab);
