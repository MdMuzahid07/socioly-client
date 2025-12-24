/**
 * Custom hook for managing connection filters
 * Handles search and online status filtering with memoization
 */

import { Connection, UseConnectionFiltersReturn } from "@/types/profile.types";
import { filterConnections } from "@/utils/connectionFilters";
import { useCallback, useMemo, useState } from "react";

/**
 * Hook for managing connection filters
 * @param connections - Array of all connections
 * @returns Filter state and filtered connections
 */

export const useConnectionFilters = (
  connections: Connection[],
): UseConnectionFiltersReturn => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOnline, setFilterOnline] = useState<boolean | null>(null);

  // Memoize filtered connections to avoid unnecessary recalculations
  const filteredConnections = useMemo(
    () => filterConnections(connections, searchQuery, filterOnline),
    [connections, searchQuery, filterOnline],
  );

  // Memoize clear filters function
  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setFilterOnline(null);
  }, []);

  return {
    searchQuery,
    filterOnline,
    filteredConnections,
    setSearchQuery,
    setFilterOnline,
    clearFilters,
  };
};
