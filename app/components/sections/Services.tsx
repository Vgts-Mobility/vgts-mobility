import {
  Car,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#05070d] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[6px] text-lime-400">
            Naše služby
          </p>

          <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
            Postaráme se o celý proces.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Ať hledáte konkrétní vůz nebo chcete vybírat
            z naší nabídky, zajistíme vše od výběru až po
            předání klíčů.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* Card */}

          <div className="group rounded-3xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-2 hover:border-lime-400">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10">

              <Car
                size={34}
                className="text-lime-400"
              />

            </div>

            <h3 className="text-2xl font-bold text-white">
              Prodej prověřených vozů
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Nabízíme pouze automobily,
              které jsme osobně prověřili
              a pečlivě vybrali.
            </p>

          </div>

          {/* Card */}

          <div className="group rounded-3xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-2 hover:border-blue-500">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">

              <Search
                size={34}
                className="text-blue-400"
              />

            </div>

            <h3 className="text-2xl font-bold text-white">
              Individuální výběr vozu
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Najdeme automobil podle
              vašich požadavků na evropských
              aukcích a prověříme jeho historii.
            </p>

          </div>

          {/* Card */}

          <div className="group rounded-3xl border border-white/10 bg-[#111827] p-8 transition hover:-translate-y-2 hover:border-fuchsia-500">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-500/10">

              <ShieldCheck
                size={34}
                className="text-fuchsia-400"
              />

            </div>

            <h3 className="text-2xl font-bold text-white">
              Kompletní servis
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Zajistíme dopravu,
              registraci vozidla,
              administrativu i předání vozu.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}