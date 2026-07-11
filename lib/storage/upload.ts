import { supabaseAdmin } from "@/lib/supabase-admin";

export async function uploadImages(
  folder: string,
  files: File[]
) {
  const uploaded: string[] = [];

  for (const file of files) {
    const extension =
      file.name.split(".").pop()?.toLowerCase() || "jpg";

    const fileName =
      `${crypto.randomUUID()}.${extension}`;

    const path = `${folder}/${fileName}`;

    const { error } = await supabaseAdmin.storage
      .from("cars")
      .upload(path, file, {
        upsert: false,
        cacheControl: "3600",
      });

    if (error) {
      throw error;
    }

    uploaded.push(path);
  }

  return uploaded;
}