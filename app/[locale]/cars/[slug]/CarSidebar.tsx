"use client";

import {
  Calendar,
  Gauge,
  Fuel,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";

import { Car } from "@/types/car";

const statusMap: Record<string, string> = {
  "В наявності": "Skladem",
  "Продано": "Prodáno",
  "Резерв": "Rezervováno",
  "В дорозі": "Na cestě",
};

export default function CarSidebar({
  car,
}: {
  car: Car;
}) {
  return (
    <aside className="rounded-3xl border border-lime-400/20 bg-[#10141d] p-6 lg:p-7">

      {/* STATUS */}

      <div className="inline-flex rounded-full bg-lime-400/15 px-4 py-2 text-sm font-semibold text-lime-400">
        {statusMap[car.status ?? ""] ?? car.status}
      </div>

      {/* TITLE */}

      <h1 className="mt-5 text-3xl font-black leading-[1.05] sm:text-4xl">
        {car.brand}
        <br />
        {car.model}
      </h1>

      {/* PRICE */}

      <div className="mt-7 text-4xl font-black leading-none text-lime-400 sm:text-5xl">
        {car.price.toLocaleString("cs-CZ")} Kč
      </div>

      {/* CONTACT */}

      <div className="mt-7 space-y-3">

        <a
          href="https://wa.me/420703695936"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-lime-400
            px-5
            py-4
            font-bold
            text-black
            transition
            hover:scale-[1.02]
          "
        >
          <MessageCircle size={21} />
          WhatsApp
        </a>

        <a
          href="tel:+420703695936"
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-white/10
            px-5
            py-3.5
            text-sm
            transition
            hover:border-lime-400
          "
        >
          <Phone size={18} />
          +420 703 695 936
        </a>

        <a
          href="tel:+420739974155"
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-white/10
            px-5
            py-3.5
            text-sm
            transition
            hover:border-lime-400
          "
        >
          <Phone size={18} />
          +420 739 974 155
        </a>

      </div>

      {/* QUICK INFO */}

      <div className="mt-7 space-y-4 border-t border-white/10 pt-6">

        <QuickInfo
          icon={<Calendar size={18} />}
          label="Rok výroby"
          value={String(car.year)}
        />

        <QuickInfo
          icon={<Gauge size={18} />}
          label="Najeto"
          value={`${car.mileage.toLocaleString("cs-CZ")} km`}
        />

        <QuickInfo
          icon={<Fuel size={18} />}
          label="Palivo"
          value={car.fuel}
        />

        <QuickInfo
          icon={<Zap size={18} />}
          label="Výkon"
          value={car.power}
        />

      </div>

    </aside>
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
    <div className="flex items-center gap-3">

      <div className="rounded-xl bg-[#151922] p-2.5 text-lime-400">
        {icon}
      </div>

      <div className="min-w-0">

        <div className="text-xs text-gray-500">
          {label}
        </div>

        <div className="text-sm font-semibold text-white">
          {value || "-"}
        </div>

      </div>

    </div>
  );
}