"use client";

import { MOCK_VIDEOS } from "@/lib/data/mockData";
import VideoModal from "@/components/ui/modals/VideoModal";
import { Card, CardBody } from "@nextui-org/react";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VideosCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const handleVideoClick = (index: number) => {
    setSelectedVideoIndex(index);
    setIsModalOpen(true);
  };

  const videoUrls = MOCK_VIDEOS.map((video) => video.videoUrl);

  return (
    <>
      <div className="mt-4">
        <h3 className="ml-4 text-xl font-semibold text-black">
          Videos ({MOCK_VIDEOS.length})
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_VIDEOS.map((video, index) => (
            <Card
              key={video.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg border-none text-black shadow-none"
              onClick={() => handleVideoClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleVideoClick(index);
                }
              }}
            >
              <CardBody className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Play
                        className="ml-1 h-8 w-8 text-black"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-sm font-medium text-white">
                    {video.title}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrls[selectedVideoIndex]}
        title={
          MOCK_VIDEOS[selectedVideoIndex]?.title ||
          `Video ${selectedVideoIndex + 1}`
        }
        videos={videoUrls}
        currentIndex={selectedVideoIndex}
      />
    </>
  );
}
