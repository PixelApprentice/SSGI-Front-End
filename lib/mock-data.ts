import { Clock, CheckCircle2, AlertCircle, Handshake, MessageSquare } from "lucide-react";

export const requests = [
  { id: "TRQ-2026-0042", program: "Satellite Operations & Control", org: "Kenya Space Agency", status: "negotiation", date: "2026-03-15", stage: "Technical Review" },
  { id: "TRQ-2026-0038", program: "Remote Sensing & GIS", org: "Nigerian NASRDA", status: "agreed", date: "2026-02-20", stage: "Agreement Signed" },
  { id: "TRQ-2026-0035", program: "Mission Planning & Design", org: "Ethiopian Space Science", status: "active", date: "2026-01-10", stage: "Training In Progress" },
  { id: "TRQ-2025-0099", program: "Ground Station Engineering", org: "Rwanda Utilities Board", status: "completed", date: "2025-11-05", stage: "Completed" },
  { id: "TRQ-2026-0044", program: "Satellite Data Processing", org: "Ghana Space Agency", status: "pending", date: "2026-03-25", stage: "Awaiting Review" },
];

export const statusConfig: Record<string, { color: string; icon: any }> = {
  pending: { color: "bg-amber-100 text-amber-700 dark:bg-muted dark:text-muted-foreground", icon: Clock },
  negotiation: { color: "bg-primary/10 text-primary", icon: Handshake },
  agreed: { color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400", icon: CheckCircle2 },
  active: { color: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400", icon: AlertCircle },
  completed: { color: "bg-muted text-muted-foreground", icon: CheckCircle2 },
};

export const documents = [
  { name: "Technical Master Agreement - TRQ-2026-0042", type: "TMA", date: "2026-03-15", status: "pending_signature", size: "2.4 MB" },
  { name: "Training Curriculum - Satellite Operations", type: "Curriculum", date: "2026-03-10", status: "approved", size: "5.1 MB" },
  { name: "Cost Proposal - Round 2 Negotiation", type: "Proposal", date: "2026-03-08", status: "under_review", size: "1.2 MB" },
  { name: "Participant List - Kenya Space Agency", type: "Roster", date: "2026-02-28", status: "approved", size: "340 KB" },
  { name: "Facility Requirements Document", type: "Logistics", date: "2026-02-20", status: "approved", size: "890 KB" },
  { name: "Certificate Template - Ground Station Eng.", type: "Certificate", date: "2025-11-05", status: "final", size: "1.8 MB" },
];

export const staff = [
  { name: "Meseret Hailu", role: "Supervisor", active: 3, capacity: 5, expertise: "Remote Sensing, GIS", status: "available", requests: ["TRQ-2026-0038", "TRQ-2026-0035", "TRQ-2025-0099"] },
  { name: "Tigist Alemayehu", role: "Supervisor", active: 2, capacity: 5, expertise: "Satellite Ops, Mission Planning", status: "available", requests: ["TRQ-2026-0042", "TRQ-2026-0040"] },
  { name: "Dawit Kebede", role: "Negotiator", active: 4, capacity: 5, expertise: "Government Contracts", status: "busy", requests: ["TRQ-2026-0042", "TRQ-2026-0038", "TRQ-2026-0035", "TRQ-2026-0040"] },
  { name: "Henok Girma", role: "Negotiator", active: 5, capacity: 5, expertise: "International Agreements", status: "full", requests: ["TRQ-2026-0039", "TRQ-2026-0037", "TRQ-2026-0036", "TRQ-2025-0098", "TRQ-2025-0097"] },
  { name: "Sara Tekle", role: "Negotiator", active: 1, capacity: 5, expertise: "Technical Agreements", status: "available", requests: ["TRQ-2026-0041"] },
];
