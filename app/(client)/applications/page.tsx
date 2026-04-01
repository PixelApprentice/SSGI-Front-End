import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, Filter, Calendar, Users, Clock, ArrowUpRight } from "lucide-react";
import { requests, statusConfig } from "@/lib/mock-data";

export default function Applications() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black tracking-tight text-foreground">Mission Requests</h1>
          <p className="text-muted-foreground font-medium mt-2">Monitor your organization&apos;s training pipeline and mission readiness.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              className="h-12 w-64 bg-muted/30 border border-border/50 rounded-2xl px-12 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search by mission ID..." 
            />
          </div>
          <Button variant="outline" className="h-12 w-12 rounded-2xl border-border/50 bg-muted/30 p-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {requests.map((req) => {
          const cfg = statusConfig[req.status];
          const StatusIcon = cfg.icon;
          return (
            <Link 
              href={`/request/${req.id}`} 
              key={req.id} 
              className="group block relative"
            >
              <div className="glass-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 group-hover:-translate-y-1 overflow-hidden">
                {/* Status Indicator */}
                <div className={cn(
                  "absolute top-0 left-0 w-1.5 h-full transition-all duration-500",
                  cfg.color.split(' ')[0].replace('bg-', 'bg-') // Simplified mapping
                )} />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:rotate-6">
                      <StatusIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{req.id}</span>
                        <div className={cn("inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest", cfg.color)}>
                          {req.status}
                        </div>
                      </div>
                      <h3 className="font-display text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">{req.program}</h3>
                      <p className="text-sm font-medium text-muted-foreground mt-1">{req.org}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:border-l lg:border-border/50 lg:pl-12">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Submission</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{req.date}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Stage</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{req.stage}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Trainees</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">12 Units</span>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary transition-colors">
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
