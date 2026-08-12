"use client";

import { useState } from "react";
import RequestModal from "./RequestModal";
import { useTranslations } from "next-intl";

export default function RequestForm() {
  const t = useTranslations("request");

  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#05070d] py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-lime-400/20 bg-[#10141d] px-8 py-16 text-center">

          <p className="uppercase tracking-[6px] text-lime-400">
            {t("eyebrow")}
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            {t("title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {t("description")}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-10 rounded-full bg-lime-400 px-10 py-4 font-bold text-black transition hover:scale-105"
          >
            {t("button")}
          </button>

        </div>
      </section>

      <RequestModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}