/**
 * Utility functions for filtering connections
 * Provides reusable logic for connection search and filtering
 */

import { Connection } from "@/types/profile.types";

/**
 * Check if a connection matches the search query
 * @param connection - The connection to check
 * @param searchQuery - The search query string
 * @returns true if connection matches search query
 */
export const matchesSearch = (
  connection: Connection,
  searchQuery: string,
): boolean => {
  if (!searchQuery) return true;

  const query = searchQuery.toLowerCase().trim();
  const nameMatch = connection.name.toLowerCase().includes(query);
  const roleMatch = connection.role.toLowerCase().includes(query);

  return nameMatch || roleMatch;
};

/**
 * Check if a connection matches the online status filter
 * @param connection - The connection to check
 * @param filterOnline - The online filter (true = online only, false = offline only, null = all)
 * @returns true if connection matches online filter
 */
export const matchesOnlineStatus = (
  connection: Connection,
  filterOnline: boolean | null,
): boolean => {
  if (filterOnline === null) return true;
  return connection.isOnline === filterOnline;
};

/**
 * Filter connections based on search query and online status
 * @param connections - Array of connections to filter
 * @param searchQuery - Search query string
 * @param filterOnline - Online status filter
 * @returns Filtered array of connections
 */
export const filterConnections = (
  connections: Connection[],
  searchQuery: string,
  filterOnline: boolean | null,
): Connection[] => {
  return connections.filter((connection) => {
    const searchMatch = matchesSearch(connection, searchQuery);
    const onlineMatch = matchesOnlineStatus(connection, filterOnline);
    return searchMatch && onlineMatch;
  });
};

/**
 * Format connection count for display
 * @param count - Number of connections
 * @returns Formatted string (e.g., "1 Connection" or "5 Connections")
 */
export const formatConnectionCount = (count: number): string => {
  return `${count} ${count === 1 ? "Connection" : "Connections"}`;
};
