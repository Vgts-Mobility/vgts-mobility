"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const BUSINESS_PHONE = "+420 732 827 533";
const BUSINESS_TEL = "+420732827533";
const BUSINESS_WA = "https://wa.me/420732827533";
const INSTAGRAM_URL = "https://www.instagram.com/vgts_mobility?cnvx=MWhyMXdmNG1wcnRkOA==";
const FACEBOOK_URL = "https://www.facebook.com/share/19nKQasTEq/?mibextid=wwXIfr";

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
                <h4 className="text-xl font-black text-white sm:text-2xl">VGTS Mobility</h4>
                <p className="mt-2 text-sm leading-5 text-gray-400">{t("contacts.description")}</p>

                <a href={`tel:${BUSINESS_TEL}`} className="mt-5 flex items-center gap-3 text-xl font-bold text-white transition hover:text-lime-300 sm:text-2xl">
                  <Phone size={21} className="shrink-0 text-lime-400" />
                  <span>{BUSINESS_PHONE}</span>
                </a>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a href={`tel:${BUSINESS_TEL}`} className="flex items-center justify-center gap-2 rounded-xl border border-lime-400/40 bg-lime-400/10 px-4 py-3 font-semibold text-lime-300 transition hover:bg-lime-400/20">
                    <Phone size={19} />
                    {t("contacts.call")}
                  </a>
                  <a href={BUSINESS_WA} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-[#062b17] transition hover:bg-[#40e47b]">
                    <MessageCircle size={20} />
                    {t("contacts.whatsapp")}
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4">
                  <span className="mr-1 text-xs font-semibold text-gray-400">{t("contacts.socials")}</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="VGTS Mobility Instagram" title="Instagram" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white shadow-lg transition hover:scale-110">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="17.6" cy="6.6" r="1.25" fill="currentColor" />
                    </svg>
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="VGTS Mobility Facebook" title="Facebook" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-lg transition hover:scale-110">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
                      <path d="M13.5 21v-8h2.8l.42-3.1H13.5V7.92c0-.9.25-1.52 1.56-1.52h1.75V3.62A23 23 0 0 0 14.26 3c-2.53 0-4.26 1.54-4.26 4.38V9.9H7.15V13h2.85v8h3.5Z" />
                    </svg>
                  </a>
                </div>
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
