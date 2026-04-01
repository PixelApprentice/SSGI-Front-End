"use client";

import { staff } from "@/lib/mock-data";
import { Users, ShieldCheck, Mail, Phone, Activity, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminStaff() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">System Personnel</h1>
          <p className="text-muted-foreground font-medium mt-2">Comprehensive directory of all internal operational nodes.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              className="h-12 w-64 bg-muted/30 border border-border/50 rounded-2xl px-12 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search personnel..." 
            />
          </div>
        </div>
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
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Operational Load</p>
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
                  <Button variant="outline" className="h-12 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest border-border/50 hover:bg-muted/50 transition-all">Profile</Button>
                  <Button variant="outline" className="h-12 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest border-border/50 hover:bg-muted/50 transition-all">Logs</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
