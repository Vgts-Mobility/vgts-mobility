"use client";

import Link from "next/link";
import {
  LogOut,
  CarFront,
  LayoutDashboard,
  House,
  Star,
} from "lucide-react";
import { logout } from "@/app/actions/auth";
import { getPendingReviewsCount } from "@/app/actions/reviews-count";
import { useEffect, useState } from "react";

export default function AdminHeader() {
  const [pendingReviews, setPendingReviews] =
    useState(0);

  useEffect(() => {
    async function loadPendingReviews() {
      const count =
        await getPendingReviewsCount();

      setPendingReviews(count);
    }

    loadPendingReviews();

    // Оновлюємо кількість кожні 30 секунд
    const interval = setInterval(
      loadPendingReviews,
      30000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-8">

          <Link
            href="/admin"
            className="text-lg font-bold text-text transition hover:text-primary"
          >
            VGTS Mobility Admin
          </Link>

          <nav className="flex items-center gap-5 text-sm">

            {/* DASHBOARD */}

            <Link
              href="/admin"
              className="flex items-center gap-2 text-text-muted transition hover:text-primary"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            {/* CARS */}

            <Link
              href="/admin/cars"
              className="flex items-center gap-2 text-text-muted transition hover:text-primary"
            >
              <CarFront size={18} />
              Cars
            </Link>

            {/* REVIEWS */}

            <Link
              href="/admin/reviews"
              className="flex items-center gap-2 text-text-muted transition hover:text-primary"
            >
              <Star size={18} />

              <span>
                Recenze
              </span>

              {pendingReviews > 0 && (
                <span
                  className="
                    flex
                    min-w-[20px]
                    h-5
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-400
                    px-1.5
                    text-[10px]
                    font-black
                    text-black
                  "
                >
                  {pendingReviews > 99
                    ? "99+"
                    : pendingReviews}
                </span>
              )}

            </Link>

            {/* VIEW SITE */}

            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              <House size={18} />
              Переглянути сайт
            </Link>

          </nav>

        </div>

        {/* LOGOUT */}

        <form action={logout}>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg border border-red-500/30 px-4 py-2 text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>
        </form>

      </div>
    </header>
  );
}