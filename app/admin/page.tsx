import Link from "next/link";
import {
  CarFront,
  CircleDollarSign,
  CircleCheck,
  CircleX,
  Plus,
} from "lucide-react";

import { getCars } from "@/lib/models/cars";
import { formatPrice } from "@/lib/utils/formatPrice";

export default async function AdminPage() {
  const cars = await getCars();

  const totalCars = cars.length;

  const availableCars = cars.filter(
    (car) => car.status === "В наявності"
  );

  const soldCars = cars.filter(
    (car) => car.status === "Продано"
  );

  const totalValue = availableCars.reduce(
    (sum, car) => sum + car.price,
    0
  );

  const recentCars = [...cars].slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-text-muted">
            Ласкаво просимо до адмінки VGTS Mobility.
          </p>
        </div>

        <Link
          href="/admin/cars/new"
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
        >
          <Plus size={20} />
          Додати автомобіль
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <CarFront className="text-primary" />
            <span className="text-sm text-text-muted">
              Автомобілі
            </span>
          </div>

          <div className="text-4xl font-bold text-white">
            {totalCars}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <CircleCheck className="text-green-400" />
            <span className="text-sm text-text-muted">
              В наявності
            </span>
          </div>

          <div className="text-4xl font-bold text-green-400">
            {availableCars.length}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <CircleX className="text-red-400" />
            <span className="text-sm text-text-muted">
              Продано
            </span>
          </div>

          <div className="text-4xl font-bold text-red-400">
            {soldCars.length}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <CircleDollarSign className="text-yellow-400" />
            <span className="text-sm text-text-muted">
              Вартість складу
            </span>
          </div>

          <div className="text-2xl font-bold text-white">
            {formatPrice(totalValue)}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface p-6">
        <h2 className="mb-6 text-xl font-bold text-white">
          Останні автомобілі
        </h2>

        <div className="space-y-3">
          {recentCars.map((car) => (
            <Link
              key={car.id}
              href={`/admin/cars/${car.id}`}
              className="flex items-center justify-between rounded-xl border border-white/10 p-4 transition hover:border-primary"
            >
              <div>
                <div className="font-semibold text-white">
                  {car.brand} {car.model}
                </div>

                <div className="text-sm text-text-muted">
                  {car.year}
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-white">
                  {formatPrice(car.price)}
                </div>

                <div className="text-sm text-text-muted">
                  {car.status}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}