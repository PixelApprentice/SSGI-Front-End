"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Settings2,
  CalendarIcon,
  FileCheck,
  Upload,
  CheckCircle2,
  Satellite,
} from "lucide-react";

const steps = [
  { id: 1, title: "Organization", icon: Building2 },
  { id: 2, title: "Specifications", icon: Settings2 },
  { id: 3, title: "Logistics", icon: CalendarIcon },
  { id: 4, title: "Review", icon: FileCheck },
];

export default function TrainingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    orgName: "",
    orgType: "",
    country: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    trainingProgram: "",
    objectives: "",
    prerequisites: "",
    preferredLevel: "",
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    numTrainees: "",
    location: "",
    specialRequirements: "",
    files: [] as { name: string }[], // Simplified for serializability in some contexts, though here it's fine
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = useCallback((field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleFilesDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const droppedFiles = Array.from(e.dataTransfer.files).map(f => ({ name: f.name }));
      updateField("files", [...formData.files, ...droppedFiles]);
    },
    [formData.files, updateField]
  );

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="glass-card mx-4 max-w-md p-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 glow-gold">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Request Submitted</h2>
          <p className="mt-3 text-muted-foreground">
            Your training request has been received. Our team will review it and begin the negotiation process.
          </p>
          <p className="mt-2 text-sm text-primary font-semibold">Reference: TRQ-2026-0042</p>
          <Button asChild variant="gold" className="mt-8">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <nav className="border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/assets/ssgi-logo.png" alt="SSGI" className="h-8 w-8" />
            <span className="font-display text-lg font-bold gold-text">Training Request</span>
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
            <Link href="/">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="border-b border-border/30 bg-card/30">
        <div className="container mx-auto px-6 py-6">
          <div className="mx-auto flex max-w-2xl items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                      currentStep >= step.id
                        ? "border-primary bg-primary/20 text-primary glow-gold"
                        : "border-border text-muted-foreground"
                    )}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "mt-2 text-xs font-medium",
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "mx-4 h-0.5 w-16 transition-all duration-300 md:w-24",
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-2xl">
          {/* Step 1: Organization */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Organization Details</h2>
                <p className="mt-1 text-muted-foreground">Provide your institutional identity information.</p>
              </div>
              <div className="glass-card space-y-5 p-8">
                <div>
                  <Label className="text-foreground">Organization Name</Label>
                  <Input
                    className="mt-2 border-border bg-muted/30 text-foreground placeholder:text-muted-foreground"
                    placeholder="e.g., National Space Research Agency"
                    value={formData.orgName}
                    onChange={(e) => updateField("orgName", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-foreground">Organization Type</Label>
                  <Select value={formData.orgType} onValueChange={(v: string) => updateField("orgType", v)}>
                    <SelectTrigger className="mt-2 border-border bg-muted/30 text-foreground">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="government">Government Agency</SelectItem>
                      <SelectItem value="military">Military</SelectItem>
                      <SelectItem value="academic">Academic Institution</SelectItem>
                      <SelectItem value="private">Private Sector</SelectItem>
                      <SelectItem value="ngo">NGO / International Org</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-foreground">Country</Label>
                  <Input
                    className="mt-2 border-border bg-muted/30 text-foreground placeholder:text-muted-foreground"
                    placeholder="e.g., Republic of Kenya"
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="text-foreground">Contact Person</Label>
                    <Input
                      className="mt-2 border-border bg-muted/30 text-foreground placeholder:text-muted-foreground"
                      placeholder="Full name"
                      value={formData.contactName}
                      onChange={(e) => updateField("contactName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Email</Label>
                    <Input
                      className="mt-2 border-border bg-muted/30 text-foreground placeholder:text-muted-foreground"
                      type="email"
                      placeholder="email@organization.gov"
                      value={formData.contactEmail}
                      onChange={(e) => updateField("contactEmail", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Specifications */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Training Specifications</h2>
                <p className="mt-1 text-muted-foreground">Define your technical training goals and requirements.</p>
              </div>
              <div className="glass-card space-y-5 p-8">
                <div>
                  <Label className="text-foreground">Training Program</Label>
                  <Select value={formData.trainingProgram} onValueChange={(v: string) => updateField("trainingProgram", v)}>
                    <SelectTrigger className="mt-2 border-border bg-muted/30 text-foreground">
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="satellite-ops">Satellite Operations & Control</SelectItem>
                      <SelectItem value="remote-sensing">Remote Sensing & GIS</SelectItem>
                      <SelectItem value="mission-planning">Mission Planning & Design</SelectItem>
                      <SelectItem value="ground-station">Ground Station Engineering</SelectItem>
                      <SelectItem value="data-processing">Satellite Data Processing</SelectItem>
                      <SelectItem value="custom">Custom Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-foreground">Preferred Level</Label>
                  <Select value={formData.preferredLevel} onValueChange={(v: string) => updateField("preferredLevel", v)}>
                    <SelectTrigger className="mt-2 border-border bg-muted/30 text-foreground">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="introductory">Introductory</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert / Specialist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-foreground">Training Objectives</Label>
                  <Textarea
                    className="mt-2 min-h-[120px] border-border bg-muted/30 text-foreground placeholder:text-muted-foreground"
                    placeholder="Describe the specific skills and knowledge your team aims to acquire..."
                    value={formData.objectives}
                    onChange={(e) => updateField("objectives", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-foreground">Prerequisites / Background</Label>
                  <Textarea
                    className="mt-2 border-border bg-muted/30 text-foreground placeholder:text-muted-foreground"
                    placeholder="Relevant experience, qualifications, or prior training..."
                    value={formData.prerequisites}
                    onChange={(e) => updateField("prerequisites", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Logistics */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Logistics & Documents</h2>
                <p className="mt-1 text-muted-foreground">Schedule, team size, and supporting documentation.</p>
              </div>
              <div className="glass-card space-y-5 p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="text-foreground">Preferred Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "mt-2 w-full justify-start border-border bg-muted/30 text-left font-normal",
                            !formData.startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.startDate ? format(formData.startDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.startDate}
                          onSelect={(d) => updateField("startDate", d)}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label className="text-foreground">Preferred End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "mt-2 w-full justify-start border-border bg-muted/30 text-left font-normal",
                            !formData.endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.endDate ? format(formData.endDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.endDate}
                          onSelect={(d) => updateField("endDate", d)}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="text-foreground">Number of Trainees</Label>
                    <Input
                      className="mt-2 border-border bg-muted/30 text-foreground"
                      type="number"
                      placeholder="e.g., 15"
                      value={formData.numTrainees}
                      onChange={(e) => updateField("numTrainees", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Preferred Location</Label>
                    <Select value={formData.location} onValueChange={(v: string) => updateField("location", v)}>
                      <SelectTrigger className="mt-2 border-border bg-muted/30 text-foreground">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ssgi-hq">SSGI Headquarters</SelectItem>
                        <SelectItem value="onsite">On-site (Your Location)</SelectItem>
                        <SelectItem value="virtual">Virtual / Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-foreground">Special Requirements</Label>
                  <Textarea
                    className="mt-2 border-border bg-muted/30 text-foreground placeholder:text-muted-foreground"
                    placeholder="Any special accommodations, equipment needs, security clearances..."
                    value={formData.specialRequirements}
                    onChange={(e) => updateField("specialRequirements", e.target.value)}
                  />
                </div>
                {/* File Upload Zone */}
                <div>
                  <Label className="text-foreground">Supporting Documents</Label>
                  <div
                    className="mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-10 text-center transition-colors hover:border-primary/50"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleFilesDrop}
                  >
                    <Upload className="mb-3 h-10 w-10 text-primary/60" />
                    <p className="text-sm text-muted-foreground">
                      Drag & drop Technical Master Agreements or supporting docs here
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">PDF, DOCX, or images up to 20MB</p>
                    <label className="mt-4 cursor-pointer">
                      <Button variant="gold-outline" size="sm" asChild>
                        <span>Browse Files</span>
                      </Button>
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files) {
                            const newFiles = Array.from(e.target.files).map(f => ({ name: f.name }));
                            updateField("files", [...formData.files, ...newFiles]);
                          }
                        }}
                      />
                    </label>
                  </div>
                  {formData.files.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {formData.files.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-lg bg-muted/30 px-3 py-2 text-sm text-foreground">
                          <FileCheck className="h-4 w-4 text-primary" />
                          {f.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Review & Submit</h2>
                <p className="mt-1 text-muted-foreground">Verify all information before submitting your request.</p>
              </div>
              <div className="glass-card border-primary/20 p-8">
                <div className="mb-6 flex items-center justify-between border-b border-border/30 pb-4">
                  <div className="flex items-center gap-3">
                    <Satellite className="h-6 w-6 text-primary" />
                    <span className="font-display text-lg font-bold gold-text">Training Request Summary</span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Draft
                  </span>
                </div>

                <div className="space-y-6">
                  <ReviewSection title="Organization">
                    <ReviewItem label="Name" value={formData.orgName || "—"} />
                    <ReviewItem label="Type" value={formData.orgType || "—"} />
                    <ReviewItem label="Country" value={formData.country || "—"} />
                    <ReviewItem label="Contact" value={formData.contactName || "—"} />
                    <ReviewItem label="Email" value={formData.contactEmail || "—"} />
                  </ReviewSection>

                  <ReviewSection title="Specifications">
                    <ReviewItem label="Program" value={formData.trainingProgram || "—"} />
                    <ReviewItem label="Level" value={formData.preferredLevel || "—"} />
                    <ReviewItem label="Objectives" value={formData.objectives || "—"} />
                  </ReviewSection>

                  <ReviewSection title="Logistics">
                    <ReviewItem
                      label="Dates"
                      value={
                        formData.startDate && formData.endDate
                          ? `${format(formData.startDate, "PPP")} — ${format(formData.endDate, "PPP")}`
                          : "—"
                      }
                    />
                    <ReviewItem label="Trainees" value={formData.numTrainees || "—"} />
                    <ReviewItem label="Location" value={formData.location || "—"} />
                    <ReviewItem label="Documents" value={`${formData.files.length} file(s) attached`} />
                  </ReviewSection>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                console.log("Wizard Previous clicked");
                setCurrentStep((s) => s - 1);
              }}
              disabled={currentStep === 1}
              className="text-muted-foreground"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            {currentStep < 4 ? (
              <Button type="button" variant="gold" onClick={() => {
                console.log("Wizard Next clicked");
                setCurrentStep((s) => s + 1);
              }}>
                Continue <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button type="button" variant="gold" className="px-10" onClick={() => {
                console.log("Wizard Submit clicked");
                handleSubmit();
              }}>
                Submit Request
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ReviewSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const ReviewItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="text-foreground font-medium">{value}</span>
  </div>
);
