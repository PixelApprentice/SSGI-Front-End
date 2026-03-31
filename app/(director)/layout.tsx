"use client";

import SidebarLayout from "@/components/SidebarLayout";
import {
  LayoutDashboard,
  FileText,
  Users,
  UserCheck,
  AlertTriangle,
  BarChart3,
  Settings,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/director" },
  { icon: FileText, label: "Request Pipeline", path: "/director/pipeline" },
  { icon: UserCheck, label: "Assignments", path: "/director/assignments" },
  { icon: Users, label: "Staff Workload", path: "/director/staff" },
  { icon: AlertTriangle, label: "Escalations", path: "/director/escalations" },
  { icon: BarChart3, label: "Reports", path: "/director/reports" },
  { icon: Settings, label: "Settings", path: "/director/settings" },
];

export default function DirectorLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      items={sidebarItems}
      portalName="Training Director"
      userName="Dr. Abebe Tadesse"
      userRole="Head of Training"
      userInitials="AT"
      headerTitle="SSGI Operations Hub"
    >
      {children}
    </SidebarLayout>
  );
}
