import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import StoryCard from "@/components/ui/cards/add-story/StoryCard";
import AddStoryModal from "@/components/modals/AddStory/AddStoryModal";

export default function AddStory() {
  return (
    <section className="mb-5 rounded-lg border bg-white px-4 py-5 drop-shadow-sm">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper flex"
      >
        <SwiperSlide>
          <AddStoryModal />
        </SwiperSlide>

        {[1, 2, 3, 4, 5, 5, 6, 67, 77]?.map((item, index) => (
          <SwiperSlide key={index}>
            <StoryCard
              username=""
              backgroundImage="https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"
              avatarUri="https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
