
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for 3 seconds after button appears
      setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
        }, 4000);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-8 z-50 animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg border border-brand/10 p-3 max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-600 transition-colors"
              aria-label="Fechar tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm text-brand font-medium mb-1">
              💬 Precisa de ajuda?
            </p>
            <p className="text-xs text-brand/70">
              Clique aqui e fale conosco no WhatsApp!
            </p>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-brand/10"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5594984410081"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      </a>
    </>
  );
};

export default WhatsAppFloat;
