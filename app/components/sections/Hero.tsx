import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] py-16 lg:py-20">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-20 h-[520px] w-[520px] rounded-full bg-lime-500/10 blur-[170px]" />

        <div className="absolute right-[-250px] top-10 h-[650px] w-[650px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}

        <div>
          <p className="font-semibold uppercase tracking-[5px] text-lime-400">
            PROVĚŘENÉ VOZY • DOVOZ • EVROPA
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-white lg:text-6xl">
            Prověřené vozy
            <br />
            z celé Evropy
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Nabízíme pečlivě prověřené vozy skladem a zajišťujeme
            individuální dovoz automobilů z celé Evropy. Každé vozidlo
            kontrolujeme, testujeme a připravujeme k bezstarostnému
            provozu.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#cars"
              className="rounded-full bg-lime-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Prohlédnout nabídku
            </Link>

            <Link
              href="#request"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-lime-400"
            >
              Poptat dovoz vozu
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
              ✓ Prověřená historie
            </div>

            <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
              ✓ Kontrola vozidla
            </div>

            <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
              ✓ Individuální dovoz
            </div>
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
            className="relative z-20 w-full max-w-[680px] object-contain drop-shadow-[0_0_90px_rgba(59,130,246,.45)] transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}