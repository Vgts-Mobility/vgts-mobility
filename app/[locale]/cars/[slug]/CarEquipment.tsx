"use client";

import { useTranslations } from "next-intl";
import { CAR_FEATURE_CATEGORIES, normalizeFeatureId } from "@/lib/models/car-features";

type Props = {
  features?: string[] | null;
};

export default function CarEquipment({
  features,
}: Props) {
  const t = useTranslations("carDetails.equipment");

  return (
    <section className="mt-7">

      <h2 className="mb-4 text-2xl font-black sm:text-3xl">
        {t("title")}
      </h2>

      {features?.length ? (
        <div className="space-y-6">
          {CAR_FEATURE_CATEGORIES.map((category) => {
            const selected = category.features.filter((option) =>
              features.some((saved) => normalizeFeatureId(saved) === option.id)
            );
            if (!selected.length) return null;
            return (
              <div key={category.id}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400">
                  {t(category.titleKey as never)}
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
                  {selected.map((option) => (
                    <div key={option.id} className="group flex min-h-[42px] min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-[#10141d] px-2.5 py-2 transition-all duration-200 hover:border-lime-400/50 hover:bg-lime-400/5 sm:gap-2.5 sm:px-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-[11px] font-bold text-lime-400 transition group-hover:bg-lime-400 group-hover:text-black">✓</div>
                      <span className="min-w-0 break-words text-[11px] font-medium leading-snug text-gray-200 sm:text-sm">{t(option.labelKey as never)}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {features.filter((saved) => !CAR_FEATURE_CATEGORIES.some((category) =>
            category.features.some((option) => option.id === normalizeFeatureId(saved))
          )).length > 0 && (
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {features.filter((saved) => !CAR_FEATURE_CATEGORIES.some((category) =>
                category.features.some((option) => option.id === normalizeFeatureId(saved))
              )).map((unknown) => (
                <div key={unknown} className="min-w-0 break-words rounded-xl border border-white/10 bg-[#10141d] px-3 py-2 text-xs text-gray-200 sm:text-sm">{unknown}</div>
              ))}
            </div>
          )}
        </div>
      ) : (

        <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5 text-sm text-gray-400">
          {t("empty")}
        </div>

      )}

    </section>
  );
}