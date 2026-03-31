"use client";

import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

const monthlyData = [
  { month: "Oct 2025", requests: 3, value: "$18,200", trainees: 22 },
  { month: "Nov 2025", requests: 2, value: "$31,800", trainees: 16 },
  { month: "Dec 2025", requests: 4, value: "$28,400", trainees: 30 },
  { month: "Jan 2026", requests: 5, value: "$42,600", trainees: 38 },
  { month: "Feb 2026", requests: 3, value: "$31,300", trainees: 23 },
  { month: "Mar 2026", requests: 4, value: "$44,200", trainees: 30 },
];

const topPrograms = [
  { name: "Satellite Operations & Control", requests: 8, revenue: "$92,400" },
  { name: "Remote Sensing & GIS", requests: 6, revenue: "$68,200" },
  { name: "Mission Planning & Design", requests: 5, revenue: "$54,000" },
  { name: "Ground Station Engineering", requests: 4, revenue: "$38,800" },
  { name: "Satellite Data Processing", requests: 3, revenue: "$28,600" },
];

export default function AdminReports() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Reports & Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">Training program performance and financial overview</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Revenue (FY)", value: "$196,500", icon: DollarSign },
          { label: "Requests (FY)", value: "21", icon: BarChart3 },
          { label: "Trainees Certified", value: "159", icon: Users },
          { label: "Growth Rate", value: "+23%", icon: TrendingUp },
        ].map((s) => (
          <div key={s.label} className="glass-card p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Monthly Overview */}
        <div className="glass-card overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-display text-lg font-bold text-foreground">Monthly Overview</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Month</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Requests</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Value</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Trainees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {monthlyData.map((d) => (
                <tr key={d.month} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-3 text-sm font-medium text-foreground">{d.month}</td>
                  <td className="px-6 py-3 text-sm text-foreground">{d.requests}</td>
                  <td className="px-6 py-3 text-sm font-medium text-foreground">{d.value}</td>
                  <td className="px-6 py-3 text-sm text-foreground">{d.trainees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Programs */}
        <div className="glass-card overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-display text-lg font-bold text-foreground">Top Programs</h3>
          </div>
          <div className="divide-y divide-border">
            {topPrograms.map((prog, i) => (
              <div key={prog.name} className="flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{prog.name}</p>
                    <p className="text-xs text-muted-foreground">{prog.requests} requests</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">{prog.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
