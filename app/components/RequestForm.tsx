"use client";

import { useEffect, useState } from "react";
import RequestModal from "./RequestModal";
import { useTranslations } from "next-intl";

export default function RequestForm() {
  const t = useTranslations("request");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleOpenRequestModal() {
      setOpen(true);
    }

    window.addEventListener(
      "open-request-modal",
      handleOpenRequestModal
    );

    return () => {
      window.removeEventListener(
        "open-request-modal",
        handleOpenRequestModal
      );
    };
  }, []);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <section
        id="request"
        className="bg-[#05070d] py-4 sm:py-5 lg:py-6"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              rounded-2xl
              border
              border-lime-400/20
              bg-[#10141d]
              px-4
              py-6
              text-center
              sm:px-8
              sm:py-7
              lg:px-12
              lg:py-8
            "
          >

            {/* EYEBROW */}

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[3px]
                text-lime-400
                sm:text-[10px]
                sm:tracking-[4px]
              "
            >
              {t("eyebrow")}
            </p>

            {/* TITLE */}

            <h2
              className="
                mt-1
                text-2xl
                font-black
                leading-tight
                text-white
                sm:text-3xl
                lg:text-[36px]
              "
            >
              {t("title")}
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-2
                max-w-2xl
                text-xs
                leading-5
                text-gray-400
                sm:text-sm
                sm:leading-5
              "
            >
              {t("description")}
            </p>

            {/* BUTTON */}

            <button
              type="button"
              onClick={openModal}
              className="
                mt-4
                rounded-full
                bg-lime-400
                px-7
                py-2.5
                text-xs
                font-bold
                text-black
                transition
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(163,230,53,.3)]
                sm:px-8
                sm:py-3
                sm:text-sm
              "
            >
              {t("button")}
            </button>

          </div>

        </div>
      </section>

      <RequestModal
        open={open}
        onClose={closeModal}
      />
    </>
  );
}