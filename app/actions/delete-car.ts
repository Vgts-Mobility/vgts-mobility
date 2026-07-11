"use server";

import { revalidatePath } from "next/cache";
import { deleteCar as deleteCarModel } from "@/lib/models/cars";

export async function deleteCar(id: string) {
  await deleteCarModel(id);

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
}