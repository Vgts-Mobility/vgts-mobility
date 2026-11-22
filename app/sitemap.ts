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

  // Only request the known required column: some deployments may not have
  // updated_at/created_at, which would otherwise make the entire query fail.
  const { data: cars, error } = await supabaseAdmin
    .from("cars")
    .select("slug")
    .not("slug", "is", null);

  if (error) {
    console.error("Sitemap cars query failed:", error.message);
    return staticPages;
  }

  const carPages: MetadataRoute.Sitemap = (cars ?? [])
    .filter((car) => typeof car.slug === "string" && car.slug.length > 0)
    .flatMap((car) =>
      locales.map((locale) => ({
        url: `${baseUrl}/${locale}/cars/${encodeURIComponent(car.slug)}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }))
    );

  return [...staticPages, ...carPages];
}
