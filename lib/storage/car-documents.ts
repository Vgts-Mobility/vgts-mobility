import { supabaseAdmin } from "@/lib/supabase-admin";

export type CarDocumentType = "battery_certificate" | "carvertical_report";

const documentColumns = {
  battery_certificate: "battery_certificate_path",
  carvertical_report: "carvertical_report_path",
} as const;

const allowedTypes: Record<string, string> = {
  "application/pdf": "pdf",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export async function saveCarDocument(
  carId: string,
  type: CarDocumentType,
  file: File
) {
  if (!file || file.size <= 0) return;
  const extension = allowedTypes[file.type];
  if (!extension) throw new Error("Povolené jsou pouze soubory PDF, JPG, PNG a WEBP.");
  if (file.size > MAX_FILE_SIZE) throw new Error("Maximální velikost souboru je 20 MB.");

  const column = documentColumns[type];
  const { data: car, error: readError } = await supabaseAdmin
    .from("cars")
    .select(column)
    .eq("id", carId)
    .single();
  if (readError) throw new Error(readError.message);

  const oldPath = (car as Record<string, string | null>)[column];
  const path = `documents/${carId}/${type}-${crypto.randomUUID()}.${extension}`;
  const { error: uploadError } = await supabaseAdmin.storage
    .from("cars")
    .upload(path, file, {
      contentType: file.type,
      cacheControl: "3600",
      upsert: false,
    });
  if (uploadError) throw new Error(uploadError.message);

  const { error: updateError } = await supabaseAdmin
    .from("cars")
    .update({ [column]: path })
    .eq("id", carId);
  if (updateError) {
    await supabaseAdmin.storage.from("cars").remove([path]);
    throw new Error(updateError.message);
  }

  if (oldPath) {
    await supabaseAdmin.storage.from("cars").remove([oldPath]);
  }
  return path;
}

export async function removeCarDocument(carId: string, type: CarDocumentType) {
  const column = documentColumns[type];
  const { data: car, error: readError } = await supabaseAdmin
    .from("cars")
    .select(column)
    .eq("id", carId)
    .single();
  if (readError) throw new Error(readError.message);

  const oldPath = (car as Record<string, string | null>)[column];
  const { error: updateError } = await supabaseAdmin
    .from("cars")
    .update({ [column]: null })
    .eq("id", carId);
  if (updateError) throw new Error(updateError.message);

  if (oldPath) {
    const { error: removeError } = await supabaseAdmin.storage.from("cars").remove([oldPath]);
    if (removeError) throw new Error(removeError.message);
  }
}
