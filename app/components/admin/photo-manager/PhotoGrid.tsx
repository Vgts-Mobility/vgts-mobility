"use client";

import { Car } from "@/types/car";
import PhotoCard from "./PhotoCard";

type Props = {
  car: Car;
};

export default function PhotoGrid({ car }: Props) {
  if (!car.images || car.images.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/10 py-12 text-center text-text-muted">
        У цього автомобіля поки немає фотографій.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
      {car.images.map((image, index) => (
        <PhotoCard
          key={image}
          image={image}
          index={index}
        />
      ))}
    </div>
  );
}