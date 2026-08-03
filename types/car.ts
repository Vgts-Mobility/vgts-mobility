export interface Car {
  id: string;
  created_at: string;

  brand: string;
  model: string;
  slug: string;

  year: number;
  price: number;
  mileage: number;

  fuel: string;
  power: string;

  battery: string | null;
  soh: string | null;

  color: string | null;
  interior_color: string | null;

  transmission: string | null;
  drive: string | null;
  body_type: string | null;

  seats: number | null;
  owners: number | null;

  vin: string | null;

  service_history: boolean | null;

  status: string | null;

  description: string | null;

  features: string[] | null;

  images: string[] | null;

  image_folder: string;
}