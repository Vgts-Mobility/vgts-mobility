"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-[#04060b]">

      {/* MAIN FOOTER */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.7fr_1.3fr] lg:gap-12">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/images/logo.jpg"
                alt="VGTS Mobility"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
              />

              <div>

                <h2 className="text-xl font-black leading-none text-white">
                  VGTS
                  <span className="text-lime-400">
                    {" "}Mobility
                  </span>
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {t("tagline")}
                </p>

              </div>

            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              {t("description")}
            </p>

            <a
              href="mailto:vgts-mobility@outlook.com"
              className="mt-4 flex items-center gap-2 text-sm text-gray-400 transition hover:text-lime-400"
            >
              <Mail size={16} />
              vgts-mobility@outlook.com
            </a>

          </div>

          {/* NAVIGATION */}

          <div>

            <h3 className="mb-4 text-base font-bold text-white">
              {t("navigation.title")}
            </h3>

            <div className="flex flex-col gap-2.5">

              <Link
                href="/#cars"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                {t("navigation.cars")}
              </Link>

              <Link
                href="/#services"
                className="text-sm text-gray-400 transition hover:text-lime-400"
              >
                {t("navigation.services")}
              </Link>



            </div>

          </div>

          {/* CONTACTS */}

          <div id="contact">

            <h3 className="mb-4 text-base font-bold text-white">
              {t("contacts.title")}
            </h3>

            {/* TWO COLUMNS ON DESKTOP / ONE ON MOBILE */}

            <div className="grid gap-3 sm:grid-cols-2">

              {/* TARAS */}

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur">

                <h4 className="text-sm font-bold text-white">
                  Taras Savenko
                </h4>

                <div className="mt-2.5 space-y-2">

                  <a
                    href="tel:+420739974155"
                    className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-lime-400"
                  >
                    <Phone size={14} />
                    +420 739 974 155
                  </a>

                  <a
                    href="https://wa.me/420739974155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-green-400"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>

                </div>

              </div>

              {/* VADYM */}

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur">

                <h4 className="text-sm font-bold text-white">
                  Vadym Horbach
                </h4>

                <div className="mt-2.5 space-y-2">

                  <a
                    href="tel:+420703695936"
                    className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-lime-400"
                  >
                    <Phone size={14} />
                    +420 703 695 936
                  </a>

                  <a
                    href="https://wa.me/420703695936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-green-400"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-2
            px-4
            py-4
            text-xs
            text-gray-500
            sm:px-6
            lg:flex-row
            lg:px-8
          "
        >

          <p>
            {t("copyright")}
          </p>

          <p>
            IČO: 24876526
          </p>

        </div>

      </div>

    </footer>
  );
}