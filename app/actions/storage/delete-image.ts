"use server";

import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function deleteImageAction(
  carId: string,
  folder: string,
  image: string
) {
  const { data: car, error } = await supabaseAdmin
    .from("cars")
    .select("images")
    .eq("id", carId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const images = (car.images ?? []).filter(
    (img: string) => img !== image
  );

  const { error: updateError } = await supabaseAdmin
    .from("cars")
    .update({ images })
    .eq("id", carId);

  if (updateError) {
    throw new Error(updateError.message);
  }

  const { error: storageError } = await supabaseAdmin.storage
    .from("cars")
    .remove([`${folder}/${image}`]);

  if (storageError) {
    throw new Error(storageError.message);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${carId}`);
}