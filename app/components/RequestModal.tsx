"use client";

import { useActionState, useEffect } from "react";
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
  const [state, action, pending] = useActionState(
    async (_: typeof initialState, formData: FormData) => {
      await createRequest(formData);
      return { success: true };
    },
    initialState
  );

  useEffect(() => {
    if (state.success) {
      alert("Děkujeme za vaši poptávku.");
      onClose();
    }
  }, [state, onClose]);

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
            Poptávka na vůz
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>

        <form action={action} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Jméno"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="phone"
              required
              placeholder="Telefon"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="email"
              placeholder="E-mail"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="brand"
              placeholder="Značka"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="model"
              placeholder="Model"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="budget"
              type="number"
              placeholder="Rozpočet (Kč)"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="year_from"
              type="number"
              placeholder="Min. rok výroby"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />

            <input
              name="mileage"
              type="number"
              placeholder="Max. nájezd (km)"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <select
              name="fuel"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            >
              <option value="">Palivo</option>
              <option>Benzín</option>
              <option>Diesel</option>
              <option>Hybrid</option>
              <option>Plug-in Hybrid</option>
              <option>Elektro</option>
            </select>

            <select
              name="drive"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            >
              <option value="">Pohon</option>
              <option>Přední</option>
              <option>Zadní</option>
              <option>4x4</option>
            </select>

            <select
              name="priority"
              className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white"
            >
              <option value="">Priorita</option>
              <option>Nejnižší cena</option>
              <option>Nejlepší stav</option>
              <option>Nejnižší nájezd</option>
            </select>
          </div>

          <div>
            <p className="mb-3 font-semibold text-white">
              Požadovaná výbava
            </p>

            <div className="grid gap-3 md:grid-cols-3 text-white">
              {[
                "Panoramatická střecha",
                "360° kamera",
                "Head-Up Display",
                "Apple CarPlay",
                "Android Auto",
                "Adaptivní tempomat",
                "Vyhřívaná sedadla",
                "Ventilovaná sedadla",
                "Matrix LED",
                "Harman Kardon",
                "Tažné zařízení",
                "Tepelné čerpadlo",
              ].map((item) => (
                <label key={item} className="flex gap-2">
                  <input
                    type="checkbox"
                    name="equipment"
                    value={item}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="notes"
            rows={5}
            placeholder="Další požadavky..."
            className="w-full rounded-xl border border-white/10 bg-[#181d28] p-4 text-white"
          />

          <button
            disabled={pending}
            className="rounded-full bg-lime-400 px-10 py-4 font-bold text-black disabled:opacity-50"
          >
            {pending ? "Odesílání..." : "Odeslat poptávku"}
          </button>
        </form>
      </div>
    </div>
  );
}