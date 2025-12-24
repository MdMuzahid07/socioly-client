import { Avatar, Card } from "@nextui-org/react";
import React from "react";

interface StoryCardProps {
  backgroundImage: string;
  avatarUri: string;
  username: string;
  isViewed?: boolean;
  onTopClick?: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({
  backgroundImage,
  avatarUri,
  username,
  isViewed = false,
  onTopClick,
}) => {
  return (
    <Card
      tabIndex={0}
      onPress={() => onTopClick && onTopClick()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onTopClick && onTopClick();
      }}
      isPressable
      className="xs:h-[150px] xs:w-[95px] group relative h-[140px] w-[90px] cursor-pointer overflow-hidden rounded-xl border-0 shadow-md transition-transform hover:scale-105 sm:h-[160px] sm:w-[100px] md:h-[170px] md:w-[110px] lg:h-[180px] lg:w-[120px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

      <div className="relative flex h-full flex-col justify-between p-2 sm:p-3">
        <div className="flex items-start">
          <div
            role="button"
            className={`rounded-full p-[2px] ${
              isViewed
                ? "bg-gray-400"
                : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500"
            }`}
          >
            <Avatar
              src={avatarUri}
              size="sm"
              className="h-8 w-8 border-2 border-white sm:h-9 sm:w-9"
            />
          </div>
        </div>

        <div className="flex items-end">
          <h3 className="line-clamp-2 text-[10px] font-semibold text-white drop-shadow-lg sm:text-xs">
            {username}
          </h3>
        </div>
      </div>

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </Card>
  );
};

export default StoryCard;
