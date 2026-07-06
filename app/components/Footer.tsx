import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04060b]">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3">

        {/* LOGO */}

        <div>

          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="VGTS Mobility"
              width={52}
              height={52}
              className="rounded-full"
            />

            <div>

              <h3 className="text-2xl font-black text-white">
                VGTS
                <span className="text-lime-400">
                  {" "}Mobility
                </span>
              </h3>

              <p className="text-sm text-gray-500">
                Premium vozy z Evropy
              </p>

            </div>

          </div>

          <p className="mt-6 max-w-sm leading-8 text-gray-400">
            Dovážíme prověřené automobily z evropských aukcí
            a pomáháme zákazníkům najít vůz přesně podle jejich požadavků.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h3 className="mb-6 text-xl font-bold text-white">
            Navigace
          </h3>

          <div className="flex flex-col gap-4">

            <Link
              href="#cars"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Aktuální nabídka
            </Link>

            <Link
              href="#services"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Naše služby
            </Link>

            <Link
              href="#contact"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Kontakt
            </Link>

          </div>

        </div>

        {/* CONTACT */}

        <div>

          <h3 className="mb-6 text-xl font-bold text-white">
            Kontakt
          </h3>

          <div className="space-y-5">

            <a
              href="mailto:vgts-mobility@outlook.com"
              className="flex items-center gap-3 text-gray-400 transition hover:text-lime-400"
            >
              <Mail size={18} />
              vgts-mobility@outlook.com
            </a>

            <a
              href="tel:+420739974155"
              className="flex items-center gap-3 text-gray-400 transition hover:text-lime-400"
            >
              <Phone size={18} />
              Taras Savenko
            </a>

            <a
              href="https://wa.me/420739974155"
              target="_blank"
              className="flex items-center gap-3 text-gray-400 transition hover:text-green-400"
            >
              <MessageCircle size={18} />
              WhatsApp Taras
            </a>

            <a
              href="tel:+420703695936"
              className="flex items-center gap-3 text-gray-400 transition hover:text-lime-400"
            >
              <Phone size={18} />
              Vadym Horbach
            </a>

            <a
              href="https://wa.me/420703695936"
              target="_blank"
              className="flex items-center gap-3 text-gray-400 transition hover:text-green-400"
            >
              <MessageCircle size={18} />
              WhatsApp Vadym
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 lg:flex-row">

          <p>
            © 2026 VGTS Mobility s.r.o. Všechna práva vyhrazena.
          </p>

          <p>
            IČO: 24876526
          </p>

        </div>

      </div>

    </footer>
  );
}