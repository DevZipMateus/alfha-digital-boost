import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Shield } from 'lucide-react';
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/6131ca7f-412f-426f-91b1-98f235d6ed1d.png)'
    }}></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 sm:top-20 right-2 sm:right-4 md:right-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-brand-secondary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-2 sm:left-4 md:left-10 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-brand-secondary/30 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 right-4 sm:right-8 md:right-20 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-white/10 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10 py-8 sm:py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-brand-secondary/20 text-brand-secondary px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-medium mb-3 sm:mb-4">
                ✨ Parceiro Oficial eGestor
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-3 sm:mb-4 lg:mb-6">
                <span className="text-brand-secondary">Gestão premium</span>
                <br />
                para resultados
                <br />
                <span className="text-brand-secondary">fora da curva</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                Transforme sua empresa com soluções inteligentes de gestão. 
                Oferecemos implantação completa do eGestor, treinamento personalizado 
                e suporte contínuo para micro e pequenas empresas.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">Implantação rápida</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">Suporte especializado</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">Controle total</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">Resultados garantidos</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-3 lg:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-12 px-2 lg:px-0">
              <a href="https://wa.me/5594984410081" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center space-x-2 group px-4 sm:px-6 lg:px-8 py-3 text-sm sm:text-base">
                <span>Solicitar Demonstração</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button onClick={() => document.getElementById('servicos')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-outline bg-white/10 border-white/40 text-white hover:bg-white hover:text-brand inline-flex items-center justify-center space-x-2 px-4 sm:px-6 lg:px-8 py-3 text-sm sm:text-base">
                <span>Conhecer Serviços</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-secondary">500+</div>
                <div className="text-xs text-white/80">Empresas atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-secondary">98%</div>
                <div className="text-xs text-white/80">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-secondary">24h</div>
                <div className="text-xs text-white/80">Suporte rápido</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-in-right mt-6 lg:mt-0">
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;