"use client";

import { FileCheck, Shield, Clock, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const agreements = [
  { id: "TMA-2026-001", org: "Kenya Space Agency", program: "Satellite Ops", signedDate: "2026-03-15", value: "$25,200", status: "signed" },
  { id: "TMA-2026-002", org: "Nigerian NASRDA", program: "Remote Sensing", signedDate: "2026-02-20", value: "$18,500", status: "signed" },
  { id: "TMA-2026-003", org: "Ethiopian Space Science", program: "Mission Planning", signedDate: "Pending", value: "$14,000", status: "awaiting_signature" },
  { id: "TMA-2025-012", org: "Rwanda Utilities Board", program: "Ground Station", signedDate: "2025-11-05", value: "$9,800", status: "archived" },
];

const statusStyles: Record<string, string> = {
  signed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  awaiting_signature: "bg-primary/10 text-primary",
  archived: "bg-muted text-muted-foreground",
};

export default function DGAgreements() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Executive Agreements</h1>
        <p className="text-sm text-muted-foreground mt-1">Review and manage all signed Technical Master Agreements</p>
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
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Agreement ID</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Signed Date</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Value</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {agreements.map((a) => (
              <tr key={a.id} className="hover:bg-muted/50 transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{a.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{a.org}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{a.signedDate}</td>
                <td className="px-6 py-4 text-sm font-bold text-primary">{a.value}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[a.status]}`}>
                    {a.status.replace("_", " ").charAt(0).toUpperCase() + a.status.replace("_", " ").slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="sm" className="text-xs">View Document</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
