"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Bell, LayoutDashboard, ClipboardList, GraduationCap, Plus } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
  userName: string;
  userInitials: string;
}

export default function ClientLayout({
  children,
  userName,
  userInitials,
}: ClientLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { title: "My Requests", href: "/applications", icon: ClipboardList },
    { title: "Training", href: "/training", icon: GraduationCap },
  ];

  const isActive = (path: string) => {
    if (path === "/" || path === "") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-2xl px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 transition-transform group-hover:scale-105">
              <img src="/assets/ssgi-logo.png" alt="Logo" className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold gold-text leading-tight tracking-tight">SSGI Orbit</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Client Portal</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary),0.05)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Button asChild variant="gold" className="rounded-xl h-11 px-6 font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
            <Link href="/apply">
              <Plus className="h-4 w-4 mr-2" />
              New Request
            </Link>
          </Button>

          <div className="flex items-center gap-4 pl-6 border-l border-border/50">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:bg-muted/50 transition-all rounded-xl">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-destructive border-2 border-background" />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-tight">{userName}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Trainee Org</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary ring-1 ring-primary/20">
                {userInitials}
              </div>
            </div>
            
            <Link href="/login" className="p-2.5 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all">
              <LogOut className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 mt-20">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-6 w-6 opacity-50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
              © 2026 SSGI Orbit. Secure Enterprise System.
            </span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Compliance</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
