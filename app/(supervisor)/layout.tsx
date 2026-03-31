"use client";

import SidebarLayout from "@/components/SidebarLayout";
import {
  LayoutDashboard,
  ClipboardCheck,
  FileText,
  Users,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/supervisor" },
  { icon: ClipboardCheck, label: "Agreements", path: "/supervisor/agreements" },
  { icon: FileText, label: "Documents", path: "/supervisor/documents" },
  { icon: Users, label: "Trainees", path: "/supervisor/trainees" },
];

export default function SupervisorLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      items={sidebarItems}
      portalName="Supervisor"
      userName="Meseret Hailu"
      userRole="Senior Supervisor"
      userInitials="MH"
      headerTitle="Agreement Oversight"
    >
      {children}
    </SidebarLayout>
  );
}
