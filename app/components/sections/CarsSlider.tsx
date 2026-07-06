"use client";

import { Car } from "@/types/car";
import CarCard from "../cars/CarCard";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  cars: Car[];
};

export default function CarsSlider({ cars }: Props) {
  return (
    <section
      id="cars"
      className="bg-[#05070d] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[6px] text-lime-400">
            Aktuální nabídka
          </p>

          <h2 className="mt-5 text-5xl font-black text-white lg:text-6xl">
            Vozy skladem
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Vyberte si vůz z naší aktuální nabídky nebo nás kontaktujte
            pro individuální dovoz z evropských aukcí.
          </p>

        </div>

        <div className="relative">

          <button className="cars-prev absolute -left-6 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#10141d] p-3 text-white transition hover:border-lime-400 hover:text-lime-400 lg:flex">
            <ChevronLeft size={26} />
          </button>

          <button className="cars-next absolute -right-6 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#10141d] p-3 text-white transition hover:border-lime-400 hover:text-lime-400 lg:flex">
            <ChevronRight size={26} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".cars-prev",
              nextEl: ".cars-next",
            }}
            spaceBetween={28}
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

        <div className="mt-14 flex justify-center">

          <Link
            href="/cars"
            className="rounded-full border border-lime-400 px-8 py-4 font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            Zobrazit všechny vozy
          </Link>

        </div>

      </div>
    </section>
  );
}