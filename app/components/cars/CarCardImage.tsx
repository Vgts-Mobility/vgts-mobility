"use client";

import Image from "next/image";

import { Car } from "@/types/car";

type Props = {
  car: Car;
};

const SUPABASE_STORAGE =
  "https://tjnpnkwmbnoeclspzvqj.supabase.co/storage/v1/object/public/cars";

export default function CarCardImage({
  car,
}: Props) {
  const image = car.images?.[0] ?? null;

  if (!image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#10141d] text-xs text-gray-500">
        Žádná fotografie
      </div>
    );
  }

  const imageUrl =
    image.startsWith("http://") ||
    image.startsWith("https://")
      ? image
      : `${SUPABASE_STORAGE}/${image}`;

  return (
    <Image
      src={imageUrl}
      alt={`${car.brand} ${car.model}`}
      fill
      priority
      sizes="
        (max-width: 640px) 100vw,
        (max-width: 1024px) 50vw,
        (max-width: 1280px) 33vw,
        25vw
      "
      className="
        select-none
        object-contain
        transition-transform
        duration-500
        group-hover:scale-[1.03]
      "
    />
  );
}