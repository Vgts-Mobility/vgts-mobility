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
      className="bg-[#05070d] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="mb-8 text-center sm:mb-10">

          <p className="text-[10px] font-semibold uppercase tracking-[4px] text-lime-400 sm:text-xs sm:tracking-[5px]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[42px]">
            {t("title")}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-[15px]">
            {t("description")}
          </p>

        </div>

        {/* SERVICES */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {/* VERIFIED CARS */}

          <div className="group rounded-2xl border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-400 sm:p-6">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">

              <Car
                size={26}
                className="text-lime-400"
              />

            </div>

            <h3 className="text-xl font-bold leading-tight text-white">
              {t("verifiedCars.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {t("verifiedCars.description")}
            </p>

          </div>

          {/* INDIVIDUAL SELECTION */}

          <div className="group rounded-2xl border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500 sm:p-6">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">

              <Search
                size={26}
                className="text-blue-400"
              />

            </div>

            <h3 className="text-xl font-bold leading-tight text-white">
              {t("individualSelection.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {t("individualSelection.description")}
            </p>

          </div>

          {/* COMPLETE SERVICE */}

          <div className="group rounded-2xl border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500 sm:p-6">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/10">

              <ShieldCheck
                size={26}
                className="text-fuchsia-400"
              />

            </div>

            <h3 className="text-xl font-bold leading-tight text-white">
              {t("completeService.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {t("completeService.description")}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}