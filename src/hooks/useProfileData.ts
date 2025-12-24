/**
 * Custom hook for fetching profile data
 * Handles loading states, errors, and data caching
 */

import { MOCK_USERS } from "@/lib/data/mockData";
import { UseProfileDataReturn } from "@/types/profile.types";
import { useCallback, useEffect, useState } from "react";

/**
 * Hook for fetching profile data
 * @param profileId - ID of the profile to fetch
 * @returns Profile data, loading state, and error
 */

// this is just a mock function to simulate fetching profile data

export const useProfileData = (profileId: string): UseProfileDataReturn => {
  const [user, setUser] = useState(MOCK_USERS.current);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual API call
      // const response = await fetchUserProfile(profileId);
      // setUser(response.data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));

      // For now, use mock data
      setUser(MOCK_USERS.current);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to fetch profile"),
      );
      console.error("Failed to fetch profile:", err);
    } finally {
      setIsLoading(false);
    }
  }, [profileId]);

  // Fetch profile on mount and when profileId changes
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    user,
    isLoading,
    error,
    refetch: fetchProfile,
  };
};
