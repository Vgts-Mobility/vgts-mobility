import Image from "next/image";
import Link from "next/link";

import { Pencil, Trash2, Images, Calendar, Gauge } from "lucide-react";

import { deleteCar } from "@/app/actions/delete-car";
import { getPublicImage } from "@/lib/storage/get-public-image";

type Car = {
  id: string;
  brand: string;
  model: string;

  year: number;
  price: number;
  mileage: number;

  fuel: string;

  status: string | null;

  image_folder: string;

  images: string[] | null;
};

type Props = {
  cars: Car[];
};

const statusMap: Record<
  string,
  {
    label: string;
    className: string;
  }
> = {
  "В наявності": {
    label: "Skladem",
    className:
      "bg-lime-400/15 text-lime-400 border-lime-400/20",
  },

  Продано: {
    label: "Prodáno",
    className:
      "bg-red-500/15 text-red-400 border-red-500/20",
  },

  Резерв: {
    label: "Rezervováno",
    className:
      "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  },

  "В дорозі": {
    label: "Na cestě",
    className:
      "bg-sky-500/15 text-sky-400 border-sky-500/20",
  },
};

export default function CarsTable({
  cars,
}: Props) {
  if (cars.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center text-text-muted">
        Zatím zde nejsou žádná vozidla.
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {cars.map((car) => {

        const image =
          car.images?.length
            ? getPublicImage(car.images[0])
            : "/placeholder-car.jpg";

        const status =
          statusMap[car.status ?? ""] ?? {
            label: car.status ?? "-",
            className:
              "bg-white/5 text-white border-white/10",
          };

        return (
          <div
            key={car.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-surface transition-all duration-300 hover:border-primary hover:shadow-2xl"
          >
            <div className="grid gap-6 p-5 lg:grid-cols-[220px_1fr_auto]">

              {/* FOTO */}

              <div className="relative h-40 overflow-hidden rounded-2xl">

                <Image
                  src={image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* INFO */}

              <div className="flex flex-col justify-between">

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h2 className="text-2xl font-bold text-white">
                      {car.brand} {car.model}
                    </h2>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}
                    >
                      {status.label}
                    </span>

                  </div>

                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-text-muted">

                    <div className="flex items-center gap-2">

                      <Calendar size={16} />

                      {car.year}

                    </div>

                    <div className="flex items-center gap-2">

                      <Gauge size={16} />

                      {car.mileage.toLocaleString()} km

                    </div>

                    <div>
                      {car.fuel}
                    </div>

                  </div>

                </div>

                <div className="mt-6 text-3xl font-black text-white">

                  {new Intl.NumberFormat("cs-CZ").format(
                    car.price
                  )}{" "}
                  Kč

                </div>

              </div>
                            {/* ACTIONS */}

              <div className="flex flex-col justify-between">

                <div className="text-right">

                  <div className="text-xs uppercase tracking-[3px] text-text-muted">
                    ID vozidla
                  </div>

                  <div className="mt-1 font-mono text-xs text-white/70">
                    {car.id.slice(0, 8)}
                  </div>

                </div>

                <div className="mt-6 flex flex-col gap-3">

                  <Link
                    href={`/admin/cars/${car.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 font-medium text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20"
                  >
                    <Pencil size={18} />
                    Upravit
                  </Link>

                  <Link
                    href={`/admin/cars/${car.id}/photos`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime-400/30 bg-lime-400/10 px-5 py-3 font-medium text-lime-300 transition hover:border-lime-400 hover:bg-lime-400/20"
                  >
                    <Images size={18} />
                    Fotografie
                  </Link>

                  <form
                    action={async () => {
                      "use server";
                      await deleteCar(car.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 font-medium text-red-300 transition hover:border-red-400 hover:bg-red-500/20"
                    >
                      <Trash2 size={18} />
                      Smazat
                    </button>
                  </form>

                </div>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}