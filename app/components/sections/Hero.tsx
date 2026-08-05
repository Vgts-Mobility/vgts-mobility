import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] pt-12 pb-14 lg:pt-22 lg:pb-20">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-260px] top-[-120px] h-[700px] w-[700px] rounded-full bg-lime-500/10 blur-[180px]" />

        <div className="absolute right-[-280px] top-[-150px] h-[850px] w-[850px] rounded-full bg-sky-500/10 blur-[220px]" />

        <div className="absolute bottom-[-280px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,.08),transparent_45%)]" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-6 lg:grid-cols-[0.95fr_1.25fr]">

        {/* LEFT */}

        <div>

          <div className="mb-5 font-semibold uppercase tracking-[7px] text-lime-400">
            ELEKTROMOBILY • DOVOZ • EVROPA
          </div>

          <h1 className="text-[48px] font-black leading-[1.05] text-white xl:text-[60px]">

            Najdeme elektromobil,

            <br />

            který bude opravdu váš.

          </h1>

          <h2 className="mt-3 text-2xl font-bold">

            <span className="text-lime-400">
              Budoucnost
            </span>

            <span className="text-white">
              {" "}je{" "}
            </span>

            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              elektrická.
            </span>

          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-400">

            Specializujeme se na dovoz kvalitních elektromobilů z celé Evropy.

            Najdeme, prověříme a připravíme vůz přesně podle vašich představ.

            Pokud hledáte klasický automobil, rádi jej dovezeme také.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="#cars"
              className="rounded-full bg-lime-400 px-9 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(163,230,53,.45)]"
            >
              Prohlédnout nabídku
            </Link>

            <Link
              href="#request"
              className="rounded-full border border-white/15 px-9 py-4 font-semibold text-white transition hover:border-lime-400"
            >
              Poptat dovoz vozu
            </Link>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">

            <div>

              <div className="text-4xl font-black text-lime-400">
                EV
              </div>

              <div className="mt-1 text-sm text-gray-400">
                specialisté
              </div>

            </div>

            <div>

              <div className="text-4xl font-black text-sky-400">
                EU
              </div>

              <div className="mt-1 text-sm text-gray-400">
                dovoz vozů
              </div>

            </div>

            <div>

              <div className="text-4xl font-black text-fuchsia-400">
                100%
              </div>

              <div className="mt-1 text-sm text-gray-400">
                prověřená historie
              </div>

            </div>

            <div>

              <div className="text-4xl font-black text-white">
                ✔
              </div>

              <div className="mt-1 text-sm text-gray-400">
                individuální přístup
              </div>

            </div>

          </div>

        </div>

                {/* RIGHT */}

        <div className="relative flex items-center justify-end">

          {/* Glow */}

          <div className="absolute right-0 top-8 h-[700px] w-[700px] rounded-full bg-sky-500/15 blur-[180px]" />

          <div className="absolute bottom-10 right-20 h-[260px] w-[260px] rounded-full bg-lime-400/20 blur-[120px]" />

          <div className="absolute top-28 right-44 h-[220px] w-[220px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

          {/* INFO CARD */}

          <div className="absolute left-8 top-2 z-30 rounded-3xl border border-white/10 bg-[#10141d]/90 px-6 py-5 backdrop-blur-xl">

  <div className="text-xs font-semibold uppercase tracking-[6px] text-lime-400">
    KONCEPT VGTS MOBILITY
  </div>

  <h3 className="mt-2 text-3xl font-black text-white">
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
              w-full
              max-w-[1350px]
              translate-x-12
              translate-y-10
              object-contain
              drop-shadow-[0_50px_80px_rgba(0,0,0,.45)]
              transition-all
              duration-700
              hover:scale-[1.02]
            "
          />

        </div>

      </div>

    </section>
  );
}