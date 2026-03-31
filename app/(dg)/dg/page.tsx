"use client";

import {
  FileCheck,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Pending Approvals", value: "4", change: "2 urgent", icon: Clock, trend: "alert" },
  { label: "Approved This Month", value: "6", change: "+2 from last month", icon: CheckCircle2, trend: "up" },
  { label: "Active Agreements", value: "8", change: "$142,000 total", icon: FileCheck, trend: "up" },
  { label: "Total Staff", value: "12", change: "All assigned", icon: Users, trend: "neutral" },
];

const pendingApprovals = [
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", trainees: 10, value: "$6,200", submitted: "2026-03-25", days: 6 },
  { id: "TRQ-2026-0047", org: "Cameroon Space Agency", program: "Remote Sensing Basics", trainees: 15, value: "$8,500", submitted: "2026-03-27", days: 4 },
  { id: "TRQ-2026-0048", org: "Senegal ASAL", program: "GIS & Mapping", trainees: 8, value: "$5,100", submitted: "2026-03-28", days: 3 },
  { id: "TRQ-2026-0049", org: "Côte d'Ivoire SODEXAM", program: "Weather Satellite Ops", trainees: 12, value: "$9,800", submitted: "2026-03-30", days: 1 },
];

const recentDecisions = [
  { id: "TRQ-2026-0046", org: "Tanzania Space Agency", decision: "approved", date: "2026-03-28" },
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", decision: "approved", date: "2026-03-15" },
  { id: "TRQ-2026-0043", org: "Algeria ASAL", decision: "rejected", date: "2026-03-10" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", decision: "approved", date: "2026-03-12" },
];

export default function DGDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">DG Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Executive overview — {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
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
              {s.trend === "alert" && <AlertCircle className="h-4 w-4 text-amber-500" />}
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Pending Approvals */}
        <div className="col-span-2 glass-card overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-display text-lg font-bold text-foreground">Pending Your Approval</h3>
          </div>
          <div className="divide-y divide-border">
            {pendingApprovals.map((req) => (
              <div key={req.id} className="px-6 py-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">{req.id}</span>
                      {req.days >= 5 && (
                        <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold uppercase text-destructive">
                          Overdue
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{req.program} — {req.org}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <p>{req.trainees} trainees · {req.value}</p>
                    <p>{req.days} days pending</p>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" className="text-xs gap-1">
                    <ThumbsDown className="h-3 w-3" /> Reject
                  </Button>
                  <Button variant="gold" size="sm" className="text-xs gap-1">
                    <ThumbsUp className="h-3 w-3" /> Approve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Decisions */}
        <div className="glass-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-display text-base font-bold text-foreground">Recent Decisions</h3>
          </div>
          <div className="divide-y divide-border">
            {recentDecisions.map((d) => (
              <div key={d.id} className="px-5 py-3.5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{d.id}</p>
                  <p className="text-xs text-muted-foreground">{d.org}</p>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  d.decision === "approved"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                    : "bg-destructive/10 text-destructive"
                }`}>
                  {d.decision === "approved" ? "Approved" : "Rejected"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
