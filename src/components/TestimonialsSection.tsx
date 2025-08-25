
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
    <section id="depoimentos" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-white to-brand/5">
      <div className="container px-3 sm:px-4 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Depoimentos
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand mb-3 sm:mb-4 lg:mb-6 px-2 lg:px-0">
            O que nossos clientes dizem
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-brand/80 max-w-4xl mx-auto leading-relaxed px-4">
            A satisfação dos nossos clientes é nossa maior conquista. Veja como transformamos 
            a gestão de empresas em diferentes segmentos.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl border border-brand/10 p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-8 sm:w-10 lg:w-12 xl:w-14 h-8 sm:h-10 lg:h-12 xl:h-14 bg-brand-secondary/10 rounded-full flex items-center justify-center">
              <Quote className="w-4 sm:w-5 lg:w-6 xl:w-7 h-4 sm:h-5 lg:h-6 xl:h-7 text-brand-secondary" />
            </div>

            <div className="pt-4 sm:pt-6 lg:pt-8 xl:pt-12">
              {/* Rating */}
              <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-brand/80 text-center mb-4 sm:mb-6 lg:mb-8 xl:mb-10 leading-relaxed italic px-2 sm:px-4">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 bg-brand-secondary text-white rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg xl:text-xl font-bold mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                  {testimonials[currentTestimonial].image}
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-heading font-semibold text-brand mb-1 sm:mb-2">
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
            className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 lg:w-12 xl:w-14 h-8 sm:h-10 lg:h-12 xl:h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-200"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-4 sm:w-5 lg:w-6 xl:w-7 h-4 sm:h-5 lg:h-6 xl:h-7" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 lg:w-12 xl:w-14 h-8 sm:h-10 lg:h-12 xl:h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-200"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-4 sm:w-5 lg:w-6 xl:w-7 h-4 sm:h-5 lg:h-6 xl:h-7" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4 sm:mt-6 lg:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 sm:w-2.5 lg:w-3 xl:w-4 h-2 sm:h-2.5 lg:h-3 xl:h-4 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-brand-secondary w-4 sm:w-6 lg:w-8 xl:w-10' 
                    : 'bg-brand/20 hover:bg-brand/40'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fade-in">
          <div className="text-center p-4 sm:p-6 lg:p-8 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg border border-brand/5">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-secondary mb-2">98%</div>
            <div className="text-brand/70 text-sm sm:text-base">Taxa de Satisfação</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 lg:p-8 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg border border-brand/5">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-secondary mb-2">500+</div>
            <div className="text-brand/70 text-sm sm:text-base">Empresas Atendidas</div>
          </div>
          
          <div className="text-center p-4 sm:p-6 lg:p-8 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg border border-brand/5">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-secondary mb-2">5+</div>
            <div className="text-brand/70 text-sm sm:text-base">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
