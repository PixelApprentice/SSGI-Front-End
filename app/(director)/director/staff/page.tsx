"use client";

import { staff } from "@/lib/mock-data";
import { Users, TrendingUp, ShieldCheck, Mail, Phone, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DirectorStaff() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Personnel Intelligence</h1>
          <p className="text-muted-foreground font-medium mt-2">Team capacity monitoring and technical role assignments.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="gold" className="h-12 rounded-2xl px-8 font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
            Assign Mission Personnel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Assets", value: "12", icon: Users, color: "text-primary", bg: "bg-primary/10" },
          { label: "Standby Pool", value: "04", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Active Deployments", value: "08", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Verifiers", value: "02", icon: ShieldCheck, color: "text-amber-500", bg: "bg-amber-500/10" },
        ].map((s) => (
          <div key={s.label} className="glass-card p-8 group">
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-white/5 mb-6 group-hover:rotate-6 transition-transform", s.bg)}>
              <s.icon className={cn("h-6 w-6", s.color)} />
            </div>
            <p className="font-display text-4xl font-black text-foreground leading-none">{s.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mt-3">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {staff.map((s) => {
          const workloadPercent = (s.active / s.capacity) * 100;
          return (
            <div key={s.name} className="glass-card p-8 group transition-all duration-500 hover:border-primary/30">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 shrink-0 flex items-center justify-center rounded-2xl bg-muted/50 ring-1 ring-border/50 font-black text-lg text-muted-foreground group-hover:text-primary group-hover:ring-primary/30 transition-all">
                    {s.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-2xl font-black text-foreground tracking-tight">{s.name}</h3>
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                        s.status === 'available' ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                      )}>{s.status}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">{s.role}</p>
                      <div className="h-1 w-1 rounded-full bg-border" />
                      <p className="text-xs font-medium text-muted-foreground">{s.expertise}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 max-w-xs space-y-3">
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mission Load</p>
                    <span className="text-xs font-black text-foreground">{s.active} / {s.capacity}</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-1000",
                        workloadPercent >= 80 ? "bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.4)]" : "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.4)]"
                      )} 
                      style={{ width: `${workloadPercent}%` }} 
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:border-l lg:border-border/50 lg:pl-12">
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl text-muted-foreground hover:bg-muted/50 hover:text-foreground"><Mail className="h-5 w-5" /></Button>
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl text-muted-foreground hover:bg-muted/50 hover:text-foreground"><Phone className="h-5 w-5" /></Button>
                  <Button variant="outline" className="h-12 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest border-border/50 hover:bg-muted/50 transition-all ml-2">Reassign</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
