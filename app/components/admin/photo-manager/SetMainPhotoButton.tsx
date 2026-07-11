"use client";

import { Star } from "lucide-react";

type Props = {
  index: number;
};

export default function SetMainPhotoButton({ index }: Props) {
  return (
    <button
      type="button"
      title="Зробити головною"
      disabled={index === 0}
      className={`rounded-lg p-2 transition ${
        index === 0
          ? "cursor-default text-accent"
          : "text-text-muted hover:bg-yellow-500/10 hover:text-yellow-400"
      }`}
    >
      <Star size={18} fill={index === 0 ? "currentColor" : "none"} />
    </button>
  );
}