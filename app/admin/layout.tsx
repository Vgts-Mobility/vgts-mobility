import type { ReactNode } from "react";
import AdminHeader from "@/app/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-text">
      <AdminHeader />
      <main className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-5 md:px-6 md:py-8">
        {children}
      </main>
    </div>
  );
}