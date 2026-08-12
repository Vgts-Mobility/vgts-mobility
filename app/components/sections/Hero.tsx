import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-[#05070d] pt-16 pb-12 lg:pt-24 lg:pb-20">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-260px] top-[-120px] h-[700px] w-[700px] rounded-full bg-lime-500/10 blur-[180px]" />

        <div className="absolute right-[-280px] top-[-150px] h-[850px] w-[850px] rounded-full bg-sky-500/10 blur-[220px]" />

        <div className="absolute bottom-[-280px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,.08),transparent_45%)]" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.25fr] lg:px-8">

        {/* LEFT */}

        <div>

          <div className="mb-5 text-xs font-semibold uppercase tracking-[6px] text-lime-400 sm:text-sm">
            {t("eyebrow")}
          </div>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl xl:text-[60px]">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h1>

          <h2 className="mt-4 text-xl font-bold sm:text-2xl">

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

          <p className="mt-5 max-w-lg text-[15px] leading-7 text-gray-400 sm:text-base">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#cars"
              className="w-full rounded-full bg-lime-400 px-8 py-4 text-center font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(163,230,53,.45)] sm:w-auto"
            >
              {t("viewCars")}
            </Link>

            <Link
              href="#request"
              className="w-full rounded-full border border-white/15 px-8 py-4 text-center font-semibold text-white transition hover:border-lime-400 sm:w-auto"
            >
              {t("requestImport")}
            </Link>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

            <div>
              <div className="text-3xl font-black text-lime-400 sm:text-4xl">
                EV
              </div>

              <div className="mt-1 text-sm text-gray-400">
                {t("evSpecialists")}
              </div>
            </div>

            <div>
              <div className="text-3xl font-black text-sky-400 sm:text-4xl">
                EU
              </div>

              <div className="mt-1 text-sm text-gray-400">
                {t("euImport")}
              </div>
            </div>

            <div>
              <div className="text-3xl font-black text-fuchsia-400 sm:text-4xl">
                100%
              </div>

              <div className="mt-1 text-sm text-gray-400">
                {t("verifiedHistory")}
              </div>
            </div>

            <div>
              <div className="text-3xl font-black text-white sm:text-4xl">
                ✔
              </div>

              <div className="mt-1 text-sm text-gray-400">
                {t("individualApproach")}
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative mt-10 flex items-center justify-center lg:mt-0 lg:justify-end">

          {/* Glow */}

          <div className="absolute right-0 top-8 h-[700px] w-[700px] rounded-full bg-sky-500/15 blur-[180px]" />

          <div className="absolute bottom-10 right-10 h-[220px] w-[220px] rounded-full bg-lime-400/20 blur-[120px]" />

          <div className="absolute top-24 right-32 h-[180px] w-[180px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

          {/* INFO */}

          <div className="absolute top-0 left-1/2 z-30 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl border border-white/10 bg-[#10141d]/90 px-5 py-4 backdrop-blur-xl lg:left-8 lg:w-auto lg:-translate-x-0">

            <div className="text-[11px] font-semibold uppercase tracking-[5px] text-lime-400">
              {t("concept")}
            </div>

            <h3 className="mt-2 text-2xl font-black text-white lg:text-3xl">
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
              mt-12
              w-full
              max-w-[720px]
              object-contain
              drop-shadow-[0_45px_70px_rgba(0,0,0,.45)]
              transition-all
              duration-700
              hover:scale-[1.02]
              lg:mt-0
              lg:max-w-[1350px]
              lg:translate-x-12
              lg:translate-y-10
            "
          />

        </div>

      </div>

    </section>
  );
}