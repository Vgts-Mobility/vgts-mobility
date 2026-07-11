"use client";

import { Trash2 } from "lucide-react";

type Props = {
  image: string;
};

export default function DeletePhotoButton({ image }: Props) {
  return (
    <button
      type="button"
      title={`Видалити ${image}`}
      className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
    >
      <Trash2 size={18} />
    </button>
  );
}