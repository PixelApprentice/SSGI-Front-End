"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Bell, Search, User as UserIcon, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { getNavItemsForRole, Role } from "@/lib/navigation-config";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
  role: Role;
}

export default function AdminLayout({
  children,
  role,
}: AdminLayoutProps) {
  const pathname = usePathname();
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isLoading && (!user || user.role !== role)) {
      router.push('/login');
    }
  }, [user, role, isLoading, router]);

  if (isLoading || !user || user.role !== role) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const navItems = getNavItemsForRole(user.role);

  const isActive = (path: string) => {
    if (path === "/" || path === "") return pathname === path;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <div className="flex min-h-screen bg-background transition-colors duration-300">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border/50 bg-sidebar transition-all duration-300 ease-in-out",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex h-16 items-center border-b border-sidebar-border px-6">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <img src="/assets/ssgi-logo.png" alt="Logo" className="h-5 w-5" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold text-sidebar-primary leading-tight tracking-tight">SSGI Orbit</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/40 font-bold truncate w-40">
                  Secure Workspace
                </span>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-4 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all group",
                isActive(item.href)
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                  : "text-sidebar-foreground/50 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 shrink-0 transition-colors",
                isActive(item.href) ? "text-sidebar-primary" : "text-sidebar-foreground/30 group-hover:text-sidebar-foreground"
              )} />
              {isSidebarOpen && <span className="truncate uppercase tracking-wider text-[11px]">{item.title}</span>}
              {isActive(item.href) && isSidebarOpen && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-sidebar-primary shadow-[0_0_8px_hsl(var(--sidebar-primary))]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-sidebar-border p-4">
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-sidebar-foreground/50 hover:bg-destructive/10 hover:text-destructive transition-all group"
          >
            <LogOut className="h-5 w-5 shrink-0 text-sidebar-foreground/30 group-hover:text-destructive" />
            {isSidebarOpen && <span className="uppercase tracking-wider text-[11px]">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div 
        className={cn(
          "flex flex-1 flex-col transition-all duration-300 ease-in-out",
          isSidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/50 bg-background/80 px-8 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-muted-foreground hover:bg-muted/50"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="h-9 w-64 rounded-full border border-border/50 bg-muted/30 pl-10 pr-4 text-[10px] uppercase font-bold tracking-widest outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:bg-muted/50">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-destructive border-2 border-background" />
            </Button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-border/50">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-foreground leading-tight">{user.name}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Authorized Access</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-xs font-black text-primary ring-1 ring-primary/20 shadow-inner">
                {user.initials}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
