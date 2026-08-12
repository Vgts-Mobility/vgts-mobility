"use client";

import { useTranslations } from "next-intl";

import { Car } from "@/types/car";

export default function CarSpecs({
  car,
}: {
  car: Car;
}) {
  const t = useTranslations("carDetails");

  return (
    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-black">
        {t("technicalData.title")}
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <SpecCard
          title={t("technicalData.transmission")}
          value={translateTransmission(
            car.transmission,
            t
          )}
        />

        <SpecCard
          title={t("technicalData.drive")}
          value={translateDrive(
            car.drive,
            t
          )}
        />

        <SpecCard
          title={t("technicalData.body")}
          value={car.body_type}
        />

        <SpecCard
          title={t("technicalData.color")}
          value={car.color}
        />

        <SpecCard
          title={t("technicalData.battery")}
          value={car.battery}
        />

        <SpecCard
          title={t("technicalData.soh")}
          value={car.soh}
        />

        <SpecCard
          title={t("technicalData.vin")}
          value={car.vin}
        />

        <SpecCard
          title={t("technicalData.seats")}
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
  value?: string | null;
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#10141d]
        p-6
        transition
        hover:border-lime-400/40
      "
    >
      <div className="text-xs uppercase tracking-[3px] text-gray-500">
        {title}
      </div>

      <div className="mt-3 text-xl font-bold">
        {value || "-"}
      </div>
    </div>
  );
}

function translateTransmission(
  value: string | null | undefined,
  t: ReturnType<typeof useTranslations<"carDetails">>
) {
  switch (value) {
    case "Автомат":
      return t("values.automatic");

    case "Механіка":
      return t("values.manual");

    default:
      return value;
  }
}

function translateDrive(
  value: string | null | undefined,
  t: ReturnType<typeof useTranslations<"carDetails">>
) {
  switch (value) {
    case "Передній":
      return t("values.front");

    case "Задній":
      return t("values.rear");

    case "Повний":
      return t("values.awd");

    default:
      return value;
  }
}