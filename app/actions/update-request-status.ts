"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";
import { requireAdminSession } from "@/lib/auth/require-admin";

export async function updateRequestStatus(
  id: string,
  status: string
) {
  await requireAdminSession();
  const { error } = await supabase
    .from("requests")
    .update({ status })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/requests");
  revalidatePath(`/admin/requests/${id}`);

  return true;
}