import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import CarDetails from "./CarDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CarPage({ params }: Props) {
  const { slug } = await params;

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