"use client";

import { User, Search, Filter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const trainees = [
  { name: "Tadesse Bekele", org: "Ethiopian Space Science", program: "Mission Planning", progress: 72, status: "active" },
  { name: "Hirut Alemayehu", org: "Ethiopian Space Science", program: "Mission Planning", progress: 68, status: "active" },
  { name: "John Kamau", org: "Kenya Space Agency", program: "Satellite Ops", progress: 45, status: "active" },
  { name: "Sarah Wanjiku", org: "Kenya Space Agency", program: "Satellite Ops", progress: 30, status: "active" },
  { name: "Ahmed Musa", org: "Nigerian NASRDA", program: "Remote Sensing", progress: 100, status: "completed" },
  { name: "Chinua Azikiwe", org: "Nigerian NASRDA", program: "Remote Sensing", progress: 100, status: "completed" },
];

export default function SupervisorTrainees() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Trainee Monitoring</h1>
        <p className="text-sm text-muted-foreground mt-1">Track individual trainee progress across all active programs</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search trainees..." />
        </div>
        <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trainees.map((t) => (
          <div key={t.name} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.org}</p>
                </div>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                t.status === "completed" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" : "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400"
              }`}>
                {t.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{t.program}</span>
                  <span className="font-semibold text-foreground">{t.progress}%</span>
                </div>
                <Progress value={t.progress} className="h-1.5" />
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1 gap-1.5 text-xs border border-border"><Mail className="h-3.5 w-3.5" /> Email</Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-1.5 text-xs border border-border"><Phone className="h-3.5 w-3.5" /> Call</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
