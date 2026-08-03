"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { deleteImageAction } from "@/app/actions/storage/delete-image";

type Props = {
  carId: string;
  folder: string;
  image: string;
};

export default function DeletePhotoButton({
  carId,
  folder,
  image,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const ok = window.confirm("Видалити фотографію?");

    if (!ok) return;

    startTransition(async () => {
      await deleteImageAction(carId, folder, image);
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      title="Видалити фото"
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Trash2 size={18} />
    </button>
  );
}