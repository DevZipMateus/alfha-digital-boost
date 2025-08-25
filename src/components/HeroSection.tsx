
import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/6131ca7f-412f-426f-91b1-98f235d6ed1d.png)' }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-brand-secondary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-brand-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-brand-secondary/20 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                ✨ Parceiro Oficial eGestor
              </span>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                <span className="text-brand-secondary">Gestão premium</span>
                <br />
                para resultados
                <br />
                <span className="text-brand-secondary">fora da curva</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transforme sua empresa com soluções inteligentes de gestão. 
                Oferecemos implantação completa do eGestor, treinamento personalizado 
                e suporte contínuo para micro e pequenas empresas.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-secondary" />
                <span className="text-white/90">Implantação rápida</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-secondary" />
                <span className="text-white/90">Suporte especializado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-secondary" />
                <span className="text-white/90">Controle total</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-secondary" />
                <span className="text-white/90">Resultados garantidos</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5594984410081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Demonstração</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline bg-white/10 border-white/40 text-white hover:bg-white hover:text-brand inline-flex items-center justify-center space-x-2"
              >
                <span>Conhecer Serviços</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-secondary">500+</div>
                <div className="text-sm text-white/80">Empresas atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-secondary">98%</div>
                <div className="text-sm text-white/80">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-secondary">24h</div>
                <div className="text-sm text-white/80">Suporte rápido</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Dashboard Preview */}
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-brand">Dashboard Gerencial</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-brand/5 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-brand-secondary" />
                      <span className="text-sm text-brand/70">Faturamento</span>
                    </div>
                    <div className="text-xl font-bold text-brand">R$ 125.000</div>
                    <div className="text-xs text-green-600">↗ +15% vs mês anterior</div>
                  </div>
                  
                  <div className="bg-brand/5 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-brand-secondary" />
                      <span className="text-sm text-brand/70">Margem</span>
                    </div>
                    <div className="text-xl font-bold text-brand">32%</div>
                    <div className="text-xs text-green-600">↗ +3% vs mês anterior</div>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-brand/70">Vendas do Mês</span>
                      <span className="text-brand">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-brand-secondary h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-brand/70">Estoque Otimizado</span>
                      <span className="text-brand">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
