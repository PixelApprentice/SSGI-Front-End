"use client";

import { BarChart3, TrendingUp, Users, DollarSign, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const reportCards = [
  { label: "Quarterly Revenue", value: "$124,500", change: "+12.5%", icon: DollarSign },
  { label: "Partner Growth", value: "18 Org", change: "+3 new", icon: Users },
  { label: "Completion Rate", value: "94.2%", change: "+2.1%", icon: TrendingUp },
  { label: "Active Programs", value: "8", change: "Full capacity", icon: BarChart3 },
];

export default function DGReports() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Executive Reports</h1>
          <p className="text-sm text-muted-foreground mt-1">High-level analytics and performance metrics</p>
        </div>
        <Button variant="gold" size="sm" className="gap-2"><Download className="h-4 w-4" /> Download Annual Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {reportCards.map((card) => (
          <div key={card.label} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{card.change}</span>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{card.label}</p>
            <p className="font-display text-2xl font-bold text-foreground mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 h-80 flex flex-col items-center justify-center text-center border-dashed border-2">
          <BarChart3 className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
          <h3 className="text-sm font-semibold text-foreground">Revenue by Department</h3>
          <p className="text-xs text-muted-foreground mt-1">Interactive chart will be rendered here</p>
        </div>
        <div className="glass-card p-6 h-80 flex flex-col items-center justify-center text-center border-dashed border-2">
          <TrendingUp className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
          <h3 className="text-sm font-semibold text-foreground">Program Popularity Trend</h3>
          <p className="text-xs text-muted-foreground mt-1">Interactive chart will be rendered here</p>
        </div>
      </div>
    </div>
  );
}
