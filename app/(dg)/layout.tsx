"use client";

import SidebarLayout from "@/components/SidebarLayout";
import {
  LayoutDashboard,
  FileCheck,
  Users,
  Shield,
  BarChart3,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dg" },
  { icon: FileCheck, label: "Approvals", path: "/dg/approvals" },
  { icon: Users, label: "Staff", path: "/dg/staff" },
  { icon: Shield, label: "Agreements", path: "/dg/agreements" },
  { icon: BarChart3, label: "Reports", path: "/dg/reports" },
];

export default function DGLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      items={sidebarItems}
      portalName="DG"
      userName="Prof. Solomon Belay"
      userRole="DG"
      userInitials="SB"
      headerTitle="SSGI Executive Dashboard"
    >
      {children}
    </SidebarLayout>
  );
}
