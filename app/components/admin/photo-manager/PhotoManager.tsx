"use client";

import { Car } from "@/types/car";
import PhotoGrid from "./PhotoGrid";
import UploadButton from "./UploadButton";

type Props = {
  car: Car;
};

export default function PhotoManager({ car }: Props) {
  return (
    <div className="space-y-6 rounded-2xl border border-white/10 bg-surface p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Фотографії
          </h2>

          <p className="text-sm text-text-muted">
            {car.images?.length ?? 0} фотографій
          </p>
        </div>

        <UploadButton />
      </div>

      <PhotoGrid car={car} />
    </div>
  );
}