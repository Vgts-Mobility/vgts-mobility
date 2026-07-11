import Link from "next/link";
import StatusBadge from "./badges/StatusBadge";
import { deleteCar } from "@/app/actions/delete-car";

type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  status: string | null;
};

type Props = {
  cars: Car[];
};

export default function CarsTable({ cars }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm font-semibold text-gray-700">
            <th className="px-6 py-4">Фото</th>
            <th className="px-6 py-4">Автомобіль</th>
            <th className="px-6 py-4">Рік</th>
            <th className="px-6 py-4">Ціна</th>
            <th className="px-6 py-4">Пробіг</th>
            <th className="px-6 py-4">Статус</th>
            <th className="px-6 py-4 text-right">Дії</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr
              key={car.id}
              className="border-t transition hover:bg-gray-50"
            >
              <td className="px-6 py-4">
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-gray-200 text-xs text-gray-500">
                  Фото
                </div>
              </td>

              <td className="px-6 py-4">
                <div className="font-semibold text-gray-900">
                  {car.brand} {car.model}
                </div>
              </td>

              <td className="px-6 py-4 text-gray-700">
                {car.year}
              </td>

              <td className="px-6 py-4 font-medium text-gray-900">
                € {car.price.toLocaleString()}
              </td>

              <td className="px-6 py-4 text-gray-700">
                {car.mileage.toLocaleString()} km
              </td>

              <td className="px-6 py-4">
                <StatusBadge status={car.status} />
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-end gap-2">

                  <Link
                    href={`/admin/cars/${car.id}`}
                    className="rounded-lg border border-gray-300 px-3 py-2 transition hover:bg-gray-100"
                  >
                    ✏️
                  </Link>

                  <form
                    action={async () => {
                      "use server";
                      await deleteCar(car.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="rounded-lg border border-red-200 px-3 py-2 text-red-600 transition hover:bg-red-50"
                    >
                      🗑️
                    </button>
                  </form>

                </div>
              </td>
            </tr>
          ))}

          {cars.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="py-12 text-center text-gray-500"
              >
                Автомобілі відсутні.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}