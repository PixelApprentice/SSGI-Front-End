"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Bell } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import React from "react";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
}

interface SidebarLayoutProps {
  children: React.ReactNode;
  items: SidebarItem[];
  portalName: string;
  userName: string;
  userRole: string;
  userInitials: string;
  headerTitle?: string;
  showNewApplication?: boolean;
}

export default function SidebarLayout({
  children,
  items,
  portalName,
  userName,
  userRole,
  userInitials,
  headerTitle,
  showNewApplication,
}: SidebarLayoutProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    // Special case for dashboard linking to request details
    if (path === "/dashboard" && pathname.startsWith("/request/")) return true;
    
    // For root-level portal paths (Overview), use exact match
    const portalRoots = ["/admin", "/dg", "/director", "/negotiator", "/supervisor", "/dashboard"];
    if (portalRoots.includes(path)) {
      return pathname === path;
    }
    
    // For other paths, check if the current pathname starts with the path
    if (path === "/" || path === "") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-56 flex-col border-r border-border/30 bg-[hsl(var(--navy-deep))]">
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
          <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-8 w-8" />
          <div>
            <span className="font-display text-sm font-bold text-[hsl(39,42%,55%)] block leading-tight">SSGI</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50">{portalName}</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-3 pt-4 overflow-y-auto">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                isActive(item.path)
                  ? "bg-[hsl(39,42%,55%)]/15 text-[hsl(39,42%,55%)] border-l-2 border-[hsl(39,42%,55%)]"
                  : "text-white/60 hover:bg-white/5 hover:text-white/80"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {showNewApplication && (
          <div className="p-3">
            <Button asChild variant="gold" className="w-full text-sm">
              <Link href="/apply">+ New Application</Link>
            </Button>
          </div>
        )}

        <div className="border-t border-white/10 p-3">
          <Link
            href="/login"
            className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white/60 hover:bg-white/5 hover:text-white/80 transition-all"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-56 flex-1 flex flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground uppercase tracking-wider text-xs">{userRole}</span>
            <span className="font-semibold text-foreground">{headerTitle || "SSGI Portal"}</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button type="button" className="relative rounded-lg p-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-destructive" />
            </button>
            <div className="flex items-center gap-2 border-l border-border pl-3 ml-1">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-foreground leading-none">{userName}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{userRole}</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                {userInitials}
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 flex-1">{children}</div>
      </main>
    </div>
  );
}
