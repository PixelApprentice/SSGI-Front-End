"use client";

import { BarChart3, TrendingUp, Users, Download, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const metrics = [
  { label: "Mission Completion Rate", value: "92%", trend: "+4%", status: "optimal" },
  { label: "Avg. Negotiation Cycle", value: "14 Days", trend: "-2 Days", status: "improving" },
  { label: "Resource Utilization", value: "78%", trend: "+5%", status: "optimal" },
  { label: "Client Satisfaction", value: "4.8/5", trend: "+0.2", status: "optimal" },
];

export default function DirectorReports() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Intelligence Analytics</h1>
          <p className="text-muted-foreground font-medium mt-2">Strategic performance metrics and operational efficiency reports.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 rounded-2xl border-border/50 bg-muted/30 px-6 font-bold text-xs uppercase tracking-widest gap-2">
            <Calendar className="h-4 w-4" /> Last 30 Days
          </Button>
          <Button variant="gold" className="h-12 rounded-2xl px-8 font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 gap-2">
            <Download className="h-4 w-4" /> Export Intelligence
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card p-8 group">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">{m.label}</p>
            <div className="flex items-end justify-between">
              <p className="font-display text-4xl font-black text-foreground leading-none">{m.value}</p>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg",
                m.status === 'optimal' ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
              )}>
                <TrendingUp className="h-3 w-3" /> {m.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="h-20 w-20 rounded-3xl bg-muted flex items-center justify-center mb-6">
            <BarChart3 className="h-10 w-10 text-muted-foreground/40" />
          </div>
          <h3 className="font-display text-2xl font-black text-foreground tracking-tight mb-2">Training Throughput</h3>
          <p className="text-muted-foreground max-w-sm font-medium">Visualization of monthly trainee throughput and mission milestones.</p>
          <div className="mt-8 w-full max-w-md h-40 flex items-end justify-between gap-2">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t-xl transition-all hover:bg-primary group relative">
                <div className="absolute inset-0 bg-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                <div className="w-full bg-primary/10 rounded-t-xl" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="h-20 w-20 rounded-3xl bg-muted flex items-center justify-center mb-6">
            <Users className="h-10 w-10 text-muted-foreground/40" />
          </div>
          <h3 className="font-display text-2xl font-black text-foreground tracking-tight mb-2">Regional Reach</h3>
          <p className="text-muted-foreground max-w-sm font-medium">Breakdown of partner entities and mission distribution by territory.</p>
          <div className="mt-8 w-full max-w-md space-y-4">
            {[
              { label: "East Africa", value: 45, color: "bg-primary" },
              { label: "West Africa", value: 25, color: "bg-blue-500" },
              { label: "Southern Africa", value: 20, color: "bg-emerald-500" },
              { label: "North Africa", value: 10, color: "bg-amber-500" },
            ].map((r) => (
              <div key={r.label} className="space-y-2 text-left">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="text-foreground">{r.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full", r.color)} style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
