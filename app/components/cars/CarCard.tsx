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

export default function CarCard({
  car,
}: {
  car: Car;
}) {
  const locale = useLocale();

  const status =
    statusMap[car.status ?? ""]?.[locale] ??
    car.status ??
    "";

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

      <div className="relative h-[190px] overflow-hidden bg-[#0c1018] sm:h-[175px] lg:h-[180px]">

        <CarCardImage car={car} />

        {/* YEAR / MILEAGE */}

        <div
          className="
            absolute
            bottom-3
            left-3
            z-10
            rounded-lg
            border
            border-white/10
            bg-black/75
            px-2.5
            py-1.5
            text-[10px]
            font-bold
            text-white
            backdrop-blur-md
            sm:text-xs
          "
        >
          {car.year}

          <span className="mx-1.5 text-gray-500">
            •
          </span>

          {car.mileage.toLocaleString("cs-CZ")} km
        </div>

      </div>

      {/* MAIN INFO */}

      <div className="px-4 py-4">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h2 className="text-lg font-black leading-tight text-white">
              {car.brand}
            </h2>

            <p className="mt-1 truncate text-xs text-gray-400">
              {car.model}
            </p>

          </div>

          {/* STATUS */}

          <div
            className="
              shrink-0
              rounded-full
              border
              border-lime-400/50
              bg-lime-400/10
              px-2.5
              py-1
              text-[9px]
              font-bold
              text-lime-400
            "
          >
            {status}
          </div>

        </div>

        {/* SPECS */}

        <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">

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

      {/* PRICE */}

      <div
        className="
          border-t
          border-white/10
          bg-[#151922]
          px-4
          py-3
        "
      >

        <div className="text-[9px] uppercase tracking-[2px] text-gray-500">
          {locale === "cs"
            ? "Cena"
            : locale === "uk"
              ? "Ціна"
              : "Price"}
        </div>

        <div className="mt-1 text-2xl font-black leading-none text-lime-400">
          {car.price.toLocaleString("cs-CZ")} Kč
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
          h-8
          w-8
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

        <div className="text-[8px] uppercase tracking-[1.5px] text-gray-500">
          {label}
        </div>

        <div className="truncate text-xs font-bold text-white">
          {value || "-"}
        </div>

      </div>

    </div>
  );
}