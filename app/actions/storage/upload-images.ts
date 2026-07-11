"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { uploadFile } from "@/lib/storage";
import type { CarImage } from "@/types/image";

export async function uploadImages(
  carId: string,
  formData: FormData
) {
  const files = formData.getAll("images") as File[];

  if (!files.length) return;

  const images: CarImage[] = [];

  let index = 1;

  for (const file of files) {
    if (file.size === 0) continue;

    const extension =
      file.name.split(".").pop()?.toLowerCase() || "jpg";

    const path = `${carId}/${index}.${extension}`;

    await uploadFile(path, file);

    images.push({
      path,
      main: index === 1,
    });

    index++;
  }

  const { error } = await supabaseAdmin
    .from("cars")
    .update({
      images,
    })
    .eq("id", carId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${carId}`);
}