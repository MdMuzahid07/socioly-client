/**
 * ConnectionFilters Component
 * Search and filter controls for connections
 */

"use client";

import { ConnectionFiltersProps } from "@/types/profile.types";
import { Button, Card, Input } from "@nextui-org/react";
import { Filter, Search } from "lucide-react";
import React from "react";

const ConnectionFilters: React.FC<ConnectionFiltersProps> = ({
  searchQuery,
  filterOnline,
  onSearchChange,
  onFilterChange,
  onClearFilters,
}) => {
  return (
    <Card className="border-small border-divider bg-content1 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Search connections..."
          value={searchQuery}
          onValueChange={onSearchChange}
          startContent={<Search className="text-default-400" size={18} />}
          classNames={{
            inputWrapper: "bg-default-100 border-none",
          }}
          radius="lg"
          className="flex-1"
        />
        <div className="flex gap-2">
          <Button
            variant={filterOnline === true ? "solid" : "flat"}
            color={filterOnline === true ? "primary" : "default"}
            size="sm"
            radius="full"
            onPress={() => onFilterChange(filterOnline === true ? null : true)}
            startContent={<Filter size={16} />}
          >
            Online
          </Button>
          <Button
            variant={filterOnline === false ? "solid" : "flat"}
            color={filterOnline === false ? "default" : "default"}
            size="sm"
            radius="full"
            onPress={() =>
              onFilterChange(filterOnline === false ? null : false)
            }
          >
            Offline
          </Button>
          {filterOnline !== null && (
            <Button
              variant="light"
              size="sm"
              radius="full"
              onPress={onClearFilters}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default React.memo(ConnectionFilters);
