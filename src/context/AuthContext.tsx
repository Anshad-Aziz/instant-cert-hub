
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

interface User {
  id: string;
  companyName: string;
  email: string;
  plan: 'basic' | 'pro' | 'enterprise';
  certificatesUsed: number;
  certificateLimit: number;
  templateLimit: number;
  templatesUsed: number;
  subscriptionEnd: Date;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (companyName: string, email: string, password: string) => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const mockUsers = [
  {
    id: '1',
    companyName: 'TechNova Inc.',
    email: 'admin@technova.com',
    password: 'password',
    plan: 'pro' as const,
    certificatesUsed: 42,
    certificateLimit: 100,
    templateLimit: 3,
    templatesUsed: 2,
    subscriptionEnd: new Date('2025-12-31')
  },
  {
    id: '2',
    companyName: 'Demo Company',
    email: 'demo@example.com',
    password: 'demo',
    plan: 'basic' as const,
    certificatesUsed: 12,
    certificateLimit: 50,
    templateLimit: 2,
    templatesUsed: 1,
    subscriptionEnd: new Date('2025-12-31')
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('certifyProUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Convert date string back to Date object
      parsedUser.subscriptionEnd = new Date(parsedUser.subscriptionEnd);
      setUser(parsedUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        // Remove password before storing
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('certifyProUser', JSON.stringify(userWithoutPassword));
        
        toast.success("Login successful!");
        navigate('/dashboard');
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (companyName: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (mockUsers.some(u => u.email === email)) {
        toast.error("Email already exists");
        return;
      }
      
      const newUser = {
        id: String(mockUsers.length + 1),
        companyName,
        email,
        plan: 'basic' as const,
        certificatesUsed: 0,
        certificateLimit: 50,
        templateLimit: 2,
        templatesUsed: 0,
        subscriptionEnd: new Date(new Date().setMonth(new Date().getMonth() + 1))
      };
      
      setUser(newUser);
      localStorage.setItem('certifyProUser', JSON.stringify(newUser));
      
      toast.success("Registration successful!");
      navigate('/dashboard');
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('certifyProUser');
    navigate('/login');
    toast.success("Logged out successfully");
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('certifyProUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading, 
      login, 
      logout, 
      register,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
