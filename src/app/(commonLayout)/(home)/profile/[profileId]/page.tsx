"use client";
import PostCard from "@/components/ui/cards/profile/PostCard";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Input,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import {
  Calendar,
  CheckCircle2,
  Filter,
  LinkIcon,
  MapPin,
  MessageCircle,
  MoreVertical,
  Phone,
  Search,
  UserPlus,
  Video,
} from "lucide-react";
import { use, useState } from "react";

import EditProfileModal from "@/components/modals/EditProfileModal";
import { MOCK_CONNECTIONS, MOCK_POSTS, MOCK_USERS } from "@/lib/data/mockData";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId: _profileId } = use(params);
  const [isFollowing, setIsFollowing] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOnline, setFilterOnline] = useState<boolean | null>(null);

  const user = MOCK_USERS.current;
  const profilePosts = MOCK_POSTS.filter((post) => post.user.id === user.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full">
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl md:h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />

          <img
            src={user.cover}
            alt="Cover"
            className="absolute inset-0 z-10 h-full w-full object-cover"
          />

          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="">
          <Card className="premium-shadow relative z-30 -mt-8 overflow-visible rounded-t-xl border-small border-divider bg-content1 p-6">
            <div className="relative -mt-16 mb-4 md:-mt-20 md:mb-6">
              <div className="relative inline-block">
                <div className="rounded-full bg-content1 p-1.5 ring-4 ring-content1">
                  <Avatar
                    src={user.avatar}
                    className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
                    isBordered
                    color="primary"
                  />
                </div>

                <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 ring-2 ring-content1 md:bottom-3 md:right-3 md:h-5 md:w-5"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="max-w-4xl">
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                        {user.name}
                      </h1>
                      <CheckCircle2 className="h-5 w-5 fill-primary/20 text-primary md:h-6 md:w-6" />
                    </div>

                    <div className="flex flex-wrap gap-2 md:flex-nowrap">
                      <Button
                        radius="full"
                        variant="bordered"
                        className="border-divider font-medium"
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
                        variant="flat"
                        color="primary"
                      >
                        <MessageCircle size={20} />
                      </Button>
                    </div>
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

              {/* Bio */}
              <p className="text-base leading-relaxed text-default-600">
                {user.bio}
              </p>

              {/* Meta Info (Location, Date, Website) */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-default-500">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Joined {user.joined}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon size={16} />
                  <a
                    href="#"
                    className="text-primary transition-all hover:underline"
                  >
                    techcorp.com
                  </a>
                </div>
              </div>

              <div className="h-px w-full bg-divider" />

              {/* Stats */}
              <div className="flex gap-6 text-sm">
                <button className="group flex items-center gap-1 hover:text-foreground">
                  <span className="font-bold text-foreground group-hover:text-primary">
                    {user.following}
                  </span>
                  <span className="text-default-500">Following</span>
                </button>
                <button className="group flex items-center gap-1 hover:text-foreground">
                  <span className="font-bold text-foreground group-hover:text-primary">
                    {user.followers}
                  </span>
                  <span className="text-default-500">Followers</span>
                </button>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground">256</span>
                  <span className="text-default-500">Posts</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        {/* Tabs Section */}
        <Tabs
          aria-label="Profile Tabs"
          color="primary"
          variant="underlined"
          classNames={{
            base: "w-full",
            tabList:
              "gap-8 w-full relative rounded-none p-0 border-b border-divider bg-content1/50 backdrop-blur-sm",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-0 h-14",
            tabContent:
              "group-data-[selected=true]:text-primary font-semibold text-base",
          }}
        >
          <Tab key="posts" title="Posts">
            <div className="space-y-6 lg:col-span-2">
              {profilePosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </Tab>

          <Tab key="about" title="About">
            <div className="py-8">
              <Card className="mb-8 border-small border-divider bg-content1 p-6">
                <h3 className="mb-4 text-xl font-bold">About {user.name}</h3>
                <div className="space-y-4 text-default-600">
                  <p className="leading-relaxed">
                    Passionate nature lover and software engineer. I spend my
                    days coding complex applications and my weekends exploring
                    the great outdoors. Believer in clean code and cleaner
                    oceans.
                  </p>
                  <p className="italic leading-relaxed">
                    "Look deep into nature, and then you will understand
                    everything better." - Albert Einstein
                  </p>
                </div>
              </Card>

              <Card className="border-small border-divider bg-content1 p-6">
                <h4 className="mb-4 text-lg font-semibold">Interests</h4>
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
          </Tab>

          <Tab key="photos" title="Photos">
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {profilePosts
                .filter((p) => p.images && p.images.length > 0)
                .flatMap((post) => post.images)
                .slice(0, 12)
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                  >
                    <img
                      src={img}
                      alt="Gallery"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
            </div>
          </Tab>

          <Tab key="videos" title="Videos">
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
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
          </Tab>

          <Tab key="connections" title="My Connections">
            <div className="mt-6 space-y-6">
              {/* Search and Filters */}
              <Card className="border-small border-divider bg-content1 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Input
                    placeholder="Search connections..."
                    value={searchQuery}
                    onValueChange={setSearchQuery}
                    startContent={
                      <Search className="text-default-400" size={18} />
                    }
                    classNames={{
                      inputWrapper: "bg-default-100 border-none",
                    }}
                    radius="lg"
                    className="flex-1"
                  />
                  <div className="flex gap-2">
                    <Button
                      variant={filterOnline === true ? "solid" : "flat"}
                      color={filterOnline === true ? "primary" : "default"}
                      size="sm"
                      radius="full"
                      onPress={() =>
                        setFilterOnline(filterOnline === true ? null : true)
                      }
                      startContent={<Filter size={16} />}
                    >
                      Online
                    </Button>
                    <Button
                      variant={filterOnline === false ? "solid" : "flat"}
                      color={filterOnline === false ? "default" : "default"}
                      size="sm"
                      radius="full"
                      onPress={() =>
                        setFilterOnline(filterOnline === false ? null : false)
                      }
                    >
                      Offline
                    </Button>
                    {filterOnline !== null && (
                      <Button
                        variant="light"
                        size="sm"
                        radius="full"
                        onPress={() => setFilterOnline(null)}
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                </div>
              </Card>

              {/* Connections Count */}
              <h3 className="text-lg font-semibold">
                {
                  MOCK_CONNECTIONS.filter((conn) => {
                    const matchesSearch =
                      searchQuery === "" ||
                      conn.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      conn.role
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                    const matchesFilter =
                      filterOnline === null || conn.isOnline === filterOnline;
                    return matchesSearch && matchesFilter;
                  }).length
                }{" "}
                Connections
              </h3>

              {/* Connections Grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {MOCK_CONNECTIONS.filter((conn) => {
                  const matchesSearch =
                    searchQuery === "" ||
                    conn.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    conn.role.toLowerCase().includes(searchQuery.toLowerCase());
                  const matchesFilter =
                    filterOnline === null || conn.isOnline === filterOnline;
                  return matchesSearch && matchesFilter;
                }).map((connection) => (
                  <Card
                    key={connection.id}
                    className="group border-small border-divider bg-content1 transition-all hover:border-primary hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className="flex cursor-pointer items-center gap-4"
                          onClick={() => {
                            window.location.href = `/profile/${connection.id}`;
                          }}
                        >
                          <div className="relative">
                            <Avatar
                              src={connection.avatar}
                              size="lg"
                              isBordered
                              color={
                                connection.isOnline ? "success" : "default"
                              }
                            />
                            {connection.isOnline && (
                              <span className="absolute bottom-0 right-0 flex h-4 w-4">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                                <span className="relative inline-flex h-4 w-4 rounded-full bg-success ring-2 ring-background" />
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="truncate font-semibold">
                                {connection.name}
                              </h3>
                              {connection.isOnline && (
                                <Chip
                                  size="sm"
                                  variant="flat"
                                  color="success"
                                  className="h-5 text-[10px]"
                                >
                                  Online
                                </Chip>
                              )}
                            </div>
                            <p className="truncate text-sm text-default-500">
                              {connection.role}
                            </p>
                          </div>
                        </div>
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          className="text-default-400"
                        >
                          <MoreVertical size={16} />
                        </Button>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="flat"
                          color="primary"
                          className="flex-1"
                          startContent={<MessageCircle size={16} />}
                          onPress={() => {
                            window.location.href = `/messages/${connection.id}`;
                          }}
                        >
                          Message
                        </Button>
                        <Button isIconOnly size="sm" variant="flat">
                          <Phone size={16} />
                        </Button>
                        <Button isIconOnly size="sm" variant="flat">
                          <Video size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Empty State */}
              {MOCK_CONNECTIONS.filter((conn) => {
                const matchesSearch =
                  searchQuery === "" ||
                  conn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  conn.role.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesFilter =
                  filterOnline === null || conn.isOnline === filterOnline;
                return matchesSearch && matchesFilter;
              }).length === 0 && (
                <Card className="border-small border-dashed border-divider bg-content1">
                  <div className="flex flex-col items-center justify-center py-16">
                    <div className="rounded-full bg-default-100 p-6">
                      <UserPlus className="h-12 w-12 text-default-400" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      No connections found
                    </h3>
                    <p className="mt-2 text-sm text-default-500">
                      {searchQuery || filterOnline !== null
                        ? "Try adjusting your search or filters"
                        : "Start connecting with people"}
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </Tab>
        </Tabs>
      </div>

      <EditProfileModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
