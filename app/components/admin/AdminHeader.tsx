"use client";

import Link from "next/link";
import {
  LogOut,
  CarFront,
  LayoutDashboard,
  House,
} from "lucide-react";
import { logout } from "@/app/actions/auth";

export default function AdminHeader() {
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
            <Link
              href="/admin"
              className="flex items-center gap-2 text-text-muted transition hover:text-primary"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link
              href="/admin/cars"
              className="flex items-center gap-2 text-text-muted transition hover:text-primary"
            >
              <CarFront size={18} />
              Cars
            </Link>

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