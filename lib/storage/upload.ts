import { supabaseAdmin } from "@/lib/supabase-admin";

export async function uploadImages(
  folder: string,
  files: File[]
) {
  const uploaded: string[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const extension = file.name.split(".").pop() ?? "jpg";

    const fileName = `${i + 1}.${extension}`;

    const path = `${folder}/${fileName}`;

    const { error } = await supabaseAdmin.storage
      .from("cars")
      .upload(path, file, {
        upsert: true,
        cacheControl: "3600",
      });

    if (error) throw error;

    uploaded.push(path);
  }

  return uploaded;
}