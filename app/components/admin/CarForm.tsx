"use client";

import ImageUpload from "@/app/components/admin/ImageUpload";

type Car = {
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  power: string;
  battery: string | null;
  color: string | null;
  description: string | null;
  status: string | null;
};

type CarFormProps = {
  action: (formData: FormData) => Promise<void>;
  car?: Car;
  submitText?: string;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-text placeholder:text-text-muted outline-none transition focus:border-primary";

export default function CarForm({
  action,
  car,
  submitText = "Зберегти автомобіль",
}: CarFormProps) {
  return (
    <form
      action={action}
      className="space-y-8 rounded-2xl border border-white/10 bg-surface p-8 shadow-lg"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Марка
          </label>

          <input
            name="brand"
            type="text"
            required
            defaultValue={car?.brand}
            placeholder="Ford"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Модель
          </label>

          <input
            name="model"
            type="text"
            required
            defaultValue={car?.model}
            placeholder="Mondeo Hybrid Vignale"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Рік
          </label>

          <input
            name="year"
            type="number"
            required
            defaultValue={car?.year}
            placeholder="2021"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Ціна (Kč)
          </label>

          <input
            name="price"
            type="number"
            required
            defaultValue={car?.price}
            placeholder="738000"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Пробіг
          </label>

          <input
            name="mileage"
            type="number"
            required
            defaultValue={car?.mileage}
            placeholder="196500"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Паливо
          </label>

          <input
            name="fuel"
            type="text"
            defaultValue={car?.fuel}
            placeholder="Hybrid"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Потужність
          </label>

          <input
            name="power"
            type="text"
            defaultValue={car?.power}
            placeholder="187 hp"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Батарея
          </label>

          <input
            name="battery"
            type="text"
            defaultValue={car?.battery ?? ""}
            placeholder="14 kWh"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Колір
          </label>

          <input
            name="color"
            type="text"
            defaultValue={car?.color ?? ""}
            placeholder="Black"
            className={inputClass}
          />
        </div>

        {car && (
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Статус
            </label>

            <select
              name="status"
              defaultValue={car.status ?? "В наявності"}
              className={inputClass}
            >
              <option>В наявності</option>
              <option>Продано</option>
              <option>Резерв</option>
              <option>В дорозі</option>
            </select>
          </div>
        )}
      </div>

      {!car && <ImageUpload />}

      <div>
        <label className="mb-2 block text-sm font-medium text-text">
          Опис
        </label>

        <textarea
          name="description"
          rows={6}
          defaultValue={car?.description ?? ""}
          placeholder="Опишіть автомобіль..."
          className={inputClass}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}