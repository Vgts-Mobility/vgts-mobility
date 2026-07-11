"use client";

import Link from "next/link";
import { LogOut, CarFront, LayoutDashboard } from "lucide-react";
import { logout } from "@/app/actions/auth";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/admin"
            className="text-lg font-bold text-text hover:text-primary transition"
          >
            VGTS Admin
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link
              href="/admin"
              className="flex items-center gap-2 text-text-muted hover:text-primary transition"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link
              href="/admin/cars"
              className="flex items-center gap-2 text-text-muted hover:text-primary transition"
            >
              <CarFront size={18} />
              Cars
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