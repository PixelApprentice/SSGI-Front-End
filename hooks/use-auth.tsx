"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '@/lib/mock-data';
import { Role } from '@/lib/navigation-config';

interface User {
  email: string;
  role: Role;
  name: string;
  initials: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem('ssgi_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate backend validation
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = {
        email: foundUser.email,
        role: foundUser.role as Role,
        name: foundUser.name,
        initials: foundUser.initials
      };
      setUser(userData);
      localStorage.setItem('ssgi_user', JSON.stringify(userData));
      
      // Strict role-based redirect
      const dashboardPaths: Record<Role, string> = {
        admin: '/admin',
        dg: '/dg',
        director: '/director',
        supervisor: '/supervisor',
        negotiator: '/negotiator',
        client: '/dashboard'
      };
      
      router.push(dashboardPaths[userData.role]);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ssgi_user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
