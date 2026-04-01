"use client";

import { requests, statusConfig } from "@/lib/mock-data";
import { FileCheck, ShieldCheck, Search, Filter, ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminApprovals() {
  const pendingApprovals = requests.filter(r => r.status === 'pending');

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Authorization Queue</h1>
          <p className="text-muted-foreground font-medium mt-2">Administrative review and authorization of mission requests.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              className="h-12 w-64 bg-muted/30 border border-border/50 rounded-2xl px-12 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search queue..." 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {pendingApprovals.map((req) => (
          <div key={req.id} className="glass-card p-8 group transition-all duration-500 hover:border-primary/40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{req.id}</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-[10px] font-black uppercase tracking-widest text-amber-500">Awaiting Admin Action</span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-foreground tracking-tight">{req.program}</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">{req.org}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:border-l lg:border-border/50 lg:pl-12">
                <Button variant="outline" className="h-12 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest border-border/50 hover:bg-destructive/10 hover:text-destructive transition-all">Reject</Button>
                <Button variant="gold" className="h-12 rounded-xl px-8 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">Authorize</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
