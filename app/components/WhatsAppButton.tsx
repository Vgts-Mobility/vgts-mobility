"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <>
      {/* BACKDROP */}

      {open && (
        <div
          className="fixed inset-0 z-[998] bg-black/20 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        ref={wrapperRef}
        className="fixed bottom-6 right-6 z-[999]"
      >
        {/* CONTACT MENU */}

        <div
          className={`absolute bottom-20 right-0 w-72 overflow-hidden rounded-3xl border border-white/10 bg-[#10141d]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <div className="border-b border-white/10 px-6 py-5">

            <div className="flex items-center gap-3">

              <MessageCircle
                size={22}
                className="text-[#25D366]"
              />

              <div>

                <div className="text-lg font-bold text-white">
                  WhatsApp
                </div>

                <div className="text-sm text-gray-400">
                  {t("chooseContact")}
                </div>

              </div>

            </div>

          </div>

          {/* TARAS */}

          <a
            href="https://wa.me/420739974155"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 transition hover:bg-lime-400/10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-400 font-black text-black">
              T
            </div>

            <div>

              <div className="font-bold text-white">
                Taras
              </div>

              <div className="text-sm text-gray-400">
                {t("tarasRole")}
              </div>

            </div>

          </a>

          {/* VADYM */}

          <a
            href="https://wa.me/420703695936"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-t border-white/10 px-6 py-4 transition hover:bg-sky-400/10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-400 font-black text-white">
              V
            </div>

            <div>

              <div className="font-bold text-white">
                Vadym
              </div>

              <div className="text-sm text-gray-400">
                {t("vadymRole")}
              </div>

            </div>

          </a>

        </div>

        {/* FLOATING BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          aria-label="WhatsApp"
          className={`group relative flex items-center gap-3 overflow-hidden rounded-full px-5 py-4 text-white shadow-xl transition-all duration-300 hover:scale-105 ${
            open
              ? "bg-[#1b1f27]"
              : "bg-[#25D366] shadow-[0_12px_35px_rgba(37,211,102,.45)] hover:shadow-[0_18px_45px_rgba(37,211,102,.6)]"
          }`}
        >
          {!open && (
            <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
          )}

          {open ? (
            <X
              size={30}
              strokeWidth={2.5}
              className="relative"
            />
          ) : (
            <MessageCircle
              size={30}
              strokeWidth={2.4}
              className="relative"
            />
          )}

          <span className="relative hidden whitespace-nowrap text-lg font-bold md:block">
            {open ? t("close") : "WhatsApp"}
          </span>

        </button>

      </div>
    </>
  );
}