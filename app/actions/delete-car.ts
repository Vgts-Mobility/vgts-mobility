"use server";

import { revalidatePath } from "next/cache";
import { deleteCar as deleteCarModel } from "@/lib/models/cars";
import { requireAdminSession } from "@/lib/auth/require-admin";

export async function deleteCar(id: string) {
  await requireAdminSession();
  await deleteCarModel(id);

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
}