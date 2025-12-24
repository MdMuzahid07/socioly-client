/**
 * Custom hook for managing follow/unfollow functionality
 * Handles optimistic updates and error recovery
 */

import { UseFollowToggleReturn } from "@/types/profile.types";
import { useCallback, useState } from "react";

/**
 * Hook for managing follow/unfollow state
 * @param userId - ID of the user to follow/unfollow
 * @param initialFollowState - Initial follow state
 * @returns Follow state and toggle function
 */
export const useFollowToggle = (
  userId: string,
  initialFollowState = false,
): UseFollowToggleReturn => {
  const [isFollowing, setIsFollowing] = useState(initialFollowState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // this is just a mock function to simulate follow/unfollow action to show optimistic UI update

  const toggleFollow = useCallback(async () => {
    // Store previous state for rollback
    const previousState = isFollowing;

    // Optimistic update
    setIsFollowing(!isFollowing);
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual API call
      // await followUserAPI(userId, !isFollowing);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Uncomment to simulate error
      // throw new Error("Failed to update follow status");
    } catch (err) {
      // Rollback on error
      setIsFollowing(previousState);
      setError(err instanceof Error ? err : new Error("Unknown error"));
      console.error("Failed to toggle follow:", err);
    } finally {
      setIsLoading(false);
    }
  }, [userId, isFollowing]);

  return {
    isFollowing,
    isLoading,
    error,
    toggleFollow,
  };
};
