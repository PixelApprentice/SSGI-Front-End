"use client";

import { documents } from "@/lib/mock-data";
import { FileText, Download, Eye, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminAgreements() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">System Ledger</h1>
          <p className="text-muted-foreground font-medium mt-2">Global repository of all Technical Master Agreements and mission protocols.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              className="h-12 w-64 bg-muted/30 border border-border/50 rounded-2xl px-12 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Filter archives..." 
            />
          </div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Asset Identity</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Protocol Type</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Integrity Status</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Filing Date</th>
              <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Control</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {documents.map((doc, i) => (
              <tr key={i} className="group hover:bg-muted/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground leading-tight">{doc.name}</p>
                      <p className="text-[10px] font-bold text-muted-foreground/60 mt-1">{doc.size}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 rounded-full bg-muted text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">{doc.type}</span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className={cn(
                      "h-4 w-4",
                      doc.status === 'approved' ? "text-emerald-500" : "text-amber-500"
                    )} />
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      doc.status === 'approved' ? "text-emerald-500" : "text-amber-500"
                    )}>{doc.status.replace('_', ' ')}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <p className="text-sm font-bold text-muted-foreground">{doc.date}</p>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                      <Eye className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
