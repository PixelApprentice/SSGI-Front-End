import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Shield, GraduationCap, Users, ArrowRight, Satellite, Zap, Globe, Activity, Terminal } from "lucide-react";

export default function LandingPage() {
  const stats = [
    { value: "18", label: "Strategic Entities" },
    { value: "24", label: "Active Missions" },
    { value: "142", label: "Personnel Units" },
    { value: "05", label: "Regional Nodes" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/60 backdrop-blur-2xl transition-all duration-500 hover:bg-background/80">
        <div className="container mx-auto flex h-20 items-center justify-between px-8">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/30 ring-1 ring-primary/20">
              <img src="/assets/ssgi-logo.png" alt="SSGI Logo" className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-black gold-text leading-tight tracking-tighter uppercase italic">SSGI Orbit</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-black opacity-60">Operations Command</span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/login" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
              Access Terminal
            </Link>
            <Button asChild variant="gold" className="rounded-xl px-10 h-12 font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
              <Link href="/apply">
                Initiate Protocol
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/hero-space.jpg"
            alt="Space infrastructure"
            className="h-full w-full object-cover scale-110 opacity-40 mix-blend-luminosity transition-transform duration-[20s] animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/90 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-8">
          <div className="mx-auto max-w-5xl text-center space-y-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary backdrop-blur-xl ring-1 ring-white/5 animate-fade-in">
              <Terminal className="h-3 w-3" />
              Strategic Institutional Readiness System
            </div>
            
            <h1 className="font-display text-7xl font-black leading-[0.95] tracking-tighter md:text-[10rem] animate-slide-up">
              <span className="text-foreground">DOMINATE</span>
              <br />
              <span className="gold-text italic">THE ORBITAL</span>
              <br />
              <span className="text-foreground">FRONTIER.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground/80 leading-relaxed font-bold tracking-tight opacity-0 animate-fade-in [animation-delay:400ms]">
              The unified digital command for African space excellence. 
              Authorizing critical training payloads for national agencies, research institutions, and mission specialists.
            </p>

            <div className="flex flex-col items-center justify-center gap-8 pt-8 sm:flex-row opacity-0 animate-fade-in [animation-delay:600ms]">
              <Button asChild variant="gold" size="lg" className="h-20 px-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all group active:scale-95">
                <Link href="/apply" className="flex items-center gap-3">
                  Start Mission Authorization
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Link href="/login" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-all group">
                <div className="h-14 w-14 rounded-2xl border border-border/50 flex items-center justify-center group-hover:bg-muted/50 group-hover:border-primary/20 transition-all">
                  <Activity className="h-5 w-5" />
                </div>
                Enter Operations Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Metrics */}
      <section className="relative z-10 -mt-24">
        <div className="container mx-auto px-8">
          <div className="glass-card mx-auto grid max-w-6xl grid-cols-2 gap-12 p-16 md:grid-cols-4 ring-1 ring-white/10 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-left group border-l border-border/50 pl-8 first:border-0 transition-all duration-500 hover:border-primary">
                <div className="font-display text-5xl font-black gold-text mb-2 transition-transform group-hover:translate-x-2">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Command Nodes */}
      <section className="py-40 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-primary/50 to-transparent" />
        
        <div className="container mx-auto px-8">
          <div className="mb-32 text-center space-y-6">
            <h2 className="font-display text-5xl font-black md:text-7xl tracking-tighter uppercase italic">
              Operational <span className="gold-text">Framework</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground/60 text-[11px] font-black uppercase tracking-[0.4em]">
              Precision systems for continental space capacity.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-px bg-border/10 overflow-hidden rounded-3xl border border-border/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Satellite,
                  title: "Orbital Command",
                  tag: "S-LEVEL",
                  desc: "Mission planning, ground station telemetry, and satellite bus life-cycle management.",
                },
                {
                  icon: Globe,
                  title: "Geospatial Intel",
                  tag: "G-LEVEL",
                  desc: "Strategic remote sensing, GIS orchestration, and high-resolution data analysis.",
                },
                {
                  icon: Shield,
                  title: "Secure Ledger",
                  tag: "A-LEVEL",
                  desc: "Encrypted Technical Master Agreement (TMA) pipeline with absolute audit integrity.",
                },
                {
                  icon: Zap,
                  title: "Personnel Ops",
                  tag: "P-LEVEL",
                  desc: "High-intensity training modules for mission-ready technical personnel deployment.",
                },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className="bg-background group p-12 space-y-10 transition-all duration-500 hover:bg-muted/30 relative"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted group-hover:bg-primary transition-all duration-500 group-hover:-rotate-6 ring-1 ring-white/5">
                      <f.icon className="h-8 w-8 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-black text-primary/40 group-hover:text-primary tracking-[0.3em] italic">{f.tag}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-black text-foreground uppercase tracking-tight italic transition-all group-hover:text-primary">{f.title}</h3>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed font-bold tracking-tight">{f.desc}</p>
                  </div>
                  <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-700 absolute bottom-0 left-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Authorization CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 translate-y-20" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="glass-card mx-auto max-w-5xl border-primary/20 p-24 text-center overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="font-display text-5xl font-black text-foreground md:text-7xl tracking-tighter uppercase italic mb-8">
              Execute Training <br />
              <span className="gold-text underline underline-offset-8 decoration-primary/30 decoration-4">Authorization Protocol</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground/80 font-bold tracking-tight">
              Begin the formal institutional onboarding process. Secure your organization&apos;s technical readiness for the 2026 space window.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
              <Button asChild variant="gold" size="lg" className="h-20 px-16 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
                <Link href="/apply">
                  Request Authorization
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-20 px-12 rounded-2xl border-border/50 bg-background/50 backdrop-blur-md text-[11px] font-black uppercase tracking-[0.3em] hover:bg-background transition-all">
                <Link href="/login">
                  Review Guidelines
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/10 py-24 bg-muted/20">
        <div className="container mx-auto px-8">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-10 w-10 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
                <span className="font-display text-xl font-black uppercase tracking-tighter italic gold-text">SSGI Orbit</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">© 2026 Space Science & Geospatial Institute</p>
            </div>
            <div className="flex gap-12">
              {['Protocols', 'Encryption', 'Regional Nodes', 'Infrastructure'].map(item => (
                <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 hover:text-primary transition-all">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
