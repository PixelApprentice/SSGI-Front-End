"use client";

import { Progress } from "@/components/ui/progress";
import { GraduationCap, Users, Calendar, BookOpen } from "lucide-react";

const activePrograms = [
  { id: "TRQ-2026-0035", program: "Mission Planning & Design", org: "Ethiopian Space Science", progress: 65, trainees: 8, modules: "5/8", start: "2026-01-10", end: "2026-03-10" },
  { id: "TRQ-2026-0038", program: "Remote Sensing & GIS", org: "Nigerian NASRDA", progress: 30, trainees: 15, modules: "3/10", start: "2026-02-25", end: "2026-05-20" },
  { id: "TRQ-2026-0040", program: "Ground Station Operations", org: "Tanzania Space Agency", progress: 85, trainees: 6, modules: "7/8", start: "2025-12-01", end: "2026-02-28" },
  { id: "TRQ-2025-0095", program: "Satellite Assembly Basics", org: "Kenya Space Agency", progress: 45, trainees: 12, modules: "4/9", start: "2026-01-15", end: "2026-04-15" },
  { id: "TRQ-2026-0039", program: "Orbital Mechanics Intensive", org: "South Africa SANSA", progress: 10, trainees: 8, modules: "1/6", start: "2026-03-01", end: "2026-04-30" },
];

export default function AdminTraining() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Training Programs</h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor all active and upcoming training deployments</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Programs", value: "5", icon: GraduationCap },
          { label: "Total Trainees", value: "49", icon: Users },
          { label: "Avg. Completion", value: "47%", icon: BookOpen },
          { label: "This Quarter", value: "3 ending", icon: Calendar },
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

      <div className="glass-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-display text-lg font-bold text-foreground">Active Programs</h3>
        </div>
        <div className="divide-y divide-border">
          {activePrograms.map((prog) => (
            <div key={prog.id} className="px-6 py-5 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-primary">{prog.id}</span>
                    <span className="text-sm font-semibold text-foreground">{prog.program}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{prog.org}</p>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Trainees</p>
                    <p className="font-semibold text-foreground">{prog.trainees}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Modules</p>
                    <p className="font-semibold text-foreground">{prog.modules}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground text-xs">{prog.start} → {prog.end}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Progress value={prog.progress} className="h-2 flex-1" />
                <span className="text-sm font-bold text-primary min-w-[3rem] text-right">{prog.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
