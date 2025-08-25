
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Everton Rodrigues",
      company: "Space Energia Elétrica",
      role: "Consultoria Elétrica",
      content: "A Alfha nos entregou uma gestão de alto nível. Com o eGestor conseguimos controlar contratos, custos operacionais e projeções financeiras com muito mais precisão. Hoje temos dados estratégicos na palma da mão.",
      rating: 5,
      image: "ER"
    },
    {
      name: "Ramon Ribeiro",
      company: "RR Cell",
      role: "Vendas & Assistência Técnica",
      content: "O sistema implantado pela Alfha organizou completamente o nosso fluxo de caixa, estoque e ordens de serviço. Além da tecnologia, o suporte deles é diferenciado — estão sempre prontos para nos ajudar.",
      rating: 5,
      image: "RR"
    },
    {
      name: "Ana Carla Amorim",
      company: "Comercial Amorim",
      role: "Secos e Molhados",
      content: "Antes da Alfha era tudo no caderno. Hoje tenho controle do estoque, vendas e prazos com muita facilidade. O sistema me deu segurança e a consultoria deles me ajuda a crescer de forma organizada.",
      rating: 5,
      image: "ACA"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-brand/5">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand mb-4 sm:mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand/80 max-w-4xl mx-auto leading-relaxed px-4">
            A satisfação dos nossos clientes é nossa maior conquista. Veja como transformamos 
            a gestão de empresas em diferentes segmentos.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl border border-brand/10 p-6 sm:p-8 lg:p-12 xl:p-16 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-brand-secondary/10 rounded-full flex items-center justify-center">
              <Quote className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-brand-secondary" />
            </div>

            <div className="pt-6 sm:pt-8 lg:pt-12">
              {/* Rating */}
              <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-brand/80 text-center mb-6 sm:mb-8 lg:mb-10 leading-relaxed italic px-4">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-brand-secondary text-white rounded-full flex items-center justify-center text-sm sm:text-lg lg:text-xl font-bold mx-auto mb-3 sm:mb-4 lg:mb-6">
                  {testimonials[currentTestimonial].image}
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold text-brand mb-1 sm:mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-brand-secondary font-medium mb-1 text-sm sm:text-base lg:text-lg">
                  {testimonials[currentTestimonial].company}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-brand/60">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-200"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-200"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 sm:w-3 lg:w-4 h-2.5 sm:h-3 lg:h-4 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-brand-secondary w-6 sm:w-8 lg:w-10' 
                    : 'bg-brand/20 hover:bg-brand/40'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
          <div className="text-center p-6 sm:p-8 bg-white rounded-xl lg:rounded-2xl shadow-lg border border-brand/5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">98%</div>
            <div className="text-brand/70 text-sm sm:text-base">Taxa de Satisfação</div>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white rounded-xl lg:rounded-2xl shadow-lg border border-brand/5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">500+</div>
            <div className="text-brand/70 text-sm sm:text-base">Empresas Atendidas</div>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white rounded-xl lg:rounded-2xl shadow-lg border border-brand/5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">5+</div>
            <div className="text-brand/70 text-sm sm:text-base">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
