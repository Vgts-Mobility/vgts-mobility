"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdminSession } from "@/lib/auth/require-admin";

export async function optimizeCarImageAction(
  carId: string,
  originalPath: string,
  file: File
) {
  await requireAdminSession();

  if (
    !carId ||
    !originalPath ||
    originalPath.startsWith("/") ||
    originalPath.includes("..") ||
    file.type !== "image/webp" ||
    file.size <= 0 ||
    file.size > 8 * 1024 * 1024
  ) {
    throw new Error("Некоректний файл або шлях фотографії.");
  }

  const { data: car, error: carError } = await supabaseAdmin
    .from("cars")
    .select("id, slug, images")
    .eq("id", carId)
    .single();

  if (carError || !car) {
    throw new Error("Автомобіль не знайдено.");
  }

  const currentImages = Array.isArray(car.images)
    ? (car.images as string[])
    : [];

  if (!currentImages.includes(originalPath)) {
    throw new Error("Фотографія вже змінена або не належить цьому автомобілю.");
  }

  const optimizedPath = `optimized/${carId}/${crypto.randomUUID()}.webp`;

  const { error: uploadError } = await supabaseAdmin.storage
    .from("cars")
    .upload(optimizedPath, file, {
      contentType: "image/webp",
      cacheControl: "31536000",
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Не вдалося зберегти WebP: ${uploadError.message}`);
  }

  const nextImages = currentImages.map((path) =>
    path === originalPath ? optimizedPath : path
  );

  const { error: updateError } = await supabaseAdmin
    .from("cars")
    .update({ images: nextImages })
    .eq("id", carId);

  if (updateError) {
    await supabaseAdmin.storage.from("cars").remove([optimizedPath]);
    throw new Error(`Не вдалося оновити список фото: ${updateError.message}`);
  }

  revalidatePath("/");
  revalidatePath("/cs/cars");
  revalidatePath("/uk/cars");
  revalidatePath("/en/cars");
  revalidatePath(`/cs/cars/${car.slug}`);
  revalidatePath(`/uk/cars/${car.slug}`);
  revalidatePath(`/en/cars/${car.slug}`);
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${carId}`);

  return { success: true, path: optimizedPath };
}
