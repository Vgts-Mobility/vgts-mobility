"use client";

import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { setMainImageAction } from "@/app/actions/storage/set-main-image";

type Props = {
  carId: string;
  index: number;
};

export default function SetMainPhotoButton({
  carId,
  index,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (index === 0) return;

    startTransition(async () => {
      await setMainImageAction(carId, index);
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      title="Зробити головною"
      onClick={handleClick}
      disabled={index === 0 || isPending}
      className={`rounded-lg p-2 transition ${
        index === 0
          ? "cursor-default text-accent"
          : "text-text-muted hover:bg-yellow-500/10 hover:text-yellow-400 disabled:opacity-50"
      }`}
    >
      <Star
        size={18}
        fill={index === 0 ? "currentColor" : "none"}
      />
    </button>
  );
}