import {
  Mail,
  Phone,
  Building2,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#05070d] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[6px] text-lime-400">
            Kontakt
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Hledáte konkrétní vůz?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Kontaktujte nás. Pomůžeme vám vybrat vhodný automobil,
            prověříme jeho historii a zajistíme celý proces od výběru
            až po předání vozu.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* TARAS */}

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

            <div className="flex items-center gap-3">

              <Phone className="text-lime-400" />

              <h3 className="text-2xl font-bold text-white">
                Taras Savenko
              </h3>

            </div>

            <p className="mt-6 text-2xl font-semibold text-white">
              +420 739 974 155
            </p>

            <div className="mt-8">

              <a
                href="https://wa.me/420739974155"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-400"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>

          </div>

          {/* VADYM */}

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

            <div className="flex items-center gap-3">

              <Phone className="text-lime-400" />

              <h3 className="text-2xl font-bold text-white">
                Vadym Horbach
              </h3>

            </div>

            <p className="mt-6 text-2xl font-semibold text-white">
              +420 703 695 936
            </p>

            <div className="mt-8">

              <a
                href="https://wa.me/420703695936"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-400"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

            <div className="flex items-center gap-3">

              <Mail className="text-blue-400" />

              <h3 className="text-xl font-bold text-white">
                Email
              </h3>

            </div>

            <a
              href="mailto:vgts-mobility@outlook.com"
              className="mt-6 block text-xl text-gray-300 hover:text-lime-400"
            >
              vgts-mobility@outlook.com
            </a>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

            <div className="flex items-center gap-3">

              <Building2 className="text-fuchsia-400" />

              <h3 className="text-xl font-bold text-white">
                VGTS Mobility s.r.o.
              </h3>

            </div>

            <div className="mt-6 space-y-2 text-gray-300">

              <p>IČO: 24876526</p>

              <p>
                Děčínská 552/1
              </p>

              <p>
                180 00 Praha 8
              </p>

              <p className="text-sm text-gray-500 pt-3">
                Korespondenční adresa.
                Schůzky pouze po předchozí domluvě.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}