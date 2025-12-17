import { Notification, Post, User } from "@/types";

// --- Mock Users ---
export const MOCK_USERS: Record<string, User> = {
  current: {
    id: "u1",
    name: "Md. Muzahid",
    handle: "@muzahid_dev",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    bio: "Full Stack Developer 🚀 | React & Node.js Enthusiast | Building things that matter.",
    work: "Software Engineer at TechCorp",
    location: "Dhaka, Bangladesh",
    joined: "September 2021",
    followers: "2.5K",
    following: "365",
    cover:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    posts: "256",
    email: "muzahid@example.com",
  },
  u2: {
    id: "u2",
    name: "Sarah Chen",
    handle: "@sarah_codes",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    bio: "Frontend Wizard",
    followers: "1.2K",
    following: "150",
    cover:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    posts: "45",
  },
};

// --- Mock Posts ---
export const MOCK_POSTS: Post[] = [
  {
    id: "p1",
    user: MOCK_USERS.current,
    content: "Just finished building a new feature for Socioly! #coding #react",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    ],
    likesCount: 120,
    commentsCount: 45,
    shares: 12,
    timeAgo: "2h ago",
    isLikedByCurrentUser: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "p2",
    user: MOCK_USERS.u2,
    content: "Exploring the new features of Next.js 15. It's amazing! 🚀",
    likesCount: 85,
    commentsCount: 23,
    shares: 5,
    timeAgo: "4h ago",
    isLikedByCurrentUser: true,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "p3",
    user: MOCK_USERS.current,
    content: "Beautiful sunset today! 🌅",
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
    likesCount: 200,
    commentsCount: 50,
    shares: 20,
    timeAgo: "1d ago",
    isLikedByCurrentUser: false,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "p4",
    user: MOCK_USERS.current,
    content:
      "Nature's masterpiece. The colors at this altitude are unreal. #mountain #sunset #nature",
    images: [
      "/home/muzahid/.gemini/antigravity/brain/a770f047-7c4a-425e-b9aa-8fbbea5c782f/nature_mountain_sunset_1765876439091.png",
    ],
    likesCount: 342,
    commentsCount: 28,
    shares: 45,
    timeAgo: "2d ago",
    isLikedByCurrentUser: true,
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "p5",
    user: MOCK_USERS.current,
    content:
      "Found this peaceful spot during my morning hike. The sound of the stream is so relaxing.",
    images: [
      "/home/muzahid/.gemini/antigravity/brain/a770f047-7c4a-425e-b9aa-8fbbea5c782f/nature_forest_stream_1765876459319.png",
    ],
    likesCount: 156,
    commentsCount: 14,
    shares: 8,
    timeAgo: "3d ago",
    isLikedByCurrentUser: false,
    createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "p6",
    user: MOCK_USERS.current,
    content: "The power of the ocean. 🌊 #ocean #waves #dramatic",
    images: [
      "/home/muzahid/.gemini/antigravity/brain/a770f047-7c4a-425e-b9aa-8fbbea5c782f/nature_ocean_cliffs_1765876480386.png",
    ],
    likesCount: 289,
    commentsCount: 67,
    shares: 112,
    timeAgo: "5d ago",
    isLikedByCurrentUser: true,
    createdAt: new Date(Date.now() - 120 * 60 * 60 * 1000).toISOString(),
  },
];

// --- Mock Notifications ---
export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    type: "like",
    user: {
      name: MOCK_USERS.u2.name,
      avatar: MOCK_USERS.u2.avatar || "",
    },
    read: false,
    createdAt: "2m ago",
  },
  {
    id: "n2",
    type: "follow",
    user: {
      name: MOCK_USERS.u2.name,
      avatar: MOCK_USERS.u2.avatar || "",
    },
    read: true,
    createdAt: "1h ago",
  },
];

// --- Mock Chat ---
export const MOCK_CHATS = {
  c1: {
    id: "c1",
    user: MOCK_USERS.u2,
    lastMessage: "Hey, are you free tonight?",
    lastMessageTime: "10:30 AM",
    unreadCount: 2,
  },
};

export const MOCK_MESSAGES = {
  c1: [
    {
      id: "m1",
      senderId: "u2",
      content: "Hey, are you free tonight?",
      createdAt: "10:30 AM",
    },
    {
      id: "m2",
      senderId: "u1",
      content: "Yeah, what's up?",
      createdAt: "10:32 AM",
    },
  ],
};
