"use client";

import { useTranslations } from "next-intl";

type Props = {
  description?: string | null;
};

export default function CarDescription({
  description,
}: Props) {
  const t = useTranslations("carDescription");

  return (
    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-black">
        {t("title")}
      </h2>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-[#10141d]
          p-8
          leading-8
          text-gray-300
        "
      >
        {description ? (
          <div className="whitespace-pre-line">
            {description}
          </div>
        ) : (
          <p className="text-gray-500">
            {t("empty")}
          </p>
        )}
      </div>

    </section>
  );
}