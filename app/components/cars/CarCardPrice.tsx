"use client";

import { useTranslations } from "next-intl";

import { Car } from "@/types/car";

type Props = {
  car: Car;
};

export default function CarCardPrice({ car }: Props) {
  const t = useTranslations("carCard");

  return (
    <div className="border-t border-white/10 bg-white/[0.02] p-6">

      <p className="text-xs font-medium uppercase tracking-[3px] text-gray-500">
        {t("price")}
      </p>

      <h3
        className="
          mt-1
          text-3xl
          font-black
          text-lime-400
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {car.price.toLocaleString()} Kč
      </h3>

    </div>
  );
}