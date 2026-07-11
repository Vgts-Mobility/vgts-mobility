"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import DeletePhotoButton from "./DeletePhotoButton";
import SetMainPhotoButton from "./SetMainPhotoButton";
import { getPublicImage } from "@/lib/storage/get-public-image";

type Props = {
  image: string;
  index: number;
};

export default function PhotoCard({
  image,
  index,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-background shadow-lg">
      <div className="relative aspect-square">
        <Image
          src={getPublicImage(image)}
          alt={`Фото ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-between border-t border-white/10 p-3">
        <span className="text-sm text-text-muted">
          {index === 0 ? (
            <span className="flex items-center gap-1 text-accent">
              <Star size={16} />
              Головне
            </span>
          ) : (
            `Фото ${index + 1}`
          )}
        </span>

        <div className="flex items-center gap-2">
          <SetMainPhotoButton index={index} />
          <DeletePhotoButton image={image} />
        </div>
      </div>
    </div>
  );
}