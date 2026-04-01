"use client";

import AdminLayout from "@/components/AdminLayout";

export default function AdminPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout
      role="admin"
      userName="Admin User"
      userInitials="AU"
    >
      {children}
    </AdminLayout>
  );
}
