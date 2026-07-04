export type Car = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  status: "available" | "sold";
  mileage: number;
  power: string;
  fuel: string;
  battery?: string;
  soh?: string;
  color?: string;
  description: string;
  features: string[];
  images: string[];
};

export const cars: Car[] = [
  {
    id: "mach-e",
    slug: "ford-mustang-mach-e",

    brand: "Ford",
    model: "Mustang Mach-E RWD 75 kWh",

    year: 2021,

    price: 694000,

    status: "available",

    mileage: 135000,

    power: "198 kW",

    fuel: "Elektro",

    battery: "75 kWh",

    soh: "92,5 %",

    color: "Červená metalíza",

    description:
      "Moderní elektrické SUV s certifikovaným stavem baterie AVILOO, bohatou výbavou Bang & Olufsen, panoramatickou střechou a velmi dobrým technickým stavem.",

    features: [
      "Bang & Olufsen",
      "360° kamera",
      "Panoramatická střecha",
      "Vyhřívaný volant",
      "Apple CarPlay",
      "Android Auto",
      "Adaptivní tempomat",
      "Webasto",
      "LED světlomety"
    ],

    images: [
      "/cars/mustang-mach-e/1.jpg",
      "/cars/mustang-mach-e/2.jpg",
      "/cars/mustang-mach-e/3.jpg",
      "/cars/mustang-mach-e/4.jpg",
      "/cars/mustang-mach-e/5.jpg",
      "/cars/mustang-mach-e/6.jpg",
      "/cars/mustang-mach-e/7.jpg",
      "/cars/mustang-mach-e/8.jpg",
      "/cars/mustang-mach-e/9.jpg",
      "/cars/mustang-mach-e/10.jpg"
    ]
  },

  {
    id: "mondeo",
    slug: "ford-mondeo-vignale",

    brand: "Ford",
    model: "Mondeo Hybrid Vignale",

    year: 2021,

    price: 360000,

    status: "available",

    mileage: 196500,

    power: "187 k",

    fuel: "Hybrid",

    color: "Bílá",

    description:
      "Luxusní Ford Mondeo Hybrid Vignale s panoramatickou střechou, masážními sedadly, bílým koženým interiérem a kompletní servisní historií.",

    features: [
      "Masážní sedadla",
      "Ventilovaná sedadla",
      "Panorama",
      "ACC",
      "SYNC",
      "Keyless",
      "LED",
      "Ambientní osvětlení"
    ],

    images: [
      "/cars/mondeo-vignale/1.jpg",
      "/cars/mondeo-vignale/2.jpg",
      "/cars/mondeo-vignale/3.jpg",
      "/cars/mondeo-vignale/4.jpg",
      "/cars/mondeo-vignale/5.jpg",
      "/cars/mondeo-vignale/6.jpg",
      "/cars/mondeo-vignale/7.jpg",
      "/cars/mondeo-vignale/8.jpg",
      "/cars/mondeo-vignale/9.jpg",
      "/cars/mondeo-vignale/10.jpg"
    ]
  },

  {
    id: "bmw",
    slug: "bmw-ix3",

    brand: "BMW",

    model: "iX3 Impressive",

    year: 2021,

    price: 675000,

    status: "sold",

    mileage: 190000,

    power: "210 kW",

    fuel: "Elektro",

    battery: "80 kWh",

    soh: "96,6 %",

    color: "Sophistograu",

    description:
      "Prémiové elektrické SUV BMW iX3 s kompletní servisní historií, koženým interiérem Vernasca Cognac a výborným stavem baterie.",

    features: [
      "Harman Kardon",
      "Panorama",
      "Head-Up Display",
      "Comfort Access",
      "ACC",
      "20\" kola"
    ],

    images: [
      "/cars/bmw-ix3/1.jpg",
      "/cars/bmw-ix3/2.jpg",
      "/cars/bmw-ix3/3.jpg",
      "/cars/bmw-ix3/4.jpg",
      "/cars/bmw-ix3/5.jpg",
      "/cars/bmw-ix3/6.jpg",
      "/cars/bmw-ix3/7.jpg",
      "/cars/bmw-ix3/8.jpg",
      "/cars/bmw-ix3/9.jpg",
      "/cars/bmw-ix3/10.jpg"
    ]
  },

  {
    id: "enyaq",
     slug: "skoda-enyaq",

    brand: "Škoda",

    model: "Enyaq iV 80 Founders Edition",

    year: 2021,

    price: 728000,

    status: "sold",

    mileage: 120000,

    power: "150 kW",

    fuel: "Elektro",

    battery: "82 kWh",

    soh: "90,7 %",

    description:
      "Limitovaná Founders Edition s kompletní autorizovanou servisní historií, AVILOO certifikátem a maximální výbavou.",

    features: [
      "Crystal Face",
      "Matrix LED",
      "Travel Assist",
      "360° kamera",
      "KESSY",
      "Tepelné čerpadlo"
    ],

    images: [
      "/cars/skoda-enyaq/1.jpg",
      "/cars/skoda-enyaq/2.jpg",
      "/cars/skoda-enyaq/3.jpg",
      "/cars/skoda-enyaq/4.jpg",
      "/cars/skoda-enyaq/5.jpg",
      "/cars/skoda-enyaq/6.jpg",
      "/cars/skoda-enyaq/7.jpg",
      "/cars/skoda-enyaq/8.jpg",
      "/cars/skoda-enyaq/9.jpg",
      "/cars/skoda-enyaq/10.jpg"
    ]
  }
];