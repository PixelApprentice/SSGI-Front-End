import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FileText,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Handshake,
  FileDown,
  ArrowLeftRight,
  Clock,
  Eye,
  AlertCircle,
  Send,
  Phone,
  Mail,
} from "lucide-react";

const milestones = [
  { label: "Submitted", date: "Mar 15, 2026", status: "completed" as const },
  { label: "Review", date: "Mar 18, 2026", status: "completed" as const },
  { label: "Negotiation", date: "Round 2 In Progress", status: "active" as const },
  { label: "Agreement", date: "Pending", status: "pending" as const },
  { label: "Deployment", date: "Upcoming", status: "pending" as const },
];

const negotiationItems = [
  { topic: "Curriculum Customization", description: "Fintech compliance tailoring (4 Weeks)", investment: "$5,000.00", status: "approved" as const },
  { topic: "On-site Logistics", description: "Hardware & Lab (5 Day setup)", investment: "$2,200.00", status: "pending" as const },
  { topic: "Official Certification", description: "SSGI Professional Seals", investment: "$1,500.00 / per", status: "review" as const },
];

const statusStyles: Record<string, string> = {
  approved: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  pending: "bg-primary/10 text-primary",
  review: "bg-muted text-muted-foreground",
};

const statusLabels: Record<string, { icon: any; text: string }> = {
  approved: { icon: CheckCircle2, text: "Approved" },
  pending: { icon: AlertCircle, text: "Pending" },
  review: { icon: Eye, text: "Review" },
};

export default function RequestDetail({ params }: { params: { id: string } }) {
  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link href="/dashboard" className="text-primary hover:underline uppercase tracking-wider text-xs font-medium">
          Dashboard
        </Link>
        <ChevronRight className="h-3 w-3 text-muted-foreground" />
        <span className="text-muted-foreground uppercase tracking-wider text-xs">Request Detail</span>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">{params.id}</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> Created Mar 15, 2026
            </span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Satellite Operations & Control</h1>
          <p className="text-muted-foreground mt-1">Kenya Space Agency — Training Status Monitor</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeftRight className="h-4 w-4" /> Switch Request
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <FileDown className="h-4 w-4" /> Export PDF
          </Button>
        </div>
      </div>

      {/* Milestone Timeline */}
      <div className="glass-card p-8 mb-8 overflow-x-auto">
        <div className="flex items-center justify-between mb-6 min-w-[600px]">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
            <span className="h-5 w-1 rounded bg-primary" />
            Milestone Tracking
          </h3>
          <span className="text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full px-3 py-1">
            Est. Completion: Jun 15, 2026
          </span>
        </div>

        <div className="flex items-center justify-between relative px-4 min-w-[600px]">
          <div className="absolute top-6 left-10 right-10 h-0.5 bg-border" />
          <div className="absolute top-6 left-10 h-0.5 bg-primary" style={{ width: "42%" }} />

          {milestones.map((m, i) => (
            <div key={m.label} className="relative z-10 flex flex-col items-center gap-2 w-32">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all",
                  m.status === "completed"
                    ? "border-primary bg-primary text-primary-foreground"
                    : m.status === "active"
                    ? "border-primary bg-primary/20 text-primary ring-4 ring-primary/20"
                    : "border-border bg-muted text-muted-foreground"
                )}
              >
                {m.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : m.status === "active" ? (
                  <Handshake className="h-5 w-5" />
                ) : i === 3 ? (
                  <FileText className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </div>
              <span className={cn(
                "text-xs font-bold uppercase tracking-wider",
                m.status === "active" ? "text-primary" : m.status === "completed" ? "text-foreground" : "text-muted-foreground"
              )}>
                {m.label}
              </span>
              <span className="text-[11px] text-muted-foreground text-center">{m.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Negotiation Hub */}
        <div className="lg:col-span-2">
          <div className="glass-card overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <Handshake className="h-5 w-5 text-primary" />
                Negotiation Hub
              </h3>
              <span className="rounded-full bg-foreground text-background text-xs font-bold px-3 py-1 uppercase tracking-wider">
                Round 2 Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Line Item / Topic</th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">Investment</th>
                    <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {negotiationItems.map((item) => {
                    const s = statusLabels[item.status];
                    const StatusIcon = s.icon;
                    return (
                      <tr key={item.topic} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-sm font-semibold text-foreground">{item.topic}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{item.investment}</td>
                        <td className="px-6 py-4 text-right">
                          <span className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                            statusStyles[item.status]
                          )}>
                            <StatusIcon className="h-3 w-3" />
                            {s.text}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between px-6 py-3 border-t border-border text-xs text-muted-foreground">
              <span>Last updated 2 hours ago by SSGI Admin</span>
              <button type="button" className="text-primary hover:underline font-medium">View History</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Account Manager */}
          <div className="glass-card p-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Account Manager</h4>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">SS</div>
              <div>
                <p className="text-sm font-semibold text-foreground">Sarah Sterling</p>
                <p className="text-xs text-muted-foreground">Senior Solutions Architect</p>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="gold" size="sm" className="w-full gap-2"><Phone className="h-3.5 w-3.5" /> Schedule Call</Button>
              <Button variant="outline" size="sm" className="w-full gap-2"><Mail className="h-3.5 w-3.5" /> Send Message</Button>
            </div>
          </div>

          {/* Request Summary */}
          <div className="glass-card p-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Request Summary</h4>
            <div className="space-y-3">
              {[
                { label: "Total Participants", value: "12 Seats" },
                { label: "Preferred Start", value: "Q2 2026" },
                { label: "Duration", value: "8 Weeks" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{row.label}</span>
                  <span className="text-sm font-semibold text-foreground">{row.value}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Est. Investment</span>
                <span className="text-lg font-bold text-primary">$25,200.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button type="button" className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold shadow-xl hover:opacity-90 transition-all">
        <MessageSquare className="h-5 w-5" /> Connect with Agent
      </button>
    </div>
  );
}
