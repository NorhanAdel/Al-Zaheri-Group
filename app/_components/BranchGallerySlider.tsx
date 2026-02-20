"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type BranchGallerySliderProps = {
  images: string[];
};

export default function BranchGallerySlider({
  images,
}: BranchGallerySliderProps) {
  return (
    <div className="relative mb-10 w-[70%]">
      <h3 className="text-4xl font-bold inline-block pb-2 mb-10">
        صور
      </h3>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="branch-gallery"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={img}
                alt={`gallery-${i}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
