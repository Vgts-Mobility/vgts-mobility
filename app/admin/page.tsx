import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Адмін-панель</h1>

      <p className="mt-2 text-gray-600">
        Ласкаво просимо до адмінки VGTS Mobility.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link
          href="/admin/cars"
          className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
        >
          <h2 className="text-lg font-semibold">Автомобілі</h2>

          <p className="mt-2 text-sm text-gray-500">
            Додавання, редагування та видалення авто.
          </p>
        </Link>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Статистика</h2>

          <p className="mt-2 text-sm text-gray-500">
            Незабаром.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Налаштування</h2>

          <p className="mt-2 text-sm text-gray-500">
            Незабаром.
          </p>
        </div>
      </div>
    </div>
  );
}