"use client";

import { History, Search, Filter, ArrowUpRight, Clock, ShieldAlert, User, Database, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const systemLogs = [
  { id: "SYS-9901", action: "Role Reassignment", target: "Henok Girma", initiator: "System Admin", date: "Mar 30, 2026", time: "10:15", type: "update" },
  { id: "SYS-9895", action: "Security Policy Update", target: "Global Access", initiator: "System Admin", date: "Mar 29, 2026", time: "16:40", type: "security" },
  { id: "SYS-9882", action: "Mission Authorization", target: "TRQ-0046", initiator: "Prof. Solomon Belay", date: "Mar 28, 2026", time: "09:30", type: "approve" },
  { id: "SYS-9870", action: "Account Provisioned", target: "Dawit Kebede", initiator: "System Admin", date: "Mar 25, 2026", time: "11:20", type: "create" },
];

const typeIcons: Record<string, any> = {
  create: Database,
  update: Settings,
  approve: ShieldAlert,
  security: ShieldAlert,
};

export default function AuditTrailPage() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">System Audit Trail</h1>
          <p className="text-muted-foreground font-medium mt-2">Comprehensive log of all security, operational, and administrative events.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 rounded-2xl border-border/50 bg-muted/30 px-6 font-bold text-xs uppercase tracking-widest gap-2">
            <Filter className="h-4 w-4" /> Filter Events
          </Button>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="divide-y divide-border/50">
          {systemLogs.map((log) => {
            const Icon = typeIcons[log.type] || Clock;
            return (
              <div key={log.id} className="p-8 hover:bg-muted/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{log.id}</span>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{log.action}</span>
                      </div>
                      <h3 className="font-display text-lg font-black text-foreground tracking-tight">{log.target}</h3>
                      <p className="text-sm font-medium text-muted-foreground mt-1">Initiated by {log.initiator}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 border-l border-border/50 pl-8">
                    <div className="text-right">
                      <p className="text-sm font-black text-foreground leading-tight">{log.date}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{log.time} GMT</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                      <ArrowUpRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Button variant="ghost" className="w-full h-14 rounded-none text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary">Load Extended Archive</Button>
      </div>
    </div>
  );
}
