"use client";

import { FileText, Save, Download, History, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NegotiatorTMA() {
  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      {/* Editor Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">TMA Editor</h1>
          <p className="text-sm text-muted-foreground mt-1">Drafting Technical Master Agreement for TRQ-2026-0042</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2"><History className="h-4 w-4" /> Version History</Button>
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Draft</Button>
          <Button variant="gold" size="sm" className="gap-2"><Save className="h-4 w-4" /> Save Agreement</Button>
        </div>
      </div>

      {/* Editor Interface */}
      <div className="flex-1 grid grid-cols-4 gap-6 min-h-0">
        {/* Outline / Sections */}
        <div className="col-span-1 glass-card overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Agreement Sections</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
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
              <button type="button" key={section} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${i === 1 ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-muted"}`}>
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-3 glass-card flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
            <span className="text-sm font-semibold text-foreground">2. Technical Specifications</span>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Auto-saved 12:45 PM</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Live Editing</span>
            </div>
          </div>
          <div className="flex-1 p-8 overflow-y-auto bg-card">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-foreground">2.1 Satellite Ground Segment Operations</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The training shall cover the full spectrum of ground segment operations, including but not limited to:
                  Telemetry, Tracking, and Command (TT&C) systems, mission planning systems, and payload data 
                  processing facilities. The organization shall provide access to its simulated ground station 
                  environment for practical exercises.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-foreground">2.2 Orbital Mechanics & Maneuvers</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advanced modules on orbital perturbation analysis, station-keeping maneuver planning, and 
                  end-of-life disposal strategies will be delivered. Technical requirements include high-performance 
                  computing access for orbital propagation simulations.
                </p>
              </div>
              {/* Placeholder for more text */}
              <div className="h-64 rounded border border-dashed border-border bg-muted/10 flex items-center justify-center text-muted-foreground italic text-sm">
                Continue typing agreement content here...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
