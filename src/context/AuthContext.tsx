
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AuthState, User } from "../types/auth";
import { toast } from "@/components/ui/use-toast";

interface AuthContextProps {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Mock user data
const MOCK_USERS = [
  { id: "1", name: "Professor", email: "eduardotrauer@gmail.com", password: "melhorprofessor", role: "customer" as const },
  { id: "2", name: "Admin", email: "admin@bonsai.com", password: "admin123", role: "admin" as const }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("bonsaiUser");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser) as User;
        setAuthState({
          user,
          isAuthenticated: true,
          loading: false,
          error: null,
        });
      } catch (error) {
        localStorage.removeItem("bonsaiUser");
        setAuthState({
          user: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        });
      }
    } else {
      setAuthState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      const user = MOCK_USERS.find((u) => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error("Credenciais inválidas");
      }
      
      const { password: _, ...userData } = user;
      localStorage.setItem("bonsaiUser", JSON.stringify(userData));
      
      setAuthState({
        user: userData,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
      
      toast({
        title: "Login realizado com sucesso",
        description: `Bem-vindo, ${userData.name}!`,
      });
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Erro ao fazer login",
      }));
      
      toast({
        variant: "destructive",
        title: "Erro de login",
        description: error instanceof Error ? error.message : "Erro ao fazer login",
      });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Check if email already exists
      if (MOCK_USERS.some((u) => u.email === email)) {
        throw new Error("Email já cadastrado");
      }
      
      // Create new user (in a real app, this would be an API call)
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        name,
        email,
        role: "customer" as const,
      };
      
      // In a real app, we would save the user to the database here
      localStorage.setItem("bonsaiUser", JSON.stringify(newUser));
      
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
      
      toast({
        title: "Registro realizado com sucesso",
        description: `Bem-vindo, ${name}!`,
      });
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Erro ao registrar",
      }));
      
      toast({
        variant: "destructive",
        title: "Erro de registro",
        description: error instanceof Error ? error.message : "Erro ao registrar",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("bonsaiUser");
    setAuthState({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    });
    
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso",
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
