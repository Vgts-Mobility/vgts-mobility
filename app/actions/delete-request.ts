"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function deleteRequest(id: string) {
  if (!id) throw new Error("Chybí ID poptávky.");

  const { error } = await supabaseAdmin
    .from("requests")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/requests");
  revalidatePath(`/admin/requests/${id}`);
}
