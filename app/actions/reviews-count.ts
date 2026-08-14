"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function getPendingReviewsCount() {
  const { count, error } = await supabaseAdmin
    .from("reviews")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "pending");

  if (error) {
    console.error(
      "Error loading pending reviews count:",
      error
    );

    return 0;
  }

  return count ?? 0;
}