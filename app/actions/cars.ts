"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  createCar,
  updateCarImages,
} from "@/lib/models/cars";

import { uploadImages } from "@/lib/storage/upload";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яіїєґ\s-]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createCarAction(formData: FormData) {
  const brand = String(formData.get("brand") || "");
  const model = String(formData.get("model") || "");

  const slug = slugify(`${brand}-${model}`);

  const car = await createCar({
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
  });

  const files = formData.getAll("files") as File[];

  if (files.length > 0) {
    const uploaded = await uploadImages(slug, files);

    await updateCarImages(car.id, uploaded);
  }

  revalidatePath("/admin/cars");

  redirect("/admin/cars");
}