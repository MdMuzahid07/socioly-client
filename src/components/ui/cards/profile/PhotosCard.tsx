"use client";

import ImageModal from "@/components/ui/modals/ImageModal";
import { MOCK_PHOTOS } from "@/lib/data/mockData";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function PhotosCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <Card className="mt-4 rounded-none border-none text-foreground shadow-none">
        <CardBody>
          <h3 className="mb-4 text-xl font-semibold">
            Photos ({MOCK_PHOTOS.length})
          </h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {MOCK_PHOTOS.map((photoUrl, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleImageClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleImageClick(index);
                  }
                }}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={photoUrl}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={MOCK_PHOTOS[selectedImageIndex]}
        alt={`Photo ${selectedImageIndex + 1}`}
        images={MOCK_PHOTOS}
        currentIndex={selectedImageIndex}
      />
    </>
  );
}
