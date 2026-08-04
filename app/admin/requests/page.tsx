import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function RequestsPage() {
  const { data: requests } = await supabase
    .from("requests")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-black text-white">
          Poptávky
        </h1>

        <p className="mt-2 text-text-muted">
          Žádosti zákazníků o individuální dovoz vozidel
        </p>

      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10">

        <table className="w-full">

          <thead className="bg-surface">

            <tr className="text-left">

              <th className="p-4">Jméno</th>

              <th className="p-4">Telefon</th>

              <th className="p-4">Vůz</th>

              <th className="p-4">Rozpočet</th>

              <th className="p-4">Stav</th>

            </tr>

          </thead>

          <tbody>

            {requests?.map((request) => (

              <tr
                key={request.id}
                className="border-t border-white/10 transition hover:bg-white/5"
              >

                <td className="p-4 font-semibold text-white">
                  <Link
                    href={`/admin/requests/${request.id}`}
                    className="block"
                  >
                    {request.name}
                  </Link>
                </td>

                <td className="p-4">
                  {request.phone}
                </td>

                <td className="p-4">
                  {request.brand} {request.model}
                </td>

                <td className="p-4">
                  {request.budget?.toLocaleString()} Kč
                </td>

                <td className="p-4">
                  <span className="rounded-full bg-lime-400/20 px-3 py-1 text-sm text-lime-400">
                    {request.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}