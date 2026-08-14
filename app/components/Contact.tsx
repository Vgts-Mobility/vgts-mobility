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
      className="bg-[#05070d] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="mb-4 text-center">

          <p className="text-[9px] font-semibold uppercase tracking-[3px] text-lime-400">
            {t("eyebrow")}
          </p>

          <h2 className="mt-1 text-2xl font-black leading-tight text-white sm:text-3xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-1 max-w-xl text-[11px] leading-4 text-gray-500">
            {t("description")}
          </p>

        </div>

        {/* ========================= */}
        {/* STATISTICS */}
        {/* ========================= */}

        <div className="mb-3 grid grid-cols-2 gap-2">

          {/* AVERAGE */}

          <div className="flex h-12 items-center gap-2.5 rounded-lg border border-lime-400/20 bg-[#10141d] px-3">

            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-lime-400/10">
              <Star
                size={15}
                fill="currentColor"
                className="text-lime-400"
              />
            </div>

            <div>
              <p className="text-[8px] text-gray-500">
                {t("averageRating")}
              </p>

              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold leading-none text-white">
                  {averageRating}
                </span>

                <span className="text-[8px] text-gray-500">
                  / 5
                </span>
              </div>
            </div>

          </div>

          {/* COUNT */}

          <div className="flex h-12 items-center gap-2.5 rounded-lg border border-white/10 bg-[#10141d] px-3">

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

        <div className="grid items-stretch gap-3 lg:grid-cols-2">

          {/* ========================= */}
          {/* LATEST REVIEWS */}
          {/* ========================= */}

          <div className="h-[430px] rounded-xl border border-white/10 bg-[#10141d] p-3">

            <div className="mb-2 flex items-center gap-2">

              <MessageCircle
                size={15}
                className="text-lime-400"
              />

              <h3 className="text-sm font-bold text-white">
                {t("latestReviews")}
              </h3>

            </div>

            <div className="h-[390px] overflow-y-auto pr-1">

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
                      className="rounded-lg border border-white/10 bg-[#0a0d14] p-2.5"
                    >

                      <div className="flex gap-2.5">

                        {/* AVATAR / PHOTO */}

                        {review.photo_url ? (
                          <img
                            src={review.photo_url}
                            alt={review.name}
                            className="h-8 w-8 shrink-0 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-[11px] font-bold text-lime-400">
                            {review.name
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )}

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

                          <p className="mt-1 text-[10px] leading-4 text-gray-400">
                            {review.text}
                          </p>

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

          <div className="h-[430px] overflow-hidden rounded-xl border border-lime-400/20 bg-[#10141d] p-3">

            <div className="mb-2">

              <h3 className="text-sm font-bold text-white">
                {t("leaveReview")}
              </h3>

              <p className="mt-0.5 text-[9px] leading-3 text-gray-500">
                {t("moderationNotice")}
              </p>

            </div>

            <div className="h-[395px] overflow-y-auto pr-1">

              <ReviewForm />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}