export type CarFeature = { id: string; label: string; labelKey: string };
export type CarFeatureCategory = { id: string; title: string; titleKey: string; features: CarFeature[] };
export const CAR_FEATURE_CATEGORIES: CarFeatureCategory[] = [
  {
    "id": "multimedia",
    "title": "Multimédia a konektivita",
    "titleKey": "categories.multimedia",
    "features": [
      {
        "id": "appleCarPlay",
        "label": "Apple CarPlay",
        "labelKey": "features.appleCarPlay"
      },
      {
        "id": "androidAuto",
        "label": "Android Auto",
        "labelKey": "features.androidAuto"
      },
      {
        "id": "navigation",
        "label": "Navigace",
        "labelKey": "features.navigation"
      },
      {
        "id": "headUpDisplay",
        "label": "Head-Up Display",
        "labelKey": "features.headUpDisplay"
      },
      {
        "id": "digitalCockpit",
        "label": "Digitální přístrojový štít",
        "labelKey": "features.digitalCockpit"
      },
      {
        "id": "premiumAudio",
        "label": "Prémiový audiosystém",
        "labelKey": "features.premiumAudio"
      },
      {
        "id": "harmanKardon",
        "label": "Harman Kardon",
        "labelKey": "features.harmanKardon"
      },
      {
        "id": "bowersWilkins",
        "label": "Bowers & Wilkins",
        "labelKey": "features.bowersWilkins"
      },
      {
        "id": "bangOlufsen",
        "label": "Bang & Olufsen",
        "labelKey": "features.bangOlufsen"
      },
      {
        "id": "wirelessCharging",
        "label": "Bezdrátové nabíjení",
        "labelKey": "features.wirelessCharging"
      },
      {
        "id": "voiceControl",
        "label": "Hlasové ovládání",
        "labelKey": "features.voiceControl"
      },
      {
        "id": "bluetooth",
        "label": "Bluetooth",
        "labelKey": "features.bluetooth"
      }
    ]
  },
  {
    "id": "safety",
    "title": "Bezpečnostní asistenti",
    "titleKey": "categories.safety",
    "features": [
      {
        "id": "adaptiveCruise",
        "label": "Adaptivní tempomat",
        "labelKey": "features.adaptiveCruise"
      },
      {
        "id": "laneAssist",
        "label": "Lane Assist",
        "labelKey": "features.laneAssist"
      },
      {
        "id": "blindSpot",
        "label": "Sledování mrtvého úhlu",
        "labelKey": "features.blindSpot"
      },
      {
        "id": "frontAssist",
        "label": "Front Assist",
        "labelKey": "features.frontAssist"
      },
      {
        "id": "emergencyBraking",
        "label": "Nouzové brzdění",
        "labelKey": "features.emergencyBraking"
      },
      {
        "id": "trafficSigns",
        "label": "Rozpoznávání dopravních značek",
        "labelKey": "features.trafficSigns"
      },
      {
        "id": "travelAssist",
        "label": "Travel Assist",
        "labelKey": "features.travelAssist"
      },
      {
        "id": "isofix",
        "label": "ISOFIX",
        "labelKey": "features.isofix"
      }
    ]
  },
  {
    "id": "comfort",
    "title": "Komfort a interiér",
    "titleKey": "categories.comfort",
    "features": [
      {
        "id": "heatedSeats",
        "label": "Vyhřívaná sedadla",
        "labelKey": "features.heatedSeats"
      },
      {
        "id": "heatedSteeringWheel",
        "label": "Vyhřívaný volant",
        "labelKey": "features.heatedSteeringWheel"
      },
      {
        "id": "ventilatedSeats",
        "label": "Odvětrávaná sedadla",
        "labelKey": "features.ventilatedSeats"
      },
      {
        "id": "massageSeats",
        "label": "Masážní sedadla",
        "labelKey": "features.massageSeats"
      },
      {
        "id": "electricSeats",
        "label": "Elektricky nastavitelná sedadla",
        "labelKey": "features.electricSeats"
      },
      {
        "id": "memorySeats",
        "label": "Paměť sedadel",
        "labelKey": "features.memorySeats"
      },
      {
        "id": "leatherInterior",
        "label": "Kožený interiér",
        "labelKey": "features.leatherInterior"
      },
      {
        "id": "panoramicRoof",
        "label": "Panoramatická střecha",
        "labelKey": "features.panoramicRoof"
      },
      {
        "id": "sunroof",
        "label": "Střešní okno",
        "labelKey": "features.sunroof"
      },
      {
        "id": "ambientLighting",
        "label": "Ambientní osvětlení",
        "labelKey": "features.ambientLighting"
      },
      {
        "id": "threeZoneClimate",
        "label": "Třízónová klimatizace",
        "labelKey": "features.threeZoneClimate"
      },
      {
        "id": "fourZoneClimate",
        "label": "Čtyřzónová klimatizace",
        "labelKey": "features.fourZoneClimate"
      },
      {
        "id": "keyless",
        "label": "Keyless",
        "labelKey": "features.keyless"
      },
      {
        "id": "electricTailgate",
        "label": "Elektrické víko kufru",
        "labelKey": "features.electricTailgate"
      },
      {
        "id": "heatedWindshield",
        "label": "Vyhřívané čelní sklo",
        "labelKey": "features.heatedWindshield"
      }
    ]
  },
  {
    "id": "parking",
    "title": "Parkování a kamery",
    "titleKey": "categories.parking",
    "features": [
      {
        "id": "camera360",
        "label": "360° kamera",
        "labelKey": "features.camera360"
      },
      {
        "id": "rearCamera",
        "label": "Zadní parkovací kamera",
        "labelKey": "features.rearCamera"
      },
      {
        "id": "parkingSensors",
        "label": "Parkovací senzory",
        "labelKey": "features.parkingSensors"
      },
      {
        "id": "automaticParking",
        "label": "Automatické parkování",
        "labelKey": "features.automaticParking"
      }
    ]
  },
  {
    "id": "exterior",
    "title": "Exteriér a podvozek",
    "titleKey": "categories.exterior",
    "features": [
      {
        "id": "matrixLed",
        "label": "Matrix LED",
        "labelKey": "features.matrixLed"
      },
      {
        "id": "ledHeadlights",
        "label": "LED světlomety",
        "labelKey": "features.ledHeadlights"
      },
      {
        "id": "adaptiveHeadlights",
        "label": "Adaptivní světlomety",
        "labelKey": "features.adaptiveHeadlights"
      },
      {
        "id": "automaticHighBeam",
        "label": "Automatická dálková světla",
        "labelKey": "features.automaticHighBeam"
      },
      {
        "id": "adaptiveSuspension",
        "label": "Adaptivní podvozek",
        "labelKey": "features.adaptiveSuspension"
      },
      {
        "id": "airSuspension",
        "label": "Vzduchové odpružení",
        "labelKey": "features.airSuspension"
      },
      {
        "id": "towBar",
        "label": "Tažné zařízení",
        "labelKey": "features.towBar"
      },
      {
        "id": "heatedMirrors",
        "label": "Vyhřívaná zrcátka",
        "labelKey": "features.heatedMirrors"
      },
      {
        "id": "fourWheelDrive",
        "label": "Pohon všech kol (4×4)",
        "labelKey": "features.fourWheelDrive"
      }
    ]
  },
  {
    "id": "electric",
    "title": "Elektromobilita",
    "titleKey": "categories.electric",
    "features": [
      {
        "id": "heatPump",
        "label": "Tepelné čerpadlo",
        "labelKey": "features.heatPump"
      },
      {
        "id": "batteryPreconditioning",
        "label": "Předehřev baterie",
        "labelKey": "features.batteryPreconditioning"
      },
      {
        "id": "scheduledCharging",
        "label": "Plánované nabíjení",
        "labelKey": "features.scheduledCharging"
      },
      {
        "id": "dcFastCharging",
        "label": "Rychlé DC nabíjení",
        "labelKey": "features.dcFastCharging"
      },
      {
        "id": "acCharging",
        "label": "AC nabíjení",
        "labelKey": "features.acCharging"
      },
      {
        "id": "regenerativeBraking",
        "label": "Rekuperační brzdění",
        "labelKey": "features.regenerativeBraking"
      },
      {
        "id": "onePedalDriving",
        "label": "Jízda jedním pedálem",
        "labelKey": "features.onePedalDriving"
      },
      {
        "id": "v2l",
        "label": "Napájení externích zařízení (V2L)",
        "labelKey": "features.v2l"
      }
    ]
  },
  {
    "id": "other",
    "title": "Ostatní výbava",
    "titleKey": "categories.other",
    "features": [
      {
        "id": "sportSeats",
        "label": "Sportovní sedadla",
        "labelKey": "features.sportSeats"
      },
      {
        "id": "driveModes",
        "label": "Jízdní režimy",
        "labelKey": "features.driveModes"
      },
      {
        "id": "alarm",
        "label": "Alarm",
        "labelKey": "features.alarm"
      },
      {
        "id": "digitalKey",
        "label": "Digitální klíč",
        "labelKey": "features.digitalKey"
      }
    ]
  }
];
export const LEGACY_FEATURE_LABELS: Record<string, string> = {
  "Apple CarPlay": "appleCarPlay",
  "Android Auto": "androidAuto",
  "Navigace": "navigation",
  "Head-Up Display": "headUpDisplay",
  "360° kamera": "camera360",
  "Parkovací kamera": "rearCamera",
  "Parkovací senzory": "parkingSensors",
  "Adaptivní tempomat": "adaptiveCruise",
  "Lane Assist": "laneAssist",
  "Blind Spot": "blindSpot",
  "Matrix LED": "matrixLed",
  "LED světlomety": "ledHeadlights",
  "Vyhřívaná sedadla": "heatedSeats",
  "Vyhřívaný volant": "heatedSteeringWheel",
  "Odvětrávaná sedadla": "ventilatedSeats",
  "Elektrická sedadla": "electricSeats",
  "Paměť sedadel": "memorySeats",
  "Kožený interiér": "leatherInterior",
  "Panoramatická střecha": "panoramicRoof",
  "Střešní okno": "sunroof",
  "Keyless": "keyless",
  "Bezdrátová nabíječka": "wirelessCharging",
  "Ambientní osvětlení": "ambientLighting",
  "Elektrické víko kufru": "electricTailgate",
  "Tažné zařízení": "towBar",
  "4x4": "fourWheelDrive"
};
export function normalizeFeatureId(value: string): string { return LEGACY_FEATURE_LABELS[value] ?? value; }
