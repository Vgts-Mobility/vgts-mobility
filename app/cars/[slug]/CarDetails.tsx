"use client";

import { useState } from "react";
import Image from "next/image";

export default function CarDetails({ car }: any) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className="min-h-screen bg-[#05070d] text-white">

      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Велике фото */}

        <Image
          src={car.images[selectedImage]}
          alt={car.model}
          width={1200}
          height={700}
          className="w-full rounded-3xl object-cover"
        />

        {/* Галерея */}

        <div className="grid grid-cols-5 gap-3 mt-5">

          {car.images.map((image: string, index: number) => (

            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`rounded-xl overflow-hidden border-2 transition ${
                selectedImage === index
                  ? "border-lime-400"
                  : "border-transparent hover:border-white/30"
              }`}
            >

              <Image
                src={image}
                alt={car.model}
                width={200}
                height={120}
                className="h-24 w-full object-cover"
              />

            </button>

          ))}

        </div>

        <h1 className="text-5xl font-bold mt-10">

          {car.brand} {car.model}

        </h1>

        <p className="text-gray-400 mt-5 max-w-4xl">

          {car.description}

        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div>

            <p className="text-gray-500">
              Cena
            </p>

            <p className="text-3xl font-bold text-lime-400">
              {car.price.toLocaleString()} Kč
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Rok
            </p>

            <p>{car.year}</p>

          </div>

          <div>

            <p className="text-gray-500">
              Najeto
            </p>

            <p>{car.mileage.toLocaleString()} km</p>

          </div>

          <div>

            <p className="text-gray-500">
              Výkon
            </p>

            <p>{car.power}</p>

          </div>

        </div>

        <div className="mt-14">

          <h2 className="text-3xl font-bold mb-6">
            Výbava
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {car.features.map((item: string) => (

              <div
                key={item}
                className="rounded-xl bg-[#111827] border border-white/10 px-5 py-4"
              >

                ✓ {item}

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}