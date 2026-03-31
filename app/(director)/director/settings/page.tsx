"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function DirectorSettings() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your profile and portal preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="glass-card p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Profile Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</Label>
              <Input className="mt-2 bg-card border-border" defaultValue="Dr. Abebe Tadesse" />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
              <Input className="mt-2 bg-card border-border" defaultValue="abebe.t@ssgi.gov.et" />
            </div>
          </div>
          <Button variant="gold" size="sm" className="mt-4">Update Profile</Button>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            {[
              { label: "DG Approval Alerts", description: "Get notified when DG approves a request", default: true },
              { label: "Assignment Reminders", description: "Notifications for requests awaiting staff assignment", default: true },
              { label: "Negotiation Milestones", description: "Alerts when a negotiation round is completed", default: false },
              { label: "System Maintenance", description: "Updates on portal maintenance schedules", default: true },
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
      </div>
    </div>
  );
}
