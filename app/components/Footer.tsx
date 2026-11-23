"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Phone, MessageCircle, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const BUSINESS_PHONE = "+420 732 827 533";
const BUSINESS_TEL = "+420732827533";
const BUSINESS_WA = "https://wa.me/420732827533";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-[#04060b]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.7fr_1.3fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.jpg" alt="VGTS Mobility" width={48} height={48} className="h-12 w-12 rounded-full" />
              <div>
                <h2 className="text-xl font-black leading-none text-white">
                  VGTS<span className="text-lime-400"> Mobility</span>
                </h2>
                <p className="mt-1 text-xs text-gray-500">{t("tagline")}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">{t("description")}</p>
            <a href="mailto:vgts-mobility@outlook.com" className="mt-4 flex items-center gap-2 text-sm text-gray-400 transition hover:text-lime-400">
              <Mail size={16} />
              vgts-mobility@outlook.com
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">{t("navigation.title")}</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/#cars" className="text-sm text-gray-400 transition hover:text-lime-400">{t("navigation.cars")}</Link>
              <Link href="/#services" className="text-sm text-gray-400 transition hover:text-lime-400">{t("navigation.services")}</Link>
              <Link href="/documents" className="text-sm text-gray-400 transition hover:text-lime-400">{t("navigation.documents")}</Link>
            </div>
          </div>

          <div id="contact">
            <h3 className="mb-4 text-base font-bold text-white">{t("contacts.title")}</h3>
            <div className="relative overflow-hidden rounded-2xl border border-lime-400/30 bg-gradient-to-br from-lime-400/[0.12] via-[#101720] to-[#0b1117] p-5 shadow-[0_12px_40px_rgba(183,255,0,0.06)] sm:p-6">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-lime-400/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.5px] text-lime-400">
                  <ShieldCheck size={15} />
                  {t("contacts.eyebrow")}
                </div>
                <h4 className="mt-2 text-xl font-black text-white sm:text-2xl">VGTS Mobility</h4>
                <p className="mt-1 text-sm leading-5 text-gray-400">{t("contacts.description")}</p>
                <a href={`tel:${BUSINESS_TEL}`} className="mt-5 flex items-center gap-3 text-xl font-bold text-white transition hover:text-lime-300 sm:text-2xl">
                  <Phone size={21} className="shrink-0 text-lime-400" />
                  <span>{BUSINESS_PHONE}</span>
                </a>
                <a href={BUSINESS_WA} target="_blank" rel="noopener noreferrer" className="mt-5 flex w-full items-center justify-between gap-3 rounded-xl bg-[#25D366] px-4 py-3.5 font-bold text-[#062b17] transition hover:bg-[#40e47b]">
                  <span className="flex items-center gap-2">
                    <MessageCircle size={21} />
                    {t("contacts.whatsapp")}
                  </span>
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-gray-500 sm:px-6 lg:flex-row lg:px-8">
          <p>{t("copyright")}</p>
          <p>IČO: 24876526</p>
        </div>
      </div>
    </footer>
  );
}
