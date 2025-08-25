
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
    <section id="sobre" className="section-padding bg-gradient-to-b from-white to-brand-cream/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Sobre a Alfha
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand mb-6">
            Especialistas em Gestão Empresarial
          </h2>
          <p className="text-lg text-brand/80 max-w-3xl mx-auto leading-relaxed">
            A Alfha Gestão Empresarial é especializada em soluções inteligentes de gestão para 
            micro e pequenas empresas. Como revendedores autorizados do sistema eGestor, oferecemos 
            tecnologia acessível e suporte personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Description */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand/5">
              <h3 className="text-2xl font-heading font-semibold text-brand mb-6">
                Nossa História
              </h3>
              <p className="text-brand/80 mb-6 leading-relaxed">
                Nosso compromisso é impulsionar a produtividade, a organização e os resultados 
                dos negócios que estão em crescimento. Trabalhamos lado a lado com nossos clientes, 
                oferecendo não apenas um sistema, mas uma parceria estratégica completa.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-brand/5 rounded-lg">
                  <div className="text-2xl font-bold text-brand-secondary mb-1">5+</div>
                  <div className="text-sm text-brand/70">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-brand/5 rounded-lg">
                  <div className="text-2xl font-bold text-brand-secondary mb-1">500+</div>
                  <div className="text-sm text-brand/70">Clientes Atendidos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand">Missão</h3>
              </div>
              <p className="text-brand/80 leading-relaxed">
                Facilitar a gestão de empresas em todo o Brasil, proporcionando soluções 
                tecnológicas completas e descomplicadas que promovam controle, organização 
                e crescimento sustentável aos nossos clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand">Visão</h3>
              </div>
              <p className="text-brand/80 leading-relaxed">
                Ser reconhecida como a principal parceira estratégica de micro e pequenas 
                empresas na transformação digital de seus processos de gestão, tornando o 
                eGestor o sistema mais utilizado e recomendado no mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-brand mb-4">
              Nossos Valores
            </h3>
            <p className="text-brand/80 max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação e definem nosso compromisso com a excelência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-brand/5 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-brand-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-brand mb-3">{value.title}</h4>
                <p className="text-brand/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
