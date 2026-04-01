"use client";

import { FileText, Save, Download, History, ChevronDown, Terminal, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NegotiatorTMA() {
  return (
    <div className="space-y-10 animate-fade-in h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight italic uppercase">TMA Orchestrator</h1>
          <p className="text-muted-foreground font-medium mt-2">Technical Master Agreement — Mission TRQ-0042</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 rounded-2xl border-border/50 bg-muted/30 px-6 font-bold text-[10px] uppercase tracking-widest gap-2">
            <History className="h-4 w-4" /> Version Archive
          </Button>
          <Button variant="gold" className="h-12 rounded-2xl px-8 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 gap-2">
            <Save className="h-4 w-4" /> Commit Protocol
          </Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-0">
        {/* Outline / Sections */}
        <div className="lg:col-span-1 glass-card overflow-hidden flex flex-col">
          <div className="p-6 border-b border-border/50 bg-muted/30 flex items-center gap-3">
            <Terminal className="h-4 w-4 text-primary" />
            <h3 className="text-[10px] font-black uppercase tracking-widest text-foreground">Agreement Nodes</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            {[
              "1. Purpose & Scope",
              "2. Technical Specifications",
              "3. Training Curriculum",
              "4. Logistics & Facilities",
              "5. Financial Terms",
              "6. Intellectual Property",
              "7. Confidentiality",
              "8. Duration & Termination",
            ].map((section, i) => (
              <button 
                type="button" 
                key={section} 
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-transparent",
                  i === 1 
                    ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.05)]" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 glass-card flex flex-col overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldCheck className="h-64 w-64 text-primary" />
          </div>

          <div className="flex items-center justify-between p-6 border-b border-border/50 bg-muted/30 relative z-10">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Secure Node: 2. Technical Specifications</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
              <span>Syncing to Ledger...</span>
            </div>
          </div>

          <div className="flex-1 p-12 overflow-y-auto bg-card/30 relative z-10 custom-scrollbar">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4">
                <h4 className="font-display text-2xl font-black text-foreground tracking-tight uppercase italic border-l-4 border-primary pl-6">2.1 Satellite Ground Segment Operations</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed font-bold tracking-tight">
                  The training shall cover the full spectrum of ground segment operations, including but not limited to:
                  Telemetry, Tracking, and Command (TT&C) systems, mission planning systems, and payload data 
                  processing facilities. The organization shall provide access to its simulated ground station 
                  environment for practical exercises.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-display text-2xl font-black text-foreground tracking-tight uppercase italic border-l-4 border-primary pl-6">2.2 Orbital Mechanics & Maneuvers</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed font-bold tracking-tight">
                  Advanced modules on orbital perturbation analysis, station-keeping maneuver planning, and 
                  end-of-life disposal strategies will be delivered. Technical requirements include high-performance 
                  computing access for orbital propagation simulations.
                </p>
              </div>

              <div className="h-64 rounded-3xl border-2 border-dashed border-border/50 bg-muted/5 flex flex-col items-center justify-center text-muted-foreground gap-4">
                <Zap className="h-8 w-8 opacity-20" />
                <p className="font-black text-[10px] uppercase tracking-[0.3em] opacity-40">Initialize additional protocol segments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
