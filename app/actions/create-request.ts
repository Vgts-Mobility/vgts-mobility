"use server";

import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

export async function createRequest(formData: FormData) {
  const equipment = formData.getAll("equipment");

  const request = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),

    brand: formData.get("brand"),
    model: formData.get("model"),

    budget: Number(formData.get("budget")) || null,
    year_from: Number(formData.get("year_from")) || null,
    mileage: Number(formData.get("mileage")) || null,

    fuel: formData.get("fuel"),
    drive: formData.get("drive"),

    priority: formData.get("priority"),

    equipment,

    notes: formData.get("notes"),
  };

  const { error } = await supabase
    .from("requests")
    .insert(request);

  if (error) {
    throw new Error(error.message);
  }

  const { error: emailError } =
    await resend.emails.send({
      from: "VGTS Mobility <info@vgts-mobility.cz>",

      to: "vgts-mobility@outlook.com",

      subject: `🚗 Nová poptávka • ${request.brand} ${request.model}`,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:30px;background:#10141d;color:#ffffff;border-radius:12px;">

        <h1 style="color:#a3e635;">
          🚗 Nová poptávka z webu VGTS Mobility
        </h1>

        <hr style="border-color:#333;margin:25px 0;" />

        <h2>Kontaktní údaje</h2>

        <p><strong>Jméno:</strong> ${request.name}</p>
        <p><strong>Telefon:</strong> ${request.phone}</p>
        <p><strong>Email:</strong> ${request.email}</p>

        <hr style="border-color:#333;margin:25px 0;" />

        <h2>Požadovaný vůz</h2>

        <p><strong>Značka:</strong> ${request.brand}</p>
        <p><strong>Model:</strong> ${request.model}</p>
        <p><strong>Rozpočet:</strong> ${
          request.budget
            ? Number(request.budget).toLocaleString("cs-CZ") + " Kč"
            : "-"
        }</p>

        <p><strong>Min. rok:</strong> ${
          request.year_from ?? "-"
        }</p>

        <p><strong>Max. nájezd:</strong> ${
          request.mileage
            ? Number(request.mileage).toLocaleString("cs-CZ") + " km"
            : "-"
        }</p>

        <p><strong>Palivo:</strong> ${
          request.fuel || "-"
        }</p>

        <p><strong>Pohon:</strong> ${
          request.drive || "-"
        }</p>

        <p><strong>Priorita:</strong> ${
          request.priority || "-"
        }</p>

        <hr style="border-color:#333;margin:25px 0;" />

        <h2>Požadovaná výbava</h2>

        <ul>

          ${
            equipment.length
              ? equipment
                  .map(
                    (item) =>
                      `<li>${item}</li>`
                  )
                  .join("")
              : "<li>Bez specifikace</li>"
          }

        </ul>

        <hr style="border-color:#333;margin:25px 0;" />

        <h2>Poznámka zákazníka</h2>

        <p>${request.notes || "Bez poznámky"}</p>

        <hr style="border-color:#333;margin:30px 0;" />

        <p style="color:#9ca3af;font-size:14px;">
          Tato poptávka byla automaticky odeslána z webu
          <strong>VGTS Mobility</strong>.
        </p>

      </div>
      `,
    });

  if (emailError) {
    console.error(emailError);
  }

  return {
    success: true,
  };
}