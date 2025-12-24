/**
 * Profile-related type definitions
 * Provides type safety for profile components and hooks
 */

import { User } from "@/types";

/**
 * Available profile tab keys
 */
export type ProfileTabKey =
  | "posts"
  | "about"
  | "photos"
  | "videos"
  | "connections";

/**
 * Connection filter state
 */
export interface ConnectionFilterState {
  searchQuery: string;
  filterOnline: boolean | null;
}

/**
 * Connection object from mock data
 */
export interface Connection {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  isOnline: boolean;
}

/**
 * Profile actions component props
 */
export interface ProfileActionsProps {
  isFollowing: boolean;
  onEdit: () => void;
  onToggleFollow: () => void;
  onMessage: () => void;
}

/**
 * Profile meta info component props
 */
export interface ProfileMetaInfoProps {
  location?: string;
  joined?: string;
  website?: string;
}

/**
 * Profile stats component props
 */
export interface ProfileStatsProps {
  following: number | string;
  followers: number | string;
  posts: number | string;
  onFollowingClick?: () => void;
  onFollowersClick?: () => void;
  onPostsClick?: () => void;
}

/**
 * Profile about tab props
 */
export interface ProfileAboutTabProps {
  user: User;
}

/**
 * Profile photos tab props
 */
export interface ProfilePhotosTabProps {
  images: string[];
}

/**
 * Profile videos tab props
 */
export interface ProfileVideosTabProps {
  videoCount?: number;
}

/**
 * Profile connections tab props
 */
export interface ProfileConnectionsTabProps {
  connections: Connection[];
}

/**
 * Connection card props
 */
export interface ConnectionCardProps {
  connection: Connection;
  onMessageClick: (connectionId: string) => void;
}

/**
 * Connection filters props
 */
export interface ConnectionFiltersProps {
  searchQuery: string;
  filterOnline: boolean | null;
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: boolean | null) => void;
  onClearFilters: () => void;
}

/**
 * Hook return type for connection filters
 */
export interface UseConnectionFiltersReturn {
  searchQuery: string;
  filterOnline: boolean | null;
  filteredConnections: Connection[];
  setSearchQuery: (query: string) => void;
  setFilterOnline: (filter: boolean | null) => void;
  clearFilters: () => void;
}

/**
 * Hook return type for follow toggle
 */
export interface UseFollowToggleReturn {
  isFollowing: boolean;
  isLoading: boolean;
  error: Error | null;
  toggleFollow: () => Promise<void>;
}

/**
 * Hook return type for profile data
 */
export interface UseProfileDataReturn {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}
