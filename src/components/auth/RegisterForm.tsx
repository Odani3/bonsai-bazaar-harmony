
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem");
      return;
    }
    
    setPasswordError("");
    setIsSubmitting(true);
    
    try {
      await register(name, email, password);
      navigate("/");
    } catch (error) {
      console.error("Erro ao registrar:", error);
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
          <CardTitle className="text-2xl text-center font-serif">Criar Conta</CardTitle>
          <CardDescription className="text-center">
            Crie sua conta para começar a explorar nosso catálogo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-bonsai-sand"
              />
            </div>
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
              <Label htmlFor="password">Senha</Label>
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirme a Senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-bonsai-sand"
              />
              {passwordError && (
                <p className="text-xs text-destructive">{passwordError}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-bonsai-green hover:bg-bonsai-green-light"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registrando..." : "Criar Conta"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center">
            Já possui uma conta?{" "}
            <Link to="/login" className="text-bonsai-green hover:underline">
              Faça Login
            </Link>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Ao se registrar, você concorda com nossos{" "}
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

export default RegisterForm;
