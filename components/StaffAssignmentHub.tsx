"use client";

import { 
  Handshake, 
  MessageSquare, 
  FileText, 
  ClipboardCheck, 
  Users, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Assignment {
  id: string;
  org: string;
  program: string;
  role: 'supervisor' | 'negotiator' | 'none';
  status: string;
  lastUpdate: string;
}

interface StaffAssignmentHubProps {
  assignments: Assignment[];
}

export default function StaffAssignmentHub({ assignments }: StaffAssignmentHubProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 gap-6">
        {assignments.length === 0 ? (
          <div className="glass-card p-12 text-center flex flex-col items-center">
            <div className="h-16 w-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-6">
              <ClipboardCheck className="h-8 w-8 text-muted-foreground/40" />
            </div>
            <h3 className="font-display text-2xl font-black text-foreground mb-2 tracking-tight">No Active Assignments</h3>
            <p className="text-muted-foreground max-w-sm font-medium">
              You are currently in the standby pool. New missions will appear here once assigned by the Training Director.
            </p>
          </div>
        ) : (
          assignments.map((assignment) => (
            <div key={assignment.id} className="glass-card overflow-hidden group">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex items-start gap-6">
                    <div className={cn(
                      "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ring-1 transition-all group-hover:rotate-6",
                      assignment.role === 'supervisor' 
                        ? "bg-blue-500/10 ring-blue-500/20 text-blue-500" 
                        : "bg-primary/10 ring-primary/20 text-primary"
                    )}>
                      {assignment.role === 'supervisor' ? <ShieldCheck className="h-8 w-8" /> : <Handshake className="h-8 w-8" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{assignment.id}</span>
                        <div className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                          assignment.role === 'supervisor' ? "bg-blue-500/10 text-blue-500" : "bg-primary/10 text-primary"
                        )}>
                          {assignment.role}
                        </div>
                      </div>
                      <h3 className="font-display text-2xl font-black text-foreground tracking-tight">{assignment.program}</h3>
                      <p className="text-sm font-medium text-muted-foreground mt-1">{assignment.org}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 lg:border-l lg:border-border/50 lg:pl-12">
                    {/* Role Specific Actions */}
                    {assignment.role === 'negotiator' && (
                      <div className="flex items-center gap-3">
                        <Button variant="outline" className="h-12 rounded-xl px-6 font-bold text-xs uppercase tracking-widest gap-2">
                          <MessageSquare className="h-4 w-4" /> Comms
                        </Button>
                        <Button variant="gold" className="h-12 rounded-xl px-6 font-bold text-xs uppercase tracking-widest gap-2 shadow-lg shadow-primary/20">
                          <FileText className="h-4 w-4" /> Edit TMA
                        </Button>
                      </div>
                    )}

                    {assignment.role === 'supervisor' && (
                      <div className="flex items-center gap-3">
                        <Button variant="outline" className="h-12 rounded-xl px-6 font-bold text-xs uppercase tracking-widest gap-2">
                          <Users className="h-4 w-4" /> Trainees
                        </Button>
                        <Button variant="gold" className="h-12 rounded-xl px-6 font-bold text-xs uppercase tracking-widest gap-2 shadow-lg shadow-blue-500/20 bg-blue-500 hover:bg-blue-600 border-none">
                          <ShieldCheck className="h-4 w-4" /> Verify Readiness
                        </Button>
                      </div>
                    )}
                    
                    <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl text-muted-foreground hover:bg-muted/50">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 px-8 py-3 flex items-center justify-between border-t border-border/50">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Current State:</span>
                  <span className="text-xs font-bold text-foreground">{assignment.status}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <AlertCircle className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Last Activity: {assignment.lastUpdate}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
