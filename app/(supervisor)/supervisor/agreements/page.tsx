"use client";

import { CheckCircle2, Clock, FileText, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const agreements = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", status: "verification", documents: "3/5 verified", trainees: 12, date: "2026-03-15" },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", program: "Remote Sensing & GIS", status: "ready", documents: "5/5 verified", trainees: 15, date: "2026-02-20" },
  { id: "TRQ-2026-0035", org: "Ethiopian Space Science", program: "Mission Planning & Design", status: "active", documents: "All complete", trainees: 8, date: "2026-01-10" },
  { id: "TRQ-2025-0099", org: "Rwanda Utilities Board", program: "Ground Station Engineering", status: "active", documents: "All complete", trainees: 6, date: "2025-11-05" },
  { id: "TRQ-2026-0040", org: "Sudan NRC", program: "Satellite Assembly", status: "verification", documents: "1/4 verified", trainees: 10, date: "2026-02-28" },
];

const statusConfig: Record<string, { label: string; style: string }> = {
  verification: { label: "Verifying", style: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400" },
  ready: { label: "Ready", style: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" },
  active: { label: "Active", style: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400" },
};

export default function SupervisorAgreements() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Technical Master Agreements</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and verify finalized agreements before execution</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search agreements..." />
        </div>
        <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Request</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Program</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Verification</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {agreements.map((a) => {
              const cfg = statusConfig[a.status];
              return (
                <tr key={a.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{a.id}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{a.program}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{a.org}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{a.documents}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.style}`}>{cfg.label}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="text-xs">View TMA</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
