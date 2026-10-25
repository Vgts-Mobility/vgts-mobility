"use client";

import { useEffect, useState } from "react";
import {
  Star,
  MessageCircle,
  Users,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { createClient } from "@supabase/supabase-js";

import ReviewForm from "@/app/components/reviews/ReviewForm";

type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  photo_url: string | null;
  status: string;
  created_at: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export default function Contact() {
  const t = useTranslations("reviews");

  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState("0.0");
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [expandedPhoto, setExpandedPhoto] = useState<string | null>(null);

  useEffect(() => {
    async function loadReviews() {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select(
            "id, name, rating, text, photo_url, status, created_at"
          )
          .eq("status", "approved")
          .order("created_at", {
            ascending: false,
          });

        if (error) {
          console.error("Reviews loading error:", error);
          return;
        }

        const allReviews = data || [];

        setTotalReviews(allReviews.length);

        if (allReviews.length > 0) {
          const average =
            allReviews.reduce(
              (sum, review) => sum + review.rating,
              0
            ) / allReviews.length;

          setAverageRating(average.toFixed(1));
        } else {
          setAverageRating("0.0");
        }

        setReviews(allReviews.slice(0, 6));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  return (
    <section
      id="reviews"
      className="bg-[#05070d] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="mb-7 text-center sm:mb-8">

          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-lime-400 sm:text-xs">
            {t("eyebrow")}
          </p>

          <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            {t("description")}
          </p>

        </div>

        {/* ========================= */}
        {/* STATISTICS */}
        {/* ========================= */}

        <div className="mb-5 grid grid-cols-2 gap-3 sm:gap-4">

          {/* AVERAGE */}

          <div className="flex min-h-[68px] items-center gap-3 rounded-xl border border-lime-400/20 bg-[#10141d] px-4 py-3 sm:min-h-[76px] sm:px-5">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lime-400/10">
              <Star
                size={15}
                fill="currentColor"
                className="text-lime-400"
              />
            </div>

            <div>
              <p className="text-[11px] text-gray-500 sm:text-xs">
                {t("averageRating")}
              </p>

              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold leading-none text-white sm:text-2xl">
                  {averageRating}
                </span>

                <span className="text-[8px] text-gray-500">
                  / 5
                </span>
              </div>
            </div>

          </div>

          {/* COUNT */}

          <div className="flex min-h-[68px] items-center gap-3 rounded-xl border border-white/10 bg-[#10141d] px-4 py-3 sm:min-h-[76px] sm:px-5">

            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10">
              <Users
                size={15}
                className="text-blue-400"
              />
            </div>

            <div>
              <p className="text-[8px] text-gray-500">
                {t("reviewsCount")}
              </p>

              <span className="text-base font-bold leading-none text-white">
                {totalReviews}
              </span>
            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* REVIEWS + FORM */}
        {/* ========================= */}

        <div className="grid items-stretch gap-5 xl:grid-cols-2">

          {/* ========================= */}
          {/* LATEST REVIEWS */}
          {/* ========================= */}

          <div className="min-h-[520px] rounded-2xl border border-white/10 bg-[#10141d] p-5 sm:p-6">

            <div className="mb-2 flex items-center gap-2">

              <MessageCircle
                size={15}
                className="text-lime-400"
              />

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {t("latestReviews")}
              </h3>

            </div>

            <div className="min-h-[440px] pr-1">

              {loading ? (
                <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-white/10">
                  <span className="text-xs text-gray-500">
                    ...
                  </span>
                </div>
              ) : reviews.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-white/10 text-center">

                  <Star
                    size={24}
                    className="text-gray-600"
                  />

                  <p className="mt-2 text-xs font-semibold text-white">
                    {t("noReviews")}
                  </p>

                  <p className="mt-1 text-[10px] text-gray-600">
                    {t("beFirst")}
                  </p>

                </div>
              ) : (
                <div className="space-y-2">

                  {reviews.map((review) => (
                    <article
                      key={review.id}
                      className="rounded-xl border border-white/10 bg-[#0a0d14] p-4 sm:p-5"
                    >

                      <div className="flex gap-2.5">

                        {/* AVATAR / PHOTO */}

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-sm font-bold text-lime-400">
                          {review.name.charAt(0).toUpperCase()}
                        </div>

                        {/* CONTENT */}

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between gap-2">

                            <p className="truncate text-[11px] font-bold text-white">
                              {review.name}
                            </p>

                            <div className="flex shrink-0">
                              {Array.from(
                                { length: 5 },
                                (_, index) => {
                                  const active =
                                    index <
                                    review.rating;

                                  return (
                                    <Star
                                      key={index}
                                      size={9}
                                      fill={
                                        active
                                          ? "currentColor"
                                          : "none"
                                      }
                                      className={
                                        active
                                          ? "text-yellow-400"
                                          : "text-gray-700"
                                      }
                                    />
                                  );
                                }
                              )}
                            </div>

                          </div>

                          <p className="mt-2 text-sm leading-6 text-gray-300 sm:text-base">
                            {review.text}
                          </p>
                          {review.photo_url && (
                            <button type="button" onClick={() => setExpandedPhoto(review.photo_url)} className="mt-3 block w-full max-w-[280px] overflow-hidden rounded-xl border border-white/10 transition hover:border-lime-400/60" aria-label="View customer photo">
                              <img src={review.photo_url} alt="Customer's car" className="h-40 w-full rounded-xl object-cover sm:h-44" />
                              <span className="block bg-black/40 px-3 py-2 text-left text-xs font-semibold text-lime-400">View photo</span>
                            </button>
                          )}

                        </div>

                      </div>

                    </article>
                  ))}

                </div>
              )}

            </div>

          </div>

          {/* ========================= */}
          {/* REVIEW FORM */}
          {/* ========================= */}

          <div className="min-h-[520px] rounded-2xl border border-lime-400/20 bg-[#10141d] p-5 sm:p-6">

            <div className="mb-2">

              <h3 className="text-sm font-bold text-white">
                {t("leaveReview")}
              </h3>

              <p className="mt-0.5 text-[9px] leading-3 text-gray-500">
                {t("moderationNotice")}
              </p>

            </div>

            <div className="pr-1">

              <ReviewForm />

            </div>

          </div>

        </div>

      </div>
      {expandedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" onClick={() => setExpandedPhoto(null)}>
          <button type="button" className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-lg text-white hover:bg-white/20" onClick={() => setExpandedPhoto(null)} aria-label="Close photo">✕</button>
          <img src={expandedPhoto} alt="Customer's car" className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
}