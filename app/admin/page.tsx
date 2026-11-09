import Link from "next/link";
import {
  CarFront,
  CircleDollarSign,
  CircleCheck,
  CircleX,
  Plus,
  Crown,
  ClipboardList,
} from "lucide-react";

import { getCars } from "@/lib/models/cars";
import { formatPrice } from "@/lib/utils/formatPrice";
import { supabase } from "@/lib/supabase";

export default async function AdminPage() {
  const cars = await getCars();
  const { count: requestsCount } = await supabase
    .from("requests")
    .select("*", { count: "exact", head: true });

  const totalCars = cars.length;
  const availableCars = cars.filter((car) => car.status?.trim().toLowerCase() === "в наявності");
  const soldCars = cars.filter((car) => car.status?.trim().toLowerCase() === "продано");
  const totalValue = availableCars.reduce((sum, car) => sum + Number(car.price ?? 0), 0);
  const recentCars = [...cars].slice(0, 5);

  const stats = [
    { label: "Автомобілі", value: totalCars, Icon: CarFront, valueClass: "text-white", iconClass: "text-primary" },
    { label: "В наявності", value: availableCars.length, Icon: CircleCheck, valueClass: "text-green-400", iconClass: "text-green-400" },
    { label: "Продано", value: soldCars.length, Icon: CircleX, valueClass: "text-red-400", iconClass: "text-red-400" },
    { label: "Заявки", value: requestsCount ?? 0, Icon: ClipboardList, valueClass: "text-blue-400", iconClass: "text-blue-400", href: "/admin/requests" },
    { label: "Вартість складу", value: formatPrice(totalValue), Icon: CircleDollarSign, valueClass: "text-white", iconClass: "text-yellow-400" },
  ];

  return (
    <div className="space-y-5 md:space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary md:px-4 md:py-2">
            <Crown size={16} />
            <span className="text-xs font-semibold md:text-sm">VGTS Mobility Admin</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Вітаю, Бос 👋
          </h1>
          <p className="mt-2 text-sm text-text-muted md:mt-3 md:text-lg">
            Керуйте автопарком VGTS Mobility.
          </p>
        </div>
        <Link
          href="/admin/cars/new"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto md:text-base"
        >
          <Plus size={20} />
          Додати автомобіль
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map(({ label, value, Icon, valueClass, iconClass, href }) => {
          const content = (
            <>
              <div className="mb-3 flex items-center justify-between gap-2 md:mb-4">
                <Icon size={19} className={iconClass} />
                <span className="text-right text-[11px] leading-tight text-text-muted sm:text-xs md:text-sm">{label}</span>
              </div>
              <div className={`break-words text-2xl font-bold sm:text-3xl md:text-4xl ${valueClass}`}>
                {value}
              </div>
            </>
          );
          const className = "min-w-0 rounded-2xl border border-white/10 bg-surface p-4 transition md:p-6";
          return href ? (
            <Link key={label} href={href} className={`${className} border-blue-500/20 hover:border-blue-400`}>{content}</Link>
          ) : (
            <div key={label} className={className}>{content}</div>
          );
        })}
      </div>

      <section className="rounded-2xl border border-white/10 bg-surface p-4 sm:p-5 md:p-6">
        <h2 className="mb-4 text-lg font-bold text-white md:mb-6 md:text-xl">
          Останні автомобілі
        </h2>
        <div className="space-y-2.5 md:space-y-3">
          {recentCars.map((car) => (
            <Link
              key={car.id}
              href={`/admin/cars/${car.id}`}
              className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/10 p-3 transition hover:border-primary sm:p-4"
            >
              <div className="min-w-0">
                <div className="break-words text-sm font-semibold text-white sm:text-base">
                  {car.brand} {car.model}
                </div>
                <div className="text-xs text-text-muted sm:text-sm">{car.year}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-sm font-semibold text-white sm:text-base">{formatPrice(car.price)}</div>
                <div className="text-xs text-text-muted sm:text-sm">{car.status}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}