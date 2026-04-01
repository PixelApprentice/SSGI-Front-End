import { ShieldCheck, Clock, CheckCircle2, Users, ClipboardList } from "lucide-react";
import StaffAssignmentHub from "@/components/StaffAssignmentHub";

const myAssignments = [
  { id: "TRQ-2026-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", role: 'supervisor' as const, status: "Verifying Official Documents", lastUpdate: "3 hours ago" },
  { id: "TRQ-2026-0038", org: "Nigerian NASRDA", program: "Remote Sensing & GIS", role: 'supervisor' as const, status: "Ready for Execution", lastUpdate: "1 day ago" },
];

export default function SupervisorDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-5xl font-black text-white mb-2 leading-tight tracking-tighter uppercase italic">Operations Supervisor</h1>
        <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">Managing agreement oversight and mission readiness verification.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Oversight Missions", value: "05", icon: ShieldCheck },
          { label: "Pending Verification", value: "02", icon: Clock },
          { label: "Execution Ready", value: "01", icon: CheckCircle2 },
          { label: "Total Trainees", value: "43", icon: Users },
        ].map((s) => (
          <div key={s.label} className="glass-card p-8 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/20 mb-6 group-hover:rotate-6 transition-transform">
              <s.icon className="h-6 w-6 text-blue-500" />
            </div>
            <p className="font-display text-4xl font-black text-foreground mb-1">{s.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
          <ClipboardList className="h-5 w-5 text-blue-500" />
          Active Oversight Assignments
        </h2>
        <StaffAssignmentHub assignments={myAssignments} />
      </div>
    </div>
  );
}
