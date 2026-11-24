"use client";

import Link from "next/link";
import { Calendar, Gauge, Fuel, Zap } from "lucide-react";
import { useLocale } from "next-intl";

import { Car } from "@/types/car";
import CarCardImage from "./CarCardImage";

const statusMap: Record<
  string,
  Record<string, string>
> = {
  "В наявності": {
    cs: "Skladem",
    uk: "В наявності",
    en: "Available",
  },

  "Продано": {
    cs: "Prodáno",
    uk: "Продано",
    en: "Sold",
  },

  "Резерв": {
    cs: "Rezervováno",
    uk: "Резерв",
    en: "Reserved",
  },

  "В дорозі": {
    cs: "Na cestě",
    uk: "В дорозі",
    en: "On the way",
  },
};

const statusStyles: Record<string, string> = {
  "В наявності":
    "border-lime-400/50 bg-lime-400/10 text-lime-400",

  "Продано":
    "border-red-500/50 bg-red-500/10 text-red-400",

  "Резерв":
    "border-yellow-400/50 bg-yellow-400/10 text-yellow-400",

  "В дорозі":
    "border-blue-400/50 bg-blue-400/10 text-blue-400",
};

export default function CarCard({
  car,
  imageFit = "cover",
  catalogLayout = false,
}: {
  car: Car;
  imageFit?: "cover" | "contain";
  catalogLayout?: boolean;
}) {
  const locale = useLocale();

  const status =
    statusMap[car.status ?? ""]?.[locale] ??
    car.status ??
    "";

  const statusStyle =
    statusStyles[car.status ?? ""] ??
    "border-white/10 bg-white/10 text-white";

  return (
    <Link
      href={`/${locale}/cars/${car.slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#10141d]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-lime-400/40
        hover:shadow-xl
        hover:shadow-black/30
      "
    >

      {/* PHOTO */}

      <div className={`relative overflow-hidden bg-[#0c1018] ${catalogLayout ? "aspect-[16/9] w-full" : "h-[118px] sm:h-[150px] lg:h-[145px] 2xl:h-[155px]"}`}>

        <CarCardImage car={car} fit={imageFit} />


      </div>

      {/* MAIN INFO */}

      <div className="px-2 py-2 sm:px-3 sm:py-3">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h2 className="text-sm font-black leading-tight text-white sm:text-base">
              {car.brand}
            </h2>

            <p className="mt-0.5 truncate text-[9px] text-gray-400 sm:text-[11px]">
              {car.model}
            </p>

          </div>

          {/* STATUS */}

          <div
            className={`
              shrink-0
              rounded-full
              border
              px-1.5
              py-1
              text-[9px]
              sm:px-3
              sm:py-1.5
              sm:text-xs
              font-black
              ${statusStyle}
            `}
          >
            {status}
          </div>

        </div>

        {/* SPECS */}

        <div className="mt-2 grid grid-cols-2 gap-x-1 gap-y-1.5 sm:mt-3 sm:gap-x-2 sm:gap-y-2">

          <Info
            icon={<Calendar size={15} />}
            label={
              locale === "cs"
                ? "Rok"
                : locale === "uk"
                  ? "Рік"
                  : "Year"
            }
            value={String(car.year)}
          />

          <Info
            icon={<Gauge size={15} />}
            label={
              locale === "cs"
                ? "Najeto"
                : locale === "uk"
                  ? "Пробіг"
                  : "Mileage"
            }
            value={`${car.mileage.toLocaleString("cs-CZ")} km`}
          />

          <Info
            icon={<Fuel size={15} />}
            label={
              locale === "cs"
                ? "Palivo"
                : locale === "uk"
                  ? "Паливо"
                  : "Fuel"
            }
            value={car.fuel}
          />

          <Info
            icon={<Zap size={15} />}
            label={
              locale === "cs"
                ? "Výkon"
                : locale === "uk"
                  ? "Потужність"
                  : "Power"
            }
            value={car.power}
          />

        </div>

      </div>

      {/* PRICE — keep the section visible; blur amounts for sold vehicles */}
      <div
        className="
          border-t
          border-white/10
          bg-[#151922]
          px-2
          py-2
          sm:px-4
          sm:py-3
        "
      >
        <div className="text-[9px] uppercase tracking-[2px] text-gray-500">
          {locale === "cs"
            ? "Cena"
            : locale === "uk"
              ? "Ціна"
              : "Price"}
        </div>

        <div
          className={`mt-1 flex flex-col items-start gap-1 ${
            car.status === "Продано"
              ? "[&_span.price-value]:blur-[6px] [&_span.price-value]:select-none"
              : ""
          }`}
        >
          <span className="price-value whitespace-nowrap text-sm font-black leading-tight text-lime-400 sm:text-lg">{car.price.toLocaleString("cs-CZ")} Kč</span>
          <span className="whitespace-nowrap text-sm font-black leading-tight text-[#7898c4] sm:text-lg">
            <span className={car.status === "Продано" ? "blur-[6px] select-none" : ""}>{Math.round(car.price / 1.21).toLocaleString("cs-CZ")} Kč</span>{" "}
            <span className="text-[9px] font-semibold text-gray-500">{locale === "cs" ? "bez DPH" : locale === "uk" ? "без ПДВ" : "excl. VAT"}</span>
          </span>
        </div>
      </div>

    </Link>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | null;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2">

      <div
        className="
          flex
          h-6
          w-6
          sm:h-8
          sm:w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#202632]
          text-lime-400
        "
      >
        {icon}
      </div>

      <div className="min-w-0">

        <div className="text-[6px] uppercase tracking-[0.5px] text-gray-500 sm:text-[7px] sm:tracking-[1px]">
          {label}
        </div>

        <div className="truncate text-[9px] font-bold text-white sm:text-[11px]">
          {value || "-"}
        </div>

      </div>

    </div>
  );
}