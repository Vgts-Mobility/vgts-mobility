import Link from "next/link";
import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";
import { updateCar } from "@/app/actions/update-car";

import CarForm from "@/app/components/admin/CarForm";
import PhotoManager from "@/app/components/admin/photo-manager/PhotoManager";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCarPage({
  params,
}: Props) {
  const { id } = await params;

  const { data: car, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !car) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Редагування автомобіля
          </h1>

          <p className="mt-2 text-text-muted">
            {car.brand} {car.model}
          </p>
        </div>

        <Link
          href="/admin/cars"
          className="rounded-xl bg-white px-5 py-3 text-black transition hover:bg-gray-100"
        >
          ← Назад
        </Link>
      </div>

      <CarForm
        action={updateCar.bind(null, id)}
        car={car}
        submitText="Зберегти зміни"
      />

      <PhotoManager car={car} />
    </div>
  );
}