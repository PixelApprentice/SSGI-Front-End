"use client";

import AdminLayout from "@/components/AdminLayout";

export default function DirectorPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout role="director">
      {children}
    </AdminLayout>
  );
}
