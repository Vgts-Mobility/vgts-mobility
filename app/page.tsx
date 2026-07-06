import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CarCard from "./components/CarCard";

import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*");

  console.log("Cars:", cars);
  console.log("Error:", error);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#05070d] text-white">
        <div className="max-w-2xl p-8">
          <h1 className="mb-4 text-3xl font-bold text-red-500">
            Supabase Error
          </h1>

          <pre className="overflow-auto rounded-xl bg-black p-4 text-sm">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />

      <Hero />

      <Services />

      <section
        id="vozy"
        className="bg-[#05070d] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-16">

            <p className="uppercase tracking-[6px] text-lime-400">
              Aktuální nabídka
            </p>

            <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
              Naše vozy
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Každý vůz prošel pečlivou kontrolou.
              Transparentní historie, ověřený původ a profesionální přístup
              jsou pro nás samozřejmostí.
            </p>

          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {cars?.map((car) => (
              <CarCard
                key={car.id}
                car={car}
              />
            ))}

          </div>

        </div>
      </section>

    </>
  );
}