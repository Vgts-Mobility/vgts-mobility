export interface Car {
  id: string;
  created_at: string;

  brand: string;
  model: string;
  slug: string;

  year: number;
  price: number;
  mileage: number;

  power: string;
  fuel: string;

  battery: string | null;
  soh: string | null;

  color: string | null;

  status: string | null;

  description: string | null;

  features: string[] | null;

  images: string[] | null;

  image_folder: string;
}