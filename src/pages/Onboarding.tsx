
import { useEffect } from "react";
import OnboardingFlow from "@/components/onboarding/OnboardingFlow";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-hikari-gold/10 to-white">
      {/* Header simples */}
      <header className="bg-white/90 backdrop-blur-md py-4 border-b border-hikari-gold/30">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <span className="bg-hikari-burgundy rounded-full p-1.5">
              <Leaf className="h-5 w-5 text-white" />
            </span>
            <span className="font-serif text-xl font-bold text-hikari-burgundy">
              HIKARI<span className="text-hikari-gold">Bonsai</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-hikari-dark mb-4">
            Encontre Seu Bonsai Ideal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Responda algumas perguntas rápidas e descobriremos qual bonsai combina perfeitamente com seu estilo de vida e experiência.
          </p>
        </div>

        <OnboardingFlow />
      </main>
    </div>
  );
};

export default Onboarding;
