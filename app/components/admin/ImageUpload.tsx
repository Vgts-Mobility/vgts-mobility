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

  /**
   * Синхронізує порядок файлів
   * у file input.
   *
   * Саме цей порядок потім потрапляє
   * у FormData і відправляється на сервер.
   */
  function syncInputFiles(
    updatedImages: UploadImage[]
  ) {
    if (!inputRef.current) return;

    const dataTransfer = new DataTransfer();

    updatedImages.forEach((image) => {
      dataTransfer.items.add(image.file);
    });

    inputRef.current.files =
      dataTransfer.files;
  }

  /**
   * Додаємо вибрані фотографії.
   */
  function updateFiles(selected: File[]) {
    if (!selected.length) return;

    const uploadImages =
      createUploadImages(selected);

    setImages(uploadImages);

    syncInputFiles(uploadImages);
  }

  /**
   * Вибір фотографій через input.
   */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const selected = Array.from(
      e.target.files ?? []
    );

    updateFiles(selected);
  }

  /**
   * Перетягування файлів у область завантаження.
   */
  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();

    setDragActive(false);

    const dropped = Array.from(
      e.dataTransfer.files
    ).filter((file) =>
      file.type.startsWith("image/")
    );

    updateFiles(dropped);
  }

  /**
   * Видалення фотографії.
   */
  function deleteImage(id: string) {
    const updated = images.filter(
      (image) => image.id !== id
    );

    /*
     * Якщо видалили головне фото,
     * перше фото, що залишилось,
     * автоматично стає головним.
     */
    if (
      updated.length > 0 &&
      !updated.some(
        (image) => image.isMain
      )
    ) {
      updated[0] = {
        ...updated[0],
        isMain: true,
      };
    }

    setImages(updated);

    syncInputFiles(updated);
  }

  /**
   * Робимо фото головним.
   *
   * Воно також переміщується
   * на перше місце.
   */
  function makeMain(id: string) {
    const selected = images.find(
      (image) => image.id === id
    );

    if (!selected) return;

    const reordered: UploadImage[] = [
      {
        ...selected,
        isMain: true,
      },

      ...images
        .filter(
          (image) => image.id !== id
        )
        .map((image) => ({
          ...image,
          isMain: false,
        })),
    ];

    setImages(reordered);

    syncInputFiles(reordered);
  }

  /**
   * Отримуємо вже готовий
   * новий порядок від ImageGrid.
   */
  function handleReorder(
    reordered: UploadImage[]
  ) {
    setImages(reordered);

    syncInputFiles(reordered);
  }

  return (
    <div className="space-y-6">

      {/* UPLOAD AREA */}

      <div>

        <label className="mb-3 block text-sm font-medium text-text">
          Фотографії автомобіля
        </label>

        <div
          onClick={() =>
            inputRef.current?.click()
          }
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() =>
            setDragActive(false)
          }
          onDrop={handleDrop}
          className={`
            cursor-pointer
            rounded-2xl
            border-2
            border-dashed
            p-10
            transition-all
            ${
              dragActive
                ? "border-primary bg-primary/10"
                : "border-white/10 bg-surface hover:border-primary/50"
            }
          `}
        >

          <div className="flex flex-col items-center gap-4">

            <ImagePlus
              size={52}
              className={
                dragActive
                  ? "text-primary"
                  : "text-text-muted"
              }
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

      {/* SELECTED IMAGES */}

      {images.length > 0 && (
        <>

          <div className="flex items-center justify-between gap-4">

            <div>

              <h3 className="text-lg font-semibold text-text">
                Обрані фотографії
              </h3>

              <p className="mt-1 text-xs text-text-muted">
                Перетягуйте фотографії,
                щоб змінити порядок.
                Перше фото буде головним.
              </p>

            </div>

            <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-sm text-white">
              {images.length} фото
            </span>

          </div>

          <ImageGrid
            images={images}
            onDelete={deleteImage}
            onMakeMain={makeMain}
            onReorder={handleReorder}
          />

        </>
      )}

    </div>
  );
}