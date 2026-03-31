import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, Filter } from "lucide-react";
import { requests, statusConfig } from "@/lib/mock-data";

export default function Applications() {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Applications</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and track all your training requests</p>
        </div>
        <Button asChild variant="gold" size="sm">
          <Link href="/apply">+ New Application</Link>
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search applications..." />
        </div>
        <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
        {["All", "Pending", "Negotiation", "Active", "Completed"].map((f) => (
          <button type="button" key={f} className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${f === "All" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <div className="divide-y divide-border">
          {requests.map((req) => {
            const cfg = statusConfig[req.status];
            const StatusIcon = cfg.icon;
            return (
              <Link href={`/request/${req.id}`} key={req.id} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-muted/50">
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
