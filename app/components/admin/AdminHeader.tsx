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
  const [pendingReviews, setPendingReviews] = useState(0);

  useEffect(() => {
    async function loadPendingReviews() {
      const count = await getPendingReviewsCount();
      setPendingReviews(count);
    }

    loadPendingReviews();
    const interval = setInterval(loadPendingReviews, 30000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { href: "/admin", label: "Dashboard", shortLabel: "Головна", Icon: LayoutDashboard },
    { href: "/admin/cars", label: "Cars", shortLabel: "Авто", Icon: CarFront },
    { href: "/admin/reviews", label: "Recenze", shortLabel: "Відгуки", Icon: Star, badge: pendingReviews },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-3 px-4 py-2 md:h-16 md:px-6 md:py-0">
        <Link
          href="/admin"
          className="shrink-0 text-sm font-bold leading-tight text-text transition hover:text-primary sm:text-base"
        >
          <span className="md:hidden">VGTS Admin</span>
          <span className="hidden md:inline">VGTS Mobility Admin</span>
        </Link>

        <div className="flex min-w-0 items-center gap-2">
          <nav className="flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5">
            {links.map(({ href, label, shortLabel, Icon, badge }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className="relative inline-flex shrink-0 items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-text-muted transition hover:bg-white/5 hover:text-primary md:px-0 md:text-sm"
              >
                <Icon size={17} />
                <span className="md:hidden">{shortLabel}</span>
                <span className="hidden md:inline">{label}</span>
                {!!badge && badge > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-[10px] font-black text-black">
                    {badge > 99 ? "99+" : badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            target="_blank"
            aria-label="Переглянути сайт"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-white md:px-4 md:text-sm"
          >
            <House size={16} />
            <span className="hidden sm:inline">Переглянути сайт</span>
            <span className="sm:hidden">Сайт</span>
          </Link>

          <form action={logout} className="shrink-0">
            <button
              type="submit"
              aria-label="Logout"
              className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-2.5 py-2 text-xs text-red-400 transition hover:bg-red-500/10 md:px-4 md:text-sm"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}