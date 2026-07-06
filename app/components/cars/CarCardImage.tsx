import Image from "next/image";
import { Car } from "@/types/car";

type Props = {
  car: Car;
};

export default function CarCardImage({ car }: Props) {
  return (
    <div className="relative h-72 overflow-hidden">

      <Image
        src={`/cars/${car.image_folder}/1.jpg`}
        alt={`${car.brand} ${car.model}`}
        fill
        sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />

      {/* SOLD */}

      {car.status === "sold" && (

        <div className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg">

          PRODÁNO

        </div>

      )}

      {/* Year */}

      <div className="absolute bottom-5 left-5 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">

        {car.year}

      </div>

    </div>
  );
}