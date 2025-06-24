
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { bonsais } from "@/data/bonsais";
import { Bonsai } from "@/types/bonsai";
import { Link } from "react-router-dom";

interface OnboardingAnswers {
  experience: string;
  timeAtHome: string;
  mainGoal: string;
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<OnboardingAnswers>({
    experience: "",
    timeAtHome: "",
    mainGoal: ""
  });
  const [recommendation, setRecommendation] = useState<Bonsai | null>(null);

  const questions = [
    {
      id: "experience",
      title: "Qual é sua experiência com bonsais?",
      description: "Isso nos ajuda a sugerir o nível de cuidado ideal",
      options: [
        { value: "beginner", label: "Iniciante - Nunca tive um bonsai" },
        { value: "intermediate", label: "Intermediário - Já cuidei de plantas antes" },
        { value: "expert", label: "Experiente - Tenho experiência com bonsais" }
      ]
    },
    {
      id: "timeAtHome",
      title: "Quanto tempo você passa em casa?",
      description: "Alguns bonsais precisam de mais atenção diária",
      options: [
        { value: "little", label: "Pouco tempo - Trabalho muito fora" },
        { value: "moderate", label: "Tempo moderado - Home office ocasional" },
        { value: "much", label: "Muito tempo - Trabalho de casa ou aposentado" }
      ]
    },
    {
      id: "mainGoal",
      title: "Qual é seu principal objetivo?",
      description: "Queremos encontrar o bonsai perfeito para você",
      options: [
        { value: "decoration", label: "Decoração - Quero embelezar meu espaço" },
        { value: "hobby", label: "Hobby - Quero aprender a arte do bonsai" },
        { value: "relaxation", label: "Relaxamento - Busco paz e tranquilidade" }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const getRecommendation = (): Bonsai => {
    // Lógica de recomendação baseada nas respostas
    let filteredBonsais = [...bonsais];

    // Filtrar por nível de experiência
    if (answers.experience === "beginner") {
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "beginner");
    } else if (answers.experience === "intermediate") {
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "beginner" || b.careLevel === "intermediate");
    }

    // Se pouco tempo em casa, preferir bonsais mais resistentes
    if (answers.timeAtHome === "little") {
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "beginner" || b.name.includes("Ficus"));
    }

    // Baseado no objetivo
    if (answers.mainGoal === "decoration") {
      // Preferir bonsais visualmente atraentes
      filteredBonsais = filteredBonsais.filter(b => b.category === "indoor" || b.name.includes("Acer"));
    } else if (answers.mainGoal === "hobby") {
      // Preferir bonsais que oferecem experiência de aprendizado
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "intermediate" || b.careLevel === "expert");
    }

    // Se nenhum bonsai passou nos filtros, retornar o Ficus (mais fácil)
    if (filteredBonsais.length === 0) {
      return bonsais.find(b => b.name.includes("Ficus")) || bonsais[0];
    }

    // Retornar uma recomendação aleatória dos filtrados
    return filteredBonsais[Math.floor(Math.random() * filteredBonsais.length)];
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Última pergunta - gerar recomendação
      const recommendedBonsai = getRecommendation();
      setRecommendation(recommendedBonsai);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const isStepComplete = () => {
    const currentQuestion = questions[currentStep];
    return currentQuestion && answers[currentQuestion.id as keyof OnboardingAnswers] !== "";
  };

  if (recommendation) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="zen-box p-8 text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-hikari-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-hikari-burgundy" />
            </div>
            <CardTitle className="font-serif text-2xl text-hikari-burgundy">
              Sua Recomendação Personalizada
            </CardTitle>
            <CardDescription>
              Baseado nas suas respostas, encontramos o bonsai perfeito para você!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white rounded-lg p-6 border">
              <img
                src={recommendation.imageUrl}
                alt={recommendation.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-semibold text-hikari-dark mb-2">
                {recommendation.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {recommendation.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="bg-hikari-gold/20 text-hikari-burgundy px-3 py-1 rounded-full">
                  {recommendation.careLevel === "beginner" ? "Iniciante" : 
                   recommendation.careLevel === "intermediate" ? "Intermediário" : "Experiente"}
                </span>
                <span className="font-semibold text-hikari-burgundy">
                  R$ {recommendation.price}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={`/bonsai/${recommendation.id}`} className="flex-1">
                <Button className="w-full bg-hikari-burgundy hover:bg-hikari-burgundy/80">
                  Ver Detalhes
                </Button>
              </Link>
              <Link to="/catalogo" className="flex-1">
                <Button variant="outline" className="w-full border-hikari-burgundy text-hikari-burgundy hover:bg-hikari-burgundy hover:text-white">
                  Ver Mais Opções
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Passo {currentStep + 1} de {questions.length}
          </span>
          <span className="text-sm text-hikari-burgundy font-medium">
            {Math.round(((currentStep + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-hikari-burgundy h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="zen-box">
        <CardHeader>
          <CardTitle className="font-serif text-xl text-hikari-dark">
            {currentQuestion.title}
          </CardTitle>
          <CardDescription>
            {currentQuestion.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={answers[currentQuestion.id as keyof OnboardingAnswers]}
            onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
            className="space-y-4"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-hikari-gold/10 transition-colors">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="bg-hikari-burgundy hover:bg-hikari-burgundy/80 flex items-center gap-2"
            >
              {currentStep === questions.length - 1 ? "Ver Recomendação" : "Próximo"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingFlow;
