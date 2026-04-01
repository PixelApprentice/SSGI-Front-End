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

import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (!success) {
        toast({
          title: "Access Denied",
          description: "Invalid account identifier or access key.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "System Error",
        description: "Unable to reach the security gateway.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[hsl(var(--navy-deep))] p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-xl ring-2 ring-primary/30 shadow-2xl shadow-primary/20 transition-transform hover:scale-110">
              <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <span className="font-display text-2xl font-black gold-text block leading-none tracking-tighter uppercase italic">SSGI Orbit</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-black mt-1 block">Training Request Authority</span>
            </div>
          </div>
          {mounted && (
            <button 
              type="button" 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
              className="rounded-2xl p-3 bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition-all duration-300"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          )}
        </div>

        <div className="max-w-md relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-xs font-bold text-primary mb-6 backdrop-blur-md">
            <Shield className="h-3 w-3" />
            Secure Institutional Gateway
          </div>
          <h1 className="font-display text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-sm uppercase italic">
            Manage Your <br />
            <span className="gold-text">Mission</span> Capacity
          </h1>
          <p className="text-white/80 text-xl leading-relaxed font-bold tracking-tight">
            The professional terminal for authorized personnel to process training requests, technical agreements, and institutional readiness protocols.
          </p>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">
            <Shield className="h-4 w-4 text-primary" />
            <span>Secure Access Control</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-white/40" />
          <div className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">
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
            <p className="text-sm text-muted-foreground font-bold">
              Enter your credentials to access the workspace
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground/80 ml-1">Account Identifier</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="identifier@ssgi.gov.et"
                className="h-12 bg-muted/50 border-border rounded-xl px-4 text-sm font-bold focus:ring-primary/20 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <Label className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground/80">Access Key</Label>
                <button type="button" className="text-[10px] uppercase tracking-widest font-black text-primary hover:text-primary/80 transition-colors">Recover Access</button>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 bg-muted/50 border-border rounded-xl px-4 text-sm font-bold pr-12 focus:ring-primary/20 transition-all"
                  required
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

            <Button 
              type="submit" 
              variant="gold" 
              className="w-full h-14 rounded-xl text-sm font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Authorizing..." : "Authorize Access"}
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
