"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight, ArrowRight } from "lucide-react";

const requests = [
  { id: "TRQ-2026-0044", program: "Satellite Data Processing", org: "Ghana Space Agency", status: "pending_dg", stage: "Awaiting DG Approval", date: "2026-03-25" },
  { id: "TRQ-2026-0046", program: "Ground Station Ops", org: "Tanzania Space Agency", status: "approved", stage: "DG Approved — Needs Assignment", date: "2026-03-28" },
  { id: "TRQ-2026-0042", program: "Satellite Operations & Control", org: "Kenya Space Agency", status: "negotiation", stage: "In Negotiation", date: "2026-03-15" },
  { id: "TRQ-2026-0041", program: "Remote Sensing Advanced", org: "South Africa SANSA", status: "approved", stage: "DG Approved — Needs Assignment", date: "2026-03-12" },
  { id: "TRQ-2026-0038", program: "Remote Sensing & GIS", org: "Nigerian NASRDA", status: "finalized", stage: "Agreement Signed", date: "2026-02-20" },
  { id: "TRQ-2026-0035", program: "Mission Planning & Design", org: "Ethiopian Space Science", status: "active", stage: "Training Active", date: "2026-01-10" },
];

const statusConfig: Record<string, { label: string; style: string }> = {
  pending_dg: { label: "Pending DG", style: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400" },
  approved: { label: "DG Approved", style: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400" },
  negotiation: { label: "Negotiation", style: "bg-primary/10 text-primary" },
  finalized: { label: "Finalized", style: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" },
  active: { label: "Active", style: "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400" },
};

export default function DirectorPipeline() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Pending DG", "DG Approved", "Negotiation", "Finalized", "Active"];

  const filtered = activeFilter === "All"
    ? requests
    : requests.filter((r) => statusConfig[r.status]?.label === activeFilter);

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Request Pipeline</h1>
        <p className="text-sm text-muted-foreground mt-1">Track every request through its full lifecycle</p>
      </div>

      {/* Pipeline stages */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {["Submitted", "DG Review", "Approved", "Staff Assigned", "Negotiation", "Agreement", "Deployment"].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-1">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary font-medium whitespace-nowrap">{s}</span>
              {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
            </span>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search requests..." />
        </div>
        {filters.map((f) => (
          <button
            type="button"
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              activeFilter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
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
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Stage</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((req) => {
              const cfg = statusConfig[req.status];
              return (
                <tr key={req.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{req.id}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{req.program}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{req.org}</td>
                  <td className="px-6 py-4 text-xs text-muted-foreground">{req.stage}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.style}`}>{cfg.label}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {req.status === "approved" && (
                      <Button variant="gold" size="sm" className="text-xs">Assign Staff</Button>
                    )}
                    {req.status === "negotiation" && (
                      <Button variant="outline" size="sm" className="text-xs">Monitor</Button>
                    )}
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
