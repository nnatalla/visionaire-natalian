
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("#oferta");
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 100);
      
      // Determine active section based on scroll position
      const sections = ["#oferta", "#projekty", "#doswiadczenie", "#edukacja", "#certyfikaty", "#kontakt"];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]) as HTMLElement;
        if (element && scrollY >= element.offsetTop - 200) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActiveLink(href);
    
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`flex justify-center gap-0 md:gap-8 py-5 sticky top-0 z-50 ${isSticky ? 'bg-[#232946]/85 backdrop-blur-sm' : 'bg-transparent'} transition-all duration-300`}>
      <a 
        href="#oferta" 
        className={`text-white font-bold text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "#oferta" ? 'bg-[#FF61A6] text-white' : 'hover:bg-white/10'}`}
        onClick={(e) => handleClick(e, "#oferta")}
      >
        Oferta
      </a>
      <a 
        href="#projekty" 
        className={`text-white font-bold text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "#projekty" ? 'bg-[#FF61A6] text-white' : 'hover:bg-white/10'}`}
        onClick={(e) => handleClick(e, "#projekty")}
      >
        Projekty
      </a>
      <a 
        href="#doswiadczenie" 
        className={`text-white font-bold text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "#doswiadczenie" ? 'bg-[#FF61A6] text-white' : 'hover:bg-white/10'}`}
        onClick={(e) => handleClick(e, "#doswiadczenie")}
      >
        Doświadczenie
      </a>
      <a 
        href="#certyfikaty" 
        className={`text-white font-bold text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "#certyfikaty" ? 'bg-[#FF61A6] text-white' : 'hover:bg-white/10'}`}
        onClick={(e) => handleClick(e, "#certyfikaty")}
      >
        Certyfikaty
      </a>
      <a 
        href="#kontakt" 
        className={`text-white font-bold text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "#kontakt" ? 'bg-[#FF61A6] text-white' : 'hover:bg-white/10'}`}
        onClick={(e) => handleClick(e, "#kontakt")}
      >
        Kontakt
      </a>
    </nav>
  );
};

export default Navbar;
