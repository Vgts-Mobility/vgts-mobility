"use client";

import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

import ImageGrid from "./image-upload/ImageGrid";
import { UploadImage } from "./image-upload/types";
import { createUploadImages } from "./image-upload/utils";

export default function ImageUpload() {
  const [images, setImages] = useState<UploadImage[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function updateFiles(selected: File[]) {
    const uploadImages = createUploadImages(selected);

    setImages(uploadImages);

    if (inputRef.current) {
      const dataTransfer = new DataTransfer();

      selected.forEach((file) => {
        dataTransfer.items.add(file);
      });

      inputRef.current.files = dataTransfer.files;
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateFiles(Array.from(e.target.files ?? []));
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    setDragActive(false);

    const dropped = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );

    updateFiles(dropped);
  }

  function deleteImage(id: string) {
    const updated = images.filter((image) => image.id !== id);

    if (updated.length && !updated.some((image) => image.isMain)) {
      updated[0].isMain = true;
    }

    setImages(updated);
  }

  function makeMain(id: string) {
    setImages((current) =>
      current.map((image) => ({
        ...image,
        isMain: image.id === id,
      }))
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-3 block text-sm font-medium text-text">
          Фотографії автомобіля
        </label>

        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`cursor-pointer rounded-2xl border-2 border-dashed p-10 transition-all ${
            dragActive
              ? "border-primary bg-primary/10"
              : "border-white/10 bg-surface hover:border-primary/50"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <ImagePlus
              size={52}
              className={dragActive ? "text-primary" : "text-text-muted"}
            />

            <div className="text-center">
              <h3 className="text-lg font-semibold text-text">
                Перетягніть фотографії сюди
              </h3>

              <p className="mt-2 text-text-muted">
                або натисніть для вибору файлів
              </p>

              <p className="mt-4 text-sm text-text-muted">
                JPG • PNG • WEBP
              </p>
            </div>
          </div>

          <input
            ref={inputRef}
            name="files"
            type="file"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </div>
      </div>

      {images.length > 0 && (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text">
              Обрані фотографії
            </h3>

            <span className="rounded-full bg-primary px-3 py-1 text-sm text-white">
              {images.length} фото
            </span>
          </div>

          <ImageGrid
            images={images}
            onDelete={deleteImage}
            onMakeMain={makeMain}
            onDragEnd={() => {}}
          />
        </>
      )}
    </div>
  );
}