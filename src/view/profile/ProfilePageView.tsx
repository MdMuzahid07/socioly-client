"use client";
import EditProfileModal from "@/components/modals/EditProfileModal";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileAboutTab from "@/components/profile/tabs/ProfileAboutTab";
import ProfileConnectionsTab from "@/components/profile/tabs/ProfileConnectionsTab";
import ProfilePhotosTab from "@/components/profile/tabs/ProfilePhotosTab";
import ProfileVideosTab from "@/components/profile/tabs/ProfileVideosTab";
import PostCard from "@/components/ui/cards/profile/PostCard";
import { useFollowToggle } from "@/hooks/useFollowToggle";
import { useProfileData } from "@/hooks/useProfileData";
import { MOCK_CONNECTIONS, MOCK_POSTS } from "@/lib/data/mockData";
import { Tab, Tabs, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

interface ProfilePageViewProps {
  _profileId: string;
}

export default function ProfilePageView({ _profileId }: ProfilePageViewProps) {
  const router = useRouter();
  const { user, isLoading, error } = useProfileData(_profileId);
  const { isFollowing, toggleFollow } = useFollowToggle(_profileId, false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const profilePosts = useMemo(
    () => (user ? MOCK_POSTS.filter((post) => post.user.id === user.id) : []),
    [user],
  );

  const photoImages = useMemo(
    () =>
      profilePosts
        .filter((p) => p.images && p.images.length > 0)
        .flatMap((post) => post.images || []),
    [profilePosts],
  );

  const handleEditProfile = useCallback(() => {
    onOpen();
  }, [onOpen]);

  const handleMessage = useCallback(() => {
    if (user) {
      router.push(`/messages/${user.id}`);
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-default-500">Loading profile...</div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-danger">
            Failed to load profile
          </h2>
          <p className="mt-2 text-default-500">
            {error?.message || "User not found"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ProfileHeader
        user={user}
        isFollowing={isFollowing}
        onEdit={handleEditProfile}
        onToggleFollow={toggleFollow}
        onMessage={handleMessage}
      />

      <div className="mx-auto max-w-7xl">
        <Tabs
          aria-label="Profile Tabs"
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
            <div className="space-y-6 lg:col-span-2">
              {profilePosts.length > 0 ? (
                profilePosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="flex min-h-[400px] items-center justify-center">
                  <p className="text-default-500">No posts yet</p>
                </div>
              )}
            </div>
          </Tab>

          <Tab key="about" title="About">
            <ProfileAboutTab user={user} />
          </Tab>

          <Tab key="photos" title="Photos">
            <ProfilePhotosTab images={photoImages} />
          </Tab>

          <Tab key="videos" title="Videos">
            <ProfileVideosTab videoCount={6} />
          </Tab>

          <Tab key="connections" title="My Connections">
            <ProfileConnectionsTab connections={MOCK_CONNECTIONS} />
          </Tab>
        </Tabs>
      </div>

      <EditProfileModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
