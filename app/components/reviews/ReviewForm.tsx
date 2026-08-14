"use client";

import { useRef, useState } from "react";
import { Star, Camera, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { submitReview } from "@/app/actions/reviews-submit";

export default function ReviewForm() {
  const t = useTranslations("reviews");
  const formRef = useRef<HTMLFormElement>(null);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [photoName, setPhotoName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("rating", String(rating));

    if (rating === 0) {
      setError(t("ratingRequired"));
      return;
    }

    setSubmitting(true);

    try {
      const result = await submitReview(formData);

      if (!result.success) {
        setError(
          t(
            result.error as
              | "nameRequired"
              | "ratingRequired"
              | "textRequired"
              | "photoType"
              | "photoSize"
              | "photoUploadError"
              | "submitError"
          )
        );

        return;
      }

      setSuccess(true);
      setRating(0);
      setHoverRating(0);
      setPhotoName("");

      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      setError(t("submitError"));
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/5 p-5 text-center">
        <div>
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-lime-400/10">
            <CheckCircle2
              size={24}
              className="text-lime-400"
            />
          </div>

          <h3 className="mt-3 text-lg font-bold text-white">
            {t("successTitle")}
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-gray-400">
            {t("successDescription")}
          </p>

          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-4 rounded-full bg-lime-400 px-5 py-2 text-xs font-bold text-black transition hover:bg-lime-300"
          >
            {t("leaveAnother")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-2.5"
    >
      {/* NAME */}

      <div>
        <label
          htmlFor="review-name"
          className="mb-1 block text-[11px] font-semibold text-white"
        >
          {t("name")}
        </label>

        <input
          id="review-name"
          name="name"
          type="text"
          required
          placeholder={t("namePlaceholder")}
          className="
            h-9
            w-full
            rounded-lg
            border
            border-white/10
            bg-[#05070d]
            px-3
            text-xs
            text-white
            outline-none
            transition
            placeholder:text-gray-600
            focus:border-lime-400
          "
        />
      </div>

      {/* RATING */}

      <div>
        <label className="mb-1 block text-[11px] font-semibold text-white">
          {t("rating")}
        </label>

        <div className="flex h-7 items-center gap-1">
          {Array.from({ length: 5 }, (_, index) => {
            const value = index + 1;

            const active =
              value <= (hoverRating || rating);

            return (
              <button
                key={value}
                type="button"
                aria-label={`${value} ${t("stars")}`}
                onMouseEnter={() =>
                  setHoverRating(value)
                }
                onMouseLeave={() =>
                  setHoverRating(0)
                }
                onClick={() => setRating(value)}
                className="transition hover:scale-110"
              >
                <Star
                  size={22}
                  fill={
                    active
                      ? "currentColor"
                      : "none"
                  }
                  className={
                    active
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }
                />
              </button>
            );
          })}

          {rating > 0 && (
            <span className="ml-1 text-[10px] text-gray-500">
              {rating}/5
            </span>
          )}
        </div>
      </div>

      {/* TEXT */}

      <div>
        <label
          htmlFor="review-text"
          className="mb-1 block text-[11px] font-semibold text-white"
        >
          {t("text")}
        </label>

        <textarea
          id="review-text"
          name="text"
          required
          rows={3}
          placeholder={t("textPlaceholder")}
          className="
            h-[72px]
            w-full
            resize-none
            rounded-lg
            border
            border-white/10
            bg-[#05070d]
            px-3
            py-2
            text-xs
            leading-4
            text-white
            outline-none
            transition
            placeholder:text-gray-600
            focus:border-lime-400
          "
        />
      </div>

      {/* PHOTO */}

      <div>
        <label
          htmlFor="review-photo"
          className="mb-1 block text-[11px] font-semibold text-white"
        >
          {t("photo")}
        </label>

        <label
          htmlFor="review-photo"
          className="
            flex
            h-12
            cursor-pointer
            items-center
            gap-2.5
            rounded-lg
            border
            border-dashed
            border-white/15
            bg-[#05070d]
            px-3
            transition
            hover:border-lime-400/50
          "
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-lime-400/10">
            <Camera
              size={15}
              className="text-lime-400"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-white">
              {photoName || t("choosePhoto")}
            </p>

            <p className="text-[8px] text-gray-600">
              {photoName
                ? photoName
                : t("photoOptional")}
            </p>
          </div>

          <input
            id="review-photo"
            name="photo"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(event) => {
              const file =
                event.target.files?.[0];

              setPhotoName(file?.name || "");
            }}
          />
        </label>

        <p className="mt-1 text-[8px] text-gray-600">
          {t("photoHint")}
        </p>
      </div>

      {/* ERROR */}

      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-[10px] text-red-300">
          {error}
        </div>
      )}

      {/* SUBMIT */}

      <button
        type="submit"
        disabled={submitting}
        className="
          h-9
          w-full
          rounded-lg
          bg-lime-400
          text-xs
          font-bold
          text-black
          transition
          hover:bg-lime-300
          hover:shadow-[0_0_20px_rgba(163,230,53,.2)]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {submitting
          ? t("sending")
          : t("submit")}
      </button>

      <p className="text-center text-[8px] leading-3 text-gray-600">
        {t("moderationNotice")}
      </p>
    </form>
  );
}