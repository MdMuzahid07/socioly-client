/**
 * ProfileConnectionsTab Component
 * Displays user connections with search and filter functionality
 */

"use client";

import ConnectionCard from "@/components/profile/ConnectionCard";
import ConnectionFilters from "@/components/profile/ConnectionFilters";
import { useConnectionFilters } from "@/hooks/useConnectionFilters";
import { ProfileConnectionsTabProps } from "@/types/profile.types";
import { formatConnectionCount } from "@/utils/connectionFilters";
import { Card } from "@nextui-org/react";
import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const ProfileConnectionsTab: React.FC<ProfileConnectionsTabProps> = ({
  connections,
}) => {
  const router = useRouter();
  const {
    searchQuery,
    filterOnline,
    filteredConnections,
    setSearchQuery,
    setFilterOnline,
    clearFilters,
  } = useConnectionFilters(connections);

  const handleMessageClick = useCallback(
    (connectionId: string) => {
      router.push(`/messages/${connectionId}`);
    },
    [router],
  );

  return (
    <div className="mt-6 space-y-6">
      {/* Search and Filters */}
      <ConnectionFilters
        searchQuery={searchQuery}
        filterOnline={filterOnline}
        onSearchChange={setSearchQuery}
        onFilterChange={setFilterOnline}
        onClearFilters={clearFilters}
      />

      {/* Connections Count */}
      <h3 className="text-lg font-semibold">
        {formatConnectionCount(filteredConnections.length)}
      </h3>

      {/* Connections Grid */}
      {filteredConnections.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredConnections.map((connection) => (
            <ConnectionCard
              key={connection.id}
              connection={connection}
              onMessageClick={handleMessageClick}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <Card className="border-small border-dashed border-divider bg-content1">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="rounded-full bg-default-100 p-6">
              <UserPlus className="h-12 w-12 text-default-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">No connections found</h3>
            <p className="mt-2 text-sm text-default-500">
              {searchQuery || filterOnline !== null
                ? "Try adjusting your search or filters"
                : "Start connecting with people"}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default React.memo(ProfileConnectionsTab);
