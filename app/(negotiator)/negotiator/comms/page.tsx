"use client";

import { MessageSquare, Search, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const conversations = [
  { id: 1, org: "Kenya Space Agency", lastMessage: "We have reviewed the technical specifications for the mission planning module...", time: "2 hours ago", unread: true, agent: "Sarah Sterling" },
  { id: 2, org: "Ghana Space Agency", lastMessage: "Regarding the proposed start date in Q2, would it be possible to...", time: "1 day ago", unread: false, agent: "Sarah Sterling" },
  { id: 3, org: "South Africa SANSA", lastMessage: "The second draft of the TMA looks good. We just need to clarify...", time: "3 days ago", unread: false, agent: "Sarah Sterling" },
  { id: 4, org: "Nigerian NASRDA", lastMessage: "Thank you for the update. We will coordinate with our internal team...", time: "1 week ago", unread: false, agent: "Sarah Sterling" },
];

export default function NegotiatorComms() {
  return (
    <div className="flex h-[calc(100vh-12rem)] gap-6">
      {/* Sidebar - Chat List */}
      <div className="w-80 flex flex-col glass-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input className="w-full bg-muted/50 border border-border rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-primary" placeholder="Search chats..." />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-border">
          {conversations.map((c) => (
            <div key={c.id} className={`p-4 hover:bg-muted/50 transition-colors cursor-pointer ${c.unread ? "bg-primary/5" : ""}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-foreground truncate">{c.org}</span>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">{c.time}</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{c.lastMessage}</p>
              {c.unread && <div className="mt-2 h-2 w-2 rounded-full bg-primary" />}
            </div>
          ))}
        </div>
      </div>

      {/* Main - Chat Window Placeholder */}
      <div className="flex-1 glass-card flex flex-col items-center justify-center text-center p-12">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">Secure Communication Channel</h3>
        <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
          Select a conversation from the list to view negotiation history and send messages to organization leads.
        </p>
        <Button variant="gold" className="mt-6">Start New Conversation</Button>
      </div>
    </div>
  );
}
