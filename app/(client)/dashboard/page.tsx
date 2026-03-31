import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { requests, statusConfig } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      {/* Quick Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Requests", value: "5", sub: "2 active" },
          { label: "In Negotiation", value: "1", sub: "Technical review" },
          { label: "Active Training", value: "1", sub: "In progress" },
          { label: "Completed", value: "1", sub: "Certified" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Requests Table */}
      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-lg font-bold text-foreground">Training Requests</h2>
          <Button asChild variant="gold" size="sm">
            <Link href="/apply">New Request</Link>
          </Button>
        </div>
        <div className="divide-y divide-border">
          {requests.map((req) => {
            const cfg = statusConfig[req.status];
            const StatusIcon = cfg.icon;
            return (
              <Link
                href={`/request/${req.id}`}
                key={req.id}
                className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-muted/50 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <StatusIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">{req.id}</span>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.color}`}>
                        {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{req.program} — {req.org}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{req.stage}</p>
                    <p className="text-xs text-muted-foreground">{req.date}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
