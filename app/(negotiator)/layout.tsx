"use client";

import AdminLayout from "@/components/AdminLayout";

export default function NegotiatorPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout role="negotiator">
      {children}
    </AdminLayout>
  );
}
