"use client";

import { LayoutDashboard, FileText, Handshake, GraduationCap, FileBox } from "lucide-react";
import SidebarLayout from "@/components/SidebarLayout";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "Applications", path: "/applications" },
  { icon: FileBox, label: "Documents", path: "/documents" },
  { icon: Handshake, label: "Negotiations", path: "/negotiations" },
  { icon: GraduationCap, label: "Training", path: "/training" },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      items={sidebarItems}
      portalName="Client Portal"
      userName="Mohammed Ahmed"
      userRole="Client / Trainee Org"
      userInitials="MA"
      headerTitle="Satellite Operations 2026"
      showNewApplication={true}
    >
      {children}
    </SidebarLayout>
  );
}
