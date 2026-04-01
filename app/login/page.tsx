"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Shield, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const roles = [
  { id: "client", label: "Client", path: "/dashboard", description: "External applicant" },
  { id: "dg", label: "DG", path: "/dg", description: "Initial approval authority" },
  { id: "director", label: "Training Director", path: "/director", description: "Orchestrator & assignment" },
  { id: "supervisor", label: "Supervisor", path: "/supervisor", description: "Oversight role" },
  { id: "negotiator", label: "Negotiator", path: "/negotiator", description: "Execution role" },
  { id: "admin", label: "Administrator", path: "/admin", description: "System admin" },
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("client");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("Login page mounted");
    setMounted(true);
  }, []);

  const handleRoleSelection = (roleId: string) => {
    console.log("Role selection clicked:", roleId);
    setSelectedRole(roleId);
  };

  const currentRole = roles.find((r) => r.id === selectedRole)!;

  return (
    <div className="flex min-h-screen">
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[hsl(var(--navy-deep))] p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 backdrop-blur-xl ring-1 ring-primary/30">
              <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display text-xl font-bold gold-text block leading-tight tracking-tight">SSGI Orbit</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Enterprise Training</span>
            </div>
          </div>
          {mounted && (
            <button 
              type="button" 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
              className="rounded-xl p-2.5 bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition-all duration-300"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          )}
        </div>

        <div className="max-w-md relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <Shield className="h-3 w-3" />
            Secure Enterprise Gateway
          </div>
          <h1 className="font-display text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Elevate Your <span className="gold-text">Operational</span> Capabilities
          </h1>
          <p className="text-white/60 text-lg leading-relaxed font-medium">
            Access elite satellite training programs, track complex negotiations, and manage your mission-critical agreements from one secure hub.
          </p>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-white/40 uppercase tracking-widest">
            <Shield className="h-4 w-4 text-primary" />
            <span>Secure Access Control</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-white/20" />
          <div className="text-xs font-semibold text-white/40 uppercase tracking-widest">
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center bg-background p-8 transition-colors duration-500">
        <div className="w-full max-w-sm animate-fade-in">
          <div className="lg:hidden flex items-center gap-3 mb-12 justify-center">
            <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-10 w-10" />
            <span className="font-display text-xl font-bold gold-text tracking-tight">SSGI Orbit</span>
          </div>

          <div className="mb-10">
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-2 tracking-tight">Sign In</h2>
            <p className="text-sm text-muted-foreground font-medium">
              Enter your credentials to access the portal
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/70 ml-1">Account Identifier</Label>
              <Input
                type="email"
                placeholder="identifier@ssgi.gov.et"
                className="h-12 bg-muted/30 border-border/50 rounded-xl px-4 text-sm focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <Label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/70">Access Key</Label>
                <button type="button" className="text-[10px] uppercase tracking-widest font-bold text-primary hover:text-primary/80 transition-colors">Recover Access</button>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 bg-muted/30 border-border/50 rounded-xl px-4 text-sm pr-12 focus:ring-primary/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Role Selection (Simplified/Hidable for production, but kept here for demo with better styling) */}
            <div className="space-y-3 pt-2">
              <Label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/70 ml-1">System Role</Label>
              <div className="grid grid-cols-2 gap-2">
                {mounted && roles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => handleRoleSelection(role.id)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition-all duration-300 ${
                      selectedRole === role.id
                        ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                        : "border-border/50 text-muted-foreground/60 hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </div>

            <Button asChild variant="gold" className="w-full h-14 rounded-xl text-sm font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 mt-4">
              <Link href={currentRole.path}>
                Authorize Access
              </Link>
            </Button>
          </form>

          <p className="mt-10 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            Secure Gateway Access Only
          </p>
        </div>
      </div>
    </div>
  );
}
