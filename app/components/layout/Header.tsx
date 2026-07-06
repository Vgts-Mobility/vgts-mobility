"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05070d]/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="VGTS Mobility"
              width={48}
              height={48}
              className="rounded-full"
            />

            <div>

              <h2 className="text-white font-black text-xl">
                VGTS
                <span className="text-lime-400">
                  {" "}Mobility
                </span>
              </h2>

              <p className="text-xs text-white/50">
                Premium vozy z Evropy
              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-10">

            <a
              href="/"
              className="text-white/80 hover:text-lime-400 transition"
            >
              Domů
            </a>

            <a
              href="#cars"
              className="text-white/80 hover:text-lime-400 transition"
            >
              Nabídka vozů
            </a>

            <a
              href="#services"
              className="text-white/80 hover:text-lime-400 transition"
            >
              Jak to funguje
            </a>

            <a
              href="#about"
              className="text-white/80 hover:text-lime-400 transition"
            >
              O nás
            </a>

            <a
              href="#contact"
              className="text-white/80 hover:text-lime-400 transition"
            >
              Kontakt
            </a>

          </nav>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center gap-4">

            <button
              className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 font-semibold text-black hover:scale-105 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>

            <a
              href="tel:+420703695936"
              className="flex items-center gap-2 text-white hover:text-lime-400 transition"
            >
              <Phone size={18} />
              +420 703 695 936
            </a>

          </div>

          {/* MOBILE */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-40 bg-[#05070d] transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="pt-28 px-8 flex flex-col gap-8 text-2xl">

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

          <hr className="border-white/10 my-2" />

          <a
            href="https://wa.me/420703695936"
            className="flex items-center gap-3 text-lime-400"
          >
            <MessageCircle />
            WhatsApp
          </a>

          <a
            href="tel:+420703695936"
            className="flex items-center gap-3"
          >
            <Phone />
            +420 703 695 936
          </a>

        </div>
      </div>
    </>
  );
}