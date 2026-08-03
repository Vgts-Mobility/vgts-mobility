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
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createCarAction(formData: FormData) {
  const brand = String(formData.get("brand") || "");
  const model = String(formData.get("model") || "");

  const slug = slugify(`${brand}-${model}`);

  const features = formData.getAll("features").map(String);

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

    transmission: String(formData.get("transmission") || ""),
    drive: String(formData.get("drive") || ""),
    body_type: String(formData.get("body_type") || ""),
    interior_color: String(formData.get("interior_color") || ""),

    vin: String(formData.get("vin") || ""),

    seats: Number(formData.get("seats") || 0),
    owners: Number(formData.get("owners") || 0),

    service_history:
      formData.get("service_history") === "on",

    description: String(
      formData.get("description") || ""
    ),

    features,
  });

  const files = formData.getAll("files") as File[];

  if (files.length > 0) {
    const uploaded = await uploadImages(slug, files);

    await updateCarImages(car.id, uploaded);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin");
  revalidatePath("/admin/cars");

  redirect("/admin/cars");
}