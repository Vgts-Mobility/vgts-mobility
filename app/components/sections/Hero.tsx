import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] py-24">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-250px] top-20 h-[520px] w-[520px] rounded-full bg-lime-500/10 blur-[170px]" />

        <div className="absolute right-[-250px] top-10 h-[650px] w-[650px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[6px] text-lime-400">
            Individuální dovoz vozů
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">

            Hledáte

            <br />

            konkrétní vůz?

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

            Najdeme pro vás prověřený automobil z evropských aukcí,
            zkontrolujeme jeho historii a postaráme se o celý proces
            od výběru až po předání vozu.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#contact"
              className="rounded-full bg-lime-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Kontaktujte nás
            </Link>

            <Link
              href="#cars"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-lime-400"
            >
              Aktuální nabídka
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center">

          <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-[150px]" />

          <div className="absolute bottom-12 h-10 w-[420px] rounded-full bg-blue-500/30 blur-3xl" />

          <Image
  src="/images/hero-car.png"
  alt="VGTS Mobility"
  width={1400}
  height={800}
  priority
  className="relative z-20 w-full max-w-[760px] object-contain drop-shadow-[0_0_90px_rgba(59,130,246,.45)] transition duration-700 hover:scale-105"
/>

        </div>

      </div>

    </section>
  );
}