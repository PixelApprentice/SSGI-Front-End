"use client";

import { Users, Search, Filter, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const staff = [
  { name: "Dr. Abebe Tadesse", role: "Head of Training", active: 12, performance: "Excellence", status: "online" },
  { name: "Meseret Hailu", role: "Senior Supervisor", active: 3, performance: "Good", status: "online" },
  { name: "Dawit Kebede", role: "Lead Negotiator", active: 4, performance: "Good", status: "offline" },
  { name: "Tigist Alemayehu", role: "Supervisor", active: 2, performance: "Excellence", status: "online" },
  { name: "Henok Girma", role: "Negotiator", active: 5, performance: "Overloaded", status: "busy" },
];

export default function DGStaff() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Training Staff Directory</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and monitor performance of all portal personnel</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search staff..." />
        </div>
        <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {staff.map((s) => (
          <div key={s.name} className="glass-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {s.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                    s.status === "online" ? "bg-emerald-500" : s.status === "busy" ? "bg-amber-500" : "bg-muted-foreground"
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.role}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Shield className="h-4 w-4" /></Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Active Requests</span>
                <span className="font-semibold text-foreground">{s.active}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Performance</span>
                <span className={`font-semibold ${
                  s.performance === "Overloaded" ? "text-destructive" : "text-emerald-600 dark:text-emerald-400"
                }`}>{s.performance}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2 gap-2"><Mail className="h-3.5 w-3.5" /> Contact Personnel</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
