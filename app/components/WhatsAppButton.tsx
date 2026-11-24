"use client";

import { MessageCircle } from "lucide-react";

const BUSINESS_WHATSAPP = "https://wa.me/420703695936?text=Dobr%C3%BD%20den%2C%20m%C3%A1m%20z%C3%A1jem%20o%20slu%C5%BEby%20VGTS%20Mobility.";

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontaktujte VGTS Mobility přes WhatsApp"
      title="WhatsApp VGTS Mobility"
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-[0_12px_35px_rgba(37,211,102,.45)] transition duration-300 hover:scale-105 hover:shadow-[0_18px_45px_rgba(37,211,102,.6)]"
    >
      <MessageCircle size={30} strokeWidth={2.4} />
      <span className="hidden whitespace-nowrap text-base font-bold sm:block">
        WhatsApp
      </span>
    </a>
  );
}