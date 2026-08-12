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
      className="bg-[#05070d] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="uppercase tracking-[6px] text-lime-400">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            {t("title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {t("description")}
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* TARAS */}

          <div className="rounded-3xl border border-white/10 bg-[#10141d] p-8">

            <div className="flex items-center gap-3 text-lime-400">
              <Phone size={22} />

              <h3 className="text-xl font-bold text-white">
                Taras Savenko
              </h3>
            </div>

            <p className="mt-6 text-2xl font-bold text-white">
              +420 739 974 155
            </p>

            <a
              href="https://wa.me/420739974155"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-lime-400 px-5 py-3 font-semibold text-black"
            >
              {t("whatsapp")}
            </a>

          </div>

          {/* VADYM */}

          <div className="rounded-3xl border border-white/10 bg-[#10141d] p-8">

            <div className="flex items-center gap-3 text-lime-400">
              <Phone size={22} />

              <h3 className="text-xl font-bold text-white">
                Vadym Horbach
              </h3>
            </div>

            <p className="mt-6 text-2xl font-bold text-white">
              +420 703 695 936
            </p>

            <a
              href="https://wa.me/420703695936"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-lime-400 px-5 py-3 font-semibold text-black"
            >
              {t("whatsapp")}
            </a>

          </div>

          {/* EMAIL */}

          <div className="rounded-3xl border border-white/10 bg-[#10141d] p-8">

            <div className="flex items-center gap-3 text-blue-400">

              <Mail size={22} />

              <h3 className="text-xl font-bold text-white">
                {t("email")}
              </h3>

            </div>

            <p className="mt-6 text-lg text-gray-300">
              vgts-mobility@outlook.com
            </p>

          </div>

          {/* COMPANY */}

          <div className="rounded-3xl border border-white/10 bg-[#10141d] p-8">

            <div className="flex items-center gap-3 text-fuchsia-400">

              <Building2 size={22} />

              <h3 className="text-xl font-bold text-white">
                VGTS Mobility s.r.o.
              </h3>

            </div>

            <div className="mt-6 space-y-2 text-gray-300">

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