"use client";

import { Handshake, ChevronRight, CheckCircle2, Clock, MessageSquare } from "lucide-react";

const negotiations = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", round: 2, approved: 1, pending: 1, review: 1, value: "$25,200", updated: "2 hours ago", status: "active" },
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", round: 1, approved: 0, pending: 2, review: 0, value: "$6,200", updated: "1 day ago", status: "pending" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", round: 1, approved: 0, pending: 3, review: 0, value: "$12,800", updated: "3 days ago", status: "pending" },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", program: "Remote Sensing & GIS", round: 3, approved: 4, pending: 0, review: 0, value: "$18,500", updated: "1 week ago", status: "completed" },
];

const statusStyles: Record<string, string> = {
  active: "bg-primary/10 text-primary",
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
};

export default function AdminNegotiations() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Negotiations</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage pricing, terms, and agreements across all organizations</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Negotiations", value: "3" },
          { label: "Pending Items", value: "6" },
          { label: "Approved Items", value: "5" },
          { label: "Total Pipeline Value", value: "$62,700" },
        ].map((s) => (
          <div key={s.label} className="glass-card p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
            <p className="font-display text-2xl font-bold text-foreground mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-display text-lg font-bold text-foreground">Negotiation Rounds</h3>
        </div>
        <div className="divide-y divide-border">
          {negotiations.map((neg) => (
            <div key={neg.id} className="flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Handshake className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-foreground">{neg.id}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[neg.status]}`}>
                      Round {neg.round}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{neg.org} — {neg.program}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" /> {neg.approved}
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    <Clock className="h-3 w-3" /> {neg.pending}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MessageSquare className="h-3 w-3" /> {neg.review}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{neg.value}</p>
                  <p className="text-xs text-muted-foreground">{neg.updated}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
