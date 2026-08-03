import { Car } from "@/types/car";

import PhotoGrid from "./PhotoGrid";
import UploadForm from "./UploadForm";

import { uploadImagesAction } from "@/app/actions/storage/upload-images";
import { revalidatePath } from "next/cache";

type Props = {
  car: Car;
};

export default function PhotoManager({ car }: Props) {
  async function upload(formData: FormData) {
    "use server";

    await uploadImagesAction(
      car.id,
      car.image_folder,
      formData
    );

    revalidatePath(`/admin/cars/${car.id}`);
  }

  return (
    <section className="space-y-6 rounded-2xl border border-white/10 bg-surface p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Фотографії
          </h2>

          <p className="text-sm text-text-muted">
            {car.images?.length ?? 0} фотографій
          </p>
        </div>

        <UploadForm action={upload} />
      </div>

      <PhotoGrid car={car} />
    </section>
  );
}