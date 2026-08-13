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
      <div className="flex h-[250px] items-center justify-center rounded-3xl border border-white/10 bg-[#10141d] text-gray-500 sm:h-[300px] lg:h-[360px]">
        Žádné fotografie
      </div>
    );
  }

  return (
    <div className="space-y-3">

      {/* MAIN IMAGE */}

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
          slidesPerView={1}
          spaceBetween={0}
          allowTouchMove
          simulateTouch
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          resistance
          resistanceRatio={0.85}
          className="car-gallery"
        >

          {images.map((image, index) => (

            <SwiperSlide key={image}>

              <div
                onClick={() => onOpen?.(index)}
                className="
                  flex
                  h-[250px]
                  w-full
                  cursor-zoom-in
                  items-center
                  justify-center
                  bg-[#10141d]
                  sm:h-[300px]
                  lg:h-[360px]
                "
              >

                <Image
                  src={image}
                  alt={`${title} - foto ${index + 1}`}
                  width={1600}
                  height={1000}
                  priority={index === 0}
                  draggable={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 70vw, 900px"
                  className="
                    h-full
                    w-full
                    select-none
                    object-contain
                  "
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* THUMBNAILS */}

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        spaceBetween={8}
        slidesPerView={4}
        breakpoints={{
          480: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 7,
          },
          1200: {
            slidesPerView: 8,
          },
        }}
        className="car-thumbnails"
      >

        {images.map((image, index) => (

          <SwiperSlide key={image}>

            <Image
              src={image}
              alt={`${title} - miniatura ${index + 1}`}
              width={240}
              height={150}
              draggable={false}
              sizes="120px"
              className="
                aspect-video
                w-full
                cursor-pointer
                select-none
                rounded-xl
                border
                border-white/10
                object-cover
                transition
                hover:border-lime-400
              "
            />

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}