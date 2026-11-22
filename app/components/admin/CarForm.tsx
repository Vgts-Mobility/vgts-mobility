"use client";

import ImageUpload from "@/app/components/admin/ImageUpload";
import { CAR_FEATURE_CATEGORIES, normalizeFeatureId } from "@/lib/models/car-features";

type Car = {
  brand: string;
  model: string;

  year: number;
  price: number;
  mileage: number;

  fuel: string;
  power: string;

  battery: string | null;
  soh?: number | null;
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

        {/* МАРКА */}

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

        {/* МОДЕЛЬ */}

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

        {/* РІК */}

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

        {/* ЦІНА */}

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

        {/* ПРОБІГ */}

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

        {/* ПАЛИВО */}

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

        {/* ПОТУЖНІСТЬ */}

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

        {/* БАТАРЕЯ */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Батарея
          </label>

          <input
            name="battery"
            defaultValue={car?.battery ?? ""}
            placeholder="Наприклад: 82 kWh"
            className={inputClass}
          />
        </div>

        {/* SOH */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Стан батареї (SOH)
          </label>

          <div className="relative">
            <input
              type="number"
              name="soh"
              min="0"
              max="100"
              step="0.1"
              defaultValue={car?.soh ?? ""}
              placeholder="Наприклад: 95"
              className={`${inputClass} pr-12`}
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-text-muted">
              %
            </span>
          </div>

          <p className="mt-1.5 text-xs text-text-muted">
            Стан батареї від 0 до 100%.
          </p>
        </div>

        {/* VIN */}

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

        {/* КОЛІР */}

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

        {/* КОЛІР САЛОНУ */}

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

        {/* КОРОБКА */}

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

        {/* ПРИВІД */}

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

        {/* КУЗОВ */}

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

        {/* МІСЦЯ */}

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

        {/* ВЛАСНИКИ */}

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

        {/* СТАТУС */}

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

        {/* СЕРВІСНА ІСТОРІЯ */}

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

      {/* КОМПЛЕКТАЦІЯ */}

      <div>
        <h2 className="mb-5 text-xl font-bold text-white">
          Комплектація
        </h2>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {CAR_FEATURE_CATEGORIES.map((category) => (
            <section key={category.id} className="rounded-xl border border-white/10 p-4">
              <h3 className="mb-3 text-sm font-bold text-primary">{category.title}</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {category.features.map((feature) => (
                  <label key={feature.id} className="flex items-center gap-3 rounded-lg border border-white/10 p-3 transition hover:border-primary">
                    <input
                      type="checkbox"
                      name="features"
                      value={feature.id}
                      defaultChecked={car?.features?.some((saved) => normalizeFeatureId(saved) === feature.id) ?? false}
                      className="h-5 w-5"
                    />
                    <span>{feature.label}</span>
                  </label>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* ФОТО */}

      {!car && <ImageUpload />}

      {/* ДОКУМЕНТИ АВТОМОБІЛЯ */}
      {!car && (
        <section className="space-y-5 rounded-2xl border border-white/10 bg-[#0b0e15] p-5">
          <div>
            <h2 className="text-xl font-bold text-white">Документи автомобіля</h2>
            <p className="mt-1 text-sm text-text-muted">Необов’язково. Можна додати PDF або фото зараз чи пізніше в редагуванні автомобіля.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block rounded-xl border border-lime-400/30 bg-lime-400/5 p-4">
              <span className="mb-2 block font-semibold text-lime-300">Сертифікат батареї</span>
              <input name="battery_certificate" type="file" accept="application/pdf,image/jpeg,image/png,image/webp" className="block w-full text-sm text-gray-300 file:mr-3 file:rounded-lg file:border-0 file:bg-lime-400 file:px-3 file:py-2 file:font-semibold file:text-black" />
              <span className="mt-2 block text-xs text-text-muted">PDF, JPG, PNG або WEBP · до 20 МБ</span>
            </label>
            <label className="block rounded-xl border border-violet-400/30 bg-violet-400/5 p-4">
              <span className="mb-2 block font-semibold text-violet-300">Звіт CarVertical</span>
              <input name="carvertical_report" type="file" accept="application/pdf,image/jpeg,image/png,image/webp" className="block w-full text-sm text-gray-300 file:mr-3 file:rounded-lg file:border-0 file:bg-violet-500 file:px-3 file:py-2 file:font-semibold file:text-white" />
              <span className="mt-2 block text-xs text-text-muted">PDF, JPG, PNG або WEBP · до 20 МБ</span>
            </label>
          </div>
        </section>
      )}

      {/* ОПИС */}

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

      {/* SUBMIT */}

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