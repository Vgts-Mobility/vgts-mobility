import Link from "next/link";
import { supabase } from "@/lib/supabase";
import CarsTable from "@/app/components/admin/CarsTable";

export default async function AdminCarsPage() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-red-100 p-4 text-red-700">
          {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Автомобілі</h1>
          <p className="mt-1 text-gray-500">
            Всього автомобілів: {cars?.length ?? 0}
          </p>
        </div>

        <Link
          href="/admin/cars/new"
          className="rounded-xl bg-black px-5 py-3 text-white transition hover:bg-gray-800"
        >
          + Додати автомобіль
        </Link>
      </div>

      <CarsTable cars={cars ?? []} />
    </div>
  );
}