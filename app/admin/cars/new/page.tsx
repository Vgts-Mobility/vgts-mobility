import { createCarAction } from "@/app/actions/cars";
import CarForm from "@/app/components/admin/CarForm";

export default function NewCarPage() {
  return (
    <div className="mx-auto max-w-5xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Додати автомобіль
        </h1>

        <p className="mt-2 text-text-muted">
          Заповніть інформацію про автомобіль.
        </p>
      </div>

      <CarForm action={createCarAction} />
    </div>
  );
}