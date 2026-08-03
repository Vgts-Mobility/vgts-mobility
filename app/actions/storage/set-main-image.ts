"use server";

import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function setMainImageAction(
  carId: string,
  index: number
) {
  const { data: car, error } = await supabaseAdmin
    .from("cars")
    .select("images")
    .eq("id", carId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const images: string[] = [...(car.images ?? [])];

  if (index < 0 || index >= images.length) {
    return;
  }

  const [main] = images.splice(index, 1);
  images.unshift(main);

  const { error: updateError } = await supabaseAdmin
    .from("cars")
    .update({ images })
    .eq("id", carId);

  if (updateError) {
    throw new Error(updateError.message);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${carId}`);
}