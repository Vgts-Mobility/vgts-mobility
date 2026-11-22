"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { removeCarDocument, saveCarDocument, type CarDocumentType } from "@/lib/storage/car-documents";

function refreshCarPages(carId: string) {
  revalidatePath(`/admin/cars/${carId}`);
  revalidatePath("/", "layout");
  revalidatePath("/[locale]/cars/[slug]", "page");
}

export async function uploadCarDocumentAction(
  carId: string,
  type: CarDocumentType,
  formData: FormData
) {
  await requireAdminSession();
  const file = formData.get("document");
  if (!(file instanceof File) || file.size === 0) return;
  await saveCarDocument(carId, type, file);
  refreshCarPages(carId);
}

export async function removeCarDocumentAction(
  carId: string,
  type: CarDocumentType
) {
  await requireAdminSession();
  await removeCarDocument(carId, type);
  refreshCarPages(carId);
}
