"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Props = {
  images: string[];
  title: string;
  onOpen?: (index: number) => void;
};

export default function CarGallery({
  images,
  title,
  onOpen,
}: Props) {
  const [thumbsSwiper, setThumbsSwiper] =
    useState<SwiperType | null>(null);

  if (!images.length) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-white/10 bg-[#10141d] text-gray-500">
        Žádné fotografie
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {/* MAIN GALLERY */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10141d]">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed
                ? thumbsSwiper
                : null,
          }}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={true}
          simulateTouch={true}
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          resistance={true}
          resistanceRatio={0.85}
          className="car-gallery"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt={`${title} - foto ${index + 1}`}
                width={1600}
                height={1000}
                priority={index === 0}
                onClick={() => onOpen?.(index)}
                className="
                  aspect-[16/10]
                  w-full
                  cursor-zoom-in
                  select-none
                  object-cover
                "
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* THUMBNAILS */}

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        spaceBetween={12}
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              alt={`${title} - miniatura ${index + 1}`}
              width={240}
              height={160}
              className="
                aspect-video
                cursor-pointer
                select-none
                rounded-xl
                border
                border-white/10
                object-cover
                transition
                hover:border-lime-400
              "
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}