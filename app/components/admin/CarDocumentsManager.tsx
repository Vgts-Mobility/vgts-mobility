import { FileText, Trash2, Upload } from "lucide-react";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { uploadCarDocumentAction, removeCarDocumentAction } from "@/app/actions/car-documents";

type Props = {
  car: {
    id: string;
    battery_certificate_path: string | null;
    carvertical_report_path: string | null;
  };
};

export default function CarDocumentsManager({ car }: Props) {
  const documents = [
    {
      type: "battery_certificate" as const,
      title: "Сертифікат батареї",
      path: car.battery_certificate_path,
      accent: "lime",
    },
    {
      type: "carvertical_report" as const,
      title: "Звіт CarVertical",
      path: car.carvertical_report_path,
      accent: "violet",
    },
  ];

  return (
    <section className="space-y-5 rounded-2xl border border-white/10 bg-surface p-6 shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white">Документи автомобіля</h2>
        <p className="mt-1 text-sm text-text-muted">Додайте PDF або фото. Кнопка з’явиться в оголошенні лише після завантаження документа.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {documents.map((document) => {
          const url = document.path
            ? supabaseAdmin.storage.from("cars").getPublicUrl(document.path).data.publicUrl
            : null;
          const isBattery = document.type === "battery_certificate";
          return (
            <div key={document.type} className={`rounded-xl border p-4 ${isBattery ? "border-lime-400/30 bg-lime-400/5" : "border-violet-400/30 bg-violet-400/5"}`}>
              <h3 className={`mb-3 font-bold ${isBattery ? "text-lime-300" : "text-violet-300"}`}>{document.title}</h3>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="mb-4 flex items-center gap-2 break-all text-sm text-white underline underline-offset-4">
                  <FileText size={18} className="shrink-0" /> Переглянути завантажений документ
                </a>
              ) : (
                <p className="mb-4 text-sm text-text-muted">Документ ще не завантажено.</p>
              )}
              <div className="flex flex-wrap items-center gap-3">
                <form action={uploadCarDocumentAction.bind(null, car.id, document.type)} className="flex flex-wrap items-center gap-2">
                  <input name="document" type="file" required accept="application/pdf,image/jpeg,image/png,image/webp" className="max-w-full text-xs text-gray-300 file:mr-2 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-white" />
                  <button type="submit" className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition hover:opacity-90 ${isBattery ? "bg-lime-400 text-black" : "bg-violet-600 text-white"}`}>
                    <Upload size={16} /> {url ? "Замінити" : "Завантажити"}
                  </button>
                </form>
                {url && (
                  <form action={removeCarDocumentAction.bind(null, car.id, document.type)}>
                    <button type="submit" className="inline-flex items-center gap-2 rounded-lg border border-red-400/30 px-3 py-2 text-sm text-red-300 transition hover:bg-red-400/10">
                      <Trash2 size={16} /> Видалити
                    </button>
                  </form>
                )}
              </div>
              <p className="mt-3 text-xs text-text-muted">PDF, JPG, PNG або WEBP · до 20 МБ</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
