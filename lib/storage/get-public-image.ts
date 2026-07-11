import { supabase } from "@/lib/supabase/client";

export function getPublicImage(path: string) {
  const { data } = supabase.storage
    .from("cars")
    .getPublicUrl(path);

  return data.publicUrl;
}