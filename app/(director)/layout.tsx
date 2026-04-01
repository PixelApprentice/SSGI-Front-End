"use client";

import AdminLayout from "@/components/AdminLayout";

export default function DirectorPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout
      role="director"
      userName="Dr. Abebe Tadesse"
      userInitials="AT"
    >
      {children}
    </AdminLayout>
  );
}
