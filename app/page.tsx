import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Shield, GraduationCap, Users, ArrowRight, Satellite } from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: Rocket,
      title: "Space Training Programs",
      description: "World-class satellite operations and remote sensing training modules.",
    },
    {
      icon: Shield,
      title: "Secure & Government-Grade",
      description: "End-to-end encrypted negotiation pipeline with full audit trails.",
    },
    {
      icon: GraduationCap,
      title: "Certified Curriculum",
      description: "SSGI-accredited programs with recognized certifications upon completion.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from experienced satellite engineers and mission specialists.",
    },
  ];

  const stats = [
    { value: "500+", label: "Trainees Certified" },
    { value: "45", label: "Partner Organizations" },
    { value: "12", label: "Training Programs" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/60 backdrop-blur-2xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-8">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 transition-transform group-hover:scale-110">
              <img src="/assets/ssgi-logo.png" alt="SSGI Logo" className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold gold-text leading-tight tracking-tight">SSGI Orbit</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Training Enterprise</span>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Button asChild variant="ghost" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">
              <Link href="/login">Portal Access</Link>
            </Button>
            <Button asChild variant="gold" className="rounded-xl px-8 h-11 font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
              <Link href="/apply">
                Initiate Program
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-space.jpg"
            alt="Space infrastructure"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/40 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-8 text-center">
          <div className="mx-auto max-w-4xl animate-slide-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
              <Satellite className="h-3.5 w-3.5" />
              Strategic Space Technology Infrastructure
            </div>
            <h1 className="mb-8 font-display text-6xl font-black leading-[1.1] tracking-tight md:text-8xl">
              <span className="text-foreground">Advance Your</span>
              <br />
              <span className="gold-text">Orbital Intelligence</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground/80 leading-relaxed font-medium">
              Access the continent's most advanced satellite operations and remote sensing curriculum through SSGI's unified digital ecosystem.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button asChild variant="gold" size="lg" className="h-16 px-12 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-primary/20">
                <Link href="/apply">
                  Start Training Request
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 rounded-2xl border-border/50 bg-background/50 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] hover:bg-background/80">
                <Link href="/login">
                  Enter Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-20">
        <div className="container mx-auto px-8">
          <div className="glass-card mx-auto grid max-w-5xl grid-cols-2 gap-8 p-10 md:grid-cols-4 ring-1 ring-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="font-display text-4xl font-black gold-text mb-1 transition-transform group-hover:scale-110">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="mb-20 text-center">
            <h2 className="font-display text-4xl font-black md:text-5xl tracking-tight">
              <span className="gold-text">Standardized</span>{" "}
              <span className="text-foreground">Training Flow</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground/70 font-medium">
              A professional framework designed for national space agencies and specialized research institutions.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {[
              {
                icon: Rocket,
                title: "Orbital Operations",
                description: "Specialized training modules for satellite ground station control and telemetry management.",
              },
              {
                icon: Shield,
                title: "Unified Compliance",
                description: "Standardized agreement pipelines ensuring all training protocols meet international space law.",
              },
              {
                icon: GraduationCap,
                title: "Accredited Tracks",
                description: "Curriculum designed by SSGI senior mission specialists with industry-recognized certifications.",
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Direct access to mission specialists during critical training milestones and evaluations.",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card group p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:rotate-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-black text-foreground tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground/70 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card mx-auto max-w-3xl border-primary/20 p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Begin Your <span className="gold-text">Training Journey</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Submit your training request today and our team will guide you through the entire process.
            </p>
            <Button asChild variant="gold" size="lg" className="h-14 px-12 text-base mt-8">
              <Link href="/apply">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-8 w-8" />
            <span className="text-sm text-muted-foreground">© 2026 SSGI Training Portal. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
