
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hikari-burgundy text-white mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="bg-white rounded-full p-1.5">
                <Leaf className="h-5 w-5 text-hikari-burgundy" />
              </span>
              <span className="font-serif text-xl font-bold text-white">
                HIKARI<span className="text-hikari-gold">Bonsai</span>
              </span>
            </Link>
            <p className="text-sm max-w-xs text-white/80">
              Trazendo a harmonia da natureza em miniatura para o seu espaço.
              Cultivamos e selecionamos com cuidado cada bonsai para garantir beleza e qualidade.
            </p>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/catalogo" className="text-sm hover:underline">Catálogo</Link>
              <Link to="/sobre" className="text-sm hover:underline">Sobre Nós</Link>
              <Link to="/cuidados" className="text-sm hover:underline">Cuidados</Link>
              <Link to="/login" className="text-sm hover:underline">Login</Link>
              <Link to="/registro" className="text-sm hover:underline">Registrar</Link>
              <Link to="/contato" className="text-sm hover:underline">Contato</Link>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">Newsletter</h3>
            <p className="text-sm text-white/80">
              Receba dicas de cuidados, novidades e promoções exclusivas.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/20 text-white placeholder:text-white/60 px-3 py-2 rounded-md text-sm w-full focus:outline-none focus:ring-2 ring-white/30"
              />
              <button className="bg-hikari-gold text-hikari-burgundy px-3 py-2 rounded-md hover:bg-hikari-gold/90 transition-colors text-sm font-medium">
                Assinar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} HIKARIBonsai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
