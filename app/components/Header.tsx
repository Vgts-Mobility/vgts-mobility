"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <a href="/" className="group">

          <h1 className="text-2xl font-black tracking-wide text-white">

            VGTS

            <span className="text-lime-400 transition group-hover:text-white">

              {" "}Mobility

            </span>

          </h1>

        </a>

        {/* Desktop menu */}

        <nav className="hidden items-center gap-10 lg:flex">

          <a
            href="#"
            className="text-white/80 transition hover:text-lime-400"
          >
            Domů
          </a>

          <a
            href="#vozy"
            className="text-white/80 transition hover:text-lime-400"
          >
            Vozy
          </a>

          <a
            href="#services"
            className="text-white/80 transition hover:text-lime-400"
          >
            Služby
          </a>

          <a
            href="#about"
            className="text-white/80 transition hover:text-lime-400"
          >
            O nás
          </a>

          <a
            href="#contact"
            className="text-white/80 transition hover:text-lime-400"
          >
            Kontakt
          </a>

        </nav>

        {/* Desktop right */}

        <div className="hidden items-center gap-5 lg:flex">

          <a
            href="https://wa.me/420777123456"
            className="rounded-full bg-lime-400 px-5 py-2 font-semibold text-black transition hover:scale-105 hover:bg-lime-300"
          >
            WhatsApp
          </a>

          <div className="flex items-center gap-2 text-white">

            <Phone size={18} />

            <span className="font-semibold">

              +420 777 123 456

            </span>

          </div>

        </div>

        {/* Mobile button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile menu */}

      {menuOpen && (

        <div className="border-t border-white/10 bg-[#05070d] lg:hidden">

          <nav className="flex flex-col px-6 py-6">

            <a
              href="#"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Domů
            </a>

            <a
              href="#vozy"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Vozy
            </a>

            <a
              href="#services"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Služby
            </a>

            <a
              href="#about"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              O nás
            </a>

            <a
              href="#contact"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </a>

            <a
              href="https://wa.me/420777123456"
              className="mt-6 rounded-full bg-lime-400 px-6 py-4 text-center font-bold text-black"
            >
              WhatsApp
            </a>

          </nav>

        </div>

      )}

    </header>
  );
}