import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Users, BookOpen, Calendar, CheckCircle2, User } from "lucide-react";

const activeTraining = {
  id: "TRQ-2026-0035",
  program: "Mission Planning & Design",
  org: "Ethiopian Space Science",
  progress: 65,
  startDate: "2026-01-10",
  endDate: "2026-03-10",
  totalTrainees: 8,
  completedModules: 5,
  totalModules: 8,
};

const instructors = [
  { name: "Dr. Amara Chen", role: "Lead Instructor", specialty: "Orbital Mechanics", avatar: "AC" },
  { name: "Prof. Kwame Asante", role: "Technical Mentor", specialty: "Mission Analysis", avatar: "KA" },
];

const trainees = [
  { name: "Tadesse Bekele", status: "on_track", progress: 72 },
  { name: "Hirut Alemayehu", status: "on_track", progress: 68 },
  { name: "Dawit Gebremedhin", status: "ahead", progress: 85 },
  { name: "Meron Tadesse", status: "on_track", progress: 60 },
  { name: "Yonas Haile", status: "behind", progress: 45 },
  { name: "Bethlehem Assefa", status: "on_track", progress: 70 },
];

const modules = [
  { name: "Introduction to Mission Planning", status: "completed" },
  { name: "Orbital Dynamics Fundamentals", status: "completed" },
  { name: "Launch Window Analysis", status: "completed" },
  { name: "Trajectory Optimization", status: "completed" },
  { name: "Ground Segment Integration", status: "completed" },
  { name: "Mission Risk Assessment", status: "in_progress" },
  { name: "End-to-End Mission Simulation", status: "upcoming" },
  { name: "Final Certification Exam", status: "upcoming" },
];

const statusColors: Record<string, string> = {
  on_track: "text-emerald-600 dark:text-emerald-400",
  ahead: "text-primary",
  behind: "text-destructive",
};

export default function Training() {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Active Training</h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor deployment progress, trainees, and curriculum</p>
      </div>

      {/* Training Header */}
      <div className="glass-card p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">{activeTraining.id}</span>
              <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 px-2.5 py-0.5 text-xs font-medium">In Progress</span>
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">{activeTraining.program}</h2>
            <p className="text-sm text-muted-foreground">{activeTraining.org}</p>
          </div>
          <Button variant="gold" size="sm">Export Report</Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, label: "Duration", value: `${activeTraining.startDate} → ${activeTraining.endDate}` },
            { icon: Users, label: "Trainees", value: `${activeTraining.totalTrainees} Enrolled` },
            { icon: BookOpen, label: "Modules", value: `${activeTraining.completedModules}/${activeTraining.totalModules} Completed` },
            { icon: GraduationCap, label: "Progress", value: `${activeTraining.progress}%` },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-semibold text-foreground">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Progress value={activeTraining.progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Curriculum */}
        <div className="lg:col-span-2 glass-card overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-display text-lg font-bold text-foreground">Curriculum Modules</h3>
          </div>
          <div className="divide-y divide-border">
            {modules.map((mod, i) => (
              <div key={mod.name} className="flex items-center gap-4 px-6 py-3.5">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                  mod.status === "completed"
                    ? "border-emerald-500 bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                    : mod.status === "in_progress"
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-border bg-muted text-muted-foreground"
                }`}>
                  {mod.status === "completed" ? <CheckCircle2 className="h-4 w-4" /> : <span className="text-xs font-bold">{i + 1}</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${mod.status === "upcoming" ? "text-muted-foreground" : "text-foreground"}`}>{mod.name}</p>
                </div>
                <span className={`text-xs font-medium capitalize ${
                  mod.status === "completed" ? "text-emerald-600 dark:text-emerald-400" : mod.status === "in_progress" ? "text-primary" : "text-muted-foreground"
                }`}>
                  {mod.status.replace("_", " ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="glass-card p-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Instructors</h4>
            <div className="space-y-4">
              {instructors.map((inst) => (
                <div key={inst.name} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">{inst.avatar}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{inst.name}</p>
                    <p className="text-xs text-muted-foreground">{inst.role} · {inst.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Trainee Progress</h4>
            <div className="space-y-3">
              {trainees.map((t) => (
                <div key={t.name} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-medium text-foreground truncate">{t.name}</p>
                      <span className={`text-xs font-semibold ${statusColors[t.status]}`}>{t.progress}%</span>
                    </div>
                    <Progress value={t.progress} className="h-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
