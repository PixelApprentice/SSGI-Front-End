"use client";

import SidebarLayout from "@/components/SidebarLayout";
import {
  LayoutDashboard,
  Users,
  FileText,
  Handshake,
  GraduationCap,
  Settings,
  BarChart3,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/admin" },
  { icon: FileText, label: "Requests", path: "/admin/requests" },
  { icon: Users, label: "Organizations", path: "/admin/organizations" },
  { icon: Handshake, label: "Negotiations", path: "/admin/negotiations" },
  { icon: GraduationCap, label: "Training", path: "/admin/training" },
  { icon: BarChart3, label: "Reports", path: "/admin/reports" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      items={sidebarItems}
      portalName="Admin Portal"
      userName="Admin User"
      userRole="System Administrator"
      userInitials="AU"
      headerTitle="SSGI Training Management"
    >
      {children}
    </SidebarLayout>
  );
}
