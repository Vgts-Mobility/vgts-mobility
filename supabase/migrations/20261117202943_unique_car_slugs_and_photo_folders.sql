-- Give every existing car a dedicated destination for future uploads.
-- Existing image paths are intentionally left unchanged, so current photos keep working.
UPDATE public.cars
SET image_folder = 'car-' || id::text
WHERE image_folder IS DISTINCT FROM 'car-' || id::text;

-- Prevent future duplicate public URLs and upload folders.
CREATE UNIQUE INDEX IF NOT EXISTS cars_slug_unique_idx
  ON public.cars (slug)
  WHERE slug IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS cars_image_folder_unique_idx
  ON public.cars (image_folder)
  WHERE image_folder IS NOT NULL;
