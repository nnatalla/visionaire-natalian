
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToNext = () => {
    const ofertaSection = document.getElementById('oferta');
    if (ofertaSection) {
      ofertaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_rgba(66,153,225,0.3)_0%,transparent_70%)]"></div>
      
      <div className={`z-10 text-center ${isMobile ? 'mt-16' : 'mt-0'}`}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src="/placeholder.svg" 
              alt="Natalia Nitychoruk" 
              className="avatar floating"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-30 blur-md -z-10"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Natalia Nitychoruk
        </h1>
        
        <div className="text-xl md:text-2xl text-cyan-300 font-medium mt-2 mb-6">
          AI | Automatyzacja | Data Science | Innowacje
        </div>
        
        <p className="max-w-lg mx-auto text-white/80 text-lg mb-12">
          Transformuję biznes poprzez innowacyjne rozwiązania AI i automatyzację procesów. 
          Pomagam wykorzystać pełen potencjał danych i technologii.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="#kontakt" 
            className="contact-button"
          >
            Nawiąż współpracę
          </a>
          
          <a 
            href="#umiejetnosci"
            className="contact-button bg-transparent border-2 border-blue-400 hover:bg-blue-500/20"
          >
            Zobacz umiejętności
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500/30 hover:bg-blue-500/50 p-3 rounded-full animate-bounce"
        aria-label="Przewiń w dół"
      >
        <ChevronDown size={24} />
      </button>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/5 w-20 h-20 rounded-full bg-blue-500/10 backdrop-blur-xl"></div>
      <div className="absolute top-2/3 right-1/5 w-32 h-32 rounded-full bg-cyan-500/10 backdrop-blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-indigo-500/10 backdrop-blur-xl"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-blue-400/10 backdrop-blur-xl"></div>
    </header>
  );
};

export default HeroSection;
