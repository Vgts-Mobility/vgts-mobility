import Link from "next/link";
import { Car } from "@/types/car";
import { ArrowRight } from "lucide-react";

type Props = {
  car: Car;
};

export default function CarCardPrice({ car }: Props) {
  return (
    <div className="flex items-center justify-between border-t border-white/10 p-6">

      <div>

        <p className="text-sm text-gray-500">
          Cena
        </p>

        <h3 className="text-3xl font-black text-lime-400">
          {car.price.toLocaleString()} Kč
        </h3>

      </div>

      <Link
        href={`/cars/${car.slug}`}
        className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
      >
        Detail

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>

    </div>
  );
}