"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import "swiper/css";
import { articles } from "../constants/news";

export default function BlogSwiperAlt() {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="py-20 relative">
      <p className="text-center text-gray-800 text-lg md:text-xl mb-12 leading-relaxed">
      الاخبار والمقالات
      </p>
       <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
       احدث المدونات والاخبار
      </h2>

      
       

      <Swiper
        onSwiper={(s) => setSwiper(s)}
        slidesPerView={1.3}
        centeredSlides
        spaceBetween={30}
        loop
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="px-10"
      >
        {articles.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 rounded-3xl overflow-hidden shadow-xl ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-50"
                }`}
              >
                <div
                  className="h-[420px] bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-6 right-6 left-6 text-center">
                    <h2 className="text-white text-xl font-bold">
                      {slide.title}
                    </h2>

                    {/* ✅ زر التفاصيل */}
                    <Link href={`/news/${slide.id}`}>
                      <button className="mt-4 px-6 py-2 bg-white/90 text-black rounded-full text-sm hover:bg-white transition">
                        اقرأ المزيد
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* الأسهم */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => swiper?.slidePrev()}
          className="arrow-btn"
        >
          <ChevronRight size={22} />
        </button>

        <button
          onClick={() => swiper?.slideNext()}
          className="arrow-btn"
        >
          <ChevronLeft size={22} />
        </button>
      </div>
    </div>
  );
}
