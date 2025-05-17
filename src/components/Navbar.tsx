
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("#oferta");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 100);
      
      // Determine active section based on scroll position
      const sections = ["#oferta", "#projekty", "#doswiadczenie", "#certyfikaty", "#umiejetnosci", "#kontakt"];
      
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
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { href: "#oferta", label: "Oferta" },
    { href: "#projekty", label: "Projekty" },
    /* href: "#doświadczenie", label: "Doświadczenie" */
    { href: "#certyfikaty", label: "Certyfikaty" },
    { href: "#umiejetnosci", label: "Umiejętności" },
    { href: "#kontakt", label: "Kontakt" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? 'bg-navy-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          {isMobile && (
            <button
              className="text-white p-2 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          
          {/* Desktop menu */}
          {!isMobile && (
            <div className="flex justify-center gap-2 md:gap-8 py-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-white font-medium px-3 py-2 rounded-full transition-all duration-300 ${
                    activeLink === link.href 
                      ? 'bg-blue-500 text-white' 
                      : 'hover:bg-white/10'
                  }`}
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-lg flex flex-col items-center justify-center">
          <div className="px-4 pt-2 pb-3 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block font-medium text-lg py-3 px-4 rounded-md ${
                  activeLink === link.href
                    ? 'bg-blue-500 text-white'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            
            <button 
              className="mt-8 w-full bg-white/10 text-white py-3 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zamknij menu
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
