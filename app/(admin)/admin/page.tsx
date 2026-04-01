import {
  FileText,
  Users,
  Handshake,
  GraduationCap,
  ArrowUpRight,
  TrendingUp,
  LayoutGrid,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Mission Requests", value: "24", icon: FileText, trend: "up", color: "text-primary", bg: "bg-primary/10" },
  { label: "Active Pipelines", value: "07", icon: Handshake, trend: "neutral", color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Partner Entities", value: "18", icon: Users, trend: "up", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Units in Training", value: "142", icon: GraduationCap, trend: "up", color: "text-amber-500", bg: "bg-amber-500/10" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-5xl font-black text-white mb-2 leading-tight tracking-tighter uppercase italic">System Overview</h1>
          <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">Administrator Hub — Enterprise-wide Training Metrics</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <LayoutGrid className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="glass-card p-8 group transition-all duration-500 hover:border-primary/30">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.bg} ring-1 ring-white/5 mb-6 group-hover:rotate-6 transition-transform`}>
              <s.icon className={`h-6 w-6 ${s.color}`} />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display text-4xl font-black text-foreground leading-none">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mt-3">{s.label}</p>
              </div>
              {s.trend === "up" && <ArrowUpRight className="h-5 w-5 text-emerald-500" />}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent Missions
            </h2>
            <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-primary">View Ledger</Button>
          </div>
          
          <div className="space-y-4">
            {[
              { id: "TRQ-0044", org: "Ghana Space Agency", program: "Satellite Data Processing", status: "Review", date: "Mar 25" },
              { id: "TRQ-0042", org: "Kenya Space Agency", program: "Satellite Operations & Control", status: "Negotiation", date: "Mar 15" },
              { id: "TRQ-0041", org: "South Africa SANSA", program: "Remote Sensing Advanced", status: "Pending", date: "Mar 12" },
            ].map((req) => (
              <div key={req.id} className="glass-card p-8 group transition-all duration-500 hover:border-primary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                      <FileText className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{req.id}</span>
                        <span className="px-3 py-0.5 rounded-full bg-primary/10 text-[8px] font-black uppercase tracking-widest text-primary">{req.status}</span>
                      </div>
                      <h3 className="font-display text-xl font-black text-foreground tracking-tight">{req.program}</h3>
                      <p className="text-sm font-medium text-muted-foreground mt-1">{req.org}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{req.date}</p>
                    <Button variant="ghost" size="icon" className="mt-2 rounded-xl hover:bg-muted/50 transition-all">
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Center */}
        <div className="space-y-6">
          <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
            <Bell className="h-5 w-5 text-primary" />
            Action Center
          </h2>
          <div className="glass-card divide-y divide-border/50">
            {[
              { title: "Technical Review Required", sub: "Ghana Space Agency Mission", time: "2h ago" },
              { title: "Cost Proposal Approval", sub: "TRQ-0042 Round 2", time: "5h ago" },
              { title: "Staffing Reassignment", sub: "Henok Girma (Negotiator)", time: "1d ago" },
            ].map((action, i) => (
              <div key={i} className="p-6 hover:bg-muted/30 transition-colors cursor-pointer group">
                <p className="text-xs font-bold text-foreground leading-relaxed group-hover:text-primary transition-colors">{action.title}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mt-3">{action.sub} · {action.time}</p>
              </div>
            ))}
            <Button variant="ghost" className="w-full h-14 rounded-none text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">Clear All Notifications</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
