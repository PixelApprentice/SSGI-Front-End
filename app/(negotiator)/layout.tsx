"use client";

import SidebarLayout from "@/components/SidebarLayout";
import {
  LayoutDashboard,
  Handshake,
  MessageSquare,
  FileText,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/negotiator" },
  { icon: Handshake, label: "Active Deals", path: "/negotiator/deals" },
  { icon: MessageSquare, label: "Communications", path: "/negotiator/comms" },
  { icon: FileText, label: "TMA Editor", path: "/negotiator/tma" },
];

export default function NegotiatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      items={sidebarItems}
      portalName="Negotiator"
      userName="Dawit Kebede"
      userRole="Lead Negotiator"
      userInitials="DK"
      headerTitle="Deal Management"
    >
      {children}
    </SidebarLayout>
  );
}
