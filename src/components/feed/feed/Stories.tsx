"use client";
import { MOCK_STORIES } from "@/lib/data/mockData";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import StoryCard from "../../ui/cards/add-story/StoryCard";
import ImageModal from "../../ui/modals/ImageModal";
import AddStoryInput from "./AddStoryInput";

import "swiper/css/bundle";

export default function Stories() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [selectedStory, setSelectedStory] = useState<{
    images: string[];
    currentIndex: number;
    username: string;
  } | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    swiperRef.current?.autoplay?.start();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
    swiperRef.current?.autoplay?.start();
  };

  const closeModal = () => setSelectedStory(null);

  return (
    <>
      <section className="relative mb-5 overflow-hidden rounded-lg bg-background">
        <div className="group relative px-2">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onPress={handlePrev}
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 bg-white/90 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-gray-800/90 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onPress={handleNext}
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 bg-white/90 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-gray-800/90 lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <Swiper
            className="stories-swiper"
            modules={[Autoplay, Navigation]}
            slidesPerView="auto"
            spaceBetween={12}
            speed={600}
            loop={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTimeout(() => swiper.autoplay.start(), 0);
            }}
            breakpoints={{
              0: {
                spaceBetween: 8,
              },
              375: {
                spaceBetween: 10,
              },
              640: {
                spaceBetween: 12,
              },
              1024: {
                spaceBetween: 14,
              },
              1280: {
                spaceBetween: 16,
              },
            }}
            grabCursor
          >
            <SwiperSlide className="!w-auto">
              <AddStoryInput />
            </SwiperSlide>

            {MOCK_STORIES.map((story) => (
              <SwiperSlide key={story.id} className="!w-auto">
                <StoryCard
                  backgroundImage={story.backgroundImage}
                  avatarUri={story.user.avatar}
                  username={story.user.name}
                  onTopClick={() =>
                    setSelectedStory({
                      images: [story.backgroundImage],
                      currentIndex: 0,
                      username: story.user.name,
                    })
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {selectedStory && (
        <ImageModal
          isOpen
          onClose={closeModal}
          images={selectedStory.images}
          currentIndex={selectedStory.currentIndex}
          imageUrl={selectedStory.images[0]}
          alt={`${selectedStory.username}'s story`}
        />
      )}

      <style jsx global>{`
        .stories-swiper {
          padding: 8px 0;
          width: 100%;
          overflow: visible;
        }

        .stories-swiper .swiper-wrapper {
          scrollbar-width: none;
          -ms-overflow-style: none;
          display: flex;
          align-items: center;
        }

        .stories-swiper .swiper-wrapper::-webkit-scrollbar {
          display: none;
        }

        .stories-swiper .swiper-slide {
          transition: transform 0.3s ease;
          height: auto;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .stories-swiper {
            padding: 6px 0;
          }
        }
      `}</style>
    </>
  );
}
