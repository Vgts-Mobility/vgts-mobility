"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#05070d]/95 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="VGTS Mobility"
              width={48}
              height={48}
              className="h-12 w-auto rounded-full"
              priority
            />

            <div>
              <h2 className="text-xl font-black text-white">
                VGTS <span className="text-lime-400">Mobility</span>
              </h2>

              <p className="text-xs text-white/60">
                Premium vozy z Evropy
              </p>
            </div>
          </Link>

          {/* MENU */}

          <nav className="hidden items-center gap-10 lg:flex">
            <a href="/" className="text-white/80 transition hover:text-lime-400">
              Domů
            </a>

            <a href="#cars" className="text-white/80 transition hover:text-lime-400">
              Nabídka vozů
            </a>

            <a href="#services" className="text-white/80 transition hover:text-lime-400">
              Jak to funguje
            </a>

            <a href="#about" className="text-white/80 transition hover:text-lime-400">
              O nás
            </a>

            <a href="#contact" className="text-white/80 transition hover:text-lime-400">
              Kontakt
            </a>
          </nav>

          {/* RIGHT */}

          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="https://wa.me/420703695936"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <div className="flex flex-col text-sm leading-6">
              <a
                href="tel:+420703695936"
                className="flex items-center gap-2 text-white transition hover:text-lime-400"
              >
                <Phone size={16} />
                +420 703 695 936
              </a>

              <a
  href="tel:+420739974155"
  className="flex items-center gap-2 text-white transition hover:text-lime-400"
>
  <Phone size={16} />
  +420 739 974 155
</a>
            </div>
          </div>

          {/* MOBILE */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-40 bg-[#05070d] transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 px-8 pt-28 text-2xl">
          <a href="/" onClick={() => setMobileOpen(false)}>
            Domů
          </a>

          <a href="#cars" onClick={() => setMobileOpen(false)}>
            Nabídka vozů
          </a>

          <a href="#services" onClick={() => setMobileOpen(false)}>
            Jak to funguje
          </a>

          <a href="#about" onClick={() => setMobileOpen(false)}>
            O nás
          </a>

          <a href="#contact" onClick={() => setMobileOpen(false)}>
            Kontakt
          </a>

          <hr className="border-white/10" />

          <a
            href="https://wa.me/420703695936"
            className="flex items-center gap-3 text-lime-400"
          >
            <MessageCircle />
            WhatsApp
          </a>

          <a
            href="tel:+420703695936"
            className="flex items-center gap-3 text-white"
          >
            <Phone />
            +420 703 695 936
          </a>

          <a
  href="tel:+420739974155"
  className="flex items-center gap-3 text-white"
>
  <Phone />
  +420 739 974 155
</a>
        </div>
      </div>
    </>
  );
}