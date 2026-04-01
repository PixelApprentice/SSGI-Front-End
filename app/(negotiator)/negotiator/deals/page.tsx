"use client";

import { Handshake, MessageSquare, FileText, Download, Upload, Search, Filter, ArrowUpRight, ShieldCheck, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const deals = [
  { id: "TRQ-0042", org: "Kenya Space Agency", program: "Satellite Operations", stage: "TMA Review", lastActivity: "2h ago", value: "$25K" },
  { id: "TRQ-0044", org: "Ghana Space Agency", program: "Data Processing", stage: "Drafting", lastActivity: "1d ago", value: "$12K" },
];

const attachments = [
  { name: "Technical_Requirements_v1.pdf", size: "2.4MB", date: "Mar 28", user: "Client" },
  { name: "SSGI_Standard_Terms.docx", size: "1.1MB", date: "Mar 25", user: "Negotiator" },
];

export default function NegotiatorDeals() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Active Pipelines</h1>
          <p className="text-muted-foreground font-medium mt-2">Manage technical master agreements and financial protocols.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="gold" className="h-12 rounded-2xl px-8 font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 gap-2">
            <Upload className="h-4 w-4" /> Initialize New Draft
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
            <Handshake className="h-5 w-5 text-primary" />
            Mission Pipelines
          </h2>
          <div className="space-y-4">
            {deals.map((deal) => (
              <div key={deal.id} className="glass-card p-8 group transition-all duration-500 hover:border-primary/40">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{deal.id}</span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-[8px] font-black uppercase tracking-widest text-primary">{deal.stage}</span>
                      </div>
                      <h3 className="font-display text-xl font-black text-foreground tracking-tight">{deal.program}</h3>
                      <p className="text-sm font-medium text-muted-foreground mt-1">{deal.org} · {deal.value}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-border/50 hover:bg-muted/50 transition-all">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    </Button>
                    <Button variant="gold" className="h-11 rounded-xl px-6 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">Edit TMA</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
            <Paperclip className="h-5 w-5 text-primary" />
            Intel Repository
          </h2>
          <div className="glass-card overflow-hidden">
            <div className="p-6 bg-muted/30 border-b border-border/50">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Mission Assets</p>
            </div>
            <div className="divide-y divide-border/50">
              {attachments.map((file, i) => (
                <div key={i} className="p-6 hover:bg-muted/30 transition-colors group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground leading-tight truncate">{file.name}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-1">{file.size} · {file.user} · {file.date}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-muted/30">
              <Button variant="outline" className="w-full h-12 rounded-xl border-dashed border-border/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
                <Upload className="h-4 w-4 mr-2" /> Upload Protocol
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
