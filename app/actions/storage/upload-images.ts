"use server";

import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { uploadImages } from "@/lib/storage/upload";

export async function uploadImagesAction(
  carId: string,
  folder: string,
  formData: FormData
) {
  const files = formData.getAll("images") as File[];

  const validFiles = files.filter((file) => file.size > 0);

  if (!validFiles.length) {
    return;
  }

  // Поточний автомобіль
  const { data: car, error } = await supabaseAdmin
    .from("cars")
    .select("images")
    .eq("id", carId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  // Завантажуємо тільки нові фото
  const uploaded = await uploadImages(folder, validFiles);

  // Додаємо до вже існуючих
  const images = [...(car.images ?? []), ...uploaded];

  const { error: updateError } = await supabaseAdmin
    .from("cars")
    .update({
      images,
    })
    .eq("id", carId);

  if (updateError) {
    throw new Error(updateError.message);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${carId}`);
}