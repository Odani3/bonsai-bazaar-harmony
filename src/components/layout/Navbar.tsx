
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
    <nav className="bg-white/80 backdrop-blur-md border-b border-bonsai-sand sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-bonsai-green rounded-full p-1.5">
              <Leaf className="h-5 w-5 text-white" />
            </span>
            <span className="font-serif text-xl font-bold text-bonsai-green">
              Bonsai<span className="text-bonsai-sand-dark">Bazaar</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalogo" className="text-bonsai-dark hover:text-bonsai-green transition-colors">
              Catálogo
            </Link>
            <Link to="/sobre" className="text-bonsai-dark hover:text-bonsai-green transition-colors">
              Sobre Nós
            </Link>
            <Link to="/cuidados" className="text-bonsai-dark hover:text-bonsai-green transition-colors">
              Cuidados
            </Link>
          </div>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-bonsai-dark" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-bonsai-dark" />
              <span className="sr-only">Carrinho</span>
            </Button>
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-bonsai-dark">Olá, {user?.name.split(' ')[0]}</span>
                <Button variant="outline" onClick={logout} className="text-bonsai-green border-bonsai-green hover:bg-bonsai-green hover:text-white">
                  Sair
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-bonsai-green hover:bg-bonsai-green/80 text-white flex items-center gap-2">
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
                <X className="h-5 w-5 text-bonsai-dark" /> : 
                <Menu className="h-5 w-5 text-bonsai-dark" />
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
              <div className="border-t border-bonsai-sand my-2"></div>
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
                    <Button className="bg-bonsai-green hover:bg-bonsai-green/80 text-white">
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
