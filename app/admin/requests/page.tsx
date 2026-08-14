import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export default async function RequestsPage() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: requests, error } = await supabaseAdmin
    .from("requests")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-black text-white">
            Poptávky
          </h1>

          <p className="mt-2 text-red-400">
            Nepodařilo se načíst poptávky.
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">
          <p className="text-sm text-red-300">
            {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-black text-white">
          Poptávky
        </h1>

        <p className="mt-2 text-text-muted">
          Žádosti zákazníků o individuální dovoz vozidel
        </p>
      </div>

      {/* EMPTY */}

      {!requests || requests.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-surface p-8 text-center">
          <p className="text-gray-400">
            Zatím nebyly přijaty žádné poptávky.
          </p>
        </div>
      ) : (

        /* TABLE */

        <div className="overflow-x-auto rounded-2xl border border-white/10">

          <table className="w-full min-w-[800px]">

            <thead className="bg-surface">

              <tr className="text-left">

                <th className="p-4">
                  Jméno
                </th>

                <th className="p-4">
                  Telefon
                </th>

                <th className="p-4">
                  Vůz
                </th>

                <th className="p-4">
                  Rozpočet
                </th>

                <th className="p-4">
                  Stav
                </th>

              </tr>

            </thead>

            <tbody>

              {requests.map((request) => (

                <tr
                  key={request.id}
                  className="border-t border-white/10 transition hover:bg-white/5"
                >

                  <td className="p-4 font-semibold text-white">

                    <Link
                      href={`/admin/requests/${request.id}`}
                      className="block hover:text-lime-400"
                    >
                      {request.name || "Bez jména"}
                    </Link>

                  </td>

                  <td className="p-4 text-gray-300">
                    {request.phone || "-"}
                  </td>

                  <td className="p-4 text-gray-300">
                    {request.brand || "-"}{" "}
                    {request.model || ""}
                  </td>

                  <td className="p-4 text-gray-300">
                    {request.budget
                      ? `${Number(
                          request.budget
                        ).toLocaleString("cs-CZ")} Kč`
                      : "-"}
                  </td>

                  <td className="p-4">

                    <span className="rounded-full bg-lime-400/20 px-3 py-1 text-sm text-lime-400">
                      {request.status || "Nová"}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}