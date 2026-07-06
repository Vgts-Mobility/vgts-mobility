import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-62.5p-top-37.5[550px] w-137.5 rounded-full bg-lime-500/10 blur-[170px]" />

        <div className="absolute -right-62.5 top-12.5-[700px] w-175 rounded-full bg-fuchsia-600/15 blur-[190px]" />

        <div className="absolute -bottom-62.5 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/10 px-5 py-2 text-sm font-medium text-lime-400">

              <span>✓</span>

              Evropské aukce • Prověřené vozy • Individuální výběr

            </div>

            <h1 className="mt-8 text-5xl font-black leading-none text-white md:text-7xl">

              Najdeme vůz,

              <br />

              <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">

                který bude

                <br />

                odpovídat právě vám.

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

              Specializujeme se na dovoz kvalitních automobilů z evropských aukcí.

              Každý vůz pečlivě prověřujeme a pomáháme zákazníkům najít automobil,

              který přesně odpovídá jejich požadavkům.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="#vozy"
                className="rounded-full bg-lime-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
              >
                Prohlédnout vozy
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
              >
                Kontaktujte nás
              </Link>

            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="font-bold text-lime-400">

                  ✓ Ověřená historie

                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-400">

                  Každý automobil prochází důkladnou kontrolou historie i původu.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="font-bold text-lime-400">

                  ✓ Evropské aukce

                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-400">

                  Nakupujeme pouze vozy z ověřených evropských aukcí.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="font-bold text-lime-400">

                  ✓ Individuální přístup

                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-400">

                  Vyhledáme automobil přesně podle vašich požadavků.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h3 className="font-bold text-lime-400">

                  ✓ Prodej bez DPH

                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-400">

                  U vybraných vozů nabízíme možnost odpočtu DPH.

                </p>

              </div>

            </div>

          </div>
                    {/* RIGHT */}

          <div className="relative flex items-center justify-center">

            {/* Main glow */}

            <div className="absolute h-180 w-180 rounded-full bg-fuchsia-600/15 blur-[170px]" />

            <div className="absolute h-140 w-140 rounded-full border border-fuchsia-500/40 shadow-[0_0_120px_rgba(192,38,211,.35)]" />

            <div className="absolute bottom-12 h-10 w-105 rounded-full bg-blue-500/30 blur-3xl" />

            <Image
              src="/images/hero-car.png"
              alt="VGTS Mobility"
              width={1400}
              height={900}
              priority
              className="
                relative
                z-20
                w-full
                max-w-225
                object-contain
                transition-all
                duration-700
                hover:scale-105
                drop-shadow-[0_0_90px_rgba(0,150,255,.45)]
              "
            />

          </div>

        </div>

      </div>

      {/* Bottom info */}

      <div className="relative z-20 mx-auto -mt-10 grid max-w-7xl gap-6 px-6 pb-20 lg:grid-cols-3 lg:px-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

          <h3 className="text-xl font-bold text-white">
            📍 Sídlo společnosti
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Děčínská 552/1
            <br />
            Střížkov
            <br />
            180 00 Praha 8
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

          <h3 className="text-xl font-bold text-white">
            🚗 Kvalitní vozy z Evropy
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Nabízíme prověřené automobily
            s doloženou historií, jasným původem
            a možností individuálního výběru.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

          <h3 className="text-xl font-bold text-white">
            💶 Prodej bez DPH
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            U vybraných vozidel nabízíme
            možnost odpočtu DPH pro podnikatele
            i firmy.

          </p>

        </div>

      </div>

    </section>
  );
}