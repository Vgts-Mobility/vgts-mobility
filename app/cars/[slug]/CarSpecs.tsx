"use client";

import { Car } from "@/types/car";

export default function CarSpecs({
  car,
}: {
  car: Car;
}) {
  return (
    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-black">
        Technické údaje
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <SpecCard
          title="Převodovka"
          value={translateTransmission(car.transmission)}
        />

        <SpecCard
          title="Pohon"
          value={translateDrive(car.drive)}
        />

        <SpecCard
          title="Karoserie"
          value={car.body_type}
        />

        <SpecCard
          title="Barva"
          value={car.color}
        />

        <SpecCard
          title="Kapacita baterie"
          value={car.battery}
        />

        <SpecCard
          title="SOH baterie"
          value={car.soh}
        />

        <SpecCard
          title="VIN"
          value={car.vin}
        />

        <SpecCard
          title="Počet míst"
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
  value?: string | null
) {
  switch (value) {
    case "Автомат":
      return "Automatická";

    case "Механіка":
      return "Manuální";

    default:
      return value;
  }
}

function translateDrive(
  value?: string | null
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