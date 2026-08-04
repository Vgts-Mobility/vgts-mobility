import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Mail,
  CarFront,
  Wallet,
  Calendar,
  Gauge,
  Fuel,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

import { supabase } from "@/lib/supabase";
import StatusButtons from "./StatusButtons";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RequestDetails({
  params,
}: Props) {
  const { id } = await params;

  const { data: request } = await supabase
    .from("requests")
    .select("*")
    .eq("id", id)
    .single();

  if (!request) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">

      <Link
        href="/admin/requests"
        className="inline-flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft size={18} />
        Zpět na poptávky
      </Link>

      <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-surface p-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-black text-white">
            {request.name}
          </h1>

          <p className="mt-2 text-text-muted">
            Detail zákaznické poptávky
          </p>

        </div>

        <StatusButtons id={request.id} />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <InfoCard
          icon={<Phone size={22} />}
          title="Telefon"
          value={request.phone}
        />

        <InfoCard
          icon={<Mail size={22} />}
          title="Email"
          value={request.email}
        />

        <InfoCard
          icon={<CarFront size={22} />}
          title="Požadovaný vůz"
          value={`${request.brand || "-"} ${request.model || ""}`}
        />

        <InfoCard
          icon={<Wallet size={22} />}
          title="Rozpočet"
          value={
            request.budget
              ? `${request.budget.toLocaleString()} Kč`
              : "-"
          }
        />

        <InfoCard
          icon={<Calendar size={22} />}
          title="Minimální rok výroby"
          value={request.year_from ?? "-"}
        />

        <InfoCard
          icon={<Gauge size={22} />}
          title="Maximální nájezd"
          value={
            request.mileage
              ? `${request.mileage.toLocaleString()} km`
              : "-"
          }
        />

        <InfoCard
          icon={<Fuel size={22} />}
          title="Palivo"
          value={request.fuel || "-"}
        />

        <InfoCard
          icon={<CarFront size={22} />}
          title="Pohon"
          value={request.drive || "-"}
        />

      </div>

      <div className="rounded-3xl border border-white/10 bg-surface p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Priorita zákazníka
        </h2>

        <div className="rounded-xl bg-primary/10 px-5 py-4 text-lg font-semibold text-primary">
          {request.priority || "-"}
        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-surface p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Požadovaná výbava
        </h2>

        <div className="flex flex-wrap gap-3">

          {request.equipment?.length ? (
            request.equipment.map((item: string) => (
              <span
                key={item}
                className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary"
              >
                ✓ {item}
              </span>
            ))
          ) : (
            <span className="text-text-muted">
              Neuvedeno
            </span>
          )}

        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-surface p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Poznámka zákazníka
        </h2>

        <p className="whitespace-pre-line leading-8 text-gray-300">
          {request.notes || "Bez poznámky"}
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-3">

        <a
          href={`tel:${request.phone}`}
          className="flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 font-bold text-white transition hover:opacity-90"
        >
          <Phone size={20} />
          Zavolat
        </a>

        <a
          href={`https://wa.me/${String(request.phone).replace(/\D/g, "")}`}
          target="_blank"
          className="flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-500"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

        <a
          href={`mailto:${request.email}`}
          className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500"
        >
          <Mail size={20} />
          Email
        </a>

      </div>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-surface p-6">

      <div className="mb-4 flex items-center gap-3 text-primary">
        {icon}

        <span className="font-semibold">
          {title}
        </span>

      </div>

      <div className="text-xl font-bold text-white">
        {value}
      </div>

    </div>
  );
}