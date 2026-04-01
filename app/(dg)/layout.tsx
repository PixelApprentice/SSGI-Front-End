"use client";

import AdminLayout from "@/components/AdminLayout";

export default function DGPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout
      role="dg"
      userName="Prof. Solomon Belay"
      userInitials="SB"
    >
      {children}
    </AdminLayout>
  );
}
