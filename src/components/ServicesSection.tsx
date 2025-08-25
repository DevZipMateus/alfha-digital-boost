
import React from 'react';
import { 
  Settings, 
  Calculator, 
  Package, 
  BarChart3, 
  GraduationCap, 
  Database,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Implantação de Sistema ERP",
      description: "Parametrização completa do eGestor para a realidade da sua empresa, garantindo uma implantação rápida, eficiente e sem complicações.",
      features: ["Configuração personalizada", "Migração de dados", "Testes de funcionalidade", "Go-live assistido"]
    },
    {
      icon: Calculator,
      title: "Automação Financeira & Fiscal",
      description: "Controle total de contas a pagar e receber, emissão de boletos, fluxo de caixa, integração com NF-e e relatórios estratégicos.",
      features: ["Fluxo de caixa automático", "Emissão de NF-e/NFSe", "Conciliação bancária", "Relatórios fiscais"]
    },
    {
      icon: Package,
      title: "Gestão de Estoque & Compras",
      description: "Monitoramento inteligente de produtos, controle de entrada e saída, inventário, curva ABC e alertas de reposição automática.",
      features: ["Controle de estoque em tempo real", "Curva ABC", "Alertas de reposição", "Inventário automatizado"]
    },
    {
      icon: BarChart3,
      title: "Relatórios Gerenciais & BI",
      description: "Dashboard com indicadores de desempenho (KPIs) em tempo real para apoiar decisões baseadas em dados.",
      features: ["Dashboard em tempo real", "KPIs personalizados", "Relatórios de vendas", "Análise de margem"]
    },
    {
      icon: GraduationCap,
      title: "Treinamento & Suporte",
      description: "Capacitamos sua equipe para utilizar o sistema com excelência e oferecemos suporte humanizado.",
      features: ["Treinamento presencial/online", "Suporte técnico especializado", "Material didático", "Acompanhamento pós-implantação"]
    },
    {
      icon: Database,
      title: "Migração & Organização",
      description: "Importamos e organizamos seus dados (clientes, produtos, financeiro, histórico) com total segurança.",
      features: ["Migração segura de dados", "Validação e limpeza", "Backup completo", "Preservação de histórico"]
    },
    {
      icon: TrendingUp,
      title: "Consultoria em Gestão",
      description: "Acompanhamento estratégico após a implantação para otimizar processos, reduzir custos e preparar sua empresa para crescer.",
      features: ["Análise de processos", "Otimização de fluxos", "Consultoria estratégica", "Plano de crescimento"]
    }
  ];

  return (
    <section id="servicos" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-brand/5">
      <div className="container px-3 sm:px-4 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand mb-3 sm:mb-4 lg:mb-6 px-2 lg:px-0">
            Soluções Completas de Gestão
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-brand/80 max-w-4xl mx-auto leading-relaxed px-4">
            Oferecemos um portfólio completo de serviços para transformar a gestão da sua empresa. 
            Desde a implantação até o suporte contínuo, estamos com você em cada etapa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-brand/5 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                <service.icon className="w-5 sm:w-6 lg:w-7 xl:w-8 h-5 sm:h-6 lg:h-7 xl:h-8 text-brand-secondary" />
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-heading font-semibold text-brand mb-2 sm:mb-3 lg:mb-4">
                {service.title}
              </h3>
              
              <p className="text-brand/70 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-brand/80">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-brand-secondary rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16 shadow-xl border border-brand/10 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-heading font-bold text-brand mb-3 sm:mb-4 lg:mb-6">
                Pronto para transformar sua gestão?
              </h3>
              <p className="text-brand/80 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Nossa equipe está preparada para analisar suas necessidades e propor a melhor 
                solução para sua empresa. Agende uma demonstração gratuita e veja como podemos 
                ajudar seu negócio a crescer.
              </p>
              
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-3 lg:gap-4">
                <a 
                  href="https://wa.me/5594984410081" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center space-x-2 group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <span>Solicitar Demonstração</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="mailto:comercial.egestor@alfha.net.br"
                  className="btn-outline inline-flex items-center justify-center space-x-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <span>Enviar E-mail</span>
                </a>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-brand/5 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 max-w-sm mx-auto">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-secondary mb-2">100%</div>
                <div className="text-brand/70 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base">Satisfação garantida</div>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 text-center">
                  <div>
                    <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-brand mb-1">15 dias</div>
                    <div className="text-xs text-brand/60">Implantação média</div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-brand mb-1">24/7</div>
                    <div className="text-xs text-brand/60">Suporte disponível</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
