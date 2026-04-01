import {
  FileCheck,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Pending Executive Review", value: "04", icon: Clock, trend: "alert", color: "text-amber-500", bg: "bg-amber-500/10" },
  { label: "Approved Programs", value: "06", icon: CheckCircle2, trend: "up", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Total Asset Value", value: "$142K", icon: Zap, trend: "up", color: "text-primary", bg: "bg-primary/10" },
  { label: "Operational Staff", value: "12", icon: Users, trend: "neutral", color: "text-blue-500", bg: "bg-blue-500/10" },
];

const pendingApprovals = [
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", trainees: 10, value: "$6,200", submitted: "2026-03-25", days: 6 },
  { id: "TRQ-2026-0047", org: "Cameroon Space Agency", program: "Remote Sensing Basics", trainees: 15, value: "$8,500", submitted: "2026-03-27", days: 4 },
];

export default function DGDashboard() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Executive Dashboard</h1>
          <p className="text-muted-foreground font-medium mt-2">Director General Overview — {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="glass-card p-8 group transition-all duration-500 hover:border-primary/30">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.bg} ring-1 ring-white/5 mb-6 group-hover:rotate-6 transition-transform`}>
              <s.icon className={`h-6 w-6 ${s.color}`} />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display text-4xl font-black text-foreground leading-none">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mt-3">{s.label}</p>
              </div>
              {s.trend === "up" && <ArrowUpRight className="h-5 w-5 text-emerald-500" />}
              {s.trend === "alert" && <AlertCircle className="h-5 w-5 text-amber-500 animate-pulse" />}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Approvals Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            Executive Queue
          </h2>
          <div className="space-y-4">
            {pendingApprovals.map((req) => (
              <div key={req.id} className="glass-card p-8 group transition-all duration-500 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                      <FileCheck className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{req.id}</span>
                        {req.days >= 5 && (
                          <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-[8px] font-black uppercase tracking-widest text-destructive animate-pulse">Critical Review</span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-black text-foreground tracking-tight">{req.program}</h3>
                      <p className="text-sm font-medium text-muted-foreground mt-1">{req.org}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-l border-border/50 pl-8">
                    <div className="text-right">
                      <p className="text-sm font-black text-foreground leading-tight">{req.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{req.days} Days Pending</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" className="h-11 rounded-xl px-4 border-border/50 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20 transition-all font-bold text-[10px] uppercase tracking-widest">Reject</Button>
                      <Button variant="gold" className="h-11 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">Authorize</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="space-y-6">
          <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest">History</h2>
          <div className="glass-card overflow-hidden">
            <div className="divide-y divide-border/50">
              {[
                { id: "TRQ-0046", org: "Tanzania Space Agency", status: "Approved", date: "Mar 28" },
                { id: "TRQ-0042", org: "Kenya Space Agency", status: "Approved", date: "Mar 15" },
                { id: "TRQ-0043", org: "Algeria ASAL", status: "Rejected", date: "Mar 10" },
              ].map((log) => (
                <div key={log.id} className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{log.id}</span>
                    <span className="text-[10px] font-bold text-muted-foreground">{log.date}</span>
                  </div>
                  <p className="text-sm font-bold text-foreground leading-tight truncate">{log.org}</p>
                  <span className={cn(
                    "inline-block mt-3 text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full",
                    log.status === 'Approved' ? "bg-emerald-500/10 text-emerald-500" : "bg-destructive/10 text-destructive"
                  )}>{log.status}</span>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full h-12 rounded-none text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">View Comprehensive Logs</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
