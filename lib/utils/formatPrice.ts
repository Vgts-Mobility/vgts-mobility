export function formatPrice(price: number) {
  return new Intl.NumberFormat("cs-CZ").format(price) + " Kč";
}