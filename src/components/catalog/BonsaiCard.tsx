
import { Link } from "react-router-dom";
import { Bonsai } from "@/types/bonsai";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface BonsaiCardProps {
  bonsai: Bonsai;
}

const BonsaiCard = ({ bonsai }: BonsaiCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(bonsai, 1);
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
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full zen-box group">
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/bonsai/${bonsai.id}`}>
          <img
            src={bonsai.imageUrl}
            alt={bonsai.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {getCategoryLabel(bonsai.category)}
          </div>
        </Link>
      </div>
      <CardContent className="p-5">
        <Link to={`/bonsai/${bonsai.id}`}>
          <h3 className="font-serif text-xl font-semibold mb-2">{bonsai.name}</h3>
        </Link>
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-muted-foreground text-sm">
              {bonsai.age} anos • {bonsai.height}cm
            </p>
            <p className="font-medium text-bonsai-green text-lg mt-1">
              R$ {bonsai.price.toFixed(2)}
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-muted">
            {getCareLevelLabel(bonsai.careLevel)}
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <Link to={`/bonsai/${bonsai.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-bonsai-green text-bonsai-green hover:bg-bonsai-green hover:text-white">
              Detalhes
            </Button>
          </Link>
          <Button 
            size="icon" 
            className="bg-bonsai-green hover:bg-bonsai-green/80"
            onClick={handleAddToCart}
            disabled={bonsai.stock === 0}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BonsaiCard;
