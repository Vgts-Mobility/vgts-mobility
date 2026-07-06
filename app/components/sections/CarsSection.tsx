import { supabase } from "@/lib/supabase";
import CarCard from "../cars/CarCard";

export default async function CarsSection() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <section
        id="cars"
        className="bg-[#05070d] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-10">

            <h2 className="text-3xl font-bold text-red-400">
              Nepodařilo se načíst nabídku vozů.
            </h2>

            <p className="mt-4 text-gray-300">
              Zkuste stránku obnovit nebo nás kontaktujte.
            </p>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="cars"
      className="bg-[#05070d] pt-32 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 text-center">

          <p className="uppercase tracking-[6px] text-lime-400">
            Aktuální nabídka
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Vozy skladem
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Každý automobil prošel kontrolou původu i historie.
            Vyberte si vůz z naší aktuální nabídky nebo nás
            kontaktujte pro individuální dovoz z evropských aukcí.
          </p>

        </div>

        {cars && cars.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-12 text-center">

            <h3 className="text-3xl font-bold text-white">
              Nabídka se připravuje
            </h3>

            <p className="mt-5 text-gray-400">
              Nové vozy budou přidány již brzy.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}