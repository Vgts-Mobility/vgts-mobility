import { supabase } from "@/lib/supabase";
import CarsSlider from "./CarsSlider";
import { getTranslations } from "next-intl/server";

export default async function CarsSection() {
  const t = await getTranslations("cars");

  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <section className="py-12 text-center text-red-500 sm:py-14">
        <h2 className="text-xl font-bold sm:text-2xl">
          {t("loadError")}
        </h2>

        <p className="mt-2 text-sm">
          {error.message}
        </p>
      </section>
    );
  }

  if (!cars || cars.length === 0) {
    return (
      <section className="py-12 text-center text-sm text-white sm:py-14">
        {t("empty")}
      </section>
    );
  }

  const sortedCars = [...cars].sort((a, b) => {
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

  return <CarsSlider cars={sortedCars} />;
}