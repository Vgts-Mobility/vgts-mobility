import { UploadImage } from "./types";

export function createUploadImages(files: File[]): UploadImage[] {
  return files.map((file, index) => ({
    id: crypto.randomUUID(),
    file,
    preview: URL.createObjectURL(file),
    isMain: index === 0,
  }));
}