import React from "react";
import { Card, Avatar } from "@nextui-org/react";

interface StoryCardProps {
  backgroundImage: string;
  avatarUri: string;
  username: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ backgroundImage, avatarUri, username }) => {
  return (
    <Card
      className="relative h-40 w-32 cursor-pointer overflow-hidden rounded-lg bg-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute left-3 top-3">
        <Avatar
          src={avatarUri}
          size="lg"
          color="primary"
          className="h-9 w-9 border-2 border-white"
        />
      </div>
      <div className="absolute bottom-3 left-3">
        <h3 color="white" className="font-semibold">
          {username}
        </h3>
      </div>
    </Card>
  );
};

export default StoryCard;
