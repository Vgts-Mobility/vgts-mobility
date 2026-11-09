import { createClient } from "@/lib/supabase/server";

/**
 * Require an authenticated Supabase session for privileged admin actions.
 * Both administrators can continue using the same shared login on any device.
 */
export async function requireAdminSession() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  return user;
}
