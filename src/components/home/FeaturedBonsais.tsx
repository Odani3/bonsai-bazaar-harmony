
import { useState } from "react";
import { Link } from "react-router-dom";
import { bonsais } from "@/data/bonsais";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedBonsais = () => {
  const featuredBonsais = bonsais.filter(bonsai => bonsai.featured);
  
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-bonsai-dark">
            Bonsais em Destaque
          </h2>
          <p className="text-muted-foreground mt-2 max-w-lg">
            Nossa seleção de bonsais especiais, cultivados com dedicação e arte para trazer beleza para seu ambiente.
          </p>
        </div>
        <Link to="/catalogo" className="mt-4 md:mt-0">
          <Button variant="outline" className="border-bonsai-green text-bonsai-green hover:bg-bonsai-green hover:text-white">
            Ver Catálogo Completo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBonsais.map((bonsai) => (
          <Link to={`/bonsai/${bonsai.id}`} key={bonsai.id}>
            <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full zen-box group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={bonsai.imageUrl}
                  alt={bonsai.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {bonsai.category}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-xl font-semibold mb-2">{bonsai.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-muted-foreground text-sm">
                      {bonsai.age} anos • {bonsai.height}cm
                    </p>
                    <p className="font-medium text-bonsai-green text-lg mt-1">
                      R$ {bonsai.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-muted">
                    {bonsai.careLevel === "beginner" && "Iniciante"}
                    {bonsai.careLevel === "intermediate" && "Intermediário"}
                    {bonsai.careLevel === "expert" && "Avançado"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBonsais;
