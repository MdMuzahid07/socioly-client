"use client";
import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react";
import { X, Download, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@nextui-org/react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt?: string;
  images?: string[];
  currentIndex?: number;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  alt = "Image",
  images,
  currentIndex = 0,
}: ImageModalProps) {
  const [currentIdx, setCurrentIdx] = useState(currentIndex);
  const imageList = images || [imageUrl];
  const currentImage = imageList[currentIdx];

  const handlePrevious = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : imageList.length - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < imageList.length - 1 ? prev + 1 : 0));
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentImage;
    link.download = `image-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this image",
          url: currentImage,
        });
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(currentImage);
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
            <h3 className="text-lg font-semibold text-white">{alt}</h3>
            <div className="flex items-center gap-2">
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="text-white hover:bg-white/20"
                onPress={handleDownload}
                aria-label="Download image"
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="text-white hover:bg-white/20"
                onPress={handleShare}
                aria-label="Share image"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="text-white hover:bg-white/20"
                onPress={onClose}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </ModalHeader>

          {/* Image Container */}
          <ModalBody className="flex h-full items-center justify-center overflow-hidden p-0">
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={currentImage}
                alt={alt}
                fill
                className="object-contain"
                priority
                quality={95}
              />

              {/* Navigation Arrows */}
              {imageList.length > 1 && (
                <>
                  <Button
                    isIconOnly
                    variant="light"
                    className="absolute left-4 z-10 bg-black/50 text-white hover:bg-black/70"
                    onPress={handlePrevious}
                    aria-label="Previous image"
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
                    aria-label="Next image"
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

          {/* Footer with Image Counter */}
          {imageList.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center border-t border-white/10 bg-black/50 p-4 backdrop-blur-sm">
              <span className="text-sm text-white/80">
                {currentIdx + 1} / {imageList.length}
              </span>
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
}
