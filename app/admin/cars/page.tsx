import Link from "next/link";
import { Plus } from "lucide-react";

import CarsTable from "@/app/components/admin/CarsTable";
import { getCars } from "@/lib/models/cars";

export default async function AdminCarsPage() {
  const cars = await getCars();

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

        <div>

          <h1 className="text-4xl font-black text-white">
            Automobily
          </h1>

          <p className="mt-2 text-text-muted">
            Správa vozového parku VGTS Mobility
          </p>

        </div>

        <Link
          href="/admin/cars/new"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          <Plus size={20} />
          Přidat vozidlo
        </Link>

      </div>

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-surface p-6">

          <div className="text-sm text-text-muted">
            Celkem vozidel
          </div>

          <div className="mt-2 text-4xl font-black text-white">
            {cars.length}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6">

          <div className="text-sm text-text-muted">
            Skladem
          </div>

          <div className="mt-2 text-4xl font-black text-lime-400">
            {
              cars.filter(
                (c) => c.status === "В наявності"
              ).length
            }
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6">

          <div className="text-sm text-text-muted">
            Prodáno
          </div>

          <div className="mt-2 text-4xl font-black text-red-400">
            {
              cars.filter(
                (c) => c.status === "Продано"
              ).length
            }
          </div>

        </div>

      </div>

      <CarsTable cars={cars} />

    </div>
  );
}