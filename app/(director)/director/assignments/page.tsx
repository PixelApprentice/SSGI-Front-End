"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCheck, AlertTriangle } from "lucide-react";

const unassigned = [
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", trainees: 10, priority: "high" },
  { id: "TRQ-2026-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", trainees: 8, priority: "high" },
  { id: "TRQ-2026-0046", org: "Tanzania Space Agency", program: "Ground Station Ops", trainees: 12, priority: "medium" },
];

const supervisors = [
  { id: "sup1", name: "Meseret Hailu", expertise: "Remote Sensing, GIS", load: 3, capacity: 5 },
  { id: "sup2", name: "Tigist Alemayehu", expertise: "Satellite Ops, Mission Planning", load: 2, capacity: 5 },
];

const negotiators = [
  { id: "neg1", name: "Dawit Kebede", expertise: "Government Contracts", load: 4, capacity: 5 },
  { id: "neg2", name: "Henok Girma", expertise: "International Agreements", load: 5, capacity: 5 },
  { id: "neg3", name: "Sara Tekle", expertise: "Technical Agreements", load: 1, capacity: 5 },
];

const recentAssignments = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", supervisor: "Tigist Alemayehu", negotiator: "Dawit Kebede", date: "2026-03-16" },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", supervisor: "Meseret Hailu", negotiator: "Henok Girma", date: "2026-02-21" },
  { id: "TRQ-2026-0035", org: "Ethiopian Space Science", supervisor: "Meseret Hailu", negotiator: "Dawit Kebede", date: "2026-01-11" },
];

export default function DirectorAssignments() {
  const [selections, setSelections] = useState<Record<string, { supervisor: string; negotiator: string }>>({});

  const updateSelection = (reqId: string, field: "supervisor" | "negotiator", value: string) => {
    setSelections((prev) => ({
      ...prev,
      [reqId]: { ...prev[reqId], [field]: value },
    }));
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Staff Assignments</h1>
        <p className="text-sm text-muted-foreground mt-1">Assign supervisors and negotiators to approved requests</p>
      </div>

      {/* Unassigned Requests */}
      <div className="glass-card overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-border flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <h3 className="font-display text-base font-bold text-foreground">Awaiting Assignment ({unassigned.length})</h3>
        </div>
        <div className="divide-y divide-border">
          {unassigned.map((req) => (
            <div key={req.id} className="px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{req.id}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                      req.priority === "high" ? "bg-destructive/10 text-destructive" : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                    }`}>{req.priority}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{req.program} — {req.org} · {req.trainees} trainees</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 items-end">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Supervisor</label>
                  <Select value={selections[req.id]?.supervisor || ""} onValueChange={(v) => updateSelection(req.id, "supervisor", v)}>
                    <SelectTrigger className="border-border bg-card">
                      <SelectValue placeholder="Select supervisor" />
                    </SelectTrigger>
                    <SelectContent>
                      {supervisors.map((s) => (
                        <SelectItem key={s.id} value={s.id} disabled={s.load >= s.capacity}>
                          {s.name} ({s.load}/{s.capacity}) — {s.expertise}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Negotiator</label>
                  <Select value={selections[req.id]?.negotiator || ""} onValueChange={(v) => updateSelection(req.id, "negotiator", v)}>
                    <SelectTrigger className="border-border bg-card">
                      <SelectValue placeholder="Select negotiator" />
                    </SelectTrigger>
                    <SelectContent>
                      {negotiators.map((n) => (
                        <SelectItem key={n.id} value={n.id} disabled={n.load >= n.capacity}>
                          {n.name} ({n.load}/{n.capacity}) — {n.expertise}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="gold" className="w-full">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Confirm Assignment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Assignments */}
      <div className="glass-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-display text-base font-bold text-foreground">Recent Assignments</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Request</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Supervisor</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Negotiator</th>
              <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Assigned</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {recentAssignments.map((a) => (
              <tr key={a.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-foreground">{a.id}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{a.org}</td>
                <td className="px-6 py-4 text-sm text-foreground">{a.supervisor}</td>
                <td className="px-6 py-4 text-sm text-foreground">{a.negotiator}</td>
                <td className="px-6 py-4 text-right text-sm text-muted-foreground">{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
