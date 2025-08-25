
import React from 'react';
import { Target, Eye, Heart, Zap, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromisso com o cliente",
      description: "Colocamos as necessidades do cliente no centro de tudo o que fazemos."
    },
    {
      icon: Zap,
      title: "Excelência e simplicidade",
      description: "Oferecemos soluções eficientes, práticas e fáceis de usar."
    },
    {
      icon: Shield,
      title: "Transparência",
      description: "Atuamos com ética, integridade e comunicação clara."
    },
    {
      icon: Target,
      title: "Inovação constante",
      description: "Buscamos sempre evoluir e oferecer o que há de mais moderno."
    },
    {
      icon: Users,
      title: "Parceria e confiança",
      description: "Construímos relações duradouras baseadas em respeito e resultados."
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-brand-cream/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Sobre a Alfha
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand mb-4 sm:mb-6">
            Especialistas em Gestão Empresarial
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand/80 max-w-4xl mx-auto leading-relaxed px-4">
            A Alfha Gestão Empresarial é especializada em soluções inteligentes de gestão para 
            micro e pequenas empresas. Como revendedores autorizados do sistema eGestor, oferecemos 
            tecnologia acessível e suporte personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Company Description */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-brand/5">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-brand mb-4 sm:mb-6">
                Nossa História
              </h3>
              <p className="text-brand/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Nosso compromisso é impulsionar a produtividade, a organização e os resultados 
                dos negócios que estão em crescimento. Trabalhamos lado a lado com nossos clientes, 
                oferecendo não apenas um sistema, mas uma parceria estratégica completa.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 lg:p-6 bg-brand/5 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-secondary mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-brand/70">Anos de Experiência</div>
                </div>
                <div className="text-center p-3 sm:p-4 lg:p-6 bg-brand/5 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-secondary mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-brand/70">Clientes Atendidos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-right">
            {/* Mission */}
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-brand/5">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-brand-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold text-brand">Missão</h3>
              </div>
              <p className="text-brand/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                Facilitar a gestão de empresas em todo o Brasil, proporcionando soluções 
                tecnológicas completas e descomplicadas que promovam controle, organização 
                e crescimento sustentável aos nossos clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-brand/5">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-brand-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold text-brand">Visão</h3>
              </div>
              <p className="text-brand/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                Ser reconhecida como a principal parceira estratégica de micro e pequenas 
                empresas na transformação digital de seus processos de gestão, tornando o 
                eGestor o sistema mais utilizado e recomendado no mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="animate-fade-in">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-brand mb-4">
              Nossos Valores
            </h3>
            <p className="text-brand/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4">
              Os princípios que guiam nossa atuação e definem nosso compromisso com a excelência.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-lg border border-brand/5 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-brand-secondary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <value.icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-brand-secondary" />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brand mb-3 sm:mb-4">{value.title}</h4>
                <p className="text-brand/70 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
