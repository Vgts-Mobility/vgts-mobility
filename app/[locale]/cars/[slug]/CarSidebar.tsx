"use client";

import {
  Calendar,
  Gauge,
  Fuel,
  Zap,
  Phone,
  MessageCircle,
  BatteryCharging,
  CarFront,
  FileText,
} from "lucide-react";

import { Car } from "@/types/car";
import { getPublicImage } from "@/lib/storage/get-public-image";
import { useTranslations } from "next-intl";

const BUSINESS_PHONE = "+420 732 827 533";
const BUSINESS_TEL = "+420732827533";
const BUSINESS_WA = "https://wa.me/420732827533";

const statusMap: Record<string, string> = {
  "В наявності": "Skladem",
  "Продано": "Prodáno",
  "Резерв": "Rezervováno",
  "В дорозі": "Na cestě",
};

const statusStyles: Record<string, string> = {
  "В наявності":
    "border border-lime-400/30 bg-lime-400/15 text-lime-400",

  "Продано":
    "border border-red-500/40 bg-red-500/15 text-red-400",

  "Резерв":
    "border border-yellow-400/30 bg-yellow-400/15 text-yellow-400",

  "В дорозі":
    "border border-blue-400/30 bg-blue-400/15 text-blue-400",
};

export default function CarSidebar({
  car,
}: {
  car: Car;
}) {
  const currentStatus = car.status ?? "";
  const t = useTranslations("carDetails.documents");

  return (
    <aside className="rounded-3xl border border-lime-400/20 bg-[#10141d] p-6 lg:p-7">

      {/* STATUS */}

      <div
        className={`
          inline-flex
          rounded-full
          px-5
          py-2.5
          text-base
          font-black
          ${statusStyles[currentStatus] ?? "border border-white/10 bg-white/10 text-white"}
        `}
      >
        {statusMap[currentStatus] ?? currentStatus}
      </div>

      {/* TITLE */}

      <h1 className="mt-5 text-3xl font-black leading-[1.05] sm:text-4xl">
        {car.brand}
        <br />
        {car.model}
      </h1>

      {/* PRICE */}

      <div className="mt-7 space-y-2">
        <div className="whitespace-nowrap text-3xl font-black leading-tight text-lime-400 sm:text-4xl">
          {car.price.toLocaleString("cs-CZ")} Kč
        </div>
        <div className="text-3xl font-black leading-tight text-gray-300 sm:text-4xl">
          <span className="whitespace-nowrap">{Math.round(car.price / 1.21).toLocaleString("cs-CZ")} Kč</span>
          <span className="ml-2 text-sm font-semibold text-gray-500">bez DPH</span>
        </div>
      </div>

      {/* VEHICLE DOCUMENTS — show only uploaded files */}
      {(car.battery_certificate_path || car.carvertical_report_path) && (
        <div className="mt-7 grid gap-3">
          {car.battery_certificate_path && (
            <a
              href={getPublicImage(car.battery_certificate_path)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-lime-300/60 bg-gradient-to-r from-lime-300 to-lime-400 px-4 py-4 font-black text-[#10140a] shadow-lg shadow-lime-400/15 transition hover:-translate-y-0.5 hover:shadow-lime-400/25"
            >
              <span className="flex items-center gap-3"><BatteryCharging size={23} /><span>{t("batteryCertificate")}</span></span>
              <FileText size={21} />
            </a>
          )}
          {car.carvertical_report_path && (
            <a
              href={getPublicImage(car.carvertical_report_path)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-violet-400/70 bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-4 font-black text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30"
            >
              <span className="flex items-center gap-3"><CarFront size={23} /><span>{t("carVerticalReport")}</span></span>
              <FileText size={21} />
            </a>
          )}
        </div>
      )}

      {/* CONTACT */}

      <div className="mt-7 space-y-3">

        <a
          href={BUSINESS_WA}
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
          href={`tel:${BUSINESS_TEL}`}
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
          {BUSINESS_PHONE}
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