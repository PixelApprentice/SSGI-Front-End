import Link from "next/link";
import {
  FileText,
  UserCheck,
  AlertTriangle,
  ArrowUpRight,
  Clock,
  Handshake,
  TrendingUp,
  Activity,
  Zap,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Missions", value: "24", icon: FileText, trend: "up", color: "text-primary", bg: "bg-primary/10" },
  { label: "Awaiting Assignment", value: "06", icon: Clock, trend: "alert", color: "text-amber-500", bg: "bg-amber-500/10" },
  { label: "Active Pipelines", value: "07", icon: Handshake, trend: "neutral", color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Asset Utilization", value: "78%", icon: Zap, trend: "up", color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

const pipeline = [
  { stage: "Submitted", count: 3, color: "bg-amber-500" },
  { stage: "DG Approved", count: 4, color: "bg-blue-500" },
  { stage: "Assigned", count: 6, color: "bg-primary" },
  { stage: "Negotiation", count: 7, color: "bg-purple-500" },
  { stage: "Finalized", count: 4, color: "bg-emerald-500" },
];

export default function DirectorDashboard() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-5xl font-black text-white mb-2 leading-tight tracking-tighter uppercase italic">Operations Hub</h1>
          <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">Training Director — Central Mission Orchestration</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <LayoutGrid className="h-6 w-6 text-primary" />
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
              {s.trend === "alert" && <AlertTriangle className="h-5 w-5 text-amber-500 animate-pulse" />}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pipeline Visualization */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
            <Activity className="h-5 w-5 text-primary" />
            Mission Pipeline
          </h2>
          <div className="glass-card p-10">
            <div className="flex items-end justify-between gap-4 h-48">
              {pipeline.map((p) => (
                <div key={p.stage} className="flex-1 flex flex-col items-center gap-4 group">
                  <div className="relative w-full flex flex-col items-center">
                    <span className="text-xs font-black text-foreground mb-2 transition-transform group-hover:-translate-y-1">{p.count}</span>
                    <div 
                      className={cn("w-full rounded-2xl transition-all duration-500 group-hover:brightness-110 group-hover:shadow-lg", p.color)} 
                      style={{ height: `${(p.count / 7) * 120}px` }} 
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 text-center leading-tight h-8 flex items-center">{p.stage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest">Awaiting Assignment</h2>
              <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-primary">View Full Queue</Button>
            </div>
            {[
              { id: "TRQ-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", priority: "high" },
              { id: "TRQ-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", priority: "high" },
            ].map((req) => (
              <div key={req.id} className="glass-card p-8 group transition-all duration-500 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors text-muted-foreground group-hover:text-primary">
                      <UserCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{req.id}</span>
                        <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-[8px] font-black uppercase tracking-widest text-destructive animate-pulse">Priority Alpha</span>
                      </div>
                      <h3 className="font-display text-xl font-black text-foreground tracking-tight">{req.program}</h3>
                      <p className="text-sm font-medium text-muted-foreground mt-1">{req.org}</p>
                    </div>
                  </div>
                  <Button variant="gold" className="h-11 rounded-xl px-8 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">Assign Mission Staff</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Staff & Escalations */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest">Resource Load</h2>
            <div className="glass-card overflow-hidden">
              <div className="divide-y divide-border/50">
                {[
                  { name: "Meseret Hailu", role: "Supervisor", load: 60 },
                  { name: "Dawit Kebede", role: "Negotiator", load: 80 },
                  { name: "Tigist Alemayehu", role: "Supervisor", load: 40 },
                  { name: "Henok Girma", role: "Negotiator", load: 100 },
                ].map((s) => (
                  <div key={s.name} className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight">{s.name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-1">{s.role}</p>
                      </div>
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest",
                        s.load >= 90 ? "text-destructive" : s.load >= 70 ? "text-amber-500" : "text-emerald-500"
                      )}>{s.load}% Load</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-muted/50 overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-1000",
                          s.load >= 90 ? "bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.4)]" : s.load >= 70 ? "bg-amber-500" : "bg-primary"
                        )} 
                        style={{ width: `${s.load}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest text-amber-500 flex items-center gap-3">
              <AlertTriangle className="h-5 w-5" />
              Escalations
            </h2>
            <div className="glass-card divide-y divide-border/50">
              {[
                { text: "TRQ-0039 pending executive review > 5 days", time: "2h ago" },
                { name: "Henok Girma", text: "Capacity reached — Reassignment required", time: "1d ago" },
              ].map((e, i) => (
                <div key={i} className="p-6 hover:bg-muted/30 transition-colors cursor-pointer group">
                  <p className="text-xs font-bold text-foreground leading-relaxed group-hover:text-primary transition-colors">{e.text}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mt-3">{e.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
