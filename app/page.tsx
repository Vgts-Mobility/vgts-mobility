import Header from "./components/Header";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";

import { cars } from "./data/cars";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <section className="bg-[#05070d] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-white mb-16">

            Naše vozy

          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {cars.map((car) => (

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