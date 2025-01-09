import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const videos = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    thumbnail: `https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid`,
}))

export default function VideosCard() {
    return (
        <div className="mt-4">
            <h3 className="text-xl font-semibold ml-4 text-black">Videos</h3>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {videos?.map((video, index) => (
                    <Card key={index + Math.random()} className="rounded-lg border-none shadow-none text-black">
                        <CardBody>
                            <video
                                src="/videos/my-video.mp4"
                                controls
                                autoPlay
                                loop
                                style={{ width: '100%', height: 'auto', borderRadius: "8px" }}
                            />
                        </CardBody>
                    </Card>
                ))}

            </div>
        </div>
    )
};
