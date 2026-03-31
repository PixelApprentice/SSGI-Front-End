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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/assets/ssgi-logo.png" alt="SSGI Logo" className="h-10 w-10" />
            <span className="font-display text-lg font-bold gold-text">SSGI Training Portal</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Link href="/login">
                Login
              </Link>
            </Button>
            <Button asChild variant="gold" size="lg">
              <Link href="/apply">
                Initiate Training
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src="/assets/hero-space.jpg"
          alt="Satellite in orbit"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl animate-slide-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Satellite className="h-4 w-4" />
              Government Space Agency Training Platform
            </div>
            <h1 className="mb-6 font-display text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="gold-text">Space Capabilities</span>
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Access elite satellite operations training through SSGI's secure portal. 
              Submit requests, negotiate agreements, and track your program — all in one place.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="gold" size="lg" className="h-14 px-10 text-base">
                <Link href="/apply">
                  Initiate Training Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="gold-outline" size="lg" className="h-14 px-10 text-base">
                <Link href="/login">
                  Access Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-16">
        <div className="container mx-auto px-6">
          <div className="glass-card mx-auto grid max-w-4xl grid-cols-2 gap-6 p-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold gold-text">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              <span className="gold-text">World-Class</span>{" "}
              <span className="text-foreground">Training Infrastructure</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Everything you need to manage space technology training programs with precision and excellence.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card group p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(39_42%_55%/0.1)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
