"use client";

import Link from "next/link";
import {
  FileText,
  UserCheck,
  AlertTriangle,
  ArrowUpRight,
  Clock,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Requests", value: "24", change: "+3 this month", icon: FileText, trend: "up" },
  { label: "Pending Assignment", value: "6", change: "Needs attention", icon: Clock, trend: "alert" },
  { label: "Active Negotiations", value: "7", change: "2 nearing close", icon: Handshake, trend: "neutral" },
  { label: "Staff Utilization", value: "78%", change: "+5% from last month", icon: TrendingUp, trend: "up" },
];

const pipeline = [
  { stage: "Submitted", count: 3, color: "bg-amber-500" },
  { stage: "DG Approved", count: 4, color: "bg-blue-500" },
  { stage: "Assigned", count: 6, color: "bg-primary" },
  { stage: "Negotiation", count: 7, color: "bg-purple-500" },
  { stage: "Finalized", count: 4, color: "bg-emerald-500" },
];

const pendingAssignments = [
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", submitted: "2026-03-25", priority: "high" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", submitted: "2026-03-12", priority: "high" },
  { id: "TRQ-2026-0046", org: "Tanzania Space Agency", program: "Ground Station Ops", submitted: "2026-03-28", priority: "medium" },
];

const staffOverview = [
  { name: "Meseret Hailu", role: "Supervisor", activeRequests: 3, capacity: 5, status: "available" },
  { name: "Dawit Kebede", role: "Negotiator", activeRequests: 4, capacity: 5, status: "busy" },
  { name: "Tigist Alemayehu", role: "Supervisor", activeRequests: 2, capacity: 5, status: "available" },
  { name: "Henok Girma", role: "Negotiator", activeRequests: 5, capacity: 5, status: "full" },
];

const escalations = [
  { text: "TRQ-2026-0039 — DG approval pending for 5 days", type: "delay", time: "2 hours ago" },
  { text: "Negotiator Henok at full capacity — reassignment needed", type: "capacity", time: "1 day ago" },
  { text: "TRQ-2026-0036 — Client unresponsive for 10 days", type: "bottleneck", time: "3 days ago" },
];

export default function DirectorDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Training Director Hub</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Central operations dashboard — {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
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
              {s.trend === "alert" && <AlertTriangle className="h-4 w-4 text-amber-500" />}
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Pipeline Visualization */}
      <div className="glass-card p-6 mb-6">
        <h3 className="font-display text-lg font-bold text-foreground mb-4">Request Pipeline</h3>
        <div className="flex items-end gap-3 h-32">
          {pipeline.map((p) => (
            <div key={p.stage} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-sm font-bold text-foreground">{p.count}</span>
              <div className={`w-full rounded-t-lg ${p.color} transition-all`} style={{ height: `${(p.count / 7) * 80}px` }} />
              <span className="text-[11px] text-muted-foreground text-center">{p.stage}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Pending Assignments */}
        <div className="col-span-2 glass-card overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="font-display text-base font-bold text-foreground">Pending Assignments</h3>
            <Button asChild variant="ghost" size="sm" className="text-primary text-xs">
              <Link href="/director/assignments">View All</Link>
            </Button>
          </div>
          <div className="divide-y divide-border">
            {pendingAssignments.map((req) => (
              <div key={req.id} className="flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{req.id}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                      req.priority === "high" ? "bg-destructive/10 text-destructive" : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                    }`}>{req.priority}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{req.program} — {req.org}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="gold" size="sm" className="text-xs">Assign Staff</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Staff Quick View */}
          <div className="glass-card overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <h3 className="font-display text-base font-bold text-foreground">Staff Workload</h3>
            </div>
            <div className="divide-y divide-border">
              {staffOverview.map((s) => (
                <div key={s.name} className="px-5 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{s.name}</p>
                      <p className="text-[11px] text-muted-foreground">{s.role}</p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      s.status === "available" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                        : s.status === "busy" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                        : "bg-destructive/10 text-destructive"
                    }`}>{s.activeRequests}/{s.capacity}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${s.status === "full" ? "bg-destructive" : "bg-primary"}`}
                      style={{ width: `${(s.activeRequests / s.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Escalations */}
          <div className="glass-card overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Escalations
              </h3>
            </div>
            <div className="divide-y divide-border">
              {escalations.map((e, i) => (
                <div key={i} className="px-5 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm text-foreground leading-snug">{e.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{e.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
