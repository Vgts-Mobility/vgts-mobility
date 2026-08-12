"use client";

import { useActionState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { createRequest } from "@/app/actions/create-request";

type Props = {
  open: boolean;
  onClose: () => void;
};

const initialState = {
  success: false,
};

export default function RequestModal({
  open,
  onClose,
}: Props) {
  const t = useTranslations("requestModal");

  const [state, action, pending] = useActionState(
    async (_: typeof initialState, formData: FormData) => {
      await createRequest(formData);
      return { success: true };
    },
    initialState
  );

  useEffect(() => {
    if (state.success) {
      alert(t("success"));
      onClose();
    }
  }, [state, onClose, t]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#10141d] p-8"
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black text-white">
            {t("title")}
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-white"
            aria-label={t("close")}
          >
            ×
          </button>
        </div>

        <form action={action} className="space-y-6">

          <div className="grid gap-4 md:grid-cols-2">

            <input
              name="name"
              required
              placeholder={t("name")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="phone"
              required
              placeholder={t("phone")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="email"
              placeholder={t("email")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="brand"
              placeholder={t("brand")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="model"
              placeholder={t("model")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="budget"
              type="number"
              placeholder={t("budget")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="year_from"
              type="number"
              placeholder={t("yearFrom")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="mileage"
              type="number"
              placeholder={t("mileage")}
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <select
              name="fuel"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            >
              <option value="">
                {t("fuel")}
              </option>

              <option value="Benzín">
                {t("fuelOptions.petrol")}
              </option>

              <option value="Diesel">
                {t("fuelOptions.diesel")}
              </option>

              <option value="Hybrid">
                {t("fuelOptions.hybrid")}
              </option>

              <option value="Plug-in Hybrid">
                {t("fuelOptions.pluginHybrid")}
              </option>

              <option value="Elektro">
                {t("fuelOptions.electric")}
              </option>
            </select>

            <select
              name="drive"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            >
              <option value="">
                {t("drive")}
              </option>

              <option value="Přední">
                {t("driveOptions.front")}
              </option>

              <option value="Zadní">
                {t("driveOptions.rear")}
              </option>

              <option value="4x4">
                {t("driveOptions.awd")}
              </option>
            </select>

            <select
              name="priority"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            >
              <option value="">
                {t("priority")}
              </option>

              <option value="Nejnižší cena">
                {t("priorityOptions.price")}
              </option>

              <option value="Nejlepší stav">
                {t("priorityOptions.condition")}
              </option>

              <option value="Nejnižší nájezd">
                {t("priorityOptions.mileage")}
              </option>
            </select>

          </div>

          <div>

            <p className="mb-3 font-semibold text-white">
              {t("equipmentTitle")}
            </p>

            <div className="grid gap-3 text-white md:grid-cols-3">

              {[
                ["Panoramatická střecha", "panoramicRoof"],
                ["360° kamera", "camera360"],
                ["Head-Up Display", "headUpDisplay"],
                ["Apple CarPlay", "appleCarPlay"],
                ["Android Auto", "androidAuto"],
                ["Adaptivní tempomat", "adaptiveCruise"],
                ["Vyhřívaná sedadla", "heatedSeats"],
                ["Ventilovaná sedadla", "ventilatedSeats"],
                ["Matrix LED", "matrixLed"],
                ["Harman Kardon", "harmanKardon"],
                ["Tažné zařízení", "towBar"],
                ["Tepelné čerpadlo", "heatPump"],
              ].map(([value, key]) => (
                <label
                  key={value}
                  className="flex gap-2"
                >
                  <input
                    type="checkbox"
                    name="equipment"
                    value={value}
                  />

                  {t(`equipment.${key}`)}
                </label>
              ))}

            </div>

          </div>

          <textarea
            name="notes"
            rows={5}
            placeholder={t("notes")}
            className="w-full rounded-xl border border-white/10 bg-[#181d28] p-4 text-white"
          />

          <button
            disabled={pending}
            className="rounded-full bg-lime-400 px-10 py-4 font-bold text-black disabled:opacity-50"
          >
            {pending
              ? t("sending")
              : t("submit")}
          </button>

        </form>

      </div>
    </div>
  );
}