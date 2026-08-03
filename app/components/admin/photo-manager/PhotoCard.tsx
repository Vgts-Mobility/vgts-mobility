"use client";

import Image from "next/image";
import { GripVertical, Star } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Car } from "@/types/car";
import { getPublicImage } from "@/lib/storage/get-public-image";

import DeletePhotoButton from "./DeletePhotoButton";
import SetMainPhotoButton from "./SetMainPhotoButton";

type Props = {
  car: Car;
  image: string;
  index: number;
};

export default function PhotoCard({
  car,
  image,
  index,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: image,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="overflow-hidden rounded-2xl border border-white/10 bg-background shadow-lg"
    >
      <div className="relative aspect-square">
        <Image
          src={getPublicImage(image)}
          alt={`Фото ${index + 1}`}
          fill
          className="object-cover"
        />

        <button
          type="button"
          {...attributes}
          {...listeners}
          className="absolute right-2 top-2 rounded-lg bg-black/60 p-2 text-white transition hover:bg-black/80"
        >
          <GripVertical size={18} />
        </button>
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
          <SetMainPhotoButton
            carId={car.id}
            index={index}
          />

          <DeletePhotoButton
            carId={car.id}
            folder={car.image_folder}
            image={image}
          />
        </div>
      </div>
    </div>
  );
}