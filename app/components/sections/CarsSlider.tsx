"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Car } from "@/types/car";
import CarCard from "../cars/CarCard";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  cars: Car[];
};

export default function CarsSlider({ cars }: Props) {
  const t = useTranslations("cars");

  return (
    <section
      id="cars"
      className="bg-[#05070d] py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-400">
            {t("eyebrow")}
          </p>

          <h2 className="mt-3 text-4xl font-black text-white lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            {t("description")}
          </p>

        </div>

        {/* SLIDER */}

        <div className="relative">

          <button
            className="cars-prev absolute -left-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#10141d] p-3 text-white transition hover:border-lime-400 hover:text-lime-400 xl:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="cars-next absolute -right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#10141d] p-3 text-white transition hover:border-lime-400 hover:text-lime-400 xl:flex"
          >
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".cars-prev",
              nextEl: ".cars-next",
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {cars.map((car) => (
              <SwiperSlide key={car.id}>
                <CarCard car={car} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* BUTTON */}

          <div className="mt-12 flex justify-center">

            <Link
              href="/cars"
              className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(163,230,53,.35)]"
            >
              {t("viewAll")}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}