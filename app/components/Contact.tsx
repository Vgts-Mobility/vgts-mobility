"use client";

import {
  Phone,
  Mail,
  Building2,
} from "lucide-react";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="bg-[#05070d] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="mb-8 text-center sm:mb-10">

          <p className="text-[10px] font-semibold uppercase tracking-[4px] text-lime-400 sm:text-xs sm:tracking-[5px]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[42px]">
            {t("title")}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-[15px]">
            {t("description")}
          </p>

        </div>

        {/* CONTACT CARDS */}

        <div className="grid gap-4 md:grid-cols-2">

          {/* TARAS */}

          <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5 transition hover:border-lime-400/40 sm:p-6">

            <div className="flex items-center gap-3 text-lime-400">

              <Phone size={20} />

              <h3 className="text-lg font-bold text-white">
                Taras Savenko
              </h3>

            </div>

            <p className="mt-4 text-xl font-bold text-white sm:text-2xl">
              +420 739 974 155
            </p>

            <a
              href="https://wa.me/420739974155"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                inline-block
                rounded-full
                bg-lime-400
                px-5
                py-2.5
                text-sm
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              {t("whatsapp")}
            </a>

          </div>

          {/* VADYM */}

          <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5 transition hover:border-lime-400/40 sm:p-6">

            <div className="flex items-center gap-3 text-lime-400">

              <Phone size={20} />

              <h3 className="text-lg font-bold text-white">
                Vadym Horbach
              </h3>

            </div>

            <p className="mt-4 text-xl font-bold text-white sm:text-2xl">
              +420 703 695 936
            </p>

            <a
              href="https://wa.me/420703695936"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                inline-block
                rounded-full
                bg-lime-400
                px-5
                py-2.5
                text-sm
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              {t("whatsapp")}
            </a>

          </div>

          {/* EMAIL */}

          <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5 transition hover:border-blue-400/40 sm:p-6">

            <div className="flex items-center gap-3 text-blue-400">

              <Mail size={20} />

              <h3 className="text-lg font-bold text-white">
                {t("email")}
              </h3>

            </div>

            <p className="mt-4 text-base text-gray-300 sm:text-lg">
              vgts-mobility@outlook.com
            </p>

          </div>

          {/* COMPANY */}

          <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5 transition hover:border-fuchsia-400/40 sm:p-6">

            <div className="flex items-center gap-3 text-fuchsia-400">

              <Building2 size={20} />

              <h3 className="text-lg font-bold text-white">
                VGTS Mobility s.r.o.
              </h3>

            </div>

            <div className="mt-4 space-y-1.5 text-sm text-gray-300">

              <p>IČO: 24876526</p>

              <p>DIČ: CZ24873626</p>

              <p>{t("location")}</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}