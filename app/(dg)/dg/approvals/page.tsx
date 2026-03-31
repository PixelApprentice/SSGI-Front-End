"use client";

import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Eye, Clock } from "lucide-react";

const approvals = [
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", trainees: 10, value: "$6,200", submitted: "2026-03-25", days: 6, summary: "10 engineers for 6-week satellite data processing program. Standard government rate applies." },
  { id: "TRQ-2026-0047", org: "Cameroon Space Agency", program: "Remote Sensing Basics", trainees: 15, value: "$8,500", submitted: "2026-03-27", days: 4, summary: "15 technicians for introductory remote sensing. Includes lab equipment allocation." },
  { id: "TRQ-2026-0048", org: "Senegal ASAL", program: "GIS & Mapping", trainees: 8, value: "$5,100", submitted: "2026-03-28", days: 3, summary: "8 GIS analysts for advanced mapping certification. Virtual delivery requested." },
  { id: "TRQ-2026-0049", org: "Côte d'Ivoire SODEXAM", program: "Weather Satellite Ops", trainees: 12, value: "$9,800", submitted: "2026-03-30", days: 1, summary: "12 meteorological officers for weather satellite operations training." },
];

const history = [
  { id: "TRQ-2026-0046", org: "Tanzania Space Agency", decision: "approved", date: "2026-03-28", by: "Prof. Solomon Belay" },
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", decision: "approved", date: "2026-03-15", by: "Prof. Solomon Belay" },
  { id: "TRQ-2026-0043", org: "Algeria ASAL", decision: "rejected", date: "2026-03-10", by: "Prof. Solomon Belay" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", decision: "approved", date: "2026-03-12", by: "Prof. Solomon Belay" },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", decision: "approved", date: "2026-02-20", by: "Prof. Solomon Belay" },
];

export default function DGApprovals() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Approval Queue</h1>
        <p className="text-sm text-muted-foreground mt-1">Review and approve/reject incoming training requests</p>
      </div>

      {/* Pending */}
      <div className="space-y-4 mb-10">
        {approvals.map((req) => (
          <div key={req.id} className={`glass-card p-6 ${req.days >= 5 ? "border-l-4 border-l-destructive" : ""}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-foreground">{req.id}</span>
                  <span className="rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400 px-2.5 py-0.5 text-xs font-medium">
                    <Clock className="inline h-3 w-3 mr-1" />{req.days}d pending
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{req.program} — {req.org}</p>
                <p className="text-sm text-muted-foreground mt-1">{req.summary}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span>{req.trainees} trainees</span>
                  <span>Value: {req.value}</span>
                  <span>Submitted: {req.submitted}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 ml-6">
                <Button variant="gold" size="sm" className="text-xs gap-1">
                  <ThumbsUp className="h-3 w-3" /> Approve
                </Button>
                <Button variant="outline" size="sm" className="text-xs gap-1">
                  <ThumbsDown className="h-3 w-3" /> Reject
                </Button>
                <Button variant="ghost" size="sm" className="text-xs gap-1">
                  <Eye className="h-3 w-3" /> Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* History */}
      <h3 className="font-display text-lg font-bold text-foreground mb-4">Decision History</h3>
      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Request</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Decision</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">By</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {history.map((h) => (
              <tr key={h.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-foreground">{h.id}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{h.org}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    h.decision === "approved"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                      : "bg-destructive/10 text-destructive"
                  }`}>
                    {h.decision === "approved" ? "Approved" : "Rejected"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-foreground">{h.by}</td>
                <td className="px-6 py-4 text-right text-sm text-muted-foreground">{h.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
