import { supabase } from "@/lib/supabase";
import CarsSlider from "./CarsSlider";

export default async function CarsSection() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        <h2 className="text-2xl font-bold">
          Supabase Error
        </h2>

        <p className="mt-4">{error.message}</p>
      </section>
    );
  }

  if (!cars || cars.length === 0) {
    return (
      <section className="py-20 text-center text-white">
        Автомобілі не знайдені
      </section>
    );
  }

  return <CarsSlider cars={cars} />;
}