import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Car } from "@/types/car";

type Props = {
  car: Car;
};

export default function CarCardPrice({ car }: Props) {
  return (
    <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] p-6">

      <div>

        <p className="text-xs font-medium uppercase tracking-[3px] text-gray-500">
          Cena
        </p>

        <h3 className="mt-1 text-3xl font-black text-lime-400">
          {car.price.toLocaleString()} Kč
        </h3>

      </div>

      <Link
        href={`/cars/${car.slug}`}
        className="group inline-flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
      >
        Detail vozu

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

    </div>
  );
}