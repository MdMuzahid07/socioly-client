import { Comment, Notification, Post, User } from "@/types";

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
    name: "John Doe",
    handle: "@johndoe",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    bio: "Software Developer",
    work: "Software Developer",
    followers: "1.2K",
    following: "150",
    cover:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    posts: "45",
  },
  u3: {
    id: "u3",
    name: "Jane Smith",
    handle: "@janesmith",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024f",
    bio: "UX Designer",
    work: "UX Designer",
    followers: "890",
    following: "120",
    posts: "32",
  },
  u4: {
    id: "u4",
    name: "Bob Johnson",
    handle: "@bobjohnson",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260250",
    bio: "Frontend Developer",
    work: "Frontend Developer",
    followers: "1.5K",
    following: "200",
    posts: "67",
  },
  u5: {
    id: "u5",
    name: "Alice Williams",
    handle: "@alicewilliams",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260251",
    bio: "Product Manager",
    work: "Product Manager",
    followers: "2.1K",
    following: "180",
    posts: "89",
  },
  u6: {
    id: "u6",
    name: "Charlie Brown",
    handle: "@charliebrown",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260252",
    bio: "Data Scientist",
    work: "Data Scientist",
    followers: "3.2K",
    following: "250",
    posts: "124",
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
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

// --- Mock Chat Connections ---
export const MOCK_CONNECTIONS = [
  {
    id: "u2",
    name: "John Doe",
    username: "@johndoe",
    role: "Software Developer",
    avatar: MOCK_USERS.u2.avatar,
    isOnline: true,
  },
  {
    id: "u3",
    name: "Jane Smith",
    username: "@janesmith",
    role: "UX Designer",
    avatar: MOCK_USERS.u3.avatar,
    isOnline: true,
  },
  {
    id: "u4",
    name: "Bob Johnson",
    username: "@bobjohnson",
    role: "Frontend Developer",
    avatar: MOCK_USERS.u4.avatar,
    isOnline: false,
  },
  {
    id: "u5",
    name: "Alice Williams",
    username: "@alicewilliams",
    role: "Product Manager",
    avatar: MOCK_USERS.u5.avatar,
    isOnline: true,
  },
  {
    id: "u6",
    name: "Charlie Brown",
    username: "@charliebrown",
    role: "Data Scientist",
    avatar: MOCK_USERS.u6.avatar,
    isOnline: false,
  },
];

// --- Mock Chat Conversations ---
export const MOCK_CHATS = {
  c1: {
    id: "c1",
    user: MOCK_USERS.u2,
    lastMessage: "Perfect. Thanks!",
    lastMessageTime: "2:30 PM",
    unreadCount: 0,
  },
  c2: {
    id: "c2",
    user: MOCK_USERS.u3,
    lastMessage: "That sounds great! Let's schedule it.",
    lastMessageTime: "1:15 PM",
    unreadCount: 2,
  },
  c3: {
    id: "c3",
    user: MOCK_USERS.u4,
    lastMessage: "I'll send you the details soon.",
    lastMessageTime: "12:45 PM",
    unreadCount: 0,
  },
  c4: {
    id: "c4",
    user: MOCK_USERS.u5,
    lastMessage: "Thanks for the update!",
    lastMessageTime: "11:20 AM",
    unreadCount: 1,
  },
  c5: {
    id: "c5",
    user: MOCK_USERS.u6,
    lastMessage: "See you tomorrow!",
    lastMessageTime: "10:00 AM",
    unreadCount: 0,
  },
};

// --- Mock Messages ---
// --- Mock Comments ---
export const MOCK_COMMENTS: Record<string, Comment[]> = {
  p1: [
    {
      id: "c1",
      content: "Amazing work! 🔥",
      user: MOCK_USERS.u2,
      createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    },
    {
      id: "c2",
      content: "This is so cool! Can you share the code?",
      user: MOCK_USERS.u3,
      createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    },
    {
      id: "c3",
      content: "Great job! Keep it up! 💪",
      user: MOCK_USERS.u4,
      createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    },
  ],
  p2: [
    {
      id: "c4",
      content: "Next.js 15 is indeed amazing!",
      user: MOCK_USERS.current,
      createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    },
  ],
  p3: [
    {
      id: "c5",
      content: "Beautiful! 🌅",
      user: MOCK_USERS.u2,
      createdAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    },
  ],
};

// --- Mock Photos ---
export const MOCK_PHOTOS = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1557682257-2f9c37a3a5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
];

// --- Mock Videos ---
// YouTube video ID: M-2eAiU09qg
// Source: https://www.youtube.com/watch?v=M-2eAiU09qg
const YOUTUBE_VIDEO_ID = "M-2eAiU09qg";
const YOUTUBE_THUMBNAIL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
const YOUTUBE_VIDEO_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`;

export const MOCK_VIDEOS = [
  {
    id: "v1",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 1",
  },
  {
    id: "v2",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 2",
  },
  {
    id: "v3",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 3",
  },
  {
    id: "v4",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 4",
  },
  {
    id: "v5",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 5",
  },
  {
    id: "v6",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 6",
  },
  {
    id: "v7",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 7",
  },
  {
    id: "v8",
    thumbnail: YOUTUBE_THUMBNAIL,
    videoUrl: YOUTUBE_VIDEO_URL,
    embedUrl: YOUTUBE_EMBED_URL,
    title: "Video 8",
  },
];

export const MOCK_MESSAGES: Record<
  string,
  Array<{ id: string; senderId: string; content: string; createdAt: string }>
> = {
  c1: [
    {
      id: "m1",
      senderId: "u2",
      content: "Hey! How's the project going?",
      createdAt: "2:15 PM",
    },
    {
      id: "m2",
      senderId: "u1",
      content: "Going well! Just finished the chat feature.",
      createdAt: "2:16 PM",
    },
    {
      id: "m3",
      senderId: "u2",
      content: "That's awesome! Can you share the code?",
      createdAt: "2:17 PM",
    },
    {
      id: "m4",
      senderId: "u1",
      content: "Sure, I'll send it over in a bit.",
      createdAt: "2:18 PM",
    },
    {
      id: "m5",
      senderId: "u2",
      content: "Perfect. Thanks!",
      createdAt: "2:30 PM",
    },
    {
      id: "m6",
      senderId: "u2",
      content: "Hmm, maybe a printout of the last month's report?",
      createdAt: "2:32 PM",
    },
    {
      id: "m7",
      senderId: "u1",
      content: "No problem. 😊",
      createdAt: "2:33 PM",
    },
    {
      id: "m8",
      senderId: "u1",
      content: "Do you need anything else before we meet?",
      createdAt: "2:34 PM",
    },
  ],
  c2: [
    {
      id: "m9",
      senderId: "u3",
      content: "Hi! Are you available for a quick call?",
      createdAt: "1:10 PM",
    },
    {
      id: "m10",
      senderId: "u1",
      content: "Yes, I can do that. When works for you?",
      createdAt: "1:12 PM",
    },
    {
      id: "m11",
      senderId: "u3",
      content: "That sounds great! Let's schedule it.",
      createdAt: "1:15 PM",
    },
  ],
  c3: [
    {
      id: "m12",
      senderId: "u4",
      content: "Hey, I've reviewed your proposal.",
      createdAt: "12:40 PM",
    },
    {
      id: "m13",
      senderId: "u1",
      content: "Great! What do you think?",
      createdAt: "12:42 PM",
    },
    {
      id: "m14",
      senderId: "u4",
      content: "I'll send you the details soon.",
      createdAt: "12:45 PM",
    },
  ],
  c4: [
    {
      id: "m15",
      senderId: "u5",
      content: "The meeting is scheduled for tomorrow.",
      createdAt: "11:15 AM",
    },
    {
      id: "m16",
      senderId: "u1",
      content: "Got it, thanks for letting me know!",
      createdAt: "11:18 AM",
    },
    {
      id: "m17",
      senderId: "u5",
      content: "Thanks for the update!",
      createdAt: "11:20 AM",
    },
  ],
  c5: [
    {
      id: "m18",
      senderId: "u6",
      content: "See you at the conference!",
      createdAt: "9:50 AM",
    },
    {
      id: "m19",
      senderId: "u1",
      content: "Looking forward to it!",
      createdAt: "9:55 AM",
    },
    {
      id: "m20",
      senderId: "u6",
      content: "See you tomorrow!",
      createdAt: "10:00 AM",
    },
  ],
};

// --- Mock Pages ---
export const MOCK_PAGES = [
  {
    id: "page1",
    name: "Tech Innovators",
    category: "Technology",
    description:
      "Exploring the latest in technology, AI, and software development. Join us for insights and discussions!",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    likes: 15200,
    followers: 12500,
    isLiked: true,
    isFollowing: true,
    createdAt: "2023-01-15",
    posts: 342,
  },
  {
    id: "page2",
    name: "Nature Photography",
    category: "Photography",
    description:
      "Capturing the beauty of nature one shot at a time. Share your best nature photos with our community!",
    coverImage:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    likes: 8900,
    followers: 7200,
    isLiked: false,
    isFollowing: true,
    createdAt: "2023-03-22",
    posts: 156,
  },
  {
    id: "page3",
    name: "Fitness & Wellness",
    category: "Health & Fitness",
    description:
      "Your daily dose of fitness motivation, workout tips, and wellness advice. Let's get healthy together!",
    coverImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    likes: 21000,
    followers: 18500,
    isLiked: true,
    isFollowing: false,
    createdAt: "2022-11-10",
    posts: 521,
  },
  {
    id: "page4",
    name: "Foodie Paradise",
    category: "Food & Cooking",
    description:
      "Delicious recipes, cooking tips, and food adventures from around the world. Bon appétit!",
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    likes: 12800,
    followers: 10200,
    isLiked: false,
    isFollowing: false,
    createdAt: "2023-05-18",
    posts: 289,
  },
  {
    id: "page5",
    name: "Travel Wanderlust",
    category: "Travel & Places",
    description:
      "Discover amazing destinations, travel tips, and hidden gems around the globe. Adventure awaits!",
    coverImage:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    likes: 19500,
    followers: 16800,
    isLiked: true,
    isFollowing: true,
    createdAt: "2023-02-28",
    posts: 412,
  },
  {
    id: "page6",
    name: "Creative Arts Hub",
    category: "Arts & Design",
    description:
      "A community for artists, designers, and creatives. Share your work and get inspired!",
    coverImage:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    likes: 6700,
    followers: 5400,
    isLiked: false,
    isFollowing: false,
    createdAt: "2023-04-12",
    posts: 198,
  },
];

export const PAGE_CATEGORIES = [
  { id: "tech", name: "Technology", icon: "💻" },
  { id: "photo", name: "Photography", icon: "📷" },
  { id: "health", name: "Health & Fitness", icon: "💪" },
  { id: "food", name: "Food & Cooking", icon: "🍳" },
  { id: "travel", name: "Travel & Places", icon: "✈️" },
  { id: "arts", name: "Arts & Design", icon: "🎨" },
  { id: "music", name: "Music", icon: "🎵" },
  { id: "business", name: "Business", icon: "💼" },
  { id: "education", name: "Education", icon: "📚" },
  { id: "entertainment", name: "Entertainment", icon: "🎬" },
];
