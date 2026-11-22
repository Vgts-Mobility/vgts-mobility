import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import CarDetails from "./CarDetails";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

type CarSeoData = {
  brand: string;
  model: string;
  slug: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  power: string;
  status: string | null;
};

const siteUrl = "https://vgts-mobility.cz";
const locales = ["cs", "uk", "en"] as const;

async function getCar(slug: string) {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data;
}

function getSeoText(car: CarSeoData, locale: string) {
  const price = `${car.price.toLocaleString(locale === "en" ? "en-GB" : locale === "uk" ? "uk-UA" : "cs-CZ")} Kč`;
  const mileage = `${car.mileage.toLocaleString(locale === "en" ? "en-GB" : locale === "uk" ? "uk-UA" : "cs-CZ")} km`;

  if (locale === "uk") {
    return {
      title: `${car.brand} ${car.model} ${car.year} — ціна ${price} | VGTS Mobility`,
      description: `${car.brand} ${car.model}, ${car.year} року. Пробіг ${mileage}, паливо: ${car.fuel}, потужність: ${car.power}. Ціна ${price}. VGTS Mobility, Чехія.`,
    };
  }

  if (locale === "en") {
    return {
      title: `${car.brand} ${car.model} ${car.year} for sale — ${price} | VGTS Mobility`,
      description: `${car.brand} ${car.model}, year ${car.year}. Mileage ${mileage}, fuel: ${car.fuel}, power: ${car.power}. Price: ${price}. VGTS Mobility, Czechia.`,
    };
  }

  return {
    title: `${car.brand} ${car.model} ${car.year} — cena ${price} | VGTS Mobility`,
    description: `${car.brand} ${car.model}, rok ${car.year}. Nájezd ${mileage}, palivo: ${car.fuel}, výkon: ${car.power}. Cena ${price}. VGTS Mobility, Česká republika.`,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const car = (await getCar(slug)) as CarSeoData | null;

  if (!car) {
    return {
      title: "Vůz nenalezen | VGTS Mobility",
      robots: { index: false, follow: false },
    };
  }

  const seo = getSeoText(car, locale);
  const canonical = `${siteUrl}/${locale}/cars/${encodeURIComponent(car.slug)}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        cs: `${siteUrl}/cs/cars/${encodeURIComponent(car.slug)}`,
        uk: `${siteUrl}/uk/cars/${encodeURIComponent(car.slug)}`,
        en: `${siteUrl}/en/cars/${encodeURIComponent(car.slug)}`,
        "x-default": `${siteUrl}/cs/cars/${encodeURIComponent(car.slug)}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "VGTS Mobility",
      title: seo.title,
      description: seo.description,
      url: canonical,
      locale: locale === "uk" ? "uk_UA" : locale === "en" ? "en_GB" : "cs_CZ",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CarPage({ params }: Props) {
  const { slug } = await params;
  const car = await getCar(slug);

  if (!car) {
    notFound();
  }

  return <CarDetails car={car} />;
}
