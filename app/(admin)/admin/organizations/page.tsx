"use client";

import { Building2 } from "lucide-react";

const organizations = [
  { name: "Kenya Space Agency", country: "Kenya", type: "Government Agency", requests: 4, activeTraining: 1, totalTrainees: 32, status: "active" },
  { name: "Nigerian NASRDA", country: "Nigeria", type: "Government Agency", requests: 3, activeTraining: 1, totalTrainees: 28, status: "active" },
  { name: "Ethiopian Space Science", country: "Ethiopia", type: "Government Agency", requests: 2, activeTraining: 1, totalTrainees: 16, status: "active" },
  { name: "South Africa SANSA", country: "South Africa", type: "Government Agency", requests: 3, activeTraining: 0, totalTrainees: 22, status: "pending" },
  { name: "Ghana Space Agency", country: "Ghana", type: "Government Agency", requests: 1, activeTraining: 0, totalTrainees: 10, status: "new" },
  { name: "Rwanda Utilities Board", country: "Rwanda", type: "Public Utility", requests: 2, activeTraining: 0, totalTrainees: 12, status: "completed" },
  { name: "Uganda UNCST", country: "Uganda", type: "Government Agency", requests: 1, activeTraining: 0, totalTrainees: 10, status: "completed" },
  { name: "Tanzania Space Agency", country: "Tanzania", type: "Government Agency", requests: 2, activeTraining: 1, totalTrainees: 14, status: "active" },
];

const statusStyle: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  new: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  completed: "bg-muted text-muted-foreground",
};

export default function AdminOrganizations() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Organizations</h1>
        <p className="text-sm text-muted-foreground mt-1">Partner organizations and their training activity</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Organizations", value: "18" },
          { label: "Active Partners", value: "12" },
          { label: "Total Trainees", value: "342" },
          { label: "Countries", value: "14" },
        ].map((s) => (
          <div key={s.label} className="glass-card p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
            <p className="font-display text-2xl font-bold text-foreground mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Country</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Type</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Requests</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Trainees</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {organizations.map((org) => (
              <tr key={org.name} className="hover:bg-muted/50 transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{org.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{org.country}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{org.type}</td>
                <td className="px-6 py-4 text-sm text-foreground">{org.requests}</td>
                <td className="px-6 py-4 text-sm text-foreground">{org.totalTrainees}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyle[org.status]}`}>
                    {org.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
