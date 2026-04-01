"use client";

import ClientLayout from "@/components/ClientLayout";

export default function ClientPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayout
      userName="Mohammed Ahmed"
      userInitials="MA"
    >
      {children}
    </ClientLayout>
  );
}
