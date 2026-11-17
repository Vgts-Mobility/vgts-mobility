"use server";

import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdminSession } from "@/lib/auth/require-admin";

export async function deleteImageAction(
  carId: string,
  image: string
) {
  await requireAdminSession();

  const { data: car, error } = await supabaseAdmin
    .from("cars")
    .select("images, image_folder")
    .eq("id", carId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const currentImages = (car.images ?? []) as string[];
  if (!currentImages.includes(image)) {
    throw new Error("Фотографію не знайдено в цьому автомобілі.");
  }

  // У БД зберігається повний шлях (наприклад, car-.../photo.jpg).
  // Не додаємо folder вдруге — це створювало неправильний шлях.
  const storagePath = image.includes("/")
    ? image
    : `${car.image_folder}/${image}`;

  const images = currentImages.filter((img) => img !== image);

  const { error: updateError } = await supabaseAdmin
    .from("cars")
    .update({ images })
    .eq("id", carId);

  if (updateError) {
    throw new Error(updateError.message);
  }

  const { error: storageError } = await supabaseAdmin.storage
    .from("cars")
    .remove([storagePath]);

  if (storageError) {
    throw new Error(storageError.message);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${carId}`);
}
