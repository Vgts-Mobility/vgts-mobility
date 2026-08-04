"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateRequestStatus } from "@/app/actions/update-request-status";

const statuses = [
  "Nová",
  "V procesu",
  "Hotovo",
  "Zamítnuto",
];

const colors: Record<string, string> = {
  "Nová": "bg-yellow-500 hover:bg-yellow-400",
  "V procesu": "bg-blue-600 hover:bg-blue-500",
  "Hotovo": "bg-green-600 hover:bg-green-500",
  "Zamítnuto": "bg-red-600 hover:bg-red-500",
};

export default function StatusButtons({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  const [pending, startTransition] =
    useTransition();

  return (
    <div className="flex flex-wrap gap-3">

      {statuses.map((status) => (

        <button
          key={status}
          disabled={pending}
          onClick={() =>
            startTransition(async () => {
              await updateRequestStatus(
                id,
                status
              );

              router.refresh();
            })
          }
          className={`rounded-xl px-5 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 ${colors[status]}`}
        >
          {pending ? "..." : status}
        </button>

      ))}

    </div>
  );
}