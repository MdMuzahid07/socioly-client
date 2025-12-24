"use client";

import ProfileActions from "@/components/profile/ProfileActions";
import ProfileMetaInfo from "@/components/profile/ProfileMetaInfo";
import ProfileStats from "@/components/profile/ProfileStats";
import type { User } from "@/types";
import { Avatar, Card } from "@nextui-org/react";
import { CheckCircle2 } from "lucide-react";
import React from "react";

type Props = {
  user: User;
  isFollowing: boolean;
  onEdit: () => void;
  onToggleFollow: () => void;
  onMessage: () => void;
};

function ProfileHeader({
  user,
  isFollowing,
  onEdit,
  onToggleFollow,
  onMessage,
}: Props) {
  return (
    <div className="relative w-full">
      <div className="relative z-0 h-[100px] w-full overflow-hidden rounded-t-xl sm:h-[150px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />

        <img
          src={user.cover}
          alt="Cover"
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
                  src={user.avatar}
                  className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
                  isBordered
                  color="primary"
                />
              </div>

              <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full bg-green-500 ring-2 ring-content1 sm:h-4 sm:w-4 md:bottom-3 md:right-3" />
            </div>
          </div>

          <div className="-mt-5 flex flex-col gap-4 sm:-mt-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div className="max-w-4xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                      {user.name}
                    </h1>
                    <CheckCircle2 className="h-5 w-5 fill-primary/20 text-primary md:h-6 md:w-6" />
                  </div>

                  <ProfileActions
                    isFollowing={isFollowing}
                    onEdit={onEdit}
                    onToggleFollow={onToggleFollow}
                    onMessage={onMessage}
                  />
                </div>

                <div className="mt-1">
                  <div className="flex min-w-0 items-center gap-2 md:gap-3">
                    <span className="flex-shrink-0 font-medium text-default-500">
                      @{user.handle?.replace("@", "")}
                    </span>
                    <span className="hidden h-1 w-1 rounded-full bg-default-300 md:inline-block" />
                    <span className="truncate text-sm text-default-600">
                      {user.work}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed text-default-600">
              {user.bio}
            </p>

            <ProfileMetaInfo
              location={user.location}
              joined={user.joined}
              website="techcorp.com"
            />

            <div className="h-px w-full bg-divider" />

            <ProfileStats
              following={user.following || 0}
              followers={user.followers || 0}
              posts={user.posts || 0}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default React.memo(ProfileHeader);
