
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
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-brand/5">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand mb-4 sm:mb-6">
            Soluções Completas de Gestão
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand/80 max-w-4xl mx-auto leading-relaxed px-4">
            Oferecemos um portfólio completo de serviços para transformar a gestão da sua empresa. 
            Desde a implantação até o suporte contínuo, estamos com você em cada etapa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-lg border border-brand/5 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-brand-secondary" />
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold text-brand mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-brand/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-brand/80">
                    <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-xl border border-brand/10 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-brand mb-4 sm:mb-6">
                Pronto para transformar sua gestão?
              </h3>
              <p className="text-brand/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Nossa equipe está preparada para analisar suas necessidades e propor a melhor 
                solução para sua empresa. Agende uma demonstração gratuita e veja como podemos 
                ajudar seu negócio a crescer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="https://wa.me/5594984410081" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center space-x-2 group px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <span>Solicitar Demonstração</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="mailto:comercial.egestor@alfha.net.br"
                  className="btn-outline inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <span>Enviar E-mail</span>
                </a>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-brand/5 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 max-w-sm mx-auto">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">100%</div>
                <div className="text-brand/70 mb-4 sm:mb-6 text-sm sm:text-base">Satisfação garantida</div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand mb-1">15 dias</div>
                    <div className="text-xs text-brand/60">Implantação média</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand mb-1">24/7</div>
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
