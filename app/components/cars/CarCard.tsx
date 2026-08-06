"use client";

import Link from "next/link";

import { Car } from "@/types/car";

import CarCardImage from "./CarCardImage";
import CarCardInfo from "./CarCardInfo";
import CarCardPrice from "./CarCardPrice";

type Props = {
  car: Car;
};

export default function CarCard({ car }: Props) {
  return (
    <Link
      href={`/cars/${car.slug}`}
      className="block"
    >
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
          hover:-translate-y-3
          hover:border-lime-400/60
          hover:shadow-[0_25px_60px_rgba(163,230,53,.22)]
          cursor-pointer
        "
      >
        <CarCardImage car={car} />

        <CarCardInfo car={car} />

        <CarCardPrice car={car} />
      </article>
    </Link>
  );
}