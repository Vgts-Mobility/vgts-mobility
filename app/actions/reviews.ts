"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdminSession } from "@/lib/auth/require-admin";

export async function approveReview(id: string) {
  await requireAdminSession();
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
  await requireAdminSession();
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
  await requireAdminSession();
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

export async function saveReviewReply(id: string, formData: FormData) {
  await requireAdminSession();

  const reply = String(formData.get("company_reply") || "").trim();
  if (!reply) {
    throw new Error("Odpověď nesmí být prázdná.");
  }

  const { error } = await supabaseAdmin
    .from("reviews")
    .update({
      company_reply: reply,
      company_replied_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("status", "approved");

  if (error) throw new Error(error.message);

  revalidatePath("/admin/reviews");
  revalidatePath("/");
  revalidatePath("/cs");
  revalidatePath("/uk");
  revalidatePath("/en");
}
