"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { updateCar as updateCarModel } from "@/lib/models/cars";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яіїєґ\s-]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function updateCar(id: string, formData: FormData) {
  const brand = String(formData.get("brand") || "");
  const model = String(formData.get("model") || "");

  const slug = slugify(`${brand}-${model}`);

  await updateCarModel(id, {
    brand,
    model,
    slug,

    year: Number(formData.get("year")),
    price: Number(formData.get("price")),
    mileage: Number(formData.get("mileage")),

    fuel: String(formData.get("fuel") || ""),
    power: String(formData.get("power") || ""),
    battery: String(formData.get("battery") || ""),
    color: String(formData.get("color") || ""),
    description: String(formData.get("description") || ""),
    status: String(formData.get("status") || ""),
  });

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${id}`);

  redirect("/admin/cars");
}