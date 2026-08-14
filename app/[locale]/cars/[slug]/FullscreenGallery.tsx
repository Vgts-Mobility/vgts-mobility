"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

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
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  /*
   * Коли відкриваємо fullscreen,
   * перемикаємо Swiper саме на потрібне фото.
   */
  useEffect(() => {
    if (!open || !swiper || swiper.destroyed) return;

    swiper.slideTo(initialSlide, 0);
  }, [open, initialSlide, swiper]);

  /*
   * ESC закриває fullscreen.
   */
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /*
   * Блокуємо прокрутку основної сторінки,
   * коли відкритий fullscreen.
   */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open || !images.length) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/95
      "
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen gallery"
    >

      {/* CLOSE */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="
          absolute
          right-4
          top-4
          z-[10001]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur
          transition
          hover:bg-white/20
          sm:right-6
          sm:top-6
        "
      >
        <X size={26} />
      </button>

      {/* PREVIOUS */}

      <button
        type="button"
        aria-label="Previous photo"
        onClick={(event) => {
          event.stopPropagation();
          swiper?.slidePrev();
        }}
        className="
          absolute
          left-3
          top-1/2
          z-[10001]
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-white
          backdrop-blur
          transition
          hover:border-lime-400
          hover:bg-lime-400
          hover:text-black
          sm:left-6
          sm:h-12
          sm:w-12
        "
      >
        <ChevronLeft size={26} />
      </button>

      {/* NEXT */}

      <button
        type="button"
        aria-label="Next photo"
        onClick={(event) => {
          event.stopPropagation();
          swiper?.slideNext();
        }}
        className="
          absolute
          right-3
          top-1/2
          z-[10001]
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-white
          backdrop-blur
          transition
          hover:border-lime-400
          hover:bg-lime-400
          hover:text-black
          sm:right-6
          sm:h-12
          sm:w-12
        "
      >
        <ChevronRight size={26} />
      </button>

      {/* GALLERY */}

      <Swiper
        modules={[Navigation, Keyboard]}
        onSwiper={setSwiper}
        keyboard={{
          enabled: true,
        }}
        slidesPerView={1}
        initialSlide={initialSlide}
        className="h-full w-full"
      >

        {images.map((image, index) => (
          <SwiperSlide
            key={`${image}-${index}`}
            className="flex items-center justify-center"
          >

            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                px-16
                py-16
                sm:px-20
                lg:px-24
              "
              onClick={(event) => event.stopPropagation()}
            >

              <Image
                src={image}
                alt={`Photo ${index + 1}`}
                width={1800}
                height={1200}
                priority={index === initialSlide}
                className="
                  max-h-full
                  max-w-full
                  rounded-2xl
                  object-contain
                  select-none
                "
                draggable={false}
              />

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* COUNTER */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-5
          left-1/2
          z-[10001]
          -translate-x-1/2
          rounded-full
          bg-black/60
          px-4
          py-2
          text-sm
          font-medium
          text-white
          backdrop-blur
        "
      >
        <GalleryCounter
          swiper={swiper}
          total={images.length}
        />
      </div>

    </div>
  );
}

function GalleryCounter({
  swiper,
  total,
}: {
  swiper: SwiperType | null;
  total: number;
}) {
  const [activeIndex, setActiveIndex] = useState(
    swiper?.realIndex ?? 0
  );

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;

    const update = () => {
      setActiveIndex(swiper.realIndex);
    };

    update();

    swiper.on("slideChange", update);

    return () => {
      swiper.off("slideChange", update);
    };
  }, [swiper]);

  return (
    <>
      {activeIndex + 1} / {total}
    </>
  );
}