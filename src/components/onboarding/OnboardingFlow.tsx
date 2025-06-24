
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Sparkles, Wallet } from "lucide-react";
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
        { 
          value: "beginner", 
          label: "Iniciante", 
          description: "Nunca tive um bonsai",
          icon: "🌱"
        },
        { 
          value: "intermediate", 
          label: "Intermediário", 
          description: "Já cuidei de plantas antes",
          icon: "🌿"
        },
        { 
          value: "expert", 
          label: "Experiente", 
          description: "Tenho experiência com bonsais",
          icon: "🌳"
        }
      ]
    },
    {
      id: "timeAtHome",
      title: "Quanto tempo você passa em casa?",
      description: "Alguns bonsais precisam de mais atenção diária",
      options: [
        { 
          value: "little", 
          label: "Pouco tempo", 
          description: "Trabalho muito fora de casa",
          icon: "🏃"
        },
        { 
          value: "moderate", 
          label: "Tempo moderado", 
          description: "Home office ocasional",
          icon: "⚖️"
        },
        { 
          value: "much", 
          label: "Muito tempo", 
          description: "Trabalho de casa ou aposentado",
          icon: "🏠"
        }
      ]
    },
    {
      id: "mainGoal",
      title: "Qual é seu principal objetivo?",
      description: "Queremos encontrar o bonsai perfeito para você",
      options: [
        { 
          value: "decoration", 
          label: "Decoração", 
          description: "Quero embelezar meu espaço",
          icon: "✨"
        },
        { 
          value: "hobby", 
          label: "Hobby", 
          description: "Quero aprender a arte do bonsai",
          icon: "🎨"
        },
        { 
          value: "relaxation", 
          label: "Relaxamento", 
          description: "Busco paz e tranquilidade",
          icon: "🧘"
        }
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

    if (answers.experience === "beginner") {
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "beginner");
    } else if (answers.experience === "intermediate") {
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "beginner" || b.careLevel === "intermediate");
    }

    if (answers.timeAtHome === "little") {
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "beginner" || b.name.includes("Ficus"));
    }

    if (answers.mainGoal === "decoration") {
      filteredBonsais = filteredBonsais.filter(b => b.category === "indoor" || b.name.includes("Acer"));
    } else if (answers.mainGoal === "hobby") {
      filteredBonsais = filteredBonsais.filter(b => b.careLevel === "intermediate" || b.careLevel === "expert");
    }

    if (filteredBonsais.length === 0) {
      return bonsais.find(b => b.name.includes("Ficus")) || bonsais[0];
    }

    return filteredBonsais[Math.floor(Math.random() * filteredBonsais.length)];
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
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
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-hikari-dark via-gray-900 to-hikari-dark rounded-2xl p-8 text-center border border-hikari-gold/20">
          <div className="w-20 h-20 bg-gradient-to-br from-hikari-gold to-hikari-gold/60 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-hikari-dark" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Sua Recomendação Personalizada
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Baseado nas suas respostas, encontramos o bonsai perfeito para você!
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
            <img
              src={recommendation.imageUrl}
              alt={recommendation.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">
              {recommendation.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {recommendation.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="bg-hikari-gold/20 text-hikari-gold px-4 py-2 rounded-full text-sm font-medium">
                {recommendation.careLevel === "beginner" ? "Iniciante" : 
                 recommendation.careLevel === "intermediate" ? "Intermediário" : "Experiente"}
              </span>
              <span className="font-bold text-2xl text-hikari-gold">
                R$ {recommendation.price}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`/bonsai/${recommendation.id}`} className="flex-1">
              <Button className="w-full bg-hikari-gold hover:bg-hikari-gold/80 text-hikari-dark font-semibold h-12 text-lg">
                Ver Detalhes
              </Button>
            </Link>
            <Link to="/catalogo" className="flex-1">
              <Button variant="outline" className="w-full border-hikari-gold/30 text-hikari-gold hover:bg-hikari-gold/10 h-12 text-lg">
                Explorar Catálogo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-white/70">
            Passo {currentStep + 1} de {questions.length}
          </span>
          <span className="text-sm text-hikari-gold font-medium">
            {Math.round(((currentStep + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-hikari-gold to-hikari-gold/60 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question card */}
      <div className="bg-gradient-to-br from-hikari-dark via-gray-900 to-hikari-dark rounded-2xl border border-hikari-gold/20 overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              {currentQuestion.title}
            </h2>
            <p className="text-gray-300 text-lg">
              {currentQuestion.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {currentQuestion.options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleAnswerChange(currentQuestion.id, option.value)}
                className={`
                  relative cursor-pointer group transition-all duration-300 transform hover:scale-105
                  ${answers[currentQuestion.id as keyof OnboardingAnswers] === option.value 
                    ? 'ring-2 ring-hikari-gold shadow-lg shadow-hikari-gold/20' 
                    : 'hover:ring-1 hover:ring-white/30'
                  }
                `}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {option.label}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  
                  {answers[currentQuestion.id as keyof OnboardingAnswers] === option.value && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 bg-hikari-gold rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-hikari-dark rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="bg-hikari-gold hover:bg-hikari-gold/80 text-hikari-dark font-semibold flex items-center gap-2 disabled:opacity-50"
            >
              {currentStep === questions.length - 1 ? "Ver Recomendação" : "Próximo"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
