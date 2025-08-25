
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
    <section id="depoimentos" className="section-padding bg-gradient-to-b from-white to-brand/5">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-brand/80 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior conquista. Veja como transformamos 
            a gestão de empresas em diferentes segmentos.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-brand/10 p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-brand-secondary" />
            </div>

            <div className="pt-8">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-brand/80 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-secondary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {testimonials[currentTestimonial].image}
                </div>
                <h4 className="text-xl font-heading font-semibold text-brand mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-brand-secondary font-medium mb-1">
                  {testimonials[currentTestimonial].company}
                </p>
                <p className="text-sm text-brand/60">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-200"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-200"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-brand-secondary w-8' 
                    : 'bg-brand/20 hover:bg-brand/40'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-brand/5">
            <div className="text-3xl font-bold text-brand-secondary mb-2">98%</div>
            <div className="text-brand/70">Taxa de Satisfação</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-brand/5">
            <div className="text-3xl font-bold text-brand-secondary mb-2">500+</div>
            <div className="text-brand/70">Empresas Atendidas</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-brand/5">
            <div className="text-3xl font-bold text-brand-secondary mb-2">5+</div>
            <div className="text-brand/70">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
