
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Leaf, Home, Award, Target, Clock, Heart } from "lucide-react";
import { bonsais } from "@/data/bonsais";
import { Link } from "react-router-dom";

interface OnboardingAnswer {
  experience?: string;
  timeAtHome?: string;
  goal?: string;
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<OnboardingAnswer>({});

  const questions = [
    {
      id: "experience",
      title: "Qual é o seu nível de experiência com bonsais?",
      subtitle: "Isso nos ajudará a sugerir o bonsai ideal para você",
      options: [
        {
          value: "beginner",
          title: "Iniciante",
          description: "Nunca tive um bonsai ou tenho pouca experiência",
          icon: <Leaf className="h-8 w-8 text-emerald-600" />
        },
        {
          value: "intermediate", 
          title: "Intermediário",
          description: "Já cuidei de alguns bonsais e tenho conhecimento básico",
          icon: <Home className="h-8 w-8 text-emerald-600" />
        },
        {
          value: "expert",
          title: "Experiente",
          description: "Tenho anos de experiência e cultivo vários bonsais",
          icon: <Award className="h-8 w-8 text-emerald-600" />
        }
      ]
    },
    {
      id: "timeAtHome",
      title: "Quanto tempo você passa em casa?",
      subtitle: "Isso determina se você pode cuidar de espécies que precisam de mais atenção",
      options: [
        {
          value: "little",
          title: "Pouco tempo",
          description: "Trabalho fora e viajo com frequência",
          icon: <Clock className="h-8 w-8 text-amber-600" />
        },
        {
          value: "moderate",
          title: "Tempo moderado",
          description: "Trabalho em casa algumas vezes na semana",
          icon: <Home className="h-8 w-8 text-amber-600" />
        },
        {
          value: "lots",
          title: "Muito tempo",
          description: "Estou em casa na maior parte do tempo",
          icon: <Heart className="h-8 w-8 text-amber-600" />
        }
      ]
    },
    {
      id: "goal",
      title: "Qual é o seu principal objetivo?",
      subtitle: "Entender sua motivação nos ajuda a fazer a melhor recomendação",
      options: [
        {
          value: "decoration",
          title: "Decoração",
          description: "Quero embelezar meu ambiente",
          icon: <Home className="h-8 w-8 text-rose-600" />
        },
        {
          value: "hobby",
          title: "Hobby relaxante",
          description: "Busco uma atividade para relaxar e me conectar com a natureza",
          icon: <Leaf className="h-8 w-8 text-rose-600" />
        },
        {
          value: "collection",
          title: "Coleção",
          description: "Quero começar ou expandir minha coleção de bonsais",
          icon: <Target className="h-8 w-8 text-rose-600" />
        }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setCurrentStep(questions.length);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const { experience, timeAtHome, goal } = answers;
    
    if (experience === "beginner") {
      return bonsais.find(b => b.careLevel === "beginner") || bonsais[0];
    }
    
    if (experience === "expert") {
      return bonsais.find(b => b.careLevel === "expert") || bonsais[0];
    }
    
    if (timeAtHome === "little") {
      return bonsais.find(b => b.careLevel === "beginner" && b.category === "indoor") || bonsais[0];
    }
    
    return bonsais.find(b => b.careLevel === "intermediate") || bonsais[0];
  };

  const resetOnboarding = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  if (currentStep >= questions.length) {
    const recommendation = getRecommendation();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <Card className="bg-white/70 backdrop-blur-sm border-sage-200 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                  <Leaf className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
                  Perfeito! Encontramos o bonsai ideal para você
                </h2>
                <p className="text-sage-600 text-lg mb-8">
                  Com base nas suas respostas, recomendamos:
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-8 mb-8 border border-sage-200">
                <img 
                  src={recommendation.imageUrl} 
                  alt={recommendation.name}
                  className="w-32 h-32 object-cover rounded-xl mx-auto mb-6 shadow-lg"
                />
                <h3 className="text-2xl font-serif font-bold text-sage-800 mb-2">
                  {recommendation.name}
                </h3>
                <p className="text-sage-600 mb-4">
                  Nível: {recommendation.careLevel === 'beginner' ? 'Iniciante' : 
                          recommendation.careLevel === 'intermediate' ? 'Intermediário' : 'Experiente'}
                </p>
                <p className="text-sage-700 leading-relaxed">
                  {recommendation.description}
                </p>
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-sage-600">
                  <span>Idade: {recommendation.age} anos</span>
                  <span>•</span>
                  <span>Altura: {recommendation.height}cm</span>
                  <span>•</span>
                  <span>R$ {recommendation.price}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/bonsai/${recommendation.id}`}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                    Ver Detalhes
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={resetOnboarding}
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
                >
                  Refazer Teste
                </Button>
                <Link to="/catalogo">
                  <Button 
                    variant="ghost" 
                    className="text-sage-600 hover:text-sage-800 hover:bg-sage-100 px-8 py-3 text-lg"
                  >
                    Ver Catálogo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Leaf className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-4">
            {currentQuestion.title}
          </h1>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto">
            {currentQuestion.subtitle}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentStep ? 'bg-emerald-500' : 'bg-sage-200'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-center text-sage-500 text-sm">
            Pergunta {currentStep + 1} de {questions.length}
          </p>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentQuestion.options.map((option) => (
            <Card
              key={option.value}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/60 backdrop-blur-sm border-sage-200 hover:border-emerald-300"
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white to-sage-50 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {option.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-serif font-bold text-sage-800 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    {option.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-sage-100">
                  <span className="text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                    Selecionar →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        {currentStep > 0 && (
          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              className="text-sage-600 hover:text-sage-800 hover:bg-sage-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingFlow;
