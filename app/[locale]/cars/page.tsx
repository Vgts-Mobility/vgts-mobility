import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { supabase } from "@/lib/supabase";
import CarCard from "@/app/components/cars/CarCard";
import Header from "@/app/components/layout/Header";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CarsPage({
  params,
}: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "cars",
  });

  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-[#05070d] pt-[90px]">
          <div className="mx-auto max-w-[1200px] px-4 py-12 text-center text-red-500 sm:px-6">
            {t("loadError")}
          </div>
        </main>
      </>
    );
  }

  const sortedCars = [...(cars ?? [])].sort((a, b) => {
    const order: Record<string, number> = {
      "В наявності": 0,
      "Резерв": 1,
      "В дорозі": 2,
      "Продано": 3,
    };

    return (
      (order[a.status ?? "Продано"] ?? 99) -
      (order[b.status ?? "Продано"] ?? 99)
    );
  });

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070d] pt-[90px] pb-10 sm:pt-[100px]">

        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

          {/* PAGE HEADER */}

          <div className="mb-5 sm:mb-6">

            <Link
              href={`/${locale}`}
              className="
                inline-flex
                items-center
                gap-1
                text-xs
                font-semibold
                text-lime-400
                transition
                hover:text-lime-300
                hover:underline
                sm:text-sm
              "
            >
              ←{" "}
              {locale === "cs"
                ? "Zpět na hlavní stránku"
                : locale === "uk"
                  ? "На головну"
                  : "Back to home"}
            </Link>

            <h1
              className="
                mt-3
                text-3xl
                font-black
                leading-none
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              {locale === "cs"
                ? "Všechny vozy"
                : locale === "uk"
                  ? "Усі автомобілі"
                  : "All cars"}
            </h1>

            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-5
                text-gray-400
                sm:text-[15px]
                sm:leading-6
              "
            >
              {locale === "cs"
                ? "Kompletní nabídka prověřených vozidel VGTS Mobility."
                : locale === "uk"
                  ? "Повна пропозиція перевірених автомобілів VGTS Mobility."
                  : "Complete selection of verified VGTS Mobility vehicles."}
            </p>

          </div>

          {/* ALL CARS */}

          {sortedCars.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              "
            >
              {sortedCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                />
              ))}
            </div>

          ) : (

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#10141d]
                p-8
                text-center
                text-sm
                text-gray-400
              "
            >
              {t("empty")}
            </div>

          )}

        </div>

      </main>
    </>
  );
}