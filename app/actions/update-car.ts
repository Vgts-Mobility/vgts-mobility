"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { updateCar as updateCarModel } from "@/lib/models/cars";

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

export async function updateCar(
  id: string,
  formData: FormData
) {
  const brand = String(formData.get("brand") || "");
  const model = String(formData.get("model") || "");

  const slug = slugify(`${brand}-${model}`);

  const features = formData.getAll("features").map(String);

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

    transmission: String(
      formData.get("transmission") || ""
    ),

    drive: String(formData.get("drive") || ""),

    body_type: String(
      formData.get("body_type") || ""
    ),

    interior_color: String(
      formData.get("interior_color") || ""
    ),

    vin: String(formData.get("vin") || ""),

    seats: Number(formData.get("seats") || 0),

    owners: Number(formData.get("owners") || 0),

    service_history:
      formData.get("service_history") === "on",

    description: String(
      formData.get("description") || ""
    ),

    features,

    status: String(
      formData.get("status") || "В наявності"
    ).trim(),
  });

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin");
  revalidatePath("/admin/cars");
  revalidatePath(`/admin/cars/${id}`);

  redirect("/admin/cars");
}