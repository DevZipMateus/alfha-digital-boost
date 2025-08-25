
import React from 'react';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-3 sm:-top-4 lg:-top-6 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-brand-secondary text-brand rounded-full flex items-center justify-center shadow-lg hover:bg-brand-accent transition-colors"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
      </button>

      <div className="container px-3 sm:px-4 lg:px-8 mx-auto max-w-7xl pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-4 sm:pb-6 lg:pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4 lg:mb-6">
              <img 
                src="/lovable-uploads/9198e11c-91c7-4776-aba7-e317c269e308.png" 
                alt="Alfha Gestão Empresarial - Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg xl:text-xl text-white">ALFHA</h3>
                <p className="text-xs sm:text-sm text-white/80">GESTÃO EMPRESARIAL</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-3 sm:mb-4 lg:mb-6 leading-relaxed max-w-md text-xs sm:text-sm lg:text-base">
              Especialistas em soluções inteligentes de gestão para micro e pequenas empresas. 
              Transformamos a gestão do seu negócio com tecnologia, suporte e consultoria especializada.
            </p>
            
            <div className="text-brand-secondary font-medium mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
              "Gestão premium para resultados fora da curva"
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="text-xs text-white/60">Siga-nos:</span>
              <a 
                href="https://www.instagram.com/alfha.erp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-brand transition-all duration-200"
                aria-label="Instagram da Alfha"
              >
                <Instagram className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6">Links Rápidos</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-brand-secondary transition-colors text-xs sm:text-sm lg:text-base"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-white/80 hover:text-brand-secondary transition-colors text-xs sm:text-sm lg:text-base"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-white/80 hover:text-brand-secondary transition-colors text-xs sm:text-sm lg:text-base"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-white/80 hover:text-brand-secondary transition-colors text-xs sm:text-sm lg:text-base"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-white/80 hover:text-brand-secondary transition-colors text-xs sm:text-sm lg:text-base"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-xs sm:text-sm">
                  Rua Uadi Moussalem, 18<br />
                  Jardim Vitória, Marabá - PA
                </div>
              </li>
              
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-brand-secondary flex-shrink-0" />
                <a 
                  href="https://wa.me/5594984410081" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-secondary transition-colors text-xs sm:text-sm"
                >
                  (94) 98441-0081
                </a>
              </li>
              
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-brand-secondary flex-shrink-0" />
                <a 
                  href="mailto:comercial.egestor@alfha.net.br"
                  className="text-white/80 hover:text-brand-secondary transition-colors text-xs sm:text-sm break-all"
                >
                  comercial.egestor@alfha.net.br
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-3 sm:mt-4 lg:mt-6">
              <h5 className="font-medium text-white mb-2 text-xs sm:text-sm lg:text-base">Horário de Funcionamento</h5>
              <div className="text-white/80 text-xs space-y-1">
                <p>Seg - Sex: 08:00 às 18:00</p>
                <p>Sábado: 09:00 às 12:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              <p>© 2024 Alfha Gestão Empresarial. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 58.442.653/0001-00</p>
            </div>
            
            <div className="text-white/60 text-xs sm:text-sm text-center md:text-right">
              <p>Desenvolvido com ❤️ para impulsionar seu negócio</p>
              <p className="mt-1">Parceiro Oficial eGestor</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
