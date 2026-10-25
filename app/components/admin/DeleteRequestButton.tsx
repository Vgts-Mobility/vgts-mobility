"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { deleteRequest } from "@/app/actions/delete-request";

export default function DeleteRequestButton({ id }: { id: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");

  function handleDelete() {
    if (!window.confirm("Opravdu chcete tuto poptávku trvale smazat?")) return;
    setError("");
    startTransition(async () => {
      try {
        await deleteRequest(id);
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Poptávku se nepodařilo smazat.");
      }
    });
  }

  return (
    <div className="inline-flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleDelete}
        disabled={pending}
        className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/20 disabled:opacity-50"
      >
        <Trash2 size={15} />
        {pending ? "Mažu..." : "Smazat"}
      </button>
      {error && <span className="max-w-40 text-xs text-red-400">{error}</span>}
    </div>
  );
}
