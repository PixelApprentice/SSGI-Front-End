"use client";

import { Handshake, MessageSquare, FileText, AlertCircle, Search, Filter, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const negotiations = [
  { id: "TRQ-0042", org: "Kenya Space Agency", program: "Satellite Operations", stage: "TMA Draft", lastUpdate: "3 hours ago", status: "In Review" },
  { id: "TRQ-0044", org: "Ghana Space Agency", program: "Data Processing", stage: "Costing", lastUpdate: "1 day ago", status: "Awaiting Feedback" },
];

export default function SupervisorNegotiations() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Agreement Pipeline</h1>
          <p className="text-muted-foreground font-medium mt-2">Oversight of active negotiations and technical term alignment.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              className="h-12 w-64 bg-muted/30 border border-border/50 rounded-2xl px-12 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search pipelines..." 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {negotiations.map((n) => (
          <div key={n.id} className="glass-card p-8 group transition-all duration-500 hover:border-primary/30">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{n.id}</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary">{n.status}</span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-foreground tracking-tight">{n.program}</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">{n.org}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:border-l lg:border-border/50 lg:pl-12">
                <div className="text-right mr-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Current Stage</p>
                  <p className="text-sm font-black text-foreground mt-1">{n.stage}</p>
                </div>
                <Button variant="outline" className="h-12 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest border-border/50 hover:bg-muted/50 transition-all">Monitor Comms</Button>
                <Button variant="gold" className="h-12 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">Review Terms</Button>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <AlertCircle className="h-3 w-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Supervisor Watch Active</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Updated {n.lastUpdate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
