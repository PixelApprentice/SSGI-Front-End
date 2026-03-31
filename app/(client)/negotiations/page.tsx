import Link from "next/link";
import { Handshake, ChevronRight, CheckCircle2, Clock, MessageSquare } from "lucide-react";

const negotiations = [
  { id: "TRQ-2026-0042", program: "Satellite Operations & Control", round: 2, items: 3, approved: 1, pending: 1, review: 1, totalValue: "$8,700", lastUpdate: "2 hours ago", status: "active" },
  { id: "TRQ-2026-0038", program: "Remote Sensing & GIS", round: 3, items: 4, approved: 4, pending: 0, review: 0, totalValue: "$12,400", lastUpdate: "3 days ago", status: "completed" },
  { id: "TRQ-2026-0044", program: "Satellite Data Processing", round: 1, items: 2, approved: 0, pending: 2, review: 0, totalValue: "$4,200", lastUpdate: "1 day ago", status: "pending" },
];

const statusStyles: Record<string, string> = {
  active: "bg-primary/10 text-primary",
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
};

export default function Negotiations() {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Negotiations</h1>
        <p className="text-sm text-muted-foreground mt-1">Track pricing, terms, and agreement progress</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Active Negotiations", value: "1" },
          { label: "Pending Items", value: "3" },
          { label: "Approved Items", value: "5" },
          { label: "Total Value", value: "$25,300" },
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
            <Link key={neg.id} href={`/request/${neg.id}`} className="flex items-center justify-between px-6 py-5 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Handshake className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-foreground">{neg.id}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[neg.status]}`}>
                      Round {neg.round} · {neg.status.charAt(0).toUpperCase() + neg.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{neg.program}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 text-xs hidden md:flex">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="h-3 w-3" /> {neg.approved}</span>
                  <span className="flex items-center gap-1 text-primary"><Clock className="h-3 w-3" /> {neg.pending}</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><MessageSquare className="h-3 w-3" /> {neg.review}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{neg.totalValue}</p>
                  <p className="text-xs text-muted-foreground">{neg.lastUpdate}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
