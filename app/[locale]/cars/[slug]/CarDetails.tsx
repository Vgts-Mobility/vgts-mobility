"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Car } from "@/types/car";

import CarGallery from "./CarGallery";
import CarSidebar from "./CarSidebar";
import CarSpecs from "./CarSpecs";
import CarEquipment from "./CarEquipment";
import CarDescription from "./CarDescription";
import FullscreenGallery from "./FullscreenGallery";

import { getPublicImage } from "@/lib/storage/get-public-image";

type Props = {
  car: Car;
};

export default function CarDetails({
  car,
}: Props) {
  const t = useTranslations("carDetails");
  const locale = useLocale();

  const [fullscreenOpen, setFullscreenOpen] =
    useState(false);

  const [initialSlide, setInitialSlide] =
    useState(0);

  const images =
    car.images?.map((image) =>
      getPublicImage(image)
    ) ?? [];

  function openFullscreen(index: number) {
    setInitialSlide(index);
    setFullscreenOpen(true);
  }

  return (
    <main className="min-h-screen bg-[#05070d] text-white">

      {/* BACK BUTTON */}

      <div className="mx-auto max-w-[1250px] px-4 pt-5 sm:px-6 lg:px-8">

        <Link
          href={`/${locale}/cars`}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-lime-400/50
            bg-[#10141d]
            px-4
            py-2.5
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-black/20
            transition-all
            hover:border-lime-400
            hover:bg-lime-400
            hover:text-black
            hover:shadow-lime-400/10
          "
        >
          <ArrowLeft size={17} />

          {t("back")}
        </Link>

      </div>

      {/* MAIN CONTENT */}

      <div className="mx-auto max-w-[1250px] px-4 pb-16 pt-5 sm:px-6 lg:px-8">

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_350px] xl:gap-7">

          {/* LEFT COLUMN */}

          <div className="min-w-0">

            <CarGallery
              images={images}
              title={`${car.brand} ${car.model}`}
              onOpen={openFullscreen}
            />

            <CarSpecs car={car} />

            <CarEquipment
              features={car.features}
            />

            <CarDescription
              description={car.description}
            />

          </div>

          {/* RIGHT COLUMN */}

          <aside className="min-w-0 lg:sticky lg:top-5">
            <CarSidebar car={car} />
          </aside>

        </div>

      </div>

      {/* FULLSCREEN GALLERY */}

      <FullscreenGallery
        open={fullscreenOpen}
        images={images}
        initialSlide={initialSlide}
        onClose={() =>
          setFullscreenOpen(false)
        }
      />

    </main>
  );
}