
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { ArrowRight, Leaf, CheckCircle2 } from "lucide-react";

const Landing = () => {
  // Assegura que a página role para o topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header simples */}
      <header className="bg-white/90 backdrop-blur-md py-4 border-b border-hikari-gold/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-hikari-burgundy rounded-full p-1.5">
              <Leaf className="h-5 w-5 text-white" />
            </span>
            <span className="font-serif text-xl font-bold text-hikari-burgundy">
              HIKARI<span className="text-hikari-gold">Bonsai</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/catalogo" className="text-hikari-dark hover:text-hikari-burgundy transition-colors">
              Catálogo
            </Link>
            <Link to="/sobre" className="text-hikari-dark hover:text-hikari-burgundy transition-colors">
              Sobre Nós
            </Link>
            <Link to="/" className="bg-hikari-burgundy text-white px-6 py-2 rounded-md hover:bg-hikari-burgundy/90 transition-colors">
              Entrar
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section com grande imagem de fundo */}
      <section className="bg-gradient-to-b from-hikari-gold/20 to-white py-16 md:py-24 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1507988914355-bf49fdacce38')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 text-hikari-burgundy">
              Descubra a Arte Milenar <br />dos Bonsais
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em um mundo onde natureza e arte se encontram. Nossos bonsais são cultivados com tradição e cuidado para trazer harmonia ao seu lar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalogo">
                <Button size="lg" className="bg-hikari-burgundy hover:bg-hikari-burgundy/80 text-lg">
                  Explorar Catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="border-hikari-burgundy text-hikari-burgundy hover:bg-hikari-burgundy/10 text-lg">
                  Conheça Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-hikari-dark">
              Benefícios dos Bonsais HIKARI
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Mais do que plantas decorativas, nossos bonsais são uma experiência completa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="zen-box p-6 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-hikari-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-hikari-burgundy" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-center mb-2">Qualidade Premium</h3>
              <p className="text-muted-foreground text-center">
                Cada bonsai é cuidadosamente cultivado e selecionado por nossos especialistas.
              </p>
            </div>
            
            <div className="zen-box p-6 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-hikari-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-hikari-burgundy" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-center mb-2">Suporte Especializado</h3>
              <p className="text-muted-foreground text-center">
                Oferecemos orientação completa para o cuidado do seu bonsai após a compra.
              </p>
            </div>
            
            <div className="zen-box p-6 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-hikari-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-hikari-burgundy" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-center mb-2">Entrega Segura</h3>
              <p className="text-muted-foreground text-center">
                Embalagem especial que garante que seu bonsai chegue perfeito à sua casa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Galeria de Imagens */}
      <section className="py-16 bg-hikari-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-hikari-dark">
              Galeria HIKARI
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Conheça alguns de nossos bonsais mais admirados.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                alt="Bonsai Hikari" 
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                alt="Bonsai Hikari" 
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1507988914355-bf49fdacce38" 
                alt="Bonsai Hikari" 
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1502394202744-021cfbb17454" 
                alt="Bonsai Hikari" 
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/catalogo">
              <Button className="bg-hikari-burgundy hover:bg-hikari-burgundy/80">
                Ver Catálogo Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-16 bg-hikari-burgundy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Comece Sua Jornada Zen Hoje
            </h2>
            <p className="text-lg mb-8 text-white/80 max-w-xl mx-auto">
              Transforme seu espaço com a beleza serena de um autêntico bonsai HIKARI e descubra os benefícios da arte milenar japonesa.
            </p>
            <Link to="/catalogo">
              <Button size="lg" variant="secondary" className="bg-hikari-gold text-hikari-burgundy hover:bg-hikari-gold/80">
                Escolher Meu Bonsai
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer simplificado */}
      <footer className="bg-hikari-dark text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} HIKARIBonsai. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
