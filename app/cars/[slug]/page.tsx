import { notFound } from "next/navigation";
import { cars } from "@/app/data/cars";
import CarDetails from "./CarDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CarPage({ params }: Props) {
  const { slug } = await params;

  const car = cars.find((c) => c.slug === slug);

  if (!car) {
    notFound();
  }

  return <CarDetails car={car} />;
}