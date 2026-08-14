import { supabaseAdmin } from "@/lib/supabase-admin";

import {
  approveReview,
  hideReview,
  deleteReview,
} from "@/app/actions/reviews";

export default async function ReviewsPage() {
  const { data: reviews, error } = await supabaseAdmin
    .from("reviews")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">
        <h1 className="text-2xl font-bold text-red-400">
          Chyba načítání recenzí
        </h1>

        <p className="mt-2 text-red-300">
          {error.message}
        </p>
      </div>
    );
  }

  const totalReviews = reviews?.length ?? 0;

  const approvedReviews =
    reviews?.filter(
      (review) => review.status === "approved"
    ).length ?? 0;

  const pendingReviews =
    reviews?.filter(
      (review) => review.status !== "approved"
    ).length ?? 0;

  const averageRating =
    totalReviews > 0
      ? (
          (reviews ?? []).reduce(
            (sum, review) =>
              sum + Number(review.rating || 0),
            0
          ) / totalReviews
        ).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-black text-white">
          Recenze
        </h1>

        <p className="mt-2 text-text-muted">
          Správa zákaznických recenzí a hodnocení
        </p>
      </div>

      {/* STATISTICS */}

      <div className="grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <p className="text-sm text-text-muted">
            Celkem recenzí
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {totalReviews}
          </p>
        </div>

        <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6">
          <p className="text-sm text-text-muted">
            Průměrné hodnocení
          </p>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-3xl font-black text-lime-400">
              {averageRating}
            </span>

            <span className="text-2xl text-lime-400">
              ★
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-sm text-text-muted">
            Čeká na schválení
          </p>

          <p className="mt-2 text-3xl font-black text-yellow-400">
            {pendingReviews}
          </p>

          <p className="mt-1 text-sm text-text-muted">
            Schváleno: {approvedReviews}
          </p>
        </div>

      </div>

      {/* REVIEWS */}

      <div className="overflow-hidden rounded-2xl border border-white/10">

        <div className="border-b border-white/10 bg-surface px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            Všechny recenze
          </h2>
        </div>

        {reviews && reviews.length > 0 ? (

          <div className="divide-y divide-white/10">

            {reviews.map((review) => {

              const isApproved =
                review.status === "approved";

              return (
                <div
                  key={review.id}
                  className="p-6 transition hover:bg-white/5"
                >

                  <div className="flex flex-col gap-6">

                    {/* TOP */}

                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                      <div>

                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="text-lg font-bold text-white">
                            {review.name}
                          </h3>

                          {/* STARS */}

                          <div className="flex text-yellow-400">
                            {Array.from(
                              { length: 5 },
                              (_, index) => (
                                <span
                                  key={index}
                                  className={
                                    index <
                                    Number(review.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-600"
                                  }
                                >
                                  ★
                                </span>
                              )
                            )}
                          </div>

                          {/* STATUS */}

                          {isApproved ? (
                            <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-400">
                              Schváleno
                            </span>
                          ) : (
                            <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                              Čeká na schválení
                            </span>
                          )}

                        </div>

                        <p className="mt-1 text-sm text-gray-500">
                          Hodnocení: {review.rating}/5
                        </p>

                      </div>

                      <div className="text-sm text-gray-500">
                        {review.created_at
                          ? new Date(
                              review.created_at
                            ).toLocaleString("cs-CZ")
                          : ""}
                      </div>

                    </div>

                    {/* TEXT */}

                    {review.text && (
                      <div className="max-w-4xl rounded-xl bg-white/5 p-4">
                        <p className="leading-7 text-gray-300">
                          {review.text}
                        </p>
                      </div>
                    )}

                    {/* PHOTO */}

                    {review.photo_url && (
                      <div>
                        <a
                          href={review.photo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-400 transition hover:border-blue-400/30 hover:bg-blue-400/10"
                        >
                          📷 Zobrazit fotografii
                        </a>
                      </div>
                    )}

                    {/* ACTIONS */}

                    <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">

                      {!isApproved ? (
                        <form
                          action={approveReview.bind(
                            null,
                            review.id
                          )}
                        >
                          <button
                            type="submit"
                            className="rounded-lg bg-lime-400 px-5 py-2.5 font-semibold text-black transition hover:bg-lime-300"
                          >
                            ✓ Schválit
                          </button>
                        </form>
                      ) : (
                        <form
                          action={hideReview.bind(
                            null,
                            review.id
                          )}
                        >
                          <button
                            type="submit"
                            className="rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-5 py-2.5 font-semibold text-yellow-400 transition hover:bg-yellow-400/20"
                          >
                            ○ Skrýt z webu
                          </button>
                        </form>
                      )}

                      <form
                        action={deleteReview.bind(
                          null,
                          review.id
                        )}
                      >
                        <button
                          type="submit"
                          className="rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-2.5 font-semibold text-red-400 transition hover:bg-red-500/20"
                        >
                          🗑 Smazat
                        </button>
                      </form>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        ) : (

          <div className="p-12 text-center">

            <div className="text-5xl">
              ★
            </div>

            <h3 className="mt-4 text-xl font-bold text-white">
              Zatím žádné recenze
            </h3>

            <p className="mt-2 text-gray-400">
              Jakmile zákazníci odešlou recenzi,
              zobrazí se zde.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}