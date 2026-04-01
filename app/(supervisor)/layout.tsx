"use client";

import AdminLayout from "@/components/AdminLayout";

export default function SupervisorPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout
      role="supervisor"
      userName="Meseret Hailu"
      userInitials="MH"
    >
      {children}
    </AdminLayout>
  );
}
