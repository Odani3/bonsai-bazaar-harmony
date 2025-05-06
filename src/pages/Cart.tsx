
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { 
  ShoppingCart, 
  Trash2, 
  ChevronLeft, 
  Plus, 
  Minus,
  CreditCard 
} from "lucide-react";

const Cart = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal,
    getCartCount 
  } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho antes de finalizar a compra.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing payment
    setTimeout(() => {
      toast({
        title: "Pedido concluído!",
        description: "Seu pedido foi processado com sucesso.",
      });
      clearCart();
      navigate("/pedido-concluido");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
          <ShoppingCart className="h-7 w-7" />
          Carrinho de Compras
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="zen-box p-8 text-center">
                <div className="flex justify-center mb-4">
                  <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                </div>
                <h2 className="font-serif text-xl font-medium mb-2">Seu carrinho está vazio</h2>
                <p className="text-muted-foreground mb-6">
                  Adicione bonsais ao seu carrinho para continuar.
                </p>
                <Link to="/catalogo">
                  <Button>Explorar Catálogo</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.bonsai.id} className="zen-box p-4 flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={item.bonsai.imageUrl} 
                        alt={item.bonsai.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Link to={`/bonsai/${item.bonsai.id}`} className="font-serif text-lg font-medium hover:text-bonsai-green hover:underline">
                          {item.bonsai.name}
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10" 
                          onClick={() => removeFromCart(item.bonsai.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.bonsai.age} anos • {item.bonsai.height}cm
                      </p>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 p-0"
                            onClick={() => updateQuantity(item.bonsai.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 min-w-[30px] text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 p-0"
                            onClick={() => updateQuantity(item.bonsai.id, item.quantity + 1)}
                            disabled={item.quantity >= item.bonsai.stock}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="font-medium text-bonsai-green">
                          R$ {(item.bonsai.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-between">
                  <Button 
                    variant="ghost" 
                    className="text-muted-foreground"
                    onClick={clearCart}
                  >
                    Limpar Carrinho
                  </Button>
                  <Link to="/catalogo">
                    <Button variant="outline" className="flex items-center gap-2">
                      <ChevronLeft className="h-4 w-4" />
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="zen-box p-6">
              <h2 className="font-serif text-xl font-medium mb-4">Resumo do Pedido</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Quantidade de itens</span>
                  <span>{getCartCount()}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>R$ {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Frete</span>
                  <span className="text-bonsai-green">Grátis</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span className="text-bonsai-green">R$ {getCartTotal().toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-bonsai-green hover:bg-bonsai-green/90"
                onClick={handleCheckout}
                disabled={items.length === 0 || isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent border-white rounded-full"></div>
                    Processando...
                  </div>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Finalizar Compra
                  </>
                )}
              </Button>
              
              <div className="mt-4 bg-muted/50 p-3 rounded-md">
                <p className="text-xs text-muted-foreground text-center">
                  Pagamentos processados com segurança
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
