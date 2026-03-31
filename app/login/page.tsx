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
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[hsl(var(--navy-deep))] p-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-12 w-auto" />
            <div>
              <span className="font-display text-lg font-bold text-[hsl(39,42%,55%)] block leading-tight">SSGI</span>
              <span className="text-xs uppercase tracking-widest text-white/50">Training Portal</span>
            </div>
          </div>
          {mounted && (
            <button 
              type="button" 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
              className="rounded-lg p-2 text-white/50 hover:text-white/80 transition-all"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          )}
        </div>

        <div className="max-w-md">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Welcome to the <span className="text-[hsl(39,42%,55%)]">Training</span> Portal
          </h1>
          <p className="text-white/60 leading-relaxed">
            Access your training programs, track negotiations, manage agreements,
            and monitor active deployments — all from one secure platform.
          </p>
          <div className="mt-8 space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Role Hierarchy</p>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[hsl(39,42%,55%)]/80 font-medium">
                Client → DG → Training Director → Supervisor → Negotiator
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/40">
          <Shield className="h-4 w-4 text-[hsl(39,42%,55%)]" />
          <span>AES-256 Encrypted · SOC 2 Compliant · ISO 27001 Certified</span>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-3 mb-10 justify-center">
            <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-12 w-auto" />
            <span className="font-display text-lg font-bold gold-text">SSGI Portal</span>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Select Role</p>
            <div className="grid grid-cols-3 gap-2">
              {mounted && roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => handleRoleSelection(role.id)}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                    selectedRole === role.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-1">Sign In</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Sign in as <strong className="text-foreground">{currentRole.label}</strong> — {currentRole.description}
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</Label>
              <Input
                type="email"
                placeholder="you@organization.gov"
                className="bg-card border-border"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Password</Label>
                <button type="button" className="text-xs text-primary hover:underline">Forgot password?</button>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-card border-border pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button asChild variant="gold" className="w-full mt-2">
              <Link href={currentRole.path}>
                Sign In as {currentRole.label}
              </Link>
            </Button>
          </form>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/apply" className="text-primary hover:underline font-medium">Request Access</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
