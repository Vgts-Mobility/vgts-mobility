"use client";

import { useActionState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { createRequest } from "@/app/actions/create-request";

type Props = {
  open: boolean;
  onClose: () => void;
};

const initialState = {
  success: false,
};

const BUSINESS_WHATSAPP = "420732827533";

export default function RequestModal({ open, onClose }: Props) {
  const t = useTranslations("requestModal");
  const locale = useLocale();
  const formRef = useRef<HTMLFormElement>(null);

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

  function sendRequestToWhatsApp() {
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const labels: Record<string, string> = locale === "uk"
      ? { name: "Ім'я", phone: "Телефон", email: "Email", brand: "Марка", model: "Модель", budget: "Бюджет", year_from: "Рік від", mileage: "Пробіг до", fuel: "Паливо", drive: "Привід", priority: "Пріоритет", notes: "Коментар" }
      : locale === "en"
      ? { name: "Name", phone: "Phone", email: "Email", brand: "Make", model: "Model", budget: "Budget", year_from: "Year from", mileage: "Mileage up to", fuel: "Fuel", drive: "Drive", priority: "Priority", notes: "Notes" }
      : { name: "Jméno", phone: "Telefon", email: "E-mail", brand: "Značka", model: "Model", budget: "Rozpočet", year_from: "Rok od", mileage: "Nájezd do", fuel: "Palivo", drive: "Pohon", priority: "Priorita", notes: "Poznámka" };

    const lines = Object.entries(labels)
      .map(([key, label]) => {
        const value = String(data.get(key) ?? "").trim();
        return value ? `${label}: ${value}` : "";
      })
      .filter(Boolean);

    const equipment = data.getAll("equipment").map(String);
    if (equipment.length) {
      const label = locale === "uk" ? "Бажане обладнання" : locale === "en" ? "Preferred equipment" : "Požadovaná výbava";
      lines.push(`${label}: ${equipment.join(", ")}`);
    }

    const intro = locale === "uk"
      ? "Доброго дня! Надсилаю заявку з сайту VGTS Mobility:"
      : locale === "en"
      ? "Hello! I am sending an inquiry from the VGTS Mobility website:"
      : "Dobrý den! Posílám poptávku z webu VGTS Mobility:";

    const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent([intro, "", ...lines].join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#10141d] p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black text-white">{t("title")}</h2>
          <button onClick={onClose} className="text-3xl text-gray-400 hover:text-white" aria-label={t("close")}>×</button>
        </div>

        <form ref={formRef} action={action} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input name="name" required placeholder={t("name")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
            <input name="phone" required placeholder={t("phone")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
            <input name="email" placeholder={t("email")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
            <input name="brand" placeholder={t("brand")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
            <input name="model" placeholder={t("model")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
            <input name="budget" type="number" placeholder={t("budget")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
            <input name="year_from" type="number" placeholder={t("yearFrom")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
            <input name="mileage" type="number" placeholder={t("mileage")} className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <select name="fuel" className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white">
              <option value="">{t("fuel")}</option>
              <option value="Benzín">{t("fuelOptions.petrol")}</option>
              <option value="Diesel">{t("fuelOptions.diesel")}</option>
              <option value="Hybrid">{t("fuelOptions.hybrid")}</option>
              <option value="Plug-in Hybrid">{t("fuelOptions.pluginHybrid")}</option>
              <option value="Elektro">{t("fuelOptions.electric")}</option>
            </select>
            <select name="drive" className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white">
              <option value="">{t("drive")}</option>
              <option value="Přední">{t("driveOptions.front")}</option>
              <option value="Zadní">{t("driveOptions.rear")}</option>
              <option value="4x4">{t("driveOptions.awd")}</option>
            </select>
            <select name="priority" className="rounded-xl border border-white/10 bg-[#181d28] p-3 text-white">
              <option value="">{t("priority")}</option>
              <option value="Nejnižší cena">{t("priorityOptions.price")}</option>
              <option value="Nejlepší stav">{t("priorityOptions.condition")}</option>
              <option value="Nejnižší nájezd">{t("priorityOptions.mileage")}</option>
            </select>
          </div>

          <div>
            <p className="mb-3 font-semibold text-white">{t("equipmentTitle")}</p>
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
                <label key={value} className="flex gap-2">
                  <input type="checkbox" name="equipment" value={value} />
                  {t(`equipment.${key}`)}
                </label>
              ))}
            </div>
          </div>

          <textarea name="notes" rows={5} placeholder={t("notes")} className="w-full rounded-xl border border-white/10 bg-[#181d28] p-4 text-white" />

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button disabled={pending} className="rounded-full bg-lime-400 px-10 py-4 font-bold text-black disabled:opacity-50">
              {pending ? t("sending") : t("submit")}
            </button>
            <button type="button" onClick={sendRequestToWhatsApp} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-7 py-4 font-bold text-[#25D366] transition hover:bg-[#25D366]/20">
              <MessageCircle size={19} />
              {locale === "uk" ? "Надіслати заявку через WhatsApp" : locale === "en" ? "Send inquiry via WhatsApp" : "Odeslat poptávku přes WhatsApp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}