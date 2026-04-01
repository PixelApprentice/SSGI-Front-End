import { 
  LayoutDashboard, 
  FileCheck, 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  Briefcase,
  MessageSquare,
  ClipboardList,
  History
} from "lucide-react";

export type Role = 'admin' | 'dg' | 'director' | 'supervisor' | 'negotiator' | 'client';

export interface NavItem {
  title: string;
  href: string;
  icon: any;
  roles: Role[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ['admin', 'dg', 'director', 'supervisor', 'negotiator'],
  },
  {
    title: "Approvals",
    href: "/dg/approvals",
    icon: FileCheck,
    roles: ['dg', 'admin'],
  },
  {
    title: "Staff Management",
    href: "/admin/staff",
    icon: Users,
    roles: ['admin', 'director'],
  },
  {
    title: "Training Requests",
    href: "/admin/requests",
    icon: ClipboardList,
    roles: ['admin', 'director', 'dg'],
  },
  {
    title: "Negotiations",
    href: "/negotiator/deals",
    icon: Briefcase,
    roles: ['negotiator', 'supervisor', 'admin'],
  },
  {
    title: "Communications",
    href: "/negotiator/comms",
    icon: MessageSquare,
    roles: ['negotiator', 'admin'],
  },
  {
    title: "Agreements",
    href: "/dg/agreements",
    icon: FileText,
    roles: ['dg', 'admin', 'director'],
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
    roles: ['admin', 'dg', 'director'],
  },
  {
    title: "History",
    href: "/supervisor/history",
    icon: History,
    roles: ['supervisor', 'admin'],
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
    roles: ['admin', 'director'],
  },
];

export const getNavItemsForRole = (role: Role) => {
  // Map specific paths to role-friendly names if needed
  return NAV_ITEMS.filter(item => item.roles.includes(role)).map(item => {
    let href = item.href;
    // Adjust href based on role prefix if necessary
    if (role === 'dg' && href.startsWith('/admin')) href = href.replace('/admin', '/dg');
    if (role === 'director' && href.startsWith('/admin')) href = href.replace('/admin', '/director');
    if (role === 'supervisor' && href.startsWith('/admin')) href = href.replace('/admin', '/supervisor');
    if (role === 'negotiator' && href.startsWith('/admin')) href = href.replace('/admin', '/negotiator');
    
    return { ...item, href };
  });
};
