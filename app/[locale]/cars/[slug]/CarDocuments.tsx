"use client";

import { BatteryCharging, CarFront, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Car } from "@/types/car";
import { getPublicImage } from "@/lib/storage/get-public-image";

export default function CarDocuments({ car }: { car: Car }) {
  const t = useTranslations("carDetails.documents");

  if (!car.battery_certificate_path && !car.carvertical_report_path) return null;

  return (
    <section className="mt-5 grid gap-3 sm:grid-cols-2">
      {car.battery_certificate_path && (
        <a
          href={getPublicImage(car.battery_certificate_path)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-2xl border border-lime-300/60 bg-gradient-to-r from-lime-300 to-lime-400 px-4 py-4 font-black text-[#10140a] shadow-lg shadow-lime-400/15 transition hover:-translate-y-0.5 hover:shadow-lime-400/25"
        >
          <span className="flex min-w-0 items-center gap-3"><BatteryCharging size={23} className="shrink-0" /><span className="break-words">{t("batteryCertificate")}</span></span>
          <FileText size={21} className="shrink-0" />
        </a>
      )}
      {car.carvertical_report_path && (
        <a
          href={getPublicImage(car.carvertical_report_path)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-2xl border border-violet-400/70 bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-4 font-black text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30"
        >
          <span className="flex min-w-0 items-center gap-3"><CarFront size={23} className="shrink-0" /><span className="break-words">{t("carVerticalReport")}</span></span>
          <FileText size={21} className="shrink-0" />
        </a>
      )}
    </section>
  );
}
