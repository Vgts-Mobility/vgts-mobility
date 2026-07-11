import { supabaseAdmin } from "@/lib/supabase-admin";

type CreateCarData = {
  brand: string;
  model: string;
  slug: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  power: string;
  battery: string;
  color: string;
  description: string;
};

type UpdateCarData = {
  brand: string;
  model: string;
  slug: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  power: string;
  battery: string;
  color: string;
  description: string;
  status: string;
};

export async function getCars() {
  const { data, error } = await supabaseAdmin
    .from("cars")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCarById(id: string) {
  const { data, error } = await supabaseAdmin
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createCar(data: CreateCarData) {
  const { data: car, error } = await supabaseAdmin
    .from("cars")
    .insert({
      ...data,
      status: "В наявності",
      image_folder: data.slug,
      images: [],
      features: [],
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return car;
}

export async function updateCar(id: string, data: UpdateCarData) {
  const { error } = await supabaseAdmin
    .from("cars")
    .update({
      ...data,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteCar(id: string) {
  const { error } = await supabaseAdmin
    .from("cars")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateCarImages(
  id: string,
  images: string[]
) {
  const { error } = await supabaseAdmin
    .from("cars")
    .update({
      images,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}