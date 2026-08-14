import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CarFront,
  ShieldCheck,
  Globe2,
  FileCheck2,
  Phone,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <main className="min-h-screen bg-[#05070d] text-white">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-5 sm:px-6 lg:px-8">

        <div className="w-full">

          {/* BACK */}

          <Link
            href="/"
            className="mb-3 inline-flex items-center gap-2 text-xs text-gray-500 transition hover:text-lime-400"
          >
            <ArrowLeft size={14} />
            {t("back")}
          </Link>

          {/* MAIN */}

          <div className="rounded-2xl border border-white/10 bg-[#10141d] p-4 sm:p-6 lg:p-7">

            <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">

              {/* COMPANY INTRO */}

              <div>

                <div className="flex items-center gap-3">

                  <Image
                    src="/images/logo.jpg"
                    alt="VGTS Mobility"
                    width={56}
                    height={56}
                    className="h-12 w-12 rounded-full sm:h-14 sm:w-14"
                  />

                  <div>

                    <h1 className="text-2xl font-black leading-none sm:text-3xl">
                      VGTS
                      <span className="text-lime-400">
                        {" "}Mobility
                      </span>
                    </h1>

                    <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                      {t("tagline")}
                    </p>

                  </div>

                </div>

                <p className="mt-4 max-w-xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                  {t("description")}
                </p>

                {/* BADGES */}

                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 text-[9px] font-semibold text-lime-400">
                    {t("badges.verified")}
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-[9px] font-semibold text-blue-400">
                    {t("badges.europe")}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-semibold text-gray-300">
                    {t("badges.individual")}
                  </span>

                </div>

              </div>

              {/* WHAT WE DO */}

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[3px] text-lime-400">
                  {t("eyebrow")}
                </p>

                <h2 className="mt-1 text-2xl font-black leading-tight sm:text-3xl">
                  {t("title")}
                </h2>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">

                  {/* SELECTION */}

                  <div className="rounded-xl border border-white/10 bg-[#0a0d14] p-3">

                    <div className="flex items-center gap-2">

                      <CarFront
                        size={17}
                        className="text-lime-400"
                      />

                      <h3 className="text-xs font-bold">
                        {t("features.selection.title")}
                      </h3>

                    </div>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      {t("features.selection.description")}
                    </p>

                  </div>

                  {/* VERIFICATION */}

                  <div className="rounded-xl border border-white/10 bg-[#0a0d14] p-3">

                    <div className="flex items-center gap-2">

                      <ShieldCheck
                        size={17}
                        className="text-lime-400"
                      />

                      <h3 className="text-xs font-bold">
                        {t("features.verification.title")}
                      </h3>

                    </div>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      {t("features.verification.description")}
                    </p>

                  </div>

                  {/* EUROPE */}

                  <div className="rounded-xl border border-white/10 bg-[#0a0d14] p-3">

                    <div className="flex items-center gap-2">

                      <Globe2
                        size={17}
                        className="text-blue-400"
                      />

                      <h3 className="text-xs font-bold">
                        {t("features.europe.title")}
                      </h3>

                    </div>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      {t("features.europe.description")}
                    </p>

                  </div>

                  {/* COMPLETE SERVICE */}

                  <div className="rounded-xl border border-white/10 bg-[#0a0d14] p-3">

                    <div className="flex items-center gap-2">

                      <FileCheck2
                        size={17}
                        className="text-fuchsia-400"
                      />

                      <h3 className="text-xs font-bold">
                        {t("features.service.title")}
                      </h3>

                    </div>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      {t("features.service.description")}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* COMPANY DATA */}

            <div className="mt-5 border-t border-white/10 pt-4">

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-600">
                    {t("foundedLabel")}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    {t("founded")}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-600">
                    IČO
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    24876526
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-600">
                    DIČ
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    CZ24876526
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-600">
                    {t("locationLabel")}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Praha 8
                  </p>
                </div>

              </div>

              {/* MANAGEMENT */}

              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-wider text-gray-600">
                    {t("managementLabel")}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Taras Savenko
                    <span className="mx-2 text-gray-700">
                      •
                    </span>
                    Vadym Horbach
                  </p>

                </div>

                <a
                  href="tel:+420739974155"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-xs font-bold text-black transition hover:scale-105"
                >
                  <Phone size={13} />
                  {t("contactButton")}
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}