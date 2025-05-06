import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Leaf, ShoppingCart, ArrowLeft } from "lucide-react";
import { bonsais } from "@/data/bonsais";
import { Bonsai } from "@/types/bonsai";
import { useCart } from "@/context/CartContext";

const BonsaiDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [bonsai, setBonsai] = useState<Bonsai | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulando fetch de dados
    setLoading(true);
    setTimeout(() => {
      const foundBonsai = bonsais.find((b) => b.id === id);
      setBonsai(foundBonsai || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 flex justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-4xl">
            <div className="h-96 bg-muted rounded-lg"></div>
            <div className="space-y-3">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!bonsai) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Bonsai não encontrado
          </h2>
          <p className="text-muted-foreground mb-6">
            O bonsai que você está procurando não está disponível.
          </p>
          <Link to="/catalogo">
            <Button>Voltar ao Catálogo</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(bonsai, quantity);
  };

  const getCareLevelLabel = (level: Bonsai["careLevel"]) => {
    switch (level) {
      case "beginner":
        return "Iniciante";
      case "intermediate":
        return "Intermediário";
      case "expert":
        return "Avançado";
      default:
        return level;
    }
  };

  const getCategoryLabel = (category: Bonsai["category"]) => {
    switch (category) {
      case "shohin":
        return "Shohin";
      case "mame":
        return "Mame";
      case "chuhin":
        return "Chuhin";
      case "dai":
        return "Dai";
      case "penjing":
        return "Penjing";
      case "indoor":
        return "Interior";
      case "outdoor":
        return "Exterior";
      default:
        return category;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/catalogo" className="flex items-center text-bonsai-green mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar ao Catálogo
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="zen-box overflow-hidden rounded-lg">
            <img
              src={bonsai.imageUrl}
              alt={bonsai.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 rounded-full text-sm bg-bonsai-sand-dark/30">
                  {getCategoryLabel(bonsai.category)}
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-bonsai-green/10 text-bonsai-green">
                  {getCareLevelLabel(bonsai.careLevel)}
                </span>
              </div>
              <h1 className="font-serif text-3xl font-bold">{bonsai.name}</h1>
              <div className="flex items-center mt-2">
                <div className="text-2xl font-semibold text-bonsai-green">
                  R$ {bonsai.price.toFixed(2)}
                </div>
                {bonsai.stock <= 3 && (
                  <span className="ml-3 text-sm text-orange-600">
                    Apenas {bonsai.stock} em estoque
                  </span>
                )}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="font-serif text-xl font-semibold mb-2">Sobre este Bonsai</h2>
              <p className="text-muted-foreground">{bonsai.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="zen-box p-4 text-center">
                <span className="text-sm text-muted-foreground">Idade</span>
                <p className="font-semibold">{bonsai.age} anos</p>
              </div>
              <div className="zen-box p-4 text-center">
                <span className="text-sm text-muted-foreground">Altura</span>
                <p className="font-semibold">{bonsai.height} cm</p>
              </div>
              <div className="zen-box p-4 text-center">
                <span className="text-sm text-muted-foreground">Cuidado</span>
                <p className="font-semibold">{getCareLevelLabel(bonsai.careLevel)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="px-3 py-2 border-r"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="px-3 py-2 min-w-[40px] text-center">{quantity}</div>
                <button
                  onClick={() => quantity < bonsai.stock && setQuantity(quantity + 1)}
                  className="px-3 py-2 border-l"
                  disabled={quantity >= bonsai.stock}
                >
                  +
                </button>
              </div>
              
              <Button
                className="flex-1 bg-bonsai-green hover:bg-bonsai-green/90 text-white"
                onClick={handleAddToCart}
                disabled={bonsai.stock === 0}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Adicionar ao Carrinho
              </Button>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg flex items-start space-x-3 mt-4">
              <Leaf className="h-5 w-5 text-bonsai-green mt-0.5" />
              <div>
                <p className="text-sm font-medium">Informação de cuidado</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {bonsai.careLevel === "beginner"
                    ? "Este bonsai é ideal para iniciantes, necessitando de cuidados básicos. Regue regularmente e mantenha em local com luz indireta."
                    : bonsai.careLevel === "intermediate"
                    ? "Este bonsai requer atenção moderada. Precisa de rega controlada e poda ocasional para manter sua forma e saúde."
                    : "Este bonsai exige cuidados especializados. Requer conhecimento sobre técnicas avançadas de poda, posicionamento e manutenção sazonal."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BonsaiDetail;
