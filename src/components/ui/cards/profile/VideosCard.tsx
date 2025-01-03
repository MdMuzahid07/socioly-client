import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import Video from 'next-video';

const videos = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    thumbnail: `https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid`,
}))

export default function VideosCard() {
    return (
        <Card className="mt-4 rounded-none border-none shadow-none text-black">
            <CardBody className="rounded-none">
                <h3 className="text-xl font-semibold mb-4">Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {videos?.map((video) => (
                        <div key={video.id} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <Video src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=CphPINk0l5tapH85" />;
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <Video className="h-12 w-12 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
};
