"use client";

const staff = [
  { name: "Meseret Hailu", role: "Supervisor", active: 3, capacity: 5, expertise: "Remote Sensing, GIS", status: "available", requests: ["TRQ-2026-0038", "TRQ-2026-0035", "TRQ-2025-0099"] },
  { name: "Tigist Alemayehu", role: "Supervisor", active: 2, capacity: 5, expertise: "Satellite Ops, Mission Planning", status: "available", requests: ["TRQ-2026-0042", "TRQ-2026-0040"] },
  { name: "Dawit Kebede", role: "Negotiator", active: 4, capacity: 5, expertise: "Government Contracts", status: "busy", requests: ["TRQ-2026-0042", "TRQ-2026-0038", "TRQ-2026-0035", "TRQ-2026-0040"] },
  { name: "Henok Girma", role: "Negotiator", active: 5, capacity: 5, expertise: "International Agreements", status: "full", requests: ["TRQ-2026-0039", "TRQ-2026-0037", "TRQ-2026-0036", "TRQ-2025-0098", "TRQ-2025-0097"] },
  { name: "Sara Tekle", role: "Negotiator", active: 1, capacity: 5, expertise: "Technical Agreements", status: "available", requests: ["TRQ-2026-0041"] },
];

export default function DirectorStaff() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Staff Workload</h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor team capacity and active assignments</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { label: "Total Staff", value: staff.length.toString() },
          { label: "Available", value: staff.filter((s) => s.status === "available").length.toString() },
          { label: "Busy", value: staff.filter((s) => s.status === "busy").length.toString() },
          { label: "At Capacity", value: staff.filter((s) => s.status === "full").length.toString() },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {staff.map((s) => (
          <div key={s.name} className="glass-card p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                  {s.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.role} · {s.expertise}</p>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                s.status === "available" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                  : s.status === "busy" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                  : "bg-destructive/10 text-destructive"
              }`}>{s.status === "available" ? "Available" : s.status === "busy" ? "Busy" : "At Capacity"}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Workload</span>
                  <span className="text-xs font-medium text-foreground">{s.active}/{s.capacity}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full transition-all ${s.status === "full" ? "bg-destructive" : "bg-primary"}`}
                    style={{ width: `${(s.active / s.capacity) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Active Requests</p>
                <p className="text-xs text-foreground">{s.requests.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
