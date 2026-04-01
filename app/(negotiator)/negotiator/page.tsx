import { Handshake, MessageSquare, FileText, TrendingUp, Users } from "lucide-react";
import StaffAssignmentHub from "@/components/StaffAssignmentHub";

const myAssignments = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", role: 'negotiator' as const, status: "Cost Proposal Stage", lastUpdate: "2 hours ago" },
  { id: "TRQ-2026-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", role: 'negotiator' as const, status: "Initial Terms Review", lastUpdate: "1 day ago" },
];

export default function NegotiatorDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-5xl font-black text-white mb-2 leading-tight tracking-tighter uppercase italic">Lead Negotiator</h1>
        <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">Overseeing strategic training agreements and technical terms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Pipelines", value: "04", icon: Handshake },
          { label: "Pending Reviews", value: "02", icon: FileText },
          { label: "Partner Reach", value: "08", icon: Users },
        ].map((s) => (
          <div key={s.label} className="glass-card p-8 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 mb-6 group-hover:rotate-6 transition-transform">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="font-display text-4xl font-black text-foreground mb-1">{s.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-primary" />
          Mission Assignments
        </h2>
        <StaffAssignmentHub assignments={myAssignments} />
      </div>
    </div>
  );
}
