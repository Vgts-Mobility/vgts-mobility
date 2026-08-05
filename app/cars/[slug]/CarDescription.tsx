"use client";

type Props = {
  description?: string | null;
};

export default function CarDescription({
  description,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-black">
        Popis vozu
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
            Popis vozidla bude doplněn.
          </p>
        )}
      </div>

    </section>
  );
}