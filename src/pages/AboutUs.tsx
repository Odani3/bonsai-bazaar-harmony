
import Layout from "@/components/layout/Layout";
import { Award, Book, Globe, Handshake, Leaf, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4 text-hikari-burgundy">Sobre a HIKARI Bonsai</h1>
          <div className="w-24 h-1 bg-hikari-gold mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Compartilhando a arte, a tradição e a beleza dos bonsais com o Brasil desde 2017.
          </p>
        </div>
        
        {/* História */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-hikari-burgundy">Nossa História</h2>
            <div className="w-16 h-0.5 bg-hikari-gold"></div>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 17 de janeiro de 2017, a Hikari Bonsai é uma loja especializada em bonsai, 
              localizada em Curitiba, PR. A loja é liderada por um imigrante japonês, de 45 anos, 
              que trouxe consigo a tradição e o respeito pelo cultivo de bonsais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde o seu início, a loja não apenas comercializa plantas, mas também atua como um espaço 
              de aprendizado, oferecendo workshops, cursos online, e participando ativamente da comunidade local.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Durante a pandemia de Covid-19, a loja manteve-se ativa com vendas online, e o proprietário 
              continuou investindo em ações de marketing no ambiente digital para manter o relacionamento com os clientes.
            </p>
          </div>
          <div className="bg-hikari-cream rounded-lg p-8 border border-hikari-gold/30">
            <blockquote className="italic text-hikari-burgundy/90 font-serif text-lg leading-relaxed relative">
              <span className="absolute text-6xl text-hikari-gold/20 -top-6 -left-4">"</span>
              Na Hikari Bonsai, cada árvore conta uma história e carrega consigo séculos de sabedoria e tradição. 
              Nossa missão é compartilhar essa arte milenar, combinando o respeito à tradição japonesa com 
              a inovação necessária para inspirar novas gerações.
              <span className="absolute text-6xl text-hikari-gold/20 -bottom-10 -right-4">"</span>
            </blockquote>
            <div className="mt-6 text-right">
              <p className="font-semibold text-hikari-burgundy">Fundador da Hikari Bonsai</p>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-hikari-burgundy">Missão, Visão e Valores</h2>
            <div className="w-24 h-0.5 bg-hikari-gold mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-hikari-gold/20 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-hikari-burgundy w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-center text-hikari-burgundy mb-4">Missão</h3>
                <p className="text-muted-foreground text-center">
                  Compartilhar a arte do bonsai e a cultura japonesa, inspirando e educando as pessoas a se conectarem 
                  com a natureza e promoverem práticas sustentáveis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-hikari-gold/20 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-hikari-burgundy w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-center text-hikari-burgundy mb-4">Visão</h3>
                <p className="text-muted-foreground text-center">
                  Ser a referência em bonsai no Brasil e no mercado internacional, proporcionando uma experiência 
                  transformadora e inovadora para todas as gerações.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-hikari-gold/20 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-hikari-burgundy w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-center text-hikari-burgundy mb-4">Valores</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-hikari-gold" />
                    <span>Respeito à Natureza: Práticas sustentáveis em todas as áreas do negócio.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Handshake className="h-4 w-4 text-hikari-gold" />
                    <span>Ética e Responsabilidade: Condução transparente e íntegra dos negócios.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-hikari-gold" />
                    <span>Educação e Inovação: Disseminação contínua de conhecimento.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Mercado e Desafios */}
        <div className="bg-hikari-cream py-12 px-6 md:px-12 rounded-lg mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-hikari-burgundy mb-6 text-center">Mercado e Desafios</h2>
            <div className="w-24 h-0.5 bg-hikari-gold mx-auto mb-8"></div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                O mercado global de bonsais tem mostrado um crescimento significativo, impulsionado pelo aumento 
                do interesse por plantas domésticas e pela tendência de miniaturização. Em 2022, o mercado global 
                foi avaliado em aproximadamente 8,42 bilhões de dólares, e espera-se que atinja 24,59 bilhões de 
                dólares até 2031.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                No Brasil, o mercado de bonsai enfrenta desafios como logística para plantas vivas, escassez de insumos 
                especializados, e uma falta de conhecimento generalizada sobre o cuidado adequado. A Hikari Bonsai, 
                ciente desses desafios, trabalha ativamente para educar seus clientes e se posicionar como uma 
                autoridade em bonsai no Brasil.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-white rounded-lg border border-hikari-gold/20">
                  <h3 className="font-medium text-hikari-burgundy mb-2">Educação Limitada</h3>
                  <p className="text-sm text-muted-foreground">
                    Muitos brasileiros não compreendem as complexidades do cultivo de bonsai, tornando necessário um 
                    esforço educacional constante.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-hikari-gold/20">
                  <h3 className="font-medium text-hikari-burgundy mb-2">Logística</h3>
                  <p className="text-sm text-muted-foreground">
                    A entrega de bonsai por meio do comércio eletrônico exige cuidados especiais, aumentando os custos 
                    e os riscos envolvidos.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-hikari-gold/20">
                  <h3 className="font-medium text-hikari-burgundy mb-2">Concorrência</h3>
                  <p className="text-sm text-muted-foreground">
                    Concorrência por lojas orientadas ao preço, sem demonstrar o devido respeito para com as plantas 
                    e a arte do bonsai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Estratégias e Público */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-hikari-burgundy">Estratégias e Público-Alvo</h2>
            <div className="w-24 h-0.5 bg-hikari-gold mx-auto mt-4 mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hikari-burgundy">Estratégias de Expansão</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Hikari Bonsai está focada em rejuvenescer o mercado de bonsai, buscando atrair as gerações Z e Alfa. 
                Nossa estratégia digital inclui:
              </p>
              <ul className="space-y-3 pl-6 list-disc text-muted-foreground">
                <li>Lives e Workshops Online: Atraindo novos entusiastas e criando uma comunidade digital.</li>
                <li>Conteúdo no YouTube: Focado em educação e instrução técnica para quem deseja aprender mais sobre bonsai.</li>
                <li>Feiras e Eventos Locais: Participação em feiras regionais e festivais como o Hanami Matsuri.</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hikari-burgundy">Nosso Público</h3>
              <p className="text-muted-foreground leading-relaxed">
                Definir perfis de Clientes Ideais é crucial para segmentar o mercado e desenvolver estratégias de marketing 
                eficazes. Hikari Bonsai busca atender desde entusiastas tradicionais até as novas gerações, com foco em:
              </p>
              <ul className="space-y-3 pl-6 list-disc text-muted-foreground">
                <li>Clientes com interesse genuíno na arte do bonsai e que buscam ativamente produtos e conhecimentos.</li>
                <li>Pessoas que valorizam sustentabilidade, cultura e educação.</li>
                <li>Entusiastas dispostos a se tornarem defensores da marca, recomendando-a a outros.</li>
                <li>Gerações Y, Z e Alfa, que respondem bem a conteúdo visual interativo e compartilham suas experiências online.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-hikari-burgundy text-white py-12 px-6 rounded-lg">
          <h2 className="font-serif text-3xl font-semibold mb-4">Junte-se à Nossa Comunidade</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Visite nossa loja física em Curitiba ou participe de nossos workshops e eventos online. 
            Juntos, podemos cultivar não apenas bonsais, mas também uma comunidade apaixonada por esta arte milenar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/catalogo" 
              className="bg-hikari-gold text-hikari-burgundy px-6 py-3 rounded-md font-medium hover:bg-hikari-gold/90 transition-colors"
            >
              Explorar Catálogo
            </a>
            <a 
              href="/contato" 
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
