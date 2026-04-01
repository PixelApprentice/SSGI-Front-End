import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Users, BookOpen, Calendar, CheckCircle2, User, Zap, Activity } from "lucide-react";

const activeTraining = {
  id: "TRQ-0035",
  program: "Mission Planning & Design",
  org: "Ethiopian Space Science",
  progress: 65,
  startDate: "Jan 10, 2026",
  endDate: "Mar 10, 2026",
  totalTrainees: 8,
  completedModules: 5,
  totalModules: 8,
};

const instructors = [
  { name: "Dr. Amara Chen", role: "Lead Instructor", specialty: "Orbital Mechanics", avatar: "AC" },
  { name: "Prof. Kwame Asante", role: "Technical Mentor", specialty: "Mission Analysis", avatar: "KA" },
];

const modules = [
  { name: "Introduction to Mission Planning", status: "completed" },
  { name: "Orbital Dynamics Fundamentals", status: "completed" },
  { name: "Launch Window Analysis", status: "completed" },
  { name: "Trajectory Optimization", status: "completed" },
  { name: "Ground Segment Integration", status: "completed" },
  { name: "Mission Risk Assessment", status: "in_progress" },
  { name: "End-to-End Mission Simulation", status: "upcoming" },
];

export default function Training() {
  return (
    <div className="animate-fade-in space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black tracking-tight text-foreground">Mission Academy</h1>
          <p className="text-muted-foreground font-medium mt-2">Active training deployments and curriculum progress.</p>
        </div>
        <Button variant="gold" className="h-12 rounded-2xl px-8 font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
          Download Program Syllabus
        </Button>
      </div>

      {/* Hero Training Card */}
      <div className="glass-card relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32 blur-3xl transition-all group-hover:bg-primary/10" />
        
        <div className="p-10 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{activeTraining.id}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary ring-1 ring-primary/20">Mission Active</span>
              </div>
              <div>
                <h2 className="font-display text-4xl font-black text-foreground tracking-tight">{activeTraining.program}</h2>
                <p className="text-lg font-medium text-muted-foreground mt-2">{activeTraining.org}</p>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Timeline</span>
                  <span className="text-sm font-bold text-foreground">{activeTraining.startDate} — {activeTraining.endDate}</span>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Enrollment</span>
                  <span className="text-sm font-bold text-foreground">{activeTraining.totalTrainees} Personnel</span>
                </div>
              </div>
            </div>

            <div className="lg:w-80 space-y-6">
              <div className="flex items-end justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Deployment Progress</p>
                <span className="font-display text-3xl font-black gold-text">{activeTraining.progress}%</span>
              </div>
              <div className="relative h-3 w-full bg-muted/50 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                  style={{ width: `${activeTraining.progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <span>{activeTraining.completedModules} Modules Completed</span>
                <span>{activeTraining.totalModules - activeTraining.completedModules} Remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Curriculum List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary" />
            Strategic Curriculum
          </h2>
          <div className="glass-card divide-y divide-border/50 overflow-hidden">
            {modules.map((mod, i) => (
              <div key={mod.name} className="p-6 flex items-center gap-6 group hover:bg-muted/30 transition-colors">
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 transition-all",
                  mod.status === "completed" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" :
                  mod.status === "in_progress" ? "bg-primary/10 border-primary/20 text-primary animate-pulse" :
                  "bg-muted border-border/50 text-muted-foreground"
                )}>
                  {mod.status === "completed" ? <CheckCircle2 className="h-5 w-5" /> : <span className="text-xs font-black">{i + 1}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn("text-sm font-bold tracking-tight", mod.status === 'upcoming' ? "text-muted-foreground" : "text-foreground")}>
                    {mod.name}
                  </p>
                </div>
                <div className={cn(
                  "text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full",
                  mod.status === "completed" ? "bg-emerald-500/10 text-emerald-500" :
                  mod.status === "in_progress" ? "bg-primary/10 text-primary" :
                  "bg-muted text-muted-foreground"
                )}>
                  {mod.status.replace('_', ' ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors & Support */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="font-display text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              Mission Support
            </h2>
            <div className="glass-card p-8 space-y-8">
              {instructors.map((inst) => (
                <div key={inst.name} className="flex items-center gap-5">
                  <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 font-black text-primary text-sm shadow-inner">
                    {inst.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-black text-foreground leading-tight">{inst.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">{inst.role}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-0.5">{inst.specialty}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-border/50">
                <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border-border/50 hover:bg-muted/50">
                  Contact Technical Mentor
                </Button>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 bg-primary/5 border-primary/20">
            <Zap className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg font-black text-foreground tracking-tight mb-2">Certification Eligibility</h3>
            <p className="text-xs font-medium text-muted-foreground leading-relaxed">
              Complete the End-to-End Mission Simulation to unlock final certification protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
