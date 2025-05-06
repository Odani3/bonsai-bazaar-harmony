
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const OrderComplete = () => {
  const navigate = useNavigate();
  
  // If the user navigates directly to this page without completing an order,
  // redirect them to the catalog
  useEffect(() => {
    const hasCompletedOrder = sessionStorage.getItem("orderCompleted");
    if (!hasCompletedOrder) {
      navigate("/catalogo");
    } else {
      sessionStorage.removeItem("orderCompleted");
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-lg mx-auto text-center zen-box p-10">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-20 w-20 text-bonsai-green" />
          </div>
          
          <h1 className="font-serif text-3xl font-bold mb-4">
            Pedido Concluído!
          </h1>
          
          <p className="text-muted-foreground mb-6">
            Obrigado por sua compra! Seu pedido foi processado com sucesso e você receberá em breve um e-mail com os detalhes.
          </p>
          
          <div className="space-y-4">
            <Link to="/catalogo">
              <Button variant="outline" className="w-full">
                Continuar Comprando
              </Button>
            </Link>
            
            <Link to="/">
              <Button className="w-full bg-bonsai-green hover:bg-bonsai-green/90">
                Voltar à Página Inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderComplete;
