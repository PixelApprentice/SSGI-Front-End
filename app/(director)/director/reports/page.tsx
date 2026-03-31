"use client";

import { BarChart3, TrendingUp, Users, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const reportStats = [
  { label: "Active Trainees", value: "142", icon: Users },
  { label: "Avg. Completion", value: "88%", icon: TrendingUp },
  { label: "Request Velocity", value: "4.2 days", icon: Clock },
  { label: "Revenue generated", value: "$196K", icon: BarChart3 },
];

export default function DirectorReports() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Operational Reports</h1>
          <p className="text-sm text-muted-foreground mt-1">Detailed metrics on training delivery and staff performance</p>
        </div>
        <Button variant="gold" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Operational Data</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {reportStats.map((stat) => (
          <div key={stat.label} className="glass-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            <p className="font-display text-2xl font-bold text-foreground mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 h-96 flex flex-col items-center justify-center text-center border-dashed border-2">
          <BarChart3 className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
          <h3 className="text-sm font-semibold text-foreground">Staff Load & Utilization</h3>
          <p className="text-xs text-muted-foreground mt-1">Interactive workload distribution chart</p>
        </div>
        <div className="glass-card p-6 h-96 flex flex-col items-center justify-center text-center border-dashed border-2">
          <Clock className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
          <h3 className="text-sm font-semibold text-foreground">Bottleneck Analysis</h3>
          <p className="text-xs text-muted-foreground mt-1">Time-per-stage visualization</p>
        </div>
      </div>
    </div>
  );
}
