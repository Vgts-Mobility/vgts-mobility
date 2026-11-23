import { requireAdminSession } from "@/lib/auth/require-admin";
import { getCars } from "@/lib/models/cars";
import ImageOptimizer from "@/app/components/admin/ImageOptimizer";

export const dynamic = "force-dynamic";

export default async function ImageOptimizationPage() {
  await requireAdminSession();
  const cars = await getCars();

  const imageCars = cars
    .filter((car) => Array.isArray(car.images) && car.images.length > 0)
    .map((car) => ({
      id: car.id,
      brand: car.brand,
      model: car.model,
      slug: car.slug,
      images: car.images as string[],
    }));

  const total = imageCars.reduce((sum, car) => sum + car.images.length, 0);

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white sm:text-4xl">
          Оптимізація фотографій
        </h1>
        <p className="mt-2 text-text-muted">
          Підготовка всіх фотографій автомобілів VGTS Mobility для швидкого завантаження.
        </p>
      </div>

      <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-sm leading-relaxed text-yellow-100">
        Будуть оброблені лише фотографії, прив’язані до автомобілів у базі даних.
        Оригінали залишаться у Supabase як резервні копії. Не закривайте цю сторінку,
        поки триває процес.
      </div>

      <div className="rounded-xl border border-white/10 bg-surface p-4 sm:p-6">
        <div className="mb-5">
          <div className="text-sm text-text-muted">Автомобілі з фотографіями</div>
          <div className="mt-1 text-3xl font-bold text-white">{imageCars.length}</div>
          <div className="mt-2 text-sm text-text-muted">
            Усього фотографій у галереях: {total}
          </div>
        </div>
        <ImageOptimizer cars={imageCars} />
      </div>
    </div>
  );
}
