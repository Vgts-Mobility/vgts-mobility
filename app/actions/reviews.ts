"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function approveReview(id: string) {
  const { error } = await supabaseAdmin
    .from("reviews")
    .update({
      status: "approved",
      approved_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/reviews");
  revalidatePath("/");
}

export async function hideReview(id: string) {
  const { error } = await supabaseAdmin
    .from("reviews")
    .update({
      status: "pending",
      approved_at: null,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/reviews");
  revalidatePath("/");
}

export async function deleteReview(id: string) {
  const { error } = await supabaseAdmin
    .from("reviews")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/reviews");
  revalidatePath("/");
}