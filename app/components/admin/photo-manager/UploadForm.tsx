"use client";

import { useRef } from "react";

type Props = {
  action: (formData: FormData) => void | Promise<void>;
};

export default function UploadForm({ action }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form action={action}>
      <input
        ref={inputRef}
        type="file"
        name="images"
        multiple
        accept="image/*"
        hidden
        onChange={(e) => {
          if (e.target.files?.length) {
            e.currentTarget.form?.requestSubmit();
          }
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-medium text-white transition hover:opacity-90"
      >
        Додати фото
      </button>
    </form>
  );
}