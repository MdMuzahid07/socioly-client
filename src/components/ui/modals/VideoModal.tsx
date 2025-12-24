"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { Download, Share2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  videos?: string[];
  currentIndex?: number;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title = "Video",
  videos,
  currentIndex = 0,
}: VideoModalProps) {
  const [currentIdx, setCurrentIdx] = useState(currentIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoList = videos || [videoUrl];
  const currentVideo = videoList[currentIdx];

  // Check if the video URL is a YouTube URL
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Extract YouTube video ID and convert to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("youtube.com/embed/")) {
      return url;
    }
    return url;
  };

  const isYouTube = isYouTubeUrl(currentVideo);
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(currentVideo) : currentVideo;

  useEffect(() => {
    if (isOpen && videoRef.current && !isYouTube) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen, currentIdx, isYouTube]);

  const handlePrevious = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : videoList.length - 1));
  };

  const handleNext = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIdx((prev) => (prev < videoList.length - 1 ? prev + 1 : 0));
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentVideo;
    link.download = `video-${Date.now()}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this video",
          url: currentVideo,
        });
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(currentVideo);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      hideCloseButton
      isDismissable={true}
      isKeyboardDismissDisabled={false}
      backdrop="blur"
      className="bg-black/95"
      classNames={{
        base: "max-w-full",
        body: "p-0",
      }}
    >
      <ModalContent>
        <div className="relative flex h-screen w-full flex-col">
          {/* Header */}
          <ModalHeader className="absolute left-0 top-0 z-10 flex w-full items-center justify-between border-b border-white/10 bg-black/50 p-4 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <div className="flex items-center gap-2">
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="hover:bg-background/20 text-white"
                onPress={handleDownload}
                aria-label="Download video"
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="hover:bg-background/20 text-white"
                onPress={handleShare}
                aria-label="Share video"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="hover:bg-background/20 text-white"
                onPress={onClose}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </ModalHeader>

          {/* Video Container */}
          <ModalBody className="flex h-full items-center justify-center overflow-hidden p-0">
            <div className="relative flex h-full w-full items-center justify-center">
              {isYouTube ? (
                <iframe
                  src={embedUrl}
                  className="h-full max-h-[90vh] w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={title}
                />
              ) : (
                <video
                  ref={videoRef}
                  src={currentVideo}
                  controls
                  className="h-full max-h-[90vh] w-full object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    if (videoList.length > 1) {
                      handleNext();
                    } else {
                      setIsPlaying(false);
                    }
                  }}
                />
              )}

              {/* Navigation Arrows */}
              {videoList.length > 1 && (
                <>
                  <Button
                    isIconOnly
                    variant="light"
                    className="absolute left-4 z-10 bg-black/50 text-white hover:bg-black/70"
                    onPress={handlePrevious}
                    aria-label="Previous video"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </Button>
                  <Button
                    isIconOnly
                    variant="light"
                    className="absolute right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                    onPress={handleNext}
                    aria-label="Next video"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </>
              )}
            </div>
          </ModalBody>

          {/* Footer with Video Counter */}
          {videoList.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center border-t border-white/10 bg-black/50 p-4 backdrop-blur-sm">
              <span className="text-sm text-white/80">
                {currentIdx + 1} / {videoList.length}
              </span>
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
}
