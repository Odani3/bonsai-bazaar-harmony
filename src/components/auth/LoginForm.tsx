
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]">
      <Card className="w-full max-w-md shadow-md zen-box">
        <CardHeader className="space-y-2">
          <div className="mx-auto bg-bonsai-green rounded-full p-3 mb-2">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl text-center font-serif">Bem-vindo de volta</CardTitle>
          <CardDescription className="text-center">
            Entre em sua conta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-bonsai-sand"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link to="/esqueci-senha" className="text-xs text-bonsai-green hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-bonsai-sand"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-bonsai-green hover:bg-bonsai-green-light"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center">
            Não tem uma conta?{" "}
            <Link to="/registro" className="text-bonsai-green hover:underline">
              Registre-se
            </Link>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Ao fazer login, você concorda com nossos{" "}
            <Link to="/termos" className="underline hover:text-bonsai-green">
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link to="/privacidade" className="underline hover:text-bonsai-green">
              Política de Privacidade
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
