"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  ArrowLeft,
  Calendar,
  Gauge,
  Fuel,
  Zap,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Car } from "@/types/car";
import { getPublicImage } from "@/lib/storage/get-public-image";

const statusMap: Record<string, string> = {
  "В наявності": "Skladem",
  "Продано": "Prodáno",
  "Резерв": "Rezervováno",
  "В дорозі": "Na cestě",
};

export default function CarDetails({
  car,
}: {
  car: Car;
}) {
  const router = useRouter();

  const images =
    car.images?.length
      ? car.images.map(getPublicImage)
      : [];

  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  function prev() {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  return (
    <main className="min-h-screen bg-[#05070d] text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <button
          type="button"
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-lime-400 hover:text-lime-400"
        >
          <ArrowLeft size={18} />
          Zpět
        </button>

        {/* GALERIE */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10141d]">

          {images.length > 0 && (
            <>
              <Image
                src={images[current]}
                alt={`${car.brand} ${car.model}`}
                width={1600}
                height={900}
                priority
                className="h-[560px] w-full object-cover"
              />

              <button
                type="button"
                onClick={prev}
                className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur transition hover:bg-lime-400 hover:text-black"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur transition hover:bg-lime-400 hover:text-black"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

        </div>

        {/* MINIATURY */}

        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">

          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrent(index)}
              className={`overflow-hidden rounded-xl border-2 transition ${
                current === index
                  ? "border-lime-400"
                  : "border-white/10"
              }`}
            >
              <Image
                src={image}
                alt=""
                width={180}
                height={120}
                className="h-24 w-40 object-cover"
              />
            </button>
          ))}

        </div>

        {/* INFO */}

        <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_auto]">

          <div>

            <h1 className="text-5xl font-black">
              {car.brand} {car.model}
            </h1>

            <div className="mt-6 flex flex-wrap gap-8">

              <QuickInfo
                icon={<Calendar size={20} />}
                label="Rok výroby"
                value={String(car.year)}
              />

              <QuickInfo
                icon={<Gauge size={20} />}
                label="Najeto"
                value={`${car.mileage.toLocaleString()} km`}
              />

              <QuickInfo
                icon={<Fuel size={20} />}
                label="Palivo"
                value={car.fuel}
              />

              <QuickInfo
                icon={<Zap size={20} />}
                label="Výkon"
                value={car.power}
              />

            </div>

          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-[#10141d] p-8">

            <div className="text-5xl font-black text-lime-400">
              {car.price.toLocaleString()} Kč
            </div>

            <div className="mt-3 text-sm uppercase tracking-[4px] text-lime-400">
              {statusMap[car.status ?? ""] ?? car.status}
            </div>

            <div className="mt-8 space-y-3">

              <a
                href="https://wa.me/420703695936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-lime-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>

              <a
                href="tel:+420703695936"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:border-lime-400"
              >
                <Phone size={18} />
                +420 703 695 936
              </a>

              <a
                href="tel:+420739974155"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:border-lime-400"
              >
                <Phone size={18} />
                +420 739 974 155
              </a>

            </div>

          </div>

        </div>

        {/* TECHNICKÉ ÚDAJE */}
                <section className="mt-14">

          <h2 className="mb-6 text-3xl font-black">
            Technické údaje
          </h2>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

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

        {/* VÝBAVA */}

        <section className="mt-14">

          <h2 className="mb-6 text-3xl font-black">
            Výbava
          </h2>

          {car.features?.length ? (

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">

              {car.features.map((feature) => (

                <div
                  key={feature}
                  className="rounded-xl border border-lime-400/20 bg-lime-400/10 px-4 py-3 text-sm font-medium text-lime-300"
                >
                  ✓ {feature}
                </div>

              ))}

            </div>

          ) : (

            <div className="rounded-2xl border border-white/10 bg-[#10141d] p-6 text-gray-400">
              Výbava není uvedena.
            </div>

          )}

        </section>

        {/* POPIS */}

        <section className="mt-14">

          <h2 className="mb-6 text-3xl font-black">
            Popis vozu
          </h2>

          <div className="rounded-3xl border border-white/10 bg-[#10141d] p-8 leading-8 text-gray-300">

            {car.description ||
              "Popis vozidla bude doplněn."}

          </div>

        </section>

      </div>

    </main>

  );
}

function QuickInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | null;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="rounded-xl bg-[#151922] p-3 text-lime-400">
        {icon}
      </div>

      <div>

        <div className="text-sm text-gray-500">
          {label}
        </div>

        <div className="font-semibold">
          {value || "-"}
        </div>

      </div>

    </div>
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
    <div className="rounded-2xl border border-white/10 bg-[#10141d] p-6">

      <div className="text-sm uppercase tracking-[3px] text-gray-500">
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