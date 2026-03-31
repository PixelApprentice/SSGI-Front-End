"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  Handshake,
  GraduationCap,
  ChevronRight,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";

const stats = [
  { label: "Total Requests", value: "24", change: "+3 this month", icon: FileText, trend: "up" },
  { label: "Active Negotiations", value: "7", change: "2 pending review", icon: Handshake, trend: "neutral" },
  { label: "Organizations", value: "18", change: "+2 new", icon: Users, trend: "up" },
  { label: "Active Training", value: "5", change: "142 trainees", icon: GraduationCap, trend: "up" },
];

const recentRequests = [
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", status: "pending", date: "2026-03-25" },
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", status: "negotiation", date: "2026-03-15" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", status: "pending", date: "2026-03-12" },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", program: "Remote Sensing & GIS", status: "agreed", date: "2026-02-20" },
  { id: "TRQ-2026-0035", org: "Ethiopian Space Science", program: "Mission Planning & Design", status: "active", date: "2026-01-10" },
];

const statusConfig: Record<string, { label: string; style: string }> = {
  pending: { label: "Pending", style: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400" },
  negotiation: { label: "Negotiation", style: "bg-primary/10 text-primary" },
  agreed: { label: "Agreed", style: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" },
  active: { label: "Active", style: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400" },
  completed: { label: "Completed", style: "bg-muted text-muted-foreground" },
};

const pendingActions = [
  { text: "Review TRQ-2026-0044 from Ghana Space Agency", type: "review", time: "2 hours ago" },
  { text: "Cost proposal approval for TRQ-2026-0042", type: "approval", time: "5 hours ago" },
  { text: "Instructor assignment for Mission Planning program", type: "assignment", time: "1 day ago" },
  { text: "Certificate generation for Ground Station Eng.", type: "certificate", time: "2 days ago" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Admin Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">Training management dashboard — {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              {s.trend === "up" && <ArrowUpRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Requests */}
        <div className="col-span-2 glass-card overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="font-display text-lg font-bold text-foreground">Recent Requests</h3>
            <Button asChild variant="ghost" size="sm" className="text-primary text-xs">
              <Link href="/admin/requests">View All</Link>
            </Button>
          </div>
          <div className="divide-y divide-border">
            {recentRequests.map((req) => {
              const cfg = statusConfig[req.status];
              return (
                <div key={req.id} className="flex items-center justify-between px-6 py-3.5 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">{req.id}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.style}`}>{cfg.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{req.org}</span>
                    <span className="text-xs text-muted-foreground">{req.date}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pending Actions */}
        <div className="glass-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-display text-base font-bold text-foreground">Pending Actions</h3>
          </div>
          <div className="divide-y divide-border">
            {pendingActions.map((action, i) => (
              <div key={i} className="px-5 py-3.5 hover:bg-muted/50 transition-colors cursor-pointer">
                <p className="text-sm text-foreground leading-snug">{action.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{action.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
