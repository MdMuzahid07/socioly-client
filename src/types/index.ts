export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
  followers?: string; // Changed to string for "2.5K" format
  following?: string;
  cover?: string;
  handle?: string;
  work?: string;
  location?: string;
  joined?: string;
  posts?: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  createdAt: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  images?: string[];
  likesCount: number;
  commentsCount: number;
  shares?: number;
  timeAgo?: string;
  isLikedByCurrentUser?: boolean;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: "like" | "comment" | "follow";
  user: {
    name: string;
    avatar: string;
  };
  post?: {
    id: string;
    content: string;
  };
  read: boolean;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
}
