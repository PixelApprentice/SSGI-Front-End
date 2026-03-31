"use client";

import { CheckCircle2, Clock, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Assigned Agreements", value: "5", icon: FileText },
  { label: "Pending Verification", value: "2", icon: Clock },
  { label: "Ready for Execution", value: "1", icon: CheckCircle2 },
  { label: "Active Trainees", value: "43", icon: Users },
];

const agreements = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", status: "verification", documents: "3/5 verified", trainees: 12 },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", program: "Remote Sensing & GIS", status: "ready", documents: "5/5 verified", trainees: 15 },
  { id: "TRQ-2026-0035", org: "Ethiopian Space Science", program: "Mission Planning & Design", status: "active", documents: "All complete", trainees: 8 },
  { id: "TRQ-2025-0099", org: "Rwanda Utilities Board", program: "Ground Station Engineering", status: "active", documents: "All complete", trainees: 6 },
  { id: "TRQ-2026-0040", org: "Sudan NRC", program: "Satellite Assembly", status: "verification", documents: "1/4 verified", trainees: 10 },
];

const statusConfig: Record<string, { label: string; style: string }> = {
  verification: { label: "Verifying", style: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400" },
  ready: { label: "Ready", style: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" },
  active: { label: "Active", style: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400" },
};

export default function SupervisorDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Supervisor Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Oversee finalized agreements and verify readiness</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="glass-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-display text-lg font-bold text-foreground">Assigned Agreements</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Request</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Program</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Documents</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Trainees</th>
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
                  <td className="px-6 py-4 text-sm text-foreground">{a.trainees}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.style}`}>{cfg.label}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {a.status === "verification" && <Button variant="gold" size="sm" className="text-xs">Verify Docs</Button>}
                    {a.status === "ready" && <Button variant="gold" size="sm" className="text-xs">Confirm Ready</Button>}
                    {a.status === "active" && <Button variant="outline" size="sm" className="text-xs">Monitor</Button>}
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
