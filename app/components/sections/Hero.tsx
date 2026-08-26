"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  function openRequestModal() {
    window.dispatchEvent(
      new CustomEvent("open-request-modal")
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#05070d] pt-24 pb-8 sm:pt-20 sm:pb-10 lg:pt-16 lg:pb-12">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-260px] top-[-120px] h-[700px] w-[700px] rounded-full bg-lime-500/10 blur-[180px]" />

        <div className="absolute right-[-280px] top-[-150px] h-[850px] w-[850px] rounded-full bg-sky-500/10 blur-[220px]" />

        <div className="absolute bottom-[-280px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,.08),transparent_45%)]" />

      </div>

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-6
          px-4
          sm:gap-8
          sm:px-6
          lg:grid-cols-[0.95fr_1.25fr]
          lg:gap-4
          lg:px-8
        "
      >

        {/* LEFT */}

        <div>

          <h1 className="text-4xl font-black leading-[1.05] text-white sm:text-5xl xl:text-[56px]">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h1>

          <h2 className="mt-3 text-lg font-bold sm:text-xl">

            <span className="text-lime-400">
              {t("future")}
            </span>

            <span className="text-white">
              {" "}{t("is")}{" "}
            </span>

            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              {t("electric")}
            </span>

          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-400 sm:text-[15px] sm:leading-6">
            {t("description")}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            {/* VIEW CARS */}

            <Link
              href="#cars"
              className="
                w-full
                rounded-full
                bg-lime-400
                px-7
                py-3.5
                text-center
                text-sm
                font-bold
                text-black
                transition
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(163,230,53,.45)]
                sm:w-auto
              "
            >
              {t("viewCars")}
            </Link>

            {/* REQUEST IMPORT */}

            <button
              type="button"
              onClick={openRequestModal}
              className="
                w-full
                rounded-full
                border
                border-white/15
                px-7
                py-3.5
                text-center
                text-sm
                font-semibold
                text-white
                transition
                hover:border-lime-400
                hover:text-lime-400
                sm:w-auto
              "
            >
              {t("requestImport")}
            </button>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

            <div>
              <div className="text-2xl font-black text-lime-400 sm:text-3xl">
                EV
              </div>

              <div className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                {t("evSpecialists")}
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-sky-400 sm:text-3xl">
                EU
              </div>

              <div className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                {t("euImport")}
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-fuchsia-400 sm:text-3xl">
                100%
              </div>

              <div className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                {t("verifiedHistory")}
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-white sm:text-3xl">
                ✔
              </div>

              <div className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                {t("individualApproach")}
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative mt-5 flex items-center justify-center lg:mt-0 lg:justify-end">

          {/* GLOW */}

          <div className="absolute right-0 top-8 h-[650px] w-[650px] rounded-full bg-sky-500/15 blur-[180px]" />

          <div className="absolute bottom-10 right-10 h-[200px] w-[200px] rounded-full bg-lime-400/20 blur-[120px]" />

          <div className="absolute top-24 right-32 h-[160px] w-[160px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

          {/* INFO */}

          <div
            className="
              absolute
              left-1/2
              top-0
              z-30
              w-[88%]
              max-w-sm
              -translate-x-1/2
              rounded-2xl
              border
              border-white/10
              bg-[#10141d]/90
              px-4
              py-3
              backdrop-blur-xl
              lg:left-8
              lg:w-auto
              lg:-translate-x-0
            "
          >

            <div className="text-[9px] font-semibold uppercase tracking-[4px] text-lime-400">
              {t("concept")}
            </div>

            <h3 className="mt-1 text-xl font-black text-white lg:text-2xl">
              ŠKODA ENYAQ
            </h3>

          </div>

          {/* CAR */}

          <Image
            src="/images/enyaq-vgts1.png"
            alt="Škoda Enyaq koncept"
            width={1800}
            height={1200}
            priority
            className="
              relative
              z-20
              mt-10
              w-full
              max-w-[650px]
              object-contain
              drop-shadow-[0_40px_60px_rgba(0,0,0,.45)]
              transition-all
              duration-700
              hover:scale-[1.02]
              lg:mt-0
              lg:max-w-[1200px]
              lg:translate-x-10
              lg:translate-y-6
            "
          />

        </div>

      </div>

    </section>
  );
}