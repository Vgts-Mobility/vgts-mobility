"use client";

import { useState } from "react";
import RequestModal from "./RequestModal";
import { useTranslations } from "next-intl";

export default function RequestForm() {
  const t = useTranslations("request");

  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#05070d] py-10 sm:py-12 lg:py-14">
        <div
          className="
            mx-auto
            max-w-5xl
            rounded-2xl
            border
            border-lime-400/20
            bg-[#10141d]
            px-5
            py-9
            text-center
            sm:px-8
            sm:py-10
            lg:px-12
            lg:py-12
          "
        >

          <p className="text-[10px] font-semibold uppercase tracking-[4px] text-lime-400 sm:text-xs sm:tracking-[5px]">
            {t("eyebrow")}
          </p>

          <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[42px]">
            {t("title")}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-[15px]">
            {t("description")}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="
              mt-6
              rounded-full
              bg-lime-400
              px-8
              py-3.5
              text-sm
              font-bold
              text-black
              transition
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(163,230,53,.3)]
            "
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