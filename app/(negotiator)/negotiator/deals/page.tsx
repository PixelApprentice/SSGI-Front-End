"use client";

import { Handshake, Search, Filter, ChevronRight, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const deals = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", stage: "Cost Proposal", value: "$25,200", lastActivity: "Client reviewing proposal", updated: "2 hours ago" },
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", stage: "Initial Terms", value: "$6,200", lastActivity: "Awaiting client response", updated: "1 day ago" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", stage: "TMA Draft", value: "$12,800", lastActivity: "TMA v2 sent for review", updated: "3 days ago" },
  { id: "TRQ-2026-0046", org: "Tanzania Space Agency", program: "Ground Station Ops", stage: "Scope Definition", value: "$18,000", lastActivity: "Defining training modules", updated: "5 hours ago" },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", program: "Remote Sensing & GIS", stage: "Final Review", value: "$12,400", lastActivity: "Agreement ready for signature", updated: "3 days ago" },
];

const stageColors: Record<string, string> = {
  "Scope Definition": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  "Initial Terms": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  "Cost Proposal": "bg-primary/10 text-primary",
  "TMA Draft": "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400",
  "Final Review": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
};

export default function NegotiatorDeals() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Active Deals</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and advance all active training negotiations</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search deals..." />
        </div>
        <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Request</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Negotiation Stage</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Value</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {deals.map((d) => (
              <tr key={d.id} className="hover:bg-muted/50 transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-foreground">{d.id}</p>
                  <p className="text-xs text-muted-foreground">{d.program}</p>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{d.org}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${stageColors[d.stage] || "bg-muted text-muted-foreground"}`}>
                    {d.stage}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-primary">{d.value}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><MessageSquare className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><FileText className="h-4 w-4" /></Button>
                    <ChevronRight className="h-4 w-4 text-muted-foreground self-center" />
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
