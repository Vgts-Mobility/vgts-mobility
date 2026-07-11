import CarForm from "@/app/components/admin/CarForm";
import { createCarAction } from "@/app/actions/cars";

export default function NewCarPage() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">
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