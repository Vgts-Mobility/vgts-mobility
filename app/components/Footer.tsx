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

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1.3fr]">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/logo.jpg"
                alt="VGTS Mobility"
                width={56}
                height={56}
                className="h-14 w-auto rounded-full"
              />

              <div>

                <h2 className="text-2xl font-black text-white">
                  VGTS
                  <span className="text-lime-400">
                    {" "}Mobility
                  </span>
                </h2>

                <p className="text-sm text-gray-500">
                  {t("tagline")}
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              {t("description")}
            </p>

            <a
              href="mailto:vgts-mobility@outlook.com"
              className="mt-6 flex items-center gap-3 text-gray-400 transition hover:text-lime-400"
            >
              <Mail size={18} />
              vgts-mobility@outlook.com
            </a>

          </div>

          {/* NAVIGATION */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              {t("navigation.title")}
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                href="/#cars"
                className="text-gray-400 transition hover:text-lime-400"
              >
                {t("navigation.cars")}
              </Link>

              <Link
                href="/#services"
                className="text-gray-400 transition hover:text-lime-400"
              >
                {t("navigation.services")}
              </Link>

              <Link
                href="/#contact"
                className="text-gray-400 transition hover:text-lime-400"
              >
                {t("navigation.contact")}
              </Link>

            </div>

          </div>

          {/* CONTACTS */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              {t("contacts.title")}
            </h3>

            <div className="space-y-6">

              {/* Taras */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h4 className="text-lg font-bold text-white">
                  Taras Savenko
                </h4>

                <div className="mt-4 space-y-3">

                  <a
                    href="tel:+420703695936"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-lime-400"
                  >
                    <Phone size={18} />
                    +420 703 695 936
                  </a>

                  <a
                    href="https://wa.me/420703695936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-green-400"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                </div>

              </div>

              {/* Vadym */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                <h4 className="text-lg font-bold text-white">
                  Vadym Horbach
                </h4>

                <div className="mt-4 space-y-3">

                  <a
                    href="tel:+420739974155"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-lime-400"
                  >
                    <Phone size={18} />
                    +420 739 974 155
                  </a>

                  <a
                    href="https://wa.me/420739974155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-green-400"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 lg:flex-row">

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