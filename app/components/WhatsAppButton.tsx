"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/420703695936"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 right-6 z-[999] flex items-center"
    >
      <div
        className="
          absolute
          right-0
          h-16
          w-16
          rounded-full
          bg-[#25D366]
          opacity-30
          animate-ping
        "
      />

      <div
        className="
          relative
          flex
          items-center
          gap-3
          overflow-hidden
          rounded-full
          bg-[#25D366]
          pl-5
          pr-5
          py-4
          text-white
          shadow-[0_12px_35px_rgba(37,211,102,.45)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_18px_45px_rgba(37,211,102,.6)]
        "
      >
        <MessageCircle
          size={30}
          strokeWidth={2.4}
        />

        <span className="hidden whitespace-nowrap text-lg font-bold md:block">
          WhatsApp
        </span>
      </div>
    </a>
  );
}