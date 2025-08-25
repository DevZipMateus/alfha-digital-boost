
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top Contact Bar */}
      <div className={`bg-yellow-500 text-yellow-900 py-2 px-4 text-sm transition-all duration-300 ${
        isScrolled ? 'hidden md:hidden' : 'hidden md:block'
      }`}>
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(94) 98441-0081</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>comercial.egestor@alfha.net.br</span>
            </div>
          </div>
          <div className="text-sm font-medium">
            Segunda a Sexta: 08:00 às 18:00 | Sábado: 09:00 às 12:00
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-yellow-400/95 backdrop-blur-md shadow-lg' 
            : 'bg-yellow-400'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/9198e11c-91c7-4776-aba7-e317c269e308.png" 
                alt="Alfha Gestão Empresarial - Logo" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-xl text-yellow-900">
                  ALFHA
                </h1>
                <p className="text-xs text-yellow-800">
                  GESTÃO EMPRESARIAL
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="nav-link text-yellow-900 hover:text-yellow-700"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="nav-link text-yellow-900 hover:text-yellow-700"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="nav-link text-yellow-900 hover:text-yellow-700"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="nav-link text-yellow-900 hover:text-yellow-700"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="nav-link text-yellow-900 hover:text-yellow-700"
              >
                Contato
              </button>
              
              {/* CTA Button */}
              <a 
                href="https://wa.me/5594984410081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-yellow-900"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-yellow-50 shadow-lg border-t border-yellow-200">
              <div className="py-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block w-full text-left px-4 py-3 text-yellow-900 hover:bg-yellow-100 transition-colors"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="block w-full text-left px-4 py-3 text-yellow-900 hover:bg-yellow-100 transition-colors"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="block w-full text-left px-4 py-3 text-yellow-900 hover:bg-yellow-100 transition-colors"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="block w-full text-left px-4 py-3 text-yellow-900 hover:bg-yellow-100 transition-colors"
                >
                  Depoimentos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block w-full text-left px-4 py-3 text-yellow-900 hover:bg-yellow-100 transition-colors"
                >
                  Contato
                </button>
                <div className="px-4 pt-2">
                  <a 
                    href="https://wa.me/5594984410081" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full text-center block"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
