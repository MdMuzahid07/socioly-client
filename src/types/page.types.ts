/**
 * Enhanced Page-related type definitions based on Facebook Pages
 */

export interface Page {
  id: string;
  name: string;
  username?: string; // @username for the page
  category: string;
  subcategory?: string;
  description: string;
  coverImage: string;
  profileImage: string;

  // Contact & Location
  email?: string;
  phone?: string;
  website?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
  };

  // Stats
  likes: number;
  followers: number;
  isLiked: boolean;
  isFollowing: boolean;
  posts?: number;

  // Additional Info
  createdAt: string;
  verified?: boolean;
  about?: string;
  mission?: string;

  // Business Hours (for business pages)
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };

  // Social Links
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface PageCategory {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
}

export interface CreatePageFormData {
  // Step 1: Basic Info
  name: string;
  username?: string;
  category: string;
  subcategory?: string;
  description: string;

  // Step 2: Contact (Optional)
  email?: string;
  phone?: string;
  website?: string;

  // Step 3: Location (Optional)
  city?: string;
  country?: string;

  // Step 4: About (Optional)
  about?: string;
  mission?: string;
}

export type CreatePageStep = 1 | 2 | 3 | 4;
