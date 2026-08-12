"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Car } from "@/types/car";
import { getPublicImage } from "@/lib/storage/get-public-image";

type Props = {
  car: Car;
};

export default function CarCardImage({ car }: Props) {
  const t = useTranslations("carCard");

  const imageSrc =
    car.images && car.images.length > 0
      ? getPublicImage(car.images[0])
      : "/placeholder-car.jpg";

  return (
    <div className="group relative h-90 overflow-hidden">

      <Image
        src={imageSrc}
        alt={`${car.brand} ${car.model}`}
        fill
        priority={false}
        sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/10 to-transparent" />

      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

      {/* STATUS */}

      {car.status === "В наявnosti" && (
        <div className="absolute left-5 top-5 rounded-full border border-lime-400/50 bg-[#0b1116]/90 px-4 py-2 text-sm font-bold uppercase tracking-wide text-lime-400 backdrop-blur-md shadow-xl">
          {t("status.available")}
        </div>
      )}

      {car.status === "Продано" && (
        <div className="absolute left-5 top-5 rounded-full border border-red-500/50 bg-[#0b1116]/90 px-4 py-2 text-sm font-bold uppercase tracking-wide text-red-400 backdrop-blur-md shadow-xl">
          {t("status.sold")}
        </div>
      )}

      {car.status === "Резерв" && (
        <div className="absolute left-5 top-5 rounded-full border border-yellow-500/50 bg-[#0b1116]/90 px-4 py-2 text-sm font-bold uppercase tracking-wide text-yellow-300 backdrop-blur-md shadow-xl">
          {t("status.reserved")}
        </div>
      )}

      {car.status === "В дорозі" && (
        <div className="absolute left-5 top-5 rounded-full border border-sky-500/50 bg-[#0b1116]/90 px-4 py-2 text-sm font-bold uppercase tracking-wide text-sky-300 backdrop-blur-md shadow-xl">
          {t("status.onTheWay")}
        </div>
      )}

      {/* YEAR + MILEAGE */}

      <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-[#0b1116]/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-xl">
        {car.year}

        {car.mileage > 0 && (
          <>
            <span className="mx-2 text-lime-400">•</span>
            {car.mileage.toLocaleString()} km
          </>
        )}
      </div>

    </div>
  );
}