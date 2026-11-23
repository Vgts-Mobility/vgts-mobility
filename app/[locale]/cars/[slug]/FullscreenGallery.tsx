"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

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
  title: string;
  onClose: () => void;
};

type ZoomOffset = { x: number; y: number };

export default function FullscreenGallery({
  open,
  images,
  initialSlide,
  title,
  onClose,
}: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<ZoomOffset>({ x: 0, y: 0 });
  const touchStart = useRef<{
    distance: number;
    scale: number;
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const lastTap = useRef(0);

  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const changeZoom = (next: number) => {
    const safeScale = Math.min(4, Math.max(1, next));
    setScale(safeScale);
    if (safeScale === 1) setOffset({ x: 0, y: 0 });
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2) {
      const a = event.touches[0];
      const b = event.touches[1];
      touchStart.current = {
        distance: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
        scale,
        x: 0,
        y: 0,
        offsetX: offset.x,
        offsetY: offset.y,
      };
    } else if (event.touches.length === 1 && scale > 1) {
      touchStart.current = {
        distance: 0,
        scale,
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
        offsetX: offset.x,
        offsetY: offset.y,
      };
    } else {
      touchStart.current = null;
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    if (!start) return;

    if (event.touches.length === 2 && start.distance > 0) {
      event.preventDefault();
      const a = event.touches[0];
      const b = event.touches[1];
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      changeZoom(start.scale * (distance / start.distance));
      return;
    }

    if (event.touches.length === 1 && start.scale > 1) {
      event.preventDefault();
      const frame = event.currentTarget.getBoundingClientRect();
      const maxX = frame ? (frame.width * (scale - 1)) / 2 : 500;
      const maxY = frame ? (frame.height * (scale - 1)) / 2 : 500;
      const x = start.offsetX + event.touches[0].clientX - start.x;
      const y = start.offsetY + event.touches[0].clientY - start.y;
      setOffset({
        x: Math.max(-maxX, Math.min(maxX, x)),
        y: Math.max(-maxY, Math.min(maxY, y)),
      });
    }
  };

  const handleTouchEnd = () => {
    touchStart.current = null;
    if (scale <= 1.02) setOffset({ x: 0, y: 0 });
  };

  const handleImageClick = () => {
    const now = Date.now();
    if (now - lastTap.current < 320) {
      changeZoom(scale > 1 ? 1 : 2.4);
      lastTap.current = 0;
    } else {
      lastTap.current = now;
    }
  };

  useEffect(() => {
    if (!open) return;
    resetZoom();
  }, [open, initialSlide]);

  useEffect(() => {
    if (!open || !swiper || swiper.destroyed) return;
    swiper.slideToLoop(initialSlide, 0);
  }, [open, initialSlide, swiper]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "+" || event.key === "=") changeZoom(scale + 0.5);
      if (event.key === "-") changeZoom(scale - 0.5);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, scale]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open || !images.length) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen gallery"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-[10001] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <X size={26} />
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => swiper?.slidePrev()}
        className="absolute left-3 top-1/2 z-[10001] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:border-lime-400 hover:bg-lime-400 hover:text-black sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        type="button"
        aria-label="Next photo"
        onClick={() => swiper?.slideNext()}
        className="absolute right-3 top-1/2 z-[10001] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:border-lime-400 hover:bg-lime-400 hover:text-black sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight size={26} />
      </button>

      <Swiper
        modules={[Navigation, Keyboard]}
        onSwiper={setSwiper}
        onSlideChange={resetZoom}
        keyboard={{ enabled: true }}
        slidesPerView={1}
        loop={images.length > 1}
        initialSlide={initialSlide}
        allowTouchMove={scale === 1}
        className="fullscreen-gallery-swiper h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`${image}-${index}`}
            className="flex items-center justify-center"
          >
            <div
              className="flex h-full w-full items-center justify-center overflow-hidden px-4 py-20 sm:px-20 sm:py-14 lg:px-24 landscape:px-16 landscape:py-8"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={handleImageClick}
              style={{ touchAction: "none" }}
            >
              <Image
                src={image}
                alt={`${title} - Photo ${index + 1}`}
                unoptimized={image.includes("/optimized/")}
                width={1800}
                height={1200}
                priority={index === initialSlide}
                draggable={false}
                className="h-full w-full max-h-full max-w-full rounded-2xl object-contain select-none"
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                  transformOrigin: "center center",
                  transition: touchStart.current ? "none" : "transform 120ms ease-out",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-16 left-1/2 z-[10001] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/35 p-2 backdrop-blur-md landscape:bottom-2">
        <button
          type="button"
          aria-label="Zoom out"
          disabled={scale <= 1}
          onClick={() => changeZoom(scale - 0.5)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15 disabled:opacity-35"
        >
          <ZoomOut size={21} />
        </button>
        <span className="min-w-12 text-center text-sm font-semibold text-white">
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          aria-label="Zoom in"
          disabled={scale >= 4}
          onClick={() => changeZoom(scale + 0.5)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15 disabled:opacity-35"
        >
          <ZoomIn size={21} />
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-[10001] -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur landscape:bottom-auto landscape:top-3">
        <GalleryCounter swiper={swiper} total={images.length} />
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
  const [activeIndex, setActiveIndex] = useState(swiper?.realIndex ?? 0);

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;
    const update = () => setActiveIndex(swiper.realIndex);
    update();
    swiper.on("slideChange", update);
    return () => { swiper.off("slideChange", update); };
  }, [swiper]);

  return <>{activeIndex + 1} / {total}</>;
}
