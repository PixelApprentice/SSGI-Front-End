"use client";

import { FileText, Download, Eye, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  { name: "Technical Master Agreement - TRQ-2026-0042", org: "Kenya Space Agency", type: "TMA", date: "2026-03-15", status: "verified", size: "2.4 MB" },
  { name: "Training Curriculum - Satellite Operations", org: "Kenya Space Agency", type: "Curriculum", date: "2026-03-10", status: "verified", size: "5.1 MB" },
  { name: "Verification Checklist - TRQ-2026-0038", org: "Nigerian NASRDA", type: "Checklist", date: "2026-03-08", status: "pending", size: "1.2 MB" },
  { name: "Participant Roster - TRQ-2026-0035", org: "Ethiopian Space Science", type: "Roster", date: "2026-02-28", status: "verified", size: "340 KB" },
  { name: "Facility Inspection Report", org: "Ethiopian Space Science", type: "Report", date: "2026-02-20", status: "verified", size: "890 KB" },
];

export default function SupervisorDocuments() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Oversight Documents</h1>
        <p className="text-sm text-muted-foreground mt-1">Review and verify documents across all assigned agreements</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 flex-1 max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search documents..." />
        </div>
        <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <div key={doc.name} className="glass-card p-5 flex flex-col gap-4 hover:border-primary/30 transition-all">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{doc.name}</p>
                <p className="text-xs text-muted-foreground">{doc.org}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                doc.status === "verified" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
              }`}>
                {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground">{doc.date}</span>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-border">
              <Button variant="ghost" size="sm" className="flex-1 gap-1.5 text-xs"><Eye className="h-3.5 w-3.5" /> View</Button>
              <Button variant="ghost" size="sm" className="flex-1 gap-1.5 text-xs"><Download className="h-3.5 w-3.5" /> Download</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
