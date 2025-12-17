"use client";
import PostCard from "@/components/ui/cards/profile/PostCard";
import {
  Avatar,
  Button,
  Card,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import {
  Calendar,
  CheckCircle2,
  MapPin,
  MessageCircle,
  UserPlus,
} from "lucide-react";
import { use, useState } from "react";

import EditProfileModal from "@/components/modals/EditProfileModal";
import { MOCK_POSTS, MOCK_USERS } from "@/lib/data/mockData";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = use(params);
  const [isFollowing, setIsFollowing] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Use centralized mock data
  const user = MOCK_USERS.current;
  // Filter posts for the current user
  const profilePosts = MOCK_POSTS.filter((post) => post.user.id === user.id);

  const suggestions = [
    {
      id: 1,
      name: "Sarah Connor",
      handle: "@sarah_c",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "John Wick",
      handle: "@baba_yaga",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      id: 3,
      name: "Emma Watson",
      handle: "@emma_w",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-10">
      {/* Cover Image Section - Full width */}
      <div className="relative w-full">
        <div className="group relative h-[200px] w-full overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 md:h-[350px]">
          <img
            src={user.cover}
            alt="Cover"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-[60px] mb-6 flex flex-col items-start gap-6 md:-mt-[100px] md:flex-row">
          {/* Avatar Section */}
          <div className="group relative z-10">
            <div className="inline-block rounded-full bg-background p-1.5">
              <Avatar
                src={user.avatar}
                className="h-32 w-32 text-large shadow-xl md:h-48 md:w-48"
                isBordered={false}
              />
            </div>
          </div>

          {/* Profile Info & Actions */}
          <div className="w-full flex-1 pt-2 md:pt-[110px]">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                    {user.name}
                  </h1>
                  <CheckCircle2
                    size={20}
                    className="fill-blue-500/10 text-blue-500"
                  />
                </div>
                <p className="font-medium text-default-500">
                  @{user.handle?.replace("@", "")}
                </p>
                <p className="mt-1 text-sm text-default-500">{user.work}</p>
              </div>

              <div className="flex gap-3">
                <Button
                  radius="full"
                  variant="bordered"
                  className="border-default-300 font-medium"
                  onPress={onOpen}
                >
                  Edit profile
                </Button>
                <Button
                  color={isFollowing ? "default" : "primary"}
                  variant={isFollowing ? "flat" : "solid"}
                  radius="full"
                  onPress={() => setIsFollowing(!isFollowing)}
                  startContent={!isFollowing && <UserPlus size={18} />}
                  className="font-medium"
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
                <Button
                  isIconOnly
                  radius="full"
                  variant="bordered"
                  className="border-default-300"
                >
                  <MessageCircle size={20} />
                </Button>
              </div>
            </div>

            <div className="mb-6 mt-6">
              <p className="max-w-3xl text-medium leading-relaxed text-default-700">
                {user.bio}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-default-500">
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>Joined {user.joined}</span>
                </div>
                {/* Website link could go here */}
              </div>

              <div className="mt-4 flex gap-6">
                <div className="flex cursor-pointer gap-1 hover:underline">
                  <span className="font-bold text-foreground">
                    {user.following}
                  </span>
                  <span className="text-default-500">Following</span>
                </div>
                <div className="flex cursor-pointer gap-1 hover:underline">
                  <span className="font-bold text-foreground">
                    {user.followers}
                  </span>
                  <span className="text-default-500">Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <Tabs
            aria-label="Profile Tabs"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent:
                "group-data-[selected=true]:text-primary font-medium text-medium",
            }}
          >
            <Tab
              key="posts"
              title={
                <div className="flex items-center space-x-2">
                  <span>Posts</span>
                </div>
              }
            >
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                  {profilePosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
                <div className="hidden space-y-6 lg:block">
                  <Card className="sticky top-20 h-fit border-none bg-default-50 p-4 shadow-sm dark:bg-default-100">
                    <h3 className="mb-4 text-lg font-bold">You might like</h3>
                    <div className="flex flex-col gap-4">
                      {suggestions.map((suggestion) => (
                        <div
                          key={suggestion.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={suggestion.avatar}
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <span className="text-small font-semibold">
                                {suggestion.name}
                              </span>
                              <span className="text-tiny text-default-500">
                                {suggestion.handle}
                              </span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            color="primary"
                            variant="flat"
                            radius="full"
                          >
                            Follow
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="mt-4 w-full"
                      variant="light"
                      color="primary"
                      size="sm"
                    >
                      Show more
                    </Button>
                  </Card>
                </div>
              </div>
            </Tab>
            <Tab key="about" title="About">
              <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold">About {user.name}</h3>
                  <p className="mb-4 leading-relaxed text-default-600">
                    Passionate nature lover and software engineer. I spend my
                    days coding complex applications and my weekends exploring
                    the great outdoors. Believer in clean code and cleaner
                    oceans.
                  </p>
                  <p className="leading-relaxed text-default-600">
                    "Look deep into nature, and then you will understand
                    everything better." - Albert Einstein
                  </p>
                </div>
                <div className="rounded-lg bg-default-50 p-6 dark:bg-default-100">
                  <h4 className="mb-3 font-semibold">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Photography",
                      "Hiking",
                      "Coding",
                      "React",
                      "Travel",
                      "Nature",
                      "Ocean",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-default-200 bg-background px-3 py-1 text-small text-default-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab key="photos" title="Photos">
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {profilePosts
                  .filter((p) => p.images && p.images.length > 0)
                  .map((post) =>
                    post.images?.map((img, idx) => (
                      <div
                        key={`${post.id}-${idx}`}
                        className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                      >
                        <img
                          src={img}
                          alt="Gallery"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    )),
                  )}
                {/* Fallback to show grid structure if filtered posts are few */}
                <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80"
                    alt="Nature"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                    alt="Forest"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Tab>
            <Tab key="videos" title="Videos">
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="shadown-md group relative aspect-[9/16] overflow-hidden rounded-xl bg-black"
                  >
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/uq5LClqn3cE?controls=0&rel=0"
                      title="Nature Short"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <EditProfileModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
