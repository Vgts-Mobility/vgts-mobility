"use client";

import { useTranslations } from "next-intl";

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

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature}
              className="
                group
                flex
                min-h-[42px]
                items-center
                gap-2.5
                rounded-xl
                border
                border-white/10
                bg-[#10141d]
                px-3
                py-2
                transition-all
                duration-200
                hover:border-lime-400/50
                hover:bg-lime-400/5
              "
            >

              <div
                className="
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-lime-400/10
                  text-[11px]
                  font-bold
                  text-lime-400
                  transition
                  group-hover:bg-lime-400
                  group-hover:text-black
                "
              >
                ✓
              </div>

              <span className="text-xs font-medium text-gray-200 sm:text-sm">
                {feature}
              </span>

            </div>

          ))}

        </div>

      ) : (

        <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5 text-sm text-gray-400">
          {t("empty")}
        </div>

      )}

    </section>
  );
}