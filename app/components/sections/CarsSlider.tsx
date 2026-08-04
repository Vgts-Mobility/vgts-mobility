"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <section
      id="cars"
      className="bg-[#05070d] py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-400">
              AKTUÁLNÍ NABÍDKA
            </p>

            <h2 className="mt-3 text-4xl font-black text-white lg:text-5xl">
              Prověřené vozy skladem
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Nabízíme pečlivě prověřené vozy připravené k okamžitému
              odběru. Pokud nenajdete vůz podle svých představ,
              rádi pro vás zajistíme individuální dovoz z celé Evropy.
            </p>

          </div>

          <Link
            href="/cars"
            className="inline-flex items-center justify-center rounded-full border border-lime-400 px-6 py-3 font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            Zobrazit všechny vozy
          </Link>

        </div>

        {/* SLIDER */}

        <div className="relative">

          <button className="cars-prev absolute -left-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#10141d] p-3 text-white transition hover:border-lime-400 hover:text-lime-400 xl:flex">
            <ChevronLeft size={24} />
          </button>

          <button className="cars-next absolute -right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#10141d] p-3 text-white transition hover:border-lime-400 hover:text-lime-400 xl:flex">
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

        </div>

      </div>
    </section>
  );
}