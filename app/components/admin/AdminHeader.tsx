"use client";

import Link from "next/link";
import {
  LogOut,
  CarFront,
  LayoutDashboard,
  House,
  Star,
  ClipboardList,
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
    { href: "/admin/requests", label: "Poptávky", shortLabel: "Заявки", Icon: ClipboardList },
  ];

  const SiteLink = ({ mobile = false }: { mobile?: boolean }) => (
    <Link
      href="/"
      target="_blank"
      aria-label="Переглянути сайт"
      className={mobile
        ? "inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 text-xs font-medium text-primary"
        : "inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"}
    >
      <House size={16} />
      <span>{mobile ? "Сайт" : "Переглянути сайт"}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/95 backdrop-blur">
      <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between gap-4 px-6 md:flex">
        <Link href="/admin" className="shrink-0 text-base font-bold text-text transition hover:text-primary">
          VGTS Mobility Admin
        </Link>

        <div className="flex min-w-0 items-center gap-5">
          <nav className="flex items-center gap-5 text-sm">
            {links.map(({ href, label, Icon, badge }) => (
              <Link key={href} href={href} className="relative inline-flex items-center gap-2 whitespace-nowrap text-text-muted transition hover:text-primary">
                <Icon size={18} />
                {label}
                {!!badge && badge > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-[10px] font-black text-black">
                    {badge > 99 ? "99+" : badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
          <SiteLink />
          <form action={logout}>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10">
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3 py-2 md:hidden">
        <div className="flex min-h-10 items-center justify-between gap-2">
          <Link href="/admin" className="shrink-0 text-sm font-bold text-text">
            VGTS Admin
          </Link>
          <div className="flex items-center gap-2">
            <SiteLink mobile />
            <form action={logout}>
              <button type="submit" aria-label="Logout" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-500/30 text-red-400">
                <LogOut size={17} />
              </button>
            </form>
          </div>
        </div>

        <nav className="mt-2 grid grid-cols-4 gap-1 border-t border-white/10 pt-2">
          {links.map(({ href, shortLabel, Icon, badge }) => (
            <Link
              key={href}
              href={href}
              className="relative flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-[11px] text-text-muted transition hover:bg-white/5 hover:text-primary"
            >
              <span className="relative">
                <Icon size={19} />
                {!!badge && badge > 0 && (
                  <span className="absolute -right-3 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-yellow-400 px-1 text-[9px] font-black text-black">
                    {badge > 99 ? "99+" : badge}
                  </span>
                )}
              </span>
              <span className="truncate">{shortLabel}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}