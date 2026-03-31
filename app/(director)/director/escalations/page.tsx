"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Bell, Clock, Send } from "lucide-react";

const escalations = [
  { id: 1, type: "delay", title: "DG Approval Overdue — TRQ-2026-0039", description: "Request from Mozambique Space Agency has been pending DG approval for 7 days. Exceeds 5-day SLA.", target: "DG", time: "2 hours ago", severity: "high" },
  { id: 2, type: "capacity", title: "Negotiator at Full Capacity", description: "Henok Girma has reached 5/5 active requests. New assignments require reassignment or capacity increase.", target: "Internal", time: "1 day ago", severity: "medium" },
  { id: 3, type: "bottleneck", title: "Client Unresponsive — TRQ-2026-0036", description: "Zambia Space Programme has not responded to negotiation terms for 10 days. Escalation to DG recommended.", target: "DG", time: "3 days ago", severity: "high" },
  { id: 4, type: "delay", title: "Document Verification Pending — TRQ-2026-0040", description: "Supervisor Tigist has flagged missing prerequisites documentation from Sudan NRC.", target: "Supervisor", time: "4 days ago", severity: "low" },
];

export default function DirectorEscalations() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Escalations & Alerts</h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor delays, bottlenecks, and pending approvals</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Active Escalations", value: escalations.length.toString(), icon: AlertTriangle },
          { label: "Pending DG Action", value: "2", icon: Clock },
          { label: "Reminders Sent", value: "5", icon: Send },
        ].map((s) => (
          <div key={s.label} className="glass-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {escalations.map((e) => (
          <div key={e.id} className={`glass-card p-6 border-l-4 ${
            e.severity === "high" ? "border-l-destructive" : e.severity === "medium" ? "border-l-amber-500" : "border-l-blue-500"
          }`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className={`h-4 w-4 ${e.severity === "high" ? "text-destructive" : "text-amber-500"}`} />
                  <h3 className="text-sm font-semibold text-foreground">{e.title}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                    e.severity === "high" ? "bg-destructive/10 text-destructive"
                      : e.severity === "medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400"
                  }`}>{e.severity}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{e.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span>Target: <strong className="text-foreground">{e.target}</strong></span>
                  <span>{e.time}</span>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <Button variant="gold" size="sm" className="text-xs">
                  <Bell className="mr-1 h-3 w-3" /> Send Reminder
                </Button>
                <Button variant="outline" size="sm" className="text-xs">Resolve</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
