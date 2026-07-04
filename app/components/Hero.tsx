"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070d]">

      {/* Glow background */}
      <div className="absolute inset-0">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[170px]" />

        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[220px]" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[220px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="mb-5 uppercase tracking-[6px] text-lime-400">
              VGTS Mobility
            </p>

            <h1 className="text-7xl font-black leading-tight text-white">

              Premium vozy

              <br />

              <span className="text-blue-500">
                z evropských aukcí
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Nabízíme prověřené vozy z celé Evropy.
              Transparentní historie, profesionální přístup
              a možnost prodeje bez DPH.

            </p>

            <button className="mt-10 flex items-center gap-3 rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:scale-105">

              Prohlédnout vozy

              <ArrowRight size={18} />

            </button>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* Neon Ring */}

            <div className="absolute h-[600px] w-[600px] rounded-full border-[4px] border-fuchsia-500 shadow-[0_0_100px_#8b5cf6]" />

            <Image
              src="/cars/mondeo-white.jpg"
              alt="Ford Mondeo"
              width={900}
              height={600}
              priority
              className="relative z-20 object-contain drop-shadow-[0_0_80px_rgba(59,130,246,.35)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}