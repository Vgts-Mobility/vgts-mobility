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

  transmission?: string | null;
  drive?: string | null;
  body_type?: string | null;
  interior_color?: string | null;

  vin?: string | null;

  seats?: number | null;
  owners?: number | null;

  service_history?: boolean | null;

  description?: string | null;

  status?: string | null;

  features?: string[] | null;
};

type CarFormProps = {
  action: (formData: FormData) => Promise<void>;
  car?: Car;
  submitText?: string;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-text placeholder:text-text-muted outline-none transition focus:border-primary";

const FEATURES = [
  "Apple CarPlay",
  "Android Auto",
  "Navigace",
  "Head-Up Display",
  "360° kamera",
  "Parkovací kamera",
  "Parkovací senzory",
  "Adaptivní tempomat",
  "Lane Assist",
  "Blind Spot",
  "Matrix LED",
  "LED světlomety",
  "Vyhřívaná sedadla",
  "Vyhřívaný volant",
  "Odvětrávaná sedadla",
  "Elektrická sedadla",
  "Paměť sedadel",
  "Kožený interiér",
  "Panoramatická střecha",
  "Střešní okno",
  "Keyless",
  "Bezdrátová nabíječka",
  "Ambientní osvětlení",
  "Elektrické víko kufru",
  "Tažné zařízení",
  "4x4",
];

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
          <label className="mb-2 block text-sm font-medium">
            Марка
          </label>

          <input
            name="brand"
            required
            defaultValue={car?.brand}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Модель
          </label>

          <input
            name="model"
            required
            defaultValue={car?.model}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Рік
          </label>

          <input
            type="number"
            name="year"
            required
            defaultValue={car?.year}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Ціна
          </label>

          <input
            type="number"
            name="price"
            required
            defaultValue={car?.price}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Пробіг
          </label>

          <input
            type="number"
            name="mileage"
            required
            defaultValue={car?.mileage}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Паливо
          </label>

          <input
            name="fuel"
            defaultValue={car?.fuel}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Потужність
          </label>

          <input
            name="power"
            defaultValue={car?.power}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Батарея
          </label>

          <input
            name="battery"
            defaultValue={car?.battery ?? ""}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            VIN
          </label>

          <input
            name="vin"
            defaultValue={car?.vin ?? ""}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Колір кузова
          </label>

          <input
            name="color"
            defaultValue={car?.color ?? ""}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Колір салону
          </label>

          <input
            name="interior_color"
            defaultValue={car?.interior_color ?? ""}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Коробка передач
          </label>

          <select
            name="transmission"
            defaultValue={car?.transmission ?? ""}
            className={inputClass}
          >
            <option value="">Оберіть</option>
            <option>Автомат</option>
            <option>Механіка</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Привід
          </label>

          <select
            name="drive"
            defaultValue={car?.drive ?? ""}
            className={inputClass}
          >
            <option value="">Оберіть</option>
            <option>Передній</option>
            <option>Задній</option>
            <option>Повний AWD</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Тип кузова
          </label>

          <select
            name="body_type"
            defaultValue={car?.body_type ?? ""}
            className={inputClass}
          >
            <option value="">Оберіть</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Combi</option>
            <option>Hatchback</option>
            <option>Coupe</option>
            <option>Pickup</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Кількість місць
          </label>

          <input
            type="number"
            name="seats"
            defaultValue={car?.seats ?? ""}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Власників
          </label>

          <input
            type="number"
            name="owners"
            defaultValue={car?.owners ?? ""}
            className={inputClass}
          />
        </div>
                {car && (
          <div>
            <label className="mb-2 block text-sm font-medium">
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

        <div className="flex items-center gap-3 md:col-span-2">
          <input
            id="service_history"
            type="checkbox"
            name="service_history"
            defaultChecked={car?.service_history ?? false}
            className="h-5 w-5"
          />

          <label
            htmlFor="service_history"
            className="text-sm font-medium"
          >
            Є сервісна історія
          </label>
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-xl font-bold text-white">
          Комплектація
        </h2>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => (
            <label
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-white/10 p-3 transition hover:border-primary"
            >
              <input
                type="checkbox"
                name="features"
                value={feature}
                defaultChecked={
                  car?.features?.includes(feature) ?? false
                }
                className="h-5 w-5"
              />

              <span>{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {!car && <ImageUpload />}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Опис автомобіля
        </label>

        <textarea
          name="description"
          rows={8}
          defaultValue={car?.description ?? ""}
          placeholder="Детальний опис автомобіля..."
          className={inputClass}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-primary px-8 py-3 font-semibold text-white transition hover:opacity-90"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}