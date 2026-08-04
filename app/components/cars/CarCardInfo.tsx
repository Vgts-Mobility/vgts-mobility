import { Car } from "@/types/car";
import {
  Calendar,
  Fuel,
  Gauge,
  Zap,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

type Props = {
  car: Car;
};

const statusMap: Record<
  string,
  {
    label: string;
    color: string;
    icon: React.ReactNode;
  }
> = {
  "В наявності": {
    label: "Skladem",
    color: "bg-lime-400/15 text-lime-300 border-lime-400/30",
    icon: <CheckCircle2 size={15} />,
  },
  "Резерв": {
    label: "Rezervováno",
    color: "bg-yellow-400/15 text-yellow-300 border-yellow-400/30",
    icon: <Clock3 size={15} />,
  },
  "В дорозі": {
    label: "Na cestě",
    color: "bg-blue-400/15 text-blue-300 border-blue-400/30",
    icon: <Clock3 size={15} />,
  },
  "Продано": {
    label: "Prodáno",
    color: "bg-red-400/15 text-red-300 border-red-400/30",
    icon: <XCircle size={15} />,
  },
};

export default function CarCardInfo({ car }: Props) {
  const status =
    statusMap[car.status ?? ""] ?? {
      label: car.status ?? "",
      color: "bg-white/10 text-white border-white/10",
      icon: null,
    };

  return (
    <div className="p-6">

      <div className="mb-5 flex items-start justify-between gap-3">

        <div>
          <h3 className="text-2xl font-black text-white">
            {car.brand}
          </h3>

          <p className="mt-1 text-gray-400">
            {car.model}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${status.color}`}
        >
          {status.icon}
          {status.label}
        </div>

      </div>

      <div className="grid grid-cols-2 gap-5">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-lime-400/10 p-2">
            <Calendar size={18} className="text-lime-400" />
          </div>

          <div>

            <div className="text-xs uppercase tracking-wide text-gray-500">
              Rok
            </div>

            <div className="font-semibold text-white">
              {car.year}
            </div>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-blue-400/10 p-2">
            <Gauge size={18} className="text-blue-400" />
          </div>

          <div>

            <div className="text-xs uppercase tracking-wide text-gray-500">
              Najeto
            </div>

            <div className="font-semibold text-white">
              {car.mileage.toLocaleString()} km
            </div>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-fuchsia-400/10 p-2">
            <Fuel size={18} className="text-fuchsia-400" />
          </div>

          <div>

            <div className="text-xs uppercase tracking-wide text-gray-500">
              Palivo
            </div>

            <div className="font-semibold text-white">
              {car.fuel}
            </div>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-yellow-400/10 p-2">
            <Zap size={18} className="text-yellow-400" />
          </div>

          <div>

            <div className="text-xs uppercase tracking-wide text-gray-500">
              Výkon
            </div>

            <div className="font-semibold text-white">
              {car.power}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}