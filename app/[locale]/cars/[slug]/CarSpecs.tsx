"use client";

import { Car } from "@/types/car";
import { useTranslations } from "next-intl";

export default function CarSpecs({
  car,
}: {
  car: Car;
}) {
  const t = useTranslations("carDetails.technicalData");

  return (
    <section className="mt-7">

      <h2 className="mb-4 text-2xl font-black sm:text-3xl">
        {t("title")}
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">

        <SpecCard
          title={t("transmission")}
          value={translateTransmission(
            car.transmission,
            t
          )}
        />

        <SpecCard
          title={t("drive")}
          value={translateDrive(
            car.drive,
            t
          )}
        />

        <SpecCard
          title={t("body")}
          value={car.body_type}
        />

        <SpecCard
          title={t("color")}
          value={car.color}
        />

        <SpecCard
          title={t("battery")}
          value={car.battery}
        />

        <SpecCard
          title={t("soh")}
          value={
            car.soh !== null &&
            car.soh !== undefined
              ? `${car.soh}%`
              : null
          }
        />

        <SpecCard
          title={t("vin")}
          value={car.vin}
        />

        <SpecCard
          title={t("seats")}
          value={car.seats?.toString()}
        />

      </div>

    </section>
  );
}

function SpecCard({
  title,
  value,
}: {
  title: string;
  value?: string | number | null;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#10141d]
        min-w-0
        px-3
        py-3
        transition
        hover:border-lime-400/40
      "
    >

      <div className="break-words text-[9px] uppercase tracking-[1.3px] text-gray-500 sm:text-[10px] sm:tracking-[2px]">
        {title}
      </div>

      <div className="mt-1 min-w-0 break-words text-sm font-bold text-white sm:text-base">
        {value !== null &&
        value !== undefined &&
        value !== ""
          ? value
          : "-"}
      </div>

    </div>
  );
}

function translateTransmission(
  value: string | null | undefined,
  t: ReturnType<typeof useTranslations>
) {
  switch (value) {
    case "Автомат":
      return t("transmission") === "Převodovka"
        ? "Automatická"
        : value;

    case "Механіка":
      return "Manuální";

    default:
      return value;
  }
}

function translateDrive(
  value: string | null | undefined,
  t: ReturnType<typeof useTranslations>
) {
  switch (value) {
    case "Передній":
      return "Přední";

    case "Задній":
      return "Zadní";

    case "Повний":
      return "4x4";

    default:
      return value;
  }
}