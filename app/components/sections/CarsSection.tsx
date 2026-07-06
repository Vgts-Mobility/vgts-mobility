import { supabase } from "@/lib/supabase";
import CarsSlider from "./CarsSlider";

export default async function CarsSection() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !cars) {
    return null;
  }

  return <CarsSlider cars={cars} />;
}