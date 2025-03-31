
import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { authState, logout } = useAuth();
  const { isAuthenticated, user } = authState;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-hikari-gold sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-hikari-burgundy rounded-full p-1.5">
              <Leaf className="h-5 w-5 text-white" />
            </span>
            <span className="font-serif text-xl font-bold text-hikari-burgundy">
              HIKARI<span className="text-hikari-gold">Bonsai</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalogo" className="text-hikari-dark hover:text-hikari-burgundy transition-colors">
              Catálogo
            </Link>
            <Link to="/sobre" className="text-hikari-dark hover:text-hikari-burgundy transition-colors">
              Sobre Nós
            </Link>
            <Link to="/cuidados" className="text-hikari-dark hover:text-hikari-burgundy transition-colors">
              Cuidados
            </Link>
          </div>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-hikari-dark" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-hikari-dark" />
              <span className="sr-only">Carrinho</span>
            </Button>
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-hikari-dark">Olá, {user?.name.split(' ')[0]}</span>
                <Button variant="outline" onClick={logout} className="text-hikari-burgundy border-hikari-burgundy hover:bg-hikari-burgundy hover:text-white">
                  Sair
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-hikari-burgundy hover:bg-hikari-burgundy/80 text-white flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Entrar
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} size="icon">
              {isMenuOpen ? 
                <X className="h-5 w-5 text-hikari-dark" /> : 
                <Menu className="h-5 w-5 text-hikari-dark" />
              }
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/catalogo" className="px-3 py-2 rounded-md hover:bg-muted">
                Catálogo
              </Link>
              <Link to="/sobre" className="px-3 py-2 rounded-md hover:bg-muted">
                Sobre Nós
              </Link>
              <Link to="/cuidados" className="px-3 py-2 rounded-md hover:bg-muted">
                Cuidados
              </Link>
              <div className="border-t border-hikari-gold my-2"></div>
              <div className="flex justify-between items-center">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                {isAuthenticated ? (
                  <Button variant="outline" onClick={logout}>
                    Sair
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button className="bg-hikari-burgundy hover:bg-hikari-burgundy/80 text-white">
                      Entrar
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
