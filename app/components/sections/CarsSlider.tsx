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

export default function CarsSlider({
  cars,
}: Props) {
  const t = useTranslations("cars");

  return (
    <section
      id="cars"
      className="
        bg-[#05070d]
        py-9
        sm:py-10
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* HEADER */}

        <div className="mb-6 sm:mb-7">

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[4px]
              text-lime-400
              sm:text-xs
              sm:tracking-[5px]
            "
          >
            {t("eyebrow")}
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-black
              leading-tight
              text-white
              sm:text-4xl
              lg:text-[42px]
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-gray-400
              sm:text-[15px]
            "
          >
            {t("description")}
          </p>

        </div>

        {/* SLIDER */}

        <div className="relative">

          {/* PREVIOUS */}

          <button
            type="button"
            aria-label="Previous"
            className="
              cars-prev
              absolute
              -left-4
              top-1/2
              z-20
              hidden
              -translate-y-1/2
              rounded-full
              border
              border-white/10
              bg-[#10141d]
              p-2.5
              text-white
              shadow-lg
              transition
              hover:border-lime-400
              hover:text-lime-400
              xl:flex
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* NEXT */}

          <button
            type="button"
            aria-label="Next"
            className="
              cars-next
              absolute
              -right-4
              top-1/2
              z-20
              hidden
              -translate-y-1/2
              rounded-full
              border
              border-white/10
              bg-[#10141d]
              p-2.5
              text-white
              shadow-lg
              transition
              hover:border-lime-400
              hover:text-lime-400
              xl:flex
            "
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".cars-prev",
              nextEl: ".cars-next",
            }}
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.15,
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

          <div className="mt-7 flex justify-center">

            <Link
              href="/cars"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-lime-400
                px-7
                py-3
                text-sm
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(163,230,53,.35)]
              "
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