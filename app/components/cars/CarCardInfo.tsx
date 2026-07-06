import { Car } from "@/types/car";
import {
  Calendar,
  Fuel,
  Gauge,
  Zap,
} from "lucide-react";

type Props = {
  car: Car;
};

export default function CarCardInfo({ car }: Props) {
  return (
    <div className="p-6">

      <h3 className="text-2xl font-bold text-white">
        {car.brand}
      </h3>

      <p className="mt-1 text-lg text-gray-400">
        {car.model}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-5">

        <div className="flex items-center gap-3">

          <Calendar
            size={18}
            className="text-lime-400"
          />

          <div>

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Rok
            </p>

            <p className="font-semibold text-white">
              {car.year}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Gauge
            size={18}
            className="text-blue-400"
          />

          <div>

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Najeto
            </p>

            <p className="font-semibold text-white">
              {car.mileage.toLocaleString()} km
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Fuel
            size={18}
            className="text-fuchsia-400"
          />

          <div>

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Pohon
            </p>

            <p className="font-semibold text-white">
              {car.fuel}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Zap
            size={18}
            className="text-yellow-400"
          />

          <div>

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Výkon
            </p>

            <p className="font-semibold text-white">
              {car.power}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}