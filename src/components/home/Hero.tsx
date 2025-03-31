
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-hikari-gold/10 to-transparent">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Left column with text */}
        <div className="md:w-1/2 space-y-6 md:pr-12 text-center md:text-left">
          <div className="mb-6 mx-auto md:mx-0 max-w-[160px]">
            <img
              src="/lovable-uploads/95378e80-8a44-4438-8cc2-1373a0439f9f.png"
              alt="HIKARI Bonsai Logo"
              className="w-full h-auto"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Descubra a<br />
            <span className="text-hikari-burgundy">Harmonia Natural</span><br />
            dos Bonsais
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Traga a paz e beleza dos jardins japoneses para o seu espaço com nossa seleção de bonsais cuidadosamente cultivados por especialistas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/catalogo">
              <Button size="lg" className="bg-hikari-burgundy hover:bg-hikari-burgundy/80">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cuidados">
              <Button size="lg" variant="outline" className="border-hikari-burgundy text-hikari-burgundy hover:bg-hikari-burgundy hover:text-white">
                Guia de Cuidados
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center md:justify-start gap-8 pt-4">
            <div>
              <p className="font-serif text-2xl font-bold text-hikari-burgundy">15+</p>
              <p className="text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-hikari-burgundy">300+</p>
              <p className="text-sm text-muted-foreground">Bonsais Cultivados</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-hikari-burgundy">1.2k+</p>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
        
        {/* Right column with image */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-full bg-hikari-gold/30 -translate-x-4 -translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
              alt="Bonsai majestoso"
              className="relative z-10 rounded-full object-cover aspect-square shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-full shadow-lg zen-box z-20">
              <p className="font-serif text-lg font-medium text-hikari-burgundy">Harmonia</p>
              <p className="text-sm text-muted-foreground">Na palma da sua mão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
