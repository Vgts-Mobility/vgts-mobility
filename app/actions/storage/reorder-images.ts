"use server";

import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdminSession } from "@/lib/auth/require-admin";

export async function reorderImagesAction(
  carId: string,
  images: string[]
) {
  await requireAdminSession();
  const { error } = await supabaseAdmin
    .from("cars")
    .update({ images })
    .eq("id", carId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${carId}`);
}