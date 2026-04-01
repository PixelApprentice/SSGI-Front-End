"use client";

import { Handshake, Search, Filter, ArrowUpRight, ShieldCheck, DollarSign, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const globalPipelines = [
  { id: "TRQ-0042", org: "Kenya Space Agency", program: "Satellite Operations", stage: "TMA Review", lead: "Dawit Kebede", value: "$25K" },
  { id: "TRQ-0044", org: "Ghana Space Agency", program: "Data Processing", stage: "Initial Draft", lead: "Henok Girma", value: "$12K" },
  { id: "TRQ-0041", org: "South Africa SANSA", program: "Remote Sensing", stage: "Finalized", lead: "Sara Tekle", value: "$18K" },
];

export default function AdminNegotiations() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Global Pipelines</h1>
          <p className="text-muted-foreground font-medium mt-2">Executive oversight of all active financial and technical negotiations.</p>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Aggregate Pipeline Value", value: "$55K", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Active Technical Reviews", value: "03", icon: Activity, color: "text-primary", bg: "bg-primary/10" },
          { label: "Negotiator Utilization", value: "85%", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10" },
        ].map((s, i) => (
          <div key={i} className="glass-card p-8 group">
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-white/5 mb-6 group-hover:rotate-6 transition-transform", s.bg)}>
              <s.icon className={cn("h-6 w-6", s.color)} />
            </div>
            <p className="font-display text-4xl font-black text-foreground leading-none">{s.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mt-3">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Mission Identity</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Lead Negotiator</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Current Phase</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Asset Value</th>
              <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Control</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {globalPipelines.map((p, i) => (
              <tr key={i} className="group hover:bg-muted/30 transition-colors">
                <td className="px-8 py-6">
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">{p.org}</p>
                    <p className="text-[10px] font-bold text-muted-foreground/60 mt-1">{p.id} · {p.program}</p>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">
                      {p.lead.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-bold text-foreground/80">{p.lead}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary ring-1 ring-primary/20">{p.stage}</span>
                </td>
                <td className="px-8 py-6">
                  <p className="text-sm font-black text-emerald-500">{p.value}</p>
                </td>
                <td className="px-8 py-6 text-right">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
