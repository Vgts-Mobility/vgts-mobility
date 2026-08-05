"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";

type Props = {
  open: boolean;
  images: string[];
  initialSlide: number;
  onClose: () => void;
};

export default function FullscreenGallery({
  open,
  images,
  initialSlide,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="
          absolute
          right-6
          top-6
          z-50
          rounded-full
          bg-white/10
          p-3
          text-white
          backdrop-blur
          transition
          hover:bg-white/20
        "
      >
        <X size={28} />
      </button>

      <Swiper
        modules={[Navigation, Keyboard]}
        navigation
        keyboard
        initialSlide={initialSlide}
        className="h-full w-full"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className="flex items-center justify-center"
          >
            <div
              className="flex h-full w-full items-center justify-center p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image}
                alt=""
                width={1800}
                height={1200}
                className="
                  max-h-full
                  w-auto
                  rounded-2xl
                  object-contain
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}