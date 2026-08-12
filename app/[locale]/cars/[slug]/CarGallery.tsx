"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("carDetails.gallery");

  const [thumbsSwiper, setThumbsSwiper] =
    useState<SwiperType | null>(null);

  if (!images.length) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-white/10 bg-[#10141d] text-gray-500">
        {t("noPhotos")}
      </div>
    );
  }

  return (
    <div className="space-y-5">

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10141d]">

        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{
            swiper:
              thumbsSwiper &&
              !thumbsSwiper.destroyed
                ? thumbsSwiper
                : null,
          }}
          className="car-gallery"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image}>

              <Image
                src={image}
                alt={title}
                width={1600}
                height={1000}
                priority={index === 0}
                onClick={() => onOpen?.(index)}
                className="
                  aspect-[16/10]
                  w-full
                  cursor-zoom-in
                  object-cover
                "
              />

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

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
        {images.map((image) => (
          <SwiperSlide key={image}>

            <Image
              src={image}
              alt=""
              width={240}
              height={160}
              className="
                aspect-video
                cursor-pointer
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