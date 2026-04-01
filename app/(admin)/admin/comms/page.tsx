"use client";

import { MessageSquare, Search, Filter, ArrowUpRight, Clock, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const channels = [
  { id: "CH-001", mission: "TRQ-0042", entity: "Kenya Space Agency", lastMsg: "Technical terms approved by lead negotiator.", time: "2h ago", unread: true },
  { id: "CH-002", mission: "TRQ-0044", entity: "Ghana Space Agency", lastMsg: "Awaiting cost proposal revision.", time: "5h ago", unread: false },
  { id: "CH-003", mission: "TRQ-0038", entity: "Nigerian NASRDA", lastMsg: "Agreement signed by DG.", time: "1d ago", unread: false },
];

export default function AdminComms() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black text-foreground tracking-tight">System Channels</h1>
          <p className="text-muted-foreground font-medium mt-2">Active communication nodes for mission coordination and negotiation.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              className="h-12 w-64 bg-muted/30 border border-border/50 rounded-2xl px-12 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search channels..." 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {channels.map((ch) => (
            <div key={ch.id} className={cn(
              "glass-card p-6 cursor-pointer transition-all duration-300 border-l-4 hover:border-primary/40 hover:-translate-x-1",
              ch.unread ? "border-l-primary bg-primary/5" : "border-l-transparent"
            )}>
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">{ch.mission}</span>
                <span className="text-[10px] font-bold text-muted-foreground">{ch.time}</span>
              </div>
              <h3 className="font-display text-lg font-black text-foreground tracking-tight mb-1">{ch.entity}</h3>
              <p className="text-xs text-muted-foreground line-clamp-1">{ch.lastMsg}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 glass-card flex flex-col min-h-[600px]">
          <div className="p-6 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">KA</div>
              <div>
                <h3 className="font-display text-xl font-black text-foreground tracking-tight">Kenya Space Agency</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Mission Channel TRQ-0042</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-muted/50">
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
          
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="h-20 w-20 rounded-3xl bg-muted flex items-center justify-center mb-6">
              <MessageSquare className="h-10 w-10 text-muted-foreground/40" />
            </div>
            <h3 className="font-display text-2xl font-black text-foreground tracking-tight mb-2">Secure Message Node</h3>
            <p className="text-muted-foreground max-w-sm font-medium">Select a channel to view mission intelligence and participate in technical negotiations.</p>
          </div>

          <div className="p-6 border-t border-border/50">
            <div className="relative group">
              <input 
                disabled
                className="h-14 w-full bg-muted/30 border border-border/50 rounded-2xl px-6 pr-16 text-sm font-medium outline-none opacity-50" 
                placeholder="Initialize secure transmission..." 
              />
              <Button disabled variant="gold" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl opacity-50">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
