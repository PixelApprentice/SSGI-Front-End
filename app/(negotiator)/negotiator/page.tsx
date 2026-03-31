"use client";

import { Handshake, MessageSquare, FileText, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Active Deals", value: "4", icon: Handshake },
  { label: "Pending Responses", value: "2", icon: MessageSquare },
  { label: "TMA Drafts", value: "3", icon: FileText },
  { label: "Total Value", value: "$68K", icon: DollarSign },
];

const deals = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", stage: "Cost Proposal", value: "$25,200", lastActivity: "Client reviewing proposal", updated: "2 hours ago" },
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", stage: "Initial Terms", value: "$6,200", lastActivity: "Awaiting client response", updated: "1 day ago" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", stage: "TMA Draft", value: "$12,800", lastActivity: "TMA v2 sent for review", updated: "3 days ago" },
  { id: "TRQ-2026-0046", org: "Tanzania Space Agency", program: "Ground Station Ops", stage: "Scope Definition", value: "$18,000", lastActivity: "Defining training modules", updated: "5 hours ago" },
];

const stageColors: Record<string, string> = {
  "Scope Definition": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  "Initial Terms": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  "Cost Proposal": "bg-primary/10 text-primary",
  "TMA Draft": "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400",
  "Final Review": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
};

export default function NegotiatorDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Negotiator Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage pricing, scope, and client communications</p>
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
          <h3 className="font-display text-lg font-bold text-foreground">Active Negotiations</h3>
        </div>
        <div className="divide-y divide-border">
          {deals.map((d) => (
            <div key={d.id} className="px-6 py-5 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">{d.id}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${stageColors[d.stage] || "bg-muted text-muted-foreground"}`}>
                    {d.stage}
                  </span>
                </div>
                <span className="text-sm font-bold text-primary">{d.value}</span>
              </div>
              <p className="text-sm text-foreground">{d.program} — {d.org}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-muted-foreground">{d.lastActivity} · {d.updated}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs gap-1">
                    <MessageSquare className="h-3 w-3" /> Chat
                  </Button>
                  <Button variant="gold" size="sm" className="text-xs gap-1">
                    <FileText className="h-3 w-3" /> TMA
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
