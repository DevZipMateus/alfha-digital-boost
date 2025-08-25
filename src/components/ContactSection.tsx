
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-brand/5 to-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand mb-6">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="text-lg text-brand/80 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar sua empresa a crescer. Entre em contato conosco 
            e descubra como podemos transformar sua gestão empresarial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand/10 mb-8">
              <h3 className="text-2xl font-heading font-semibold text-brand mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand mb-1">Endereço</h4>
                    <p className="text-brand/70">
                      Rua Uadi Moussalem, 18<br />
                      Jardim Vitória, Marabá - PA
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand mb-1">Telefone</h4>
                    <a 
                      href="https://wa.me/5594984410081" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand/70 hover:text-brand-secondary transition-colors"
                    >
                      (94) 98441-0081
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand mb-1">E-mail</h4>
                    <a 
                      href="mailto:comercial.egestor@alfha.net.br"
                      className="text-brand/70 hover:text-brand-secondary transition-colors"
                    >
                      comercial.egestor@alfha.net.br
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand mb-1">Horário de Funcionamento</h4>
                    <div className="text-brand/70 space-y-1">
                      <p>Segunda a Sexta: 08:00 às 18:00</p>
                      <p>Sábado: 09:00 às 12:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand mb-1">Redes Sociais</h4>
                    <a 
                      href="https://www.instagram.com/alfha.erp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand/70 hover:text-brand-secondary transition-colors"
                    >
                      @alfha.erp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-brand/10">
              <div className="aspect-video bg-brand/5 rounded-lg flex items-center justify-center">
                <div className="text-center text-brand/60">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Mapa será carregado aqui</p>
                  <p className="text-sm">Rua Uadi Moussalem, 18 - Marabá/PA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand/10">
              <h3 className="text-2xl font-heading font-semibold text-brand mb-8">
                Envie sua Mensagem
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-brand/20 rounded-lg focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-brand/20 rounded-lg focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-brand/20 rounded-lg focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand/20 rounded-lg focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-brand/20 rounded-lg focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-vertical"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Mensagem</span>
                </button>

                <p className="text-sm text-brand/60 text-center">
                  Ou entre em contato diretamente pelo WhatsApp:{' '}
                  <a 
                    href="https://wa.me/5594984410081" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-secondary hover:text-brand font-medium"
                  >
                    (94) 98441-0081
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
