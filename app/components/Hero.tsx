"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-blue-600/20 blur-[170px]" />

        <div className="absolute right-0 top-20 h-125 w-125 rounded-full bg-fuchsia-600/20 blur-[220px]" />

        <div className="absolute bottom-0 left-1/2 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[220px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <div className="mb-6 inline-flex items-center rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">

              ✓ Prověřené vozy • Individuální výběr • Evropské aukce

            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">

              Najdeme vůz,

              <br />

              <span className="text-blue-500">
                který budete chtít řídit.
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-gray-400 md:text-lg lg:mx-0">

              Nakupujeme kvalitní vozy z evropských aukcí,
              prověřujeme jejich historii a nabízíme pouze
              ověřené automobily. Zajistíme také individuální
              výběr vozu přesně podle vašich požadavků.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <button className="flex items-center justify-center gap-3 rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-lime-300">

                Prohlédnout vozy

                <ArrowRight size={18} />

              </button>

              <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:border-lime-400 hover:text-lime-400">

                Výběr vozu na zakázku

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-150 w-150 rounded-full border-4 border-fuchsia-500/60 shadow-[0_0_120px_rgba(168,85,247,0.45)]" />

            <Image
              src="/cars/mondeo-white.jpg"
              alt="Ford Mondeo"
              width={900}
              height={600}
              priority
              className="relative z-20 w-full max-w-xl object-contain drop-shadow-[0_0_80px_rgba(59,130,246,.35)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}