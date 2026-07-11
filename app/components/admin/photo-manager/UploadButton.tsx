"use client";

import { Upload } from "lucide-react";

export default function UploadButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-medium text-white transition hover:opacity-90"
    >
      <Upload size={18} />
      Додати фото
    </button>
  );
}