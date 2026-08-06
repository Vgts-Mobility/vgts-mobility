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
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CircleX,
  Clock3,
  Truck,
} from "lucide-react";

import { Car } from "@/types/car";
import { getPublicImage } from "@/lib/storage/get-public-image";
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

      <div className="mx-auto max-w-7xl px-6 pt-5 pb-8">

        <div className="mb-5 flex items-center gap-6">

  <button
    type="button"
    onClick={() => router.back()}
    className="inline-flex items-center gap-2 rounded-2xl border border-lime-400/20 bg-[#10141d] px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-x-1 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
  >
    <ArrowLeft size={18} />
    Zpět
  </button>

  <h1 className="text-5xl font-black leading-tight">
    {car.brand} {car.model}
  </h1>

</div>

<div className="grid gap-6 xl:grid-cols-[1.9fr_360px] items-start">

  {/* GALERIE */}

 <div>

  <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#10141d]">

    {images.length > 0 && (
            <>

              <Image
  src={images[current]}
  alt={`${car.brand} ${car.model}`}
  width={1600}
  height={900}
  priority
  className="max-h-full max-w-full object-contain"
/>

              <button
                type="button"
                onClick={prev}
                className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur transition hover:bg-lime-400 hover:text-black"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                onClick={next}
                className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur transition hover:bg-lime-400 hover:text-black"
              >
                <ChevronRight size={28} />
              </button>

            </>
          )}

        </div>

        {/* MINIATURY */}

        <div className="mt-2 grid grid-cols-5 gap-2 md:grid-cols-6 lg:grid-cols-8">

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
  <div className="flex aspect-video items-center justify-center bg-[#10141d]">
    <Image
      src={image}
      alt=""
      width={180}
      height={120}
      className="max-h-full max-w-full object-contain"
    />
  </div>
</button>

          ))}

         </div>

        </div>

        <div>

  <div className="sticky top-28 w-full max-w-[380px] rounded-3xl border border-lime-400/20 bg-[#10141d] p-6">

    <div className="text-[44px] font-black whitespace-nowrap text-lime-400">
      {car.price.toLocaleString()} Kč
    </div>

    <div className="mt-5">

  {car.status === "В наявності" && (
    <div className="inline-flex items-center gap-3 rounded-full border border-lime-400/40 bg-lime-400/15 px-6 py-3 text-lg font-bold uppercase tracking-[2px] text-lime-400 shadow-lg">
      <CheckCircle2 size={22} />
      Skladem
    </div>
  )}

  {car.status === "Продано" && (
    <div className="inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-500/15 px-6 py-3 text-lg font-bold uppercase tracking-[2px] text-red-400 shadow-lg">
      <CircleX size={22} />
      Prodáno
    </div>
  )}

  {car.status === "Резерв" && (
    <div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/40 bg-yellow-500/15 px-6 py-3 text-lg font-bold uppercase tracking-[2px] text-yellow-300 shadow-lg">
      <Clock3 size={22} />
      Rezervováno
    </div>
  )}

  {car.status === "В дорозі" && (
    <div className="inline-flex items-center gap-3 rounded-full border border-sky-500/40 bg-sky-500/15 px-6 py-3 text-lg font-bold uppercase tracking-[2px] text-sky-300 shadow-lg">
      <Truck size={22} />
      Na cestě
    </div>
  )}

</div>

    <div className="mt-8 space-y-3">

      <a
        href="https://wa.me/420739974155"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-xl bg-lime-400 px-5 py-4 text-black transition hover:scale-[1.02]"
      >
        <MessageCircle size={22} />

        <div>

          <div className="font-bold">
            Taras
          </div>

          <div className="text-sm opacity-80">
            +420 739 974 155
          </div>

        </div>

      </a>

      <a
        href="https://wa.me/420703695936"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-xl bg-lime-400 px-5 py-4 text-black transition hover:scale-[1.02]"
      >
        <MessageCircle size={22} />

        <div>

          <div className="font-bold">
            Vadym
          </div>

          <div className="text-sm opacity-80">
            +420 703 695 936
          </div>

        </div>

      </a>

    </div>

    <div className="mt-8 space-y-5">

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

 </div> {/* sticky */}

  </div> {/* pravý sloupec */}

</div> {/* grid */}
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
                  className="rounded-xl border border-white/10 bg-[#151922] px-4 py-3 text-sm font-medium text-white transition hover:border-lime-400/40 hover:bg-[#1a1f2a]"
                >
                 <span className="mr-2 text-lime-400">✓</span>
{feature}
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