import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function PricesPage() {
  const t = await getTranslations("header");

  return (
    <main className="min-h-screen bg-[#05070d] px-3 pb-10 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-5 text-center">
          <h1 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
            {t("prices")}
          </h1>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b12] shadow-2xl">
          <Image
            src="/images/import-price.png"
            alt="VGTS Mobility — ceník služeb"
            width={2048}
            height={3072}
            priority
            className="h-auto w-full"
          />
        </div>

      </div>
    </main>
  );
}