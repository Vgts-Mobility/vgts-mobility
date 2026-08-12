"use client";

import {
  Calendar,
  Gauge,
  Fuel,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";

import { useTranslations } from "next-intl";

import { Car } from "@/types/car";

export default function CarSidebar({
  car,
}: {
  car: Car;
}) {
  const t = useTranslations("carDetails");

  const statusMap: Record<string, string> = {
    "В наявності": t("status.available"),
    "Продано": t("status.sold"),
    "Резерв": t("status.reserved"),
    "В дорозі": t("status.inTransit"),
  };

  return (
    <aside className="sticky top-28 h-fit rounded-3xl border border-lime-400/20 bg-[#10141d] p-8">

      <div className="inline-flex rounded-full bg-lime-400/15 px-4 py-2 text-sm font-semibold text-lime-400">
        {statusMap[car.status ?? ""] ?? car.status}
      </div>

      <h1 className="mt-6 text-4xl font-black leading-tight">
        {car.brand}
        <br />
        {car.model}
      </h1>

      <div className="mt-8 text-5xl font-black text-lime-400">
        {car.price.toLocaleString()} Kč
      </div>

      <div className="mt-8 space-y-4">

        <a
          href="https://wa.me/420703695936"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-2xl bg-lime-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
        >
          <MessageCircle size={22} />
          {t("contact.whatsapp")}
        </a>

        <a
          href="tel:+420703695936"
          className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 px-6 py-4 transition hover:border-lime-400"
        >
          <Phone size={18} />
          +420 703 695 936
        </a>

        <a
          href="tel:+420739974155"
          className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 px-6 py-4 transition hover:border-lime-400"
        >
          <Phone size={18} />
          +420 739 974 155
        </a>

      </div>

      <div className="mt-10 space-y-5">

        <QuickInfo
          icon={<Calendar size={20} />}
          label={t("quickInfo.year")}
          value={String(car.year)}
        />

        <QuickInfo
          icon={<Gauge size={20} />}
          label={t("quickInfo.mileage")}
          value={`${car.mileage.toLocaleString()} km`}
        />

        <QuickInfo
          icon={<Fuel size={20} />}
          label={t("quickInfo.fuel")}
          value={car.fuel}
        />

        <QuickInfo
          icon={<Zap size={20} />}
          label={t("quickInfo.power")}
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