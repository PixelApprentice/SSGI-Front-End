"use client";

import { requests, statusConfig } from "@/lib/mock-data";
import { GraduationCap, Users, Calendar, ArrowUpRight, Search, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const activeTrainings = [
  { id: "TRQ-0035", program: "Mission Planning & Design", org: "Ethiopian Space Science", progress: 65, trainees: 8, start: "Jan 10, 2026" },
  { id: "TRQ-0038", program: "Remote Sensing & GIS", org: "Nigerian NASRDA", progress: 100, trainees: 15, start: "Feb 20, 2026" },
];

export default function SupervisorTrainings() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Active Deployments</h1>
          <p className="text-muted-foreground font-medium mt-2">Monitoring mission progress and trainee participation metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              className="h-12 w-64 bg-muted/30 border border-border/50 rounded-2xl px-12 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search trainings..." 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {activeTrainings.map((t) => (
          <div key={t.id} className="glass-card p-10 group transition-all duration-500 hover:border-primary/40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{t.id}</span>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ring-1",
                    t.progress === 100 ? "bg-emerald-500/10 text-emerald-500 ring-emerald-500/20" : "bg-primary/10 text-primary ring-primary/20"
                  )}>
                    {t.progress === 100 ? "Ready for Certification" : "Mission Active"}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-black text-foreground tracking-tight">{t.program}</h2>
                  <p className="text-lg font-medium text-muted-foreground mt-2">{t.org}</p>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Start Date</span>
                    <span className="text-sm font-bold text-foreground">{t.start}</span>
                  </div>
                  <div className="h-8 w-px bg-border/50" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Units</span>
                    <span className="text-sm font-bold text-foreground">{t.trainees} Personnel</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-80 space-y-6">
                <div className="flex items-end justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Curriculum Progress</p>
                  <span className="font-display text-3xl font-black gold-text">{t.progress}%</span>
                </div>
                <div className="relative h-3 w-full bg-muted/50 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "absolute top-0 left-0 h-full transition-all duration-1000 ease-out",
                      t.progress === 100 ? "bg-emerald-500" : "bg-gradient-to-r from-primary to-primary/60"
                    )}
                    style={{ width: `${t.progress}%` }}
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" className="flex-1 h-11 rounded-xl font-bold text-[10px] uppercase tracking-widest border-border/50 hover:bg-muted/50">Details</Button>
                  <Button variant="gold" className="flex-1 h-11 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">Monitor Units</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
