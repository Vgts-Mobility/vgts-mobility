"use client";

import ImageUpload from "@/app/components/admin/ImageUpload";

type CarFormProps = {
  action: (formData: FormData) => Promise<void>;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-text placeholder:text-text-muted outline-none transition focus:border-primary";

export default function CarForm({ action }: CarFormProps) {
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
            placeholder="2021"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Ціна (€)
          </label>

          <input
            name="price"
            type="number"
            required
            placeholder="36000"
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
            placeholder="196500"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            VIN
          </label>

          <input
            name="vin"
            type="text"
            placeholder="WF0XXXXXXXXXXXXXX"
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
            placeholder="Black"
            className={inputClass}
          />
        </div>
      </div>

      <ImageUpload />

      <div>
        <label className="mb-2 block text-sm font-medium text-text">
          Опис
        </label>

        <textarea
          name="description"
          rows={6}
          placeholder="Опишіть автомобіль..."
          className={inputClass}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          Зберегти автомобіль
        </button>
      </div>
    </form>
  );
}