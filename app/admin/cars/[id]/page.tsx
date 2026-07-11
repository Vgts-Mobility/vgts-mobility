import Link from "next/link";
import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";
import { updateCar } from "@/app/actions/update-car";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-black";

export default async function EditCarPage({ params }: Props) {
  const { id } = await params;

  const { data: car, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !car) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Редагування автомобіля
          </h1>

          <p className="mt-2 text-gray-400">
            {car.brand} {car.model}
          </p>
        </div>

        <Link
          href="/admin/cars"
          className="rounded-xl bg-white px-5 py-3 text-gray-900 shadow hover:bg-gray-100"
        >
          ← Назад
        </Link>
      </div>

      <form
        action={updateCar.bind(null, id)}
        className="space-y-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Марка
            </label>

            <input
              name="brand"
              defaultValue={car.brand}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Модель
            </label>

            <input
              name="model"
              defaultValue={car.model}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Рік
            </label>

            <input
              name="year"
              type="number"
              defaultValue={car.year}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Ціна
            </label>

            <input
              name="price"
              type="number"
              defaultValue={car.price}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Пробіг
            </label>

            <input
              name="mileage"
              type="number"
              defaultValue={car.mileage}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Паливо
            </label>

            <input
              name="fuel"
              defaultValue={car.fuel}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Потужність
            </label>

            <input
              name="power"
              defaultValue={car.power}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Батарея
            </label>

            <input
              name="battery"
              defaultValue={car.battery}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Колір
            </label>

            <input
              name="color"
              defaultValue={car.color}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Статус
            </label>

            <select
              name="status"
              defaultValue={car.status}
              className={inputClass}
            >
              <option>В наявності</option>
              <option>Продано</option>
              <option>Резерв</option>
              <option>В дорозі</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Опис
          </label>

          <textarea
            name="description"
            rows={6}
            defaultValue={car.description ?? ""}
            className={inputClass}
          />
        </div>

        <div className="flex justify-end gap-4">
          <Link
            href="/admin/cars"
            className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Скасувати
          </Link>

          <button
            type="submit"
            className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
          >
            Зберегти зміни
          </button>
        </div>
      </form>
    </div>
  );
}