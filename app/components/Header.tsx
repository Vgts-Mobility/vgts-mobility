"use client";

import { Phone, MessageCircle, Send } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/25 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <div>
          <h1 className="text-2xl font-black text-white tracking-wide">
            VGTS
            <span className="text-lime-400"> Mobility</span>
          </h1>
        </div>

        {/* Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          <a href="#" className="text-white/80 hover:text-lime-400 transition">
            Domů
          </a>

          <a href="#" className="text-white/80 hover:text-lime-400 transition">
            Auta
          </a>

          <a href="#" className="text-white/80 hover:text-lime-400 transition">
            Proces
          </a>

          <a href="#" className="text-white/80 hover:text-lime-400 transition">
            O nás
          </a>

          <a href="#" className="text-white/80 hover:text-lime-400 transition">
            Kontakt
          </a>

        </nav>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-5">

          <MessageCircle
            className="text-lime-400 cursor-pointer hover:scale-110 transition"
            size={22}
          />

          <Send
            className="text-blue-400 cursor-pointer hover:scale-110 transition"
            size={22}
          />

          <div className="flex items-center gap-2 text-white">

            <Phone size={18} />

            <span className="font-semibold">
              +420 777 123 456
            </span>

          </div>

        </div>

      </div>
    </header>
  );
}