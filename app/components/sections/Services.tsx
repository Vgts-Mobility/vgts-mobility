"use client";

import {
  Car,
  Search,
  ShieldCheck,
} from "lucide-react";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="bg-[#05070d] py-6 sm:py-7 lg:py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="mb-5 text-center sm:mb-6">

          <p className="text-[9px] font-semibold uppercase tracking-[3px] text-lime-400 sm:text-[10px] sm:tracking-[4px]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-1.5 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-[38px]">
            {t("title")}
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-5">
            {t("description")}
          </p>

        </div>

        {/* SERVICES */}

        <div className="grid items-stretch gap-3 md:grid-cols-2 xl:grid-cols-3">

          {/* VERIFIED CARS */}

          <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#111827] p-4 transition duration-300 hover:-translate-y-1 hover:border-lime-400 sm:p-5">

            <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">
              <Car
                size={22}
                className="text-lime-400"
              />
            </div>

            <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
              {t("verifiedCars.title")}
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
              {t("verifiedCars.description")}
            </p>

          </div>

          {/* INDIVIDUAL SELECTION */}

          <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#111827] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500 sm:p-5">

            <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <Search
                size={22}
                className="text-blue-400"
              />
            </div>

            <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
              {t("individualSelection.title")}
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
              {t("individualSelection.description")}
            </p>

          </div>

          {/* COMPLETE SERVICE */}

          <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#111827] p-4 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500 sm:p-5">

            <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/10">
              <ShieldCheck
                size={22}
                className="text-fuchsia-400"
              />
            </div>

            <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
              {t("completeService.title")}
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
              {t("completeService.description")}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}