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
    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-black">
        {t("title")}
      </h2>

      {features?.length ? (

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature}
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-lime-400/20
                bg-[#10141d]
                px-5
                py-4
                transition-all
                duration-300
                hover:border-lime-400
                hover:bg-lime-400/10
              "
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-lime-400/15
                  text-sm
                  font-bold
                  text-lime-400
                  transition
                  group-hover:bg-lime-400
                  group-hover:text-black
                "
              >
                ✓
              </div>

              <span className="text-gray-200">
                {feature}
              </span>

            </div>

          ))}

        </div>

      ) : (

        <div className="rounded-3xl border border-white/10 bg-[#10141d] p-8 text-gray-400">
          {t("empty")}
        </div>

      )}

    </section>
  );
}