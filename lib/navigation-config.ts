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
  History,
  GraduationCap
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
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ['admin', 'dg', 'director', 'supervisor', 'negotiator'],
  },
  {
    title: "Missions",
    href: "/requests",
    icon: ClipboardList,
    roles: ['admin', 'director', 'dg'],
  },
  {
    title: "Executive Approvals",
    href: "/approvals",
    icon: FileCheck,
    roles: ['dg', 'admin'],
  },
  {
    title: "Active Trainings",
    href: "/training",
    icon: GraduationCap,
    roles: ['supervisor', 'admin', 'director'],
  },
  {
    title: "Negotiation Deals",
    href: "/deals",
    icon: Briefcase,
    roles: ['negotiator', 'admin'],
  },
  {
    title: "Technical Comms",
    href: "/comms",
    icon: MessageSquare,
    roles: ['negotiator', 'admin'],
  },
  {
    title: "Personnel Intelligence",
    href: "/staff",
    icon: Users,
    roles: ['admin', 'director', 'supervisor'],
  },
  {
    title: "Technical Ledger",
    href: "/agreements",
    icon: FileText,
    roles: ['dg', 'admin', 'director', 'negotiator'],
  },
  {
    title: "System Analytics",
    href: "/reports",
    icon: BarChart3,
    roles: ['admin', 'dg', 'director'],
  },
  {
    title: "Audit Trail",
    href: "/history",
    icon: History,
    roles: ['admin', 'dg'],
  },
  {
    title: "User Control",
    href: "/users",
    icon: Users,
    roles: ['admin'],
  },
  {
    title: "Configuration",
    href: "/settings",
    icon: Settings,
    roles: ['admin', 'director'],
  },
];

export const getNavItemsForRole = (role: Role) => {
  const roleRoot = role === 'client' ? '/dashboard' : `/${role}`;
  
  return NAV_ITEMS.filter(item => item.roles.includes(role)).map(item => {
    let href = item.href;
    
    if (href === "/dashboard") {
      return { ...item, href: roleRoot };
    }
    
    // Prefix other routes with role root
    return { ...item, href: `${roleRoot}${href}` };
  });
};

export const getRoleLabel = (role: Role): string => {
  const labels: Record<Role, string> = {
    admin: "System Administrator",
    dg: "Director General",
    director: "Training Director",
    supervisor: "Operations Supervisor",
    negotiator: "Lead Negotiator",
    client: "Client Representative"
  };
  return labels[role];
};
