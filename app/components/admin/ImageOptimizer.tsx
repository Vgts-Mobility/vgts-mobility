"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, ImageDown, LoaderCircle, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { optimizeCarImageAction } from "@/app/actions/storage/optimize-car-image";

type CarImages = {
  id: string;
  brand: string | null;
  model: string | null;
  slug: string | null;
  images: string[] | null;
};

type Props = {
  cars: CarImages[];
};

type Failure = {
  car: string;
  path: string;
  message: string;
};

async function convertToWebp(source: Blob): Promise<Blob> {
  const bitmap = await createImageBitmap(source);
  try {
    const maxDimension = 1600;
    const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) throw new Error("Браузер не зміг підготувати фото.");

    context.drawImage(bitmap, 0, 0, width, height);

    const result = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(new Error("Не вдалося створити WebP.")),
        "image/webp",
        0.84
      );
    });

    if (result.type !== "image/webp") {
      throw new Error("Цей браузер не підтримує експорт WebP.");
    }

    return result;
  } finally {
    bitmap.close();
  }
}

export default function ImageOptimizer({ cars }: Props) {
  const tasks = useMemo(
    () => cars.flatMap((car) =>
      (car.images ?? [])
        .filter((path) => !path.startsWith("optimized/"))
        .map((path) => ({
          carId: car.id,
          carName: [car.brand, car.model].filter(Boolean).join(" "),
          path,
        }))
    ),
    [cars]
  );

  const alreadyOptimized = useMemo(
    () => cars.reduce(
      (sum, car) => sum + (car.images ?? []).filter((path) => path.startsWith("optimized/")).length,
      0
    ),
    [cars]
  );

  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(0);
  const [savedBytes, setSavedBytes] = useState(0);
  const [failures, setFailures] = useState<Failure[]>([]);
  const [finished, setFinished] = useState(false);
  const [current, setCurrent] = useState("");

  async function startOptimization() {
    if (running || tasks.length === 0) return;

    const confirmed = window.confirm(
      `Буде оброблено ${tasks.length} фотографій. Оригінали залишаться у сховищі як резервні копії. Продовжити?`
    );
    if (!confirmed) return;

    setRunning(true);
    setDone(0);
    setSavedBytes(0);
    setFailures([]);
    setFinished(false);

    const failed: Failure[] = [];
    let saved = 0;

    for (const task of tasks) {
      setCurrent(task.carName);
      try {
        const { data: original, error: downloadError } = await supabase.storage
          .from("cars")
          .download(task.path);

        if (downloadError || !original) {
          throw new Error(downloadError?.message ?? "Не вдалося завантажити оригінал.");
        }

        const optimized = await convertToWebp(original);
        const optimizedFile = new File(
          [optimized],
          "optimized.webp",
          { type: "image/webp", lastModified: Date.now() }
        );

        await optimizeCarImageAction(task.carId, task.path, optimizedFile);
        saved += Math.max(0, original.size - optimized.size);
        setSavedBytes(saved);
      } catch (error) {
        failed.push({
          car: task.carName,
          path: task.path,
          message: error instanceof Error ? error.message : "Невідома помилка",
        });
        setFailures([...failed]);
      } finally {
        setDone((value) => value + 1);
      }
    }

    setCurrent("");
    setRunning(false);
    setFinished(true);
  }

  const percent = tasks.length ? Math.round((done / tasks.length) * 100) : 100;

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-[#10141d] p-4">
          <div className="text-sm text-text-muted">До обробки</div>
          <div className="mt-1 text-2xl font-bold text-white">{tasks.length}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#10141d] p-4">
          <div className="text-sm text-text-muted">Вже оптимізовано</div>
          <div className="mt-1 text-2xl font-bold text-green-400">{alreadyOptimized}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#10141d] p-4">
          <div className="text-sm text-text-muted">Зменшення ваги</div>
          <div className="mt-1 text-2xl font-bold text-white">
            {(savedBytes / 1024 / 1024).toFixed(2)} MB
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#10141d] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-semibold text-white">Оптимізація фотографій</div>
            <p className="mt-1 text-sm text-text-muted">
              WebP · максимум 1600 px · якість 84%
            </p>
          </div>
          <ImageDown className="shrink-0 text-primary" size={26} />
        </div>

        {running && (
          <div className="mt-5 space-y-2">
            <div className="flex justify-between text-sm text-text-muted">
              <span>{done} з {tasks.length}</span>
              <span>{percent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="truncate text-xs text-text-muted">Зараз: {current}</p>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={startOptimization}
            disabled={running || tasks.length === 0}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {running ? <LoaderCircle className="animate-spin" size={18} /> : <ImageDown size={18} />}
            {running ? "Оптимізація..." : tasks.length ? `Оптимізувати ${tasks.length} фото` : "Усі фото оброблені"}
          </button>

          {finished && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm text-white"
            >
              <RefreshCw size={17} />
              Оновити список
            </button>
          )}
        </div>
      </div>

      {finished && (
        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
          <div className="flex items-center gap-2 font-semibold text-green-400">
            <CheckCircle2 size={19} />
            Обробку завершено
          </div>
          <p className="mt-2 text-sm text-text-muted">
            Успішно: {done - failures.length} · Помилок: {failures.length} · Збережено приблизно {(savedBytes / 1024 / 1024).toFixed(2)} MB
          </p>
          {failures.length > 0 && (
            <ul className="mt-3 space-y-2 text-xs text-red-300">
              {failures.slice(0, 10).map((failure, index) => (
                <li key={`${failure.path}-${index}`}>
                  {failure.car}: {failure.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <p className="text-xs leading-relaxed text-text-muted">
        Оригінали не видаляються. Кожне оптимізоване фото зберігається окремим WebP-файлом,
        і посилання автомобіля оновлюється лише після успішного завантаження нового файлу.
        Якщо процес перерветься, сторінку можна відкрити знову — вже оброблені фото будуть пропущені.
      </p>
    </div>
  );
}
