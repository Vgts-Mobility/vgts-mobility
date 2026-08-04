import Link from "next/link";

import { supabase } from "@/lib/supabase";
import CarCard from "@/app/components/cars/CarCard";

export default async function CarsPage() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*");

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 text-center text-red-500">
        Chyba při načítání vozidel.
      </div>
    );
  }

  const sortedCars = [...(cars ?? [])].sort((a, b) => {
    const order: Record<string, number> = {
      "В наявності": 0,
      "Резерв": 1,
      "В дорозі": 2,
      "Продано": 3,
    };

    return (
      (order[a.status ?? "Продано"] ?? 99) -
      (order[b.status ?? "Продано"] ?? 99)
    );
  });

  return (
    <main className="min-h-screen bg-[#05070d] py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <Link
            href="/"
            className="text-lime-400 hover:underline"
          >
            ← Zpět na hlavní stránku
          </Link>

          <h1 className="mt-6 text-5xl font-black text-white">
            Všechny vozy
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Kompletní nabídka prověřených vozidel VGTS Mobility.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sortedCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>

      </div>
    </main>
  );
}