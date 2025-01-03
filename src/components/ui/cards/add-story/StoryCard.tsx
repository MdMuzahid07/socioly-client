import React from 'react';
import { Card, Avatar } from '@nextui-org/react';

interface StoryCardProps {
    backgroundImage: string;
    avatarUri: string;
    username: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ backgroundImage, avatarUri, username }) => {
    return (
        <Card
            className="relative w-32 h-40 rounded-lg overflow-hidden bg-white cursor-pointer"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute top-3 left-3">
                <Avatar
                    src={avatarUri}
                    size="lg"
                    color="primary"
                    className="border-2 w-9 h-9 border-white"
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
