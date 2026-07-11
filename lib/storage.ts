import { supabaseAdmin } from "./supabase-admin";

export function getPublicImageUrl(path: string) {
  const { data } = supabaseAdmin.storage
    .from("cars")
    .getPublicUrl(path);

  return data.publicUrl;
}

export async function uploadFile(
  path: string,
  file: File
) {
  const arrayBuffer = await file.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  const { error } = await supabaseAdmin.storage
    .from("cars")
    .upload(path, buffer, {
      upsert: true,
      contentType: file.type,
    });

  if (error) {
    throw new Error(error.message);
  }

  return path;
}