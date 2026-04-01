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
    title: "Workspace",
    href: "/dashboard", // This will be mapped to role root
    icon: LayoutDashboard,
    roles: ['admin', 'dg', 'director', 'supervisor', 'negotiator'],
  },
  {
    title: "Approvals",
    href: "/approvals",
    icon: FileCheck,
    roles: ['dg', 'admin'],
  },
  {
    title: "Personnel",
    href: "/staff",
    icon: Users,
    roles: ['admin', 'director'],
  },
  {
    title: "Missions",
    href: "/requests",
    icon: ClipboardList,
    roles: ['admin', 'director', 'dg'],
  },
  {
    title: "Negotiations",
    href: "/negotiations",
    icon: Briefcase,
    roles: ['negotiator', 'supervisor', 'admin'],
  },
  {
    title: "Channels",
    href: "/comms",
    icon: MessageSquare,
    roles: ['negotiator', 'admin'],
  },
  {
    title: "Ledger",
    href: "/agreements",
    icon: FileText,
    roles: ['dg', 'admin', 'director', 'supervisor'],
  },
  {
    title: "Analytics",
    href: "/reports",
    icon: BarChart3,
    roles: ['admin', 'dg', 'director'],
  },
  {
    title: "Audit Trail",
    href: "/history",
    icon: History,
    roles: ['supervisor', 'admin', 'director'],
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
    
    // Map Workspace to the root of the role
    if (href === "/dashboard") {
      return { ...item, href: roleRoot };
    }
    
    // Prefix other routes with role root to ensure isolation
    return { ...item, href: `${roleRoot}${href}` };
  });
};
