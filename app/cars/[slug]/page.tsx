import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import CarDetails from "./CarDetails";

type Props = {
  params: {
    slug: string;
  };
};

export default async function CarPage({ params }: Props) {
  const { slug } = params;

  const { data: car, error } = await supabase
    .from("cars")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !car) {
    notFound();
  }

  return <CarDetails car={car} />;
}