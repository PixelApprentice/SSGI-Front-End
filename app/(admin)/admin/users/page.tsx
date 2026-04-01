"use client";

import { users } from "@/lib/mock-data";
import { Users, UserPlus, Shield, Search, Filter, ArrowUpRight, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminUserControl() {
  const internalUsers = users.filter(u => u.role !== 'client');

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">Identity Control</h1>
          <p className="text-muted-foreground font-medium mt-2">Manage internal system access and role-based permissions.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="gold" className="h-12 rounded-2xl px-8 font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 gap-2">
            <UserPlus className="h-4 w-4" /> Provision New Account
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Internal Nodes", value: internalUsers.length.toString(), icon: Shield, color: "text-primary", bg: "bg-primary/10" },
          { label: "Security Clearance Levels", value: "05", icon: Shield, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Pending Verification", value: "00", icon: Shield, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        ].map((s, i) => (
          <div key={i} className="glass-card p-8 group">
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-white/5 mb-6 group-hover:rotate-6 transition-transform", s.bg)}>
              <s.icon className={cn("h-6 w-6", s.color)} />
            </div>
            <p className="font-display text-4xl font-black text-foreground leading-none">{s.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mt-3">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Authorized Identity</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Access Level</th>
              <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Status</th>
              <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {internalUsers.map((u, i) => (
              <tr key={i} className="group hover:bg-muted/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-xs">
                      {u.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground leading-tight">{u.name}</p>
                      <p className="text-[10px] font-bold text-muted-foreground/60 mt-1">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary ring-1 ring-primary/20">{u.role}</span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Active Node</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-muted/50">
                    <MoreVertical className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
