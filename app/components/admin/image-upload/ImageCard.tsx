"use client";

import Image from "next/image";
import { Star, Trash2 } from "lucide-react";
import { UploadImage } from "./types";

type Props = {
  image: UploadImage;
  index: number;
  onDelete: (id: string) => void;
  onMakeMain: (id: string) => void;
};

export default function ImageCard({
  image,
  index,
  onDelete,
  onMakeMain,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-lg transition hover:border-primary/50">
      <div className="relative aspect-square">
        <Image
          src={image.preview}
          alt={`Фото ${index + 1}`}
          fill
          unoptimized
          className="object-cover"
        />

        <button
          type="button"
          onClick={() => onDelete(image.id)}
          className="absolute right-3 top-3 rounded-full bg-black/70 p-2 text-red-400 opacity-0 transition group-hover:opacity-100 hover:bg-red-500 hover:text-white"
        >
          <Trash2 size={18} />
        </button>

        {image.isMain && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">
            <Star size={14} fill="currentColor" />
            Головне
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 bg-background px-4 py-3">
        <span className="text-sm text-text-muted">
          Фото {index + 1}
        </span>

        {!image.isMain && (
          <button
            type="button"
            onClick={() => onMakeMain(image.id)}
            className="text-sm font-medium text-primary transition hover:text-accent"
          >
            Зробити головним
          </button>
        )}
      </div>
    </div>
  );
}