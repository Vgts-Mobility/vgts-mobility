"use client";

import { Car } from "@/types/car";
import Image from "next/image";
import Link from "next/link";

export default function CarCard({ car }: { car: Car }){
  return (
    <div className="group rounded-3xl overflow-hidden bg-[#10141d] border border-white/10 hover:border-lime-400 transition duration-300">

      <div className="relative h-64">

        <Image
  src={`/cars/${car.image_folder}/1.jpg`}
  alt={car.model}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
  className="object-cover group-hover:scale-105 transition duration-500"
/>

        {car.status === "sold" && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
            PRODÁNO
          </div>
        )}

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">

          {car.brand}

        </h2>

        <p className="text-gray-400 mt-1">

          {car.model}

        </p>

        <div className="grid grid-cols-2 gap-3 mt-6 text-sm">

          <div>

            <p className="text-gray-500">Výkon</p>

            <p className="text-white font-semibold">{car.power}</p>

          </div>

          <div>

            <p className="text-gray-500">Najeto</p>

            <p className="text-white font-semibold">

              {car.mileage.toLocaleString()} km

            </p>

          </div>

          <div>

            <p className="text-gray-500">Pohon</p>

            <p className="text-white font-semibold">

              {car.fuel}

            </p>

          </div>

          <div>

            <p className="text-gray-500">Rok</p>

            <p className="text-white font-semibold">

              {car.year}

            </p>

          </div>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-3xl font-bold text-lime-400">

            {car.price.toLocaleString()} Kč

          </span>

          <Link
  href={`/cars/${car.slug}`}
  className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white transition"
>
  Detail →
</Link>

        </div>

      </div>

    </div>
  );
}