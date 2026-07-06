"use client";

import { Car } from "@/types/car";

import CarCardImage from "./CarCardImage";
import CarCardInfo from "./CarCardInfo";
import CarCardPrice from "./CarCardPrice";

type Props = {
  car: Car;
};

export default function CarCard({ car }: Props) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#10141d]
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-lime-400/60
        hover:shadow-[0_0_45px_rgba(163,230,53,.18)]
      "
    >
      <CarCardImage car={car} />

      <CarCardInfo car={car} />

      <CarCardPrice car={car} />
    </article>
  );
}