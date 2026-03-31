"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function AdminSettings() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Portal configuration and preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Profile */}
        <div className="glass-card p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Admin Profile</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</Label>
              <Input className="mt-2 bg-card border-border" defaultValue="Admin User" />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
              <Input className="mt-2 bg-card border-border" defaultValue="admin@ssgi.gov.et" />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Role</Label>
              <Input className="mt-2 bg-card border-border" defaultValue="Head of Training" disabled />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Department</Label>
              <Input className="mt-2 bg-card border-border" defaultValue="Training & Capacity Building" />
            </div>
          </div>
          <Button variant="gold" size="sm" className="mt-4">Save Changes</Button>
        </div>

        {/* Notifications */}
        <div className="glass-card p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Notifications</h3>
          <div className="space-y-4">
            {[
              { label: "New training requests", description: "Get notified when a new request is submitted", default: true },
              { label: "Negotiation updates", description: "Updates on pricing rounds and approvals", default: true },
              { label: "Training completion", description: "When a trainee completes a program", default: true },
              { label: "Weekly digest", description: "Summary of all activities each week", default: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <Switch defaultChecked={item.default} />
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="glass-card p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Two-factor authentication</p>
                <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div>
              <Button variant="outline" size="sm">Change Password</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
