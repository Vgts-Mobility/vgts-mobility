"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  createCar,
  updateCarImages,
} from "@/lib/models/cars";

import { uploadImages } from "@/lib/storage/upload";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { saveCarDocument } from "@/lib/storage/car-documents";

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
  await requireAdminSession();
  const brand = String(formData.get("brand") || "");
  const model = String(formData.get("model") || "");
  const year = Number(formData.get("year"));

  // Кожен автомобіль отримує власний URL, навіть якщо марка/модель повторюються.
  const slug = `${slugify(`${brand}-${model}-${year}`)}-${crypto.randomUUID().slice(0, 8)}`;
  // Папка для завантажень не залежить від назви чи slug.
  const imageFolder = `car-${crypto.randomUUID()}`;

  const features = formData
    .getAll("features")
    .map(String);

  const sohValue = formData.get("soh");

  const car = await createCar({
    brand,
    model,
    slug,
    imageFolder,

    year,
    price: Number(formData.get("price")),
    mileage: Number(formData.get("mileage")),

    fuel: String(formData.get("fuel") || ""),
    power: String(formData.get("power") || ""),

    battery: String(formData.get("battery") || ""),

    soh:
      sohValue !== null &&
      String(sohValue).trim() !== ""
        ? Number(sohValue)
        : null,

    color: String(formData.get("color") || ""),

    transmission: String(
      formData.get("transmission") || ""
    ),

    drive: String(
      formData.get("drive") || ""
    ),

    body_type: String(
      formData.get("body_type") || ""
    ),

    interior_color: String(
      formData.get("interior_color") || ""
    ),

    vin: String(formData.get("vin") || ""),

    seats: Number(
      formData.get("seats") || 0
    ),

    owners: Number(
      formData.get("owners") || 0
    ),

    service_history:
      formData.get("service_history") === "on",

    description: String(
      formData.get("description") || ""
    ),

    features,
  });

  const files = formData.getAll("files") as File[];

  if (files.length > 0) {
    const uploaded = await uploadImages(
      car.image_folder,
      files
    );

    await updateCarImages(
      car.id,
      uploaded
    );
  }

  const batteryCertificate = formData.get("battery_certificate");
  if (batteryCertificate instanceof File && batteryCertificate.size > 0) {
    await saveCarDocument(car.id, "battery_certificate", batteryCertificate);
  }

  const carVerticalReport = formData.get("carvertical_report");
  if (carVerticalReport instanceof File && carVerticalReport.size > 0) {
    await saveCarDocument(car.id, "carvertical_report", carVerticalReport);
  }

  revalidatePath("/");
  revalidatePath("/cars");
  revalidatePath("/admin");
  revalidatePath("/admin/cars");

  redirect("/admin/cars");
}
