
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToNext = () => {
    const ofertaSection = document.getElementById('oferta');
    const headerOffset = 100;
    if (ofertaSection) {
      const sectionPosition = ofertaSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - headerOffset,
        behavior: 'smooth',
    });
    }
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault(); 
    const section = document.getElementById(sectionId);
    const header = document.querySelector('nav');
    const headerOffset = 100;
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - headerOffset,
        behavior: 'smooth',
      });

    }
    };
    



  

  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_rgba(66,153,225,0.3)_0%,transparent_70%)]"></div>
      
      <div className={`z-10 text-center ${isMobile ? 'mt-16' : 'mt-0'}`}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src="foto.jpg" 
              alt="Natalia Nitychoruk" 
              className="avatar floating"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-30 blur-md -z-10"></div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Natalia Nitychoruk
        </h1>
        
        <div className="text-1xl md:text-1xl text-cyan-300 font-medium mt-2 mb-6">
          AI | Automatyzacja | Data Science | Innowacje
        </div>
        
        <p className="max-w-lg mx-auto text-white/80 text-lg mb-12">
          Transformuję biznes poprzez innowacyjne rozwiązania AI <br className="block sm:hidden" /> i automatyzację procesów. <br />
          Pomagam wykorzystać pełen potencjał danych <br /> i technologii. 
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#kontakt" 
            onClick={(e) => scrollToSection(e, 'kontakt')}
            className="contact-button border-2 border-blue-400 hover:bg-blue-500/20"
          >
            Nawiąż współpracę 🫱🏽‍🫲🏻
          </a>
          
          <a 
            href="#oferta"
            onClick={(e) => scrollToSection(e, 'projekty')}
            className="contact-button bg-transparent border-2 border-blue-400 hover:bg-blue-500/20"
          >
           Obejrzyj moje projekty 
          </a>
        </div>
      </div>

      
    <button
  onClick={scrollToNext}
  className="absolute max-sm:relative bottom-10 max-sm:bottom-1 bg-blue-500/30 hover:bg-blue-500/50 p-3 rounded-full animate-bounce"
  aria-label="Przewiń w dół"
>
  <ChevronDown size={24}  />
     
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
