import type { MetadataRoute } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";

const baseUrl = "https://vgts-mobility.cz";
const locales = ["cs", "uk", "en"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1,
  }));

  const { data: cars, error } = await supabaseAdmin
    .from("cars")
    .select("slug, updated_at, created_at")
    .not("slug", "is", null);

  if (error) {
    console.error("Sitemap cars query failed:", error.message);
    return staticPages;
  }

  const carPages: MetadataRoute.Sitemap = (cars ?? []).flatMap((car) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/cars/${encodeURIComponent(car.slug)}`,
      lastModified: car.updated_at ?? car.created_at ?? now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...staticPages, ...carPages];
}
