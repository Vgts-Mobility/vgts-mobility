"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdminSession } from "@/lib/auth/require-admin";

export async function deleteRequest(id: string) {
  await requireAdminSession();
  if (!id) throw new Error("Chybí ID poptávky.");

  const { error } = await supabaseAdmin
    .from("requests")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/requests");
  revalidatePath(`/admin/requests/${id}`);
}
