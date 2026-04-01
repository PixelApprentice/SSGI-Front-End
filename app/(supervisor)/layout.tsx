"use client";

import AdminLayout from "@/components/AdminLayout";

export default function SupervisorPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout role="supervisor">
      {children}
    </AdminLayout>
  );
}
