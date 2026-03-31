"use client";

import { Button } from "@/components/ui/button";
import { Search, Filter, Clock, CheckCircle2, Handshake, AlertCircle } from "lucide-react";

const requests = [
  { id: "TRQ-2026-0044", program: "Satellite Data Processing", org: "Ghana Space Agency", status: "pending", date: "2026-03-25", trainees: 10, value: "$6,200" },
  { id: "TRQ-2026-0042", program: "Satellite Operations & Control", org: "Kenya Space Agency", status: "negotiation", date: "2026-03-15", trainees: 12, value: "$25,200" },
  { id: "TRQ-2026-0041", program: "Remote Sensing Advanced", org: "South Africa SANSA", status: "pending", date: "2026-03-12", trainees: 8, value: "$12,800" },
  { id: "TRQ-2026-0038", program: "Remote Sensing & GIS", org: "Nigerian NASRDA", status: "agreed", date: "2026-02-20", trainees: 15, value: "$18,500" },
  { id: "TRQ-2026-0035", program: "Mission Planning & Design", org: "Ethiopian Space Science", status: "active", date: "2026-01-10", trainees: 8, value: "$14,000" },
  { id: "TRQ-2025-0099", program: "Ground Station Engineering", org: "Rwanda Utilities Board", status: "completed", date: "2025-11-05", trainees: 6, value: "$9,800" },
  { id: "TRQ-2025-0092", program: "Satellite Assembly & Integration", org: "Uganda UNCST", status: "completed", date: "2025-09-20", trainees: 10, value: "$22,000" },
];

const statusConfig: Record<string, { label: string; style: string; icon: typeof Clock }> = {
  pending: { label: "Pending", style: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400", icon: Clock },
  negotiation: { label: "Negotiation", style: "bg-primary/10 text-primary", icon: Handshake },
  agreed: { label: "Agreed", style: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400", icon: CheckCircle2 },
  active: { label: "Active", style: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400", icon: AlertCircle },
  completed: { label: "Completed", style: "bg-muted text-muted-foreground", icon: CheckCircle2 },
};

export default function AdminRequests() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">All Requests</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and process training requests from all organizations</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search by ID, org, or program..." />
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
        {["All", "Pending", "Negotiation", "Active", "Completed"].map((f) => (
          <button
            type="button"
            key={f}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              f === "All" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Request ID</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Program</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Trainees</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Value</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {requests.map((req) => {
              const cfg = statusConfig[req.status];
              return (
                <tr key={req.id} className="hover:bg-muted/50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{req.id}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{req.program}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{req.org}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{req.trainees}</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{req.value}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.style}`}>{cfg.label}</span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-muted-foreground">{req.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
