import { Button } from "@/components/ui/button";
import { FileText, Download, Upload, Search, Eye, Clock, CheckCircle2 } from "lucide-react";
import { documents } from "@/lib/mock-data";

const statusMap: Record<string, { label: string; color: string; icon: any }> = {
  pending_signature: { label: "Pending Signature", color: "bg-primary/10 text-primary", icon: Clock },
  approved: { label: "Approved", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400", icon: CheckCircle2 },
  under_review: { label: "Under Review", color: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400", icon: Eye },
  final: { label: "Finalized", color: "bg-muted text-muted-foreground", icon: CheckCircle2 },
};

export default function Documents() {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Documents</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage agreements, proposals, and training materials</p>
        </div>
        <Button variant="gold" size="sm" className="gap-2"><Upload className="h-4 w-4" /> Upload Document</Button>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 max-w-sm mb-6">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full" placeholder="Search documents..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {documents.map((doc) => {
          const st = statusMap[doc.status];
          const StatusIcon = st.icon;
          return (
            <div key={doc.name} className="glass-card p-5 flex flex-col gap-4 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.type} · {doc.size}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${st.color}`}>
                  <StatusIcon className="h-3 w-3" /> {st.label}
                </span>
                <span className="text-xs text-muted-foreground">{doc.date}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1 gap-1.5 text-xs"><Eye className="h-3.5 w-3.5" /> View</Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-1.5 text-xs"><Download className="h-3.5 w-3.5" /> Download</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
