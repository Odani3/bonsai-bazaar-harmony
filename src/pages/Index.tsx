
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedBonsais from "@/components/home/FeaturedBonsais";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedBonsais />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-bonsai-sand/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bonsai-dark">
              Por que escolher nossos Bonsais?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Nossos bonsais são cultivados com tradição, conhecimento e respeito pelos princípios da arte japonesa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="zen-box p-6 text-center">
              <div className="w-16 h-16 bg-bonsai-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bonsai-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a9 9 0 0 1 9 9c0 3.86-3.1 7.14-7 8.35V22h-4v-2.65C6.1 18.14 3 14.86 3 11a9 9 0 0 1 9-9zm0 2a7 7 0 0 0-7 7c0 3.17 2.5 5.77 6 6.32V13h2v4.32c3.5-.55 6-3.15 6-6.32a7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V6z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Cultivo Responsável</h3>
              <p className="text-muted-foreground">
                Todos os nossos bonsais são cultivados respeitando o meio ambiente e técnicas sustentáveis.
              </p>
            </div>
            
            <div className="zen-box p-6 text-center">
              <div className="w-16 h-16 bg-bonsai-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bonsai-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8.71l-5.333-5.333v2.666h-2.833c-3.883 0-7 3.117-7 7v1h1.917c0-2.758 2.225-5.083 5.083-5.083h2.833v2.667L19 8.71zm-7.667 10v-1.583h-3.5v-5.25h-1.75v8.75h5.25v-1.917z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Tradição & Expertise</h3>
              <p className="text-muted-foreground">
                Mais de 7 anos de experiência no cultivo de bonsais tradicionais e modernos.
              </p>
            </div>
            
            <div className="zen-box p-6 text-center">
              <div className="w-16 h-16 bg-bonsai-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bonsai-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 20h6V9H9v11zm0-13h6V4H9v3zM4 20h4V4H4v16zm13 0h3V4h-3v16z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Orientação Completa</h3>
              <p className="text-muted-foreground">
                Fornecemos instruções detalhadas e suporte para o cuidado adequado do seu bonsai.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center zen-box p-8 md:p-10">
          <svg className="h-8 w-8 text-bonsai-green mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.235.232-.398.58-.638 1.048-.722.52-.094 1.227-.013 2.15.337.48.174.98.142 1.415.48.433-.146.7-.44.816-.88s.087-.83-.046-1.195c-.13-.354-.37-.668-.68-.88-.93-.66-2.097-.643-2.93-.543-1.3.158-2.367.926-3.037 2.1-.675 1.175-.975 2.57-.958 4.02.01 1.36.257 2.44.683 3.324.43.894 1.05 1.62 1.855 2.005.81.384 1.77.572 2.89.572 1.015 0 1.937-.208 2.687-.6.77-.395 1.353-.92 1.77-1.562.414-.643.62-1.37.62-2.178v-.124c0-.9-.255-1.685-.769-2.255-.514-.57-1.155-.84-1.898-.84-.556 0-1.075.134-1.566.4s-.888.585-1.163 1.054c-.276.47-.41.934-.4 1.46v.125zm-.309 1.512c.199.48.57.782 1.085.782.475 0 .834-.175 1.08-.48.246-.306.376-.955.376-1.52 0-.936-.175-1.76-.481-1.96-.174-.17-.43-.254-.876-.254-.543 0-.936.198-1.084.594-.15.396-.193.96-.193 1.695 0 .502.031.924.093 1.143z"/>
          </svg>
          <p className="text-lg md:text-xl font-serif italic mb-6">
            Os bonsais da Hikari trouxeram uma nova energia para minha casa. A qualidade é excepcional e o suporte para cuidados é incrível. Recomendo a todos que buscam trazer um pouco da natureza para dentro de casa.
          </p>
          <div>
            <p className="font-serif text-bonsai-dark font-medium">Mariana Santos</p>
            <p className="text-sm text-muted-foreground">Cliente desde 2020</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
