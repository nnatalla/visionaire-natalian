
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown, Sparkles, Code, Brain, Zap, Atom, Network, Waves } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);

  const rotatingTexts = [
    t("AI | Automatyzacja | Data Science"),
    t("Innowacje | Technologie | Rozwój"),
    t("Rozwiązania | Efektywność | Przyszłość")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Quantum field mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToNext = () => {
    const ofertaSection = document.getElementById('projekty');
    const headerOffset = 100;
    if (ofertaSection) {
      const rect = ofertaSection.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + rect.top;
      window.scrollTo({
        top: absoluteTop - 10,
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
      const rect = section.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + rect.top;
      window.scrollTo({
        top: absoluteTop - 10,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`
      } as React.CSSProperties}
    >
      {/* Quantum Field Background */}
      <div className="quantum-field-bg absolute inset-0"></div>

      {/* Interactive Quantum Field */}
      <div className="interactive-field absolute inset-0"></div>

      {/* Neural Network Overlay */}
      <div className="neural-network-overlay">
        {/* Neural Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="neural-node"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}

        {/* Neural Connections */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`connection-${i}`}
            className="neural-connection"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${25 + (i * 6)}%`,
              width: `${60 + (i * 10)}px`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="particle-system">
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="quantum-particle"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

        {/* Floating Squares */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`float-square-${i}`}
            className="absolute bg-brand-cyan/30 rounded-xl shadow-lg"
            style={{
              width: `${24 + (i % 3) * 8}px`,
              height: `${24 + (i % 2) * 12}px`,
              left: `${5 + (i * 9)}%`,
              top: `${10 + (i * 7)}%`,
              animation: `floatSquare 6s ease-in-out ${i * 0.7}s infinite alternate`
            }}
          />
        ))}

      {/* Magnetic Field Effects */}
      <div className="magnetic-field absolute top-1/4 left-1/4 w-40 h-40">
        <div className="magnetic-wave"></div>
      </div>
      <div className="magnetic-field absolute bottom-1/3 right-1/3 w-32 h-32">
        <div className="magnetic-wave" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className={`z-10 text-center ${isMobile ? 'mt-16 pt-24' : 'mt-0 pt-32'} max-w-4xl mx-auto`}>
        {/* Neural Network Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="quantum-avatar relative">
              <img
                src="foto.jpg"
                alt="Natalia Nitychoruk"
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-brand-neon/30 shadow-2xl neural-avatar"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-brand-dark/20 to-transparent"></div>

              {/* Data Flow Around Avatar */}
              <div className="data-flow absolute inset-0 rounded-full">
                <div className="data-stream"></div>
                <div className="data-stream" style={{ animationDelay: '1s', top: '25%' }}></div>
                <div className="data-stream" style={{ animationDelay: '2s', top: '50%' }}></div>
                <div className="data-stream" style={{ animationDelay: '3s', top: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Holographic Title */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 holographic-text leading-tight text-center crystal-text">
            {t("VisionAIre")}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-brand-white mb-2 text-center">
            {t("Natalia Nitychoruk")}
          </h2>
        </div>

        {/* Quantum Rotating Subtitle */}
        <div className="h-8 mb-6">
          <p className="text-xl md:text-2xl text-brand-cyan font-medium transition-all duration-500 transform holographic-text">
            {rotatingTexts[currentText]}
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-brand-soft-white leading-relaxed mb-6">
            {t("Transformuję biznes poprzez innowacyjne rozwiązania AI i automatyzację procesów. Pomagam wykorzystać pełen potencjał danych i technologii dla osiągnięcia sukcesu.")}
          </p>

          {/* Quantum Feature Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex flex-col items-center group">
              <div className="p-3 bg-brand-neon/10 rounded-full mb-2 group-hover:bg-brand-neon/20 transition-all duration-300 magnetic-field">
                <Brain className="w-6 h-6 text-brand-neon group-hover:animate-pulse" />
                <div className="magnetic-wave" style={{ width: '60px', height: '2px' }}></div>
              </div>
              <span className="text-sm text-brand-soft-white">{t("AI Solutions")}</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-3 bg-brand-cyan/10 rounded-full mb-2 group-hover:bg-brand-cyan/20 transition-all duration-300 magnetic-field">
                <Network className="w-6 h-6 text-brand-cyan group-hover:animate-pulse" />
                <div className="magnetic-wave" style={{ width: '60px', height: '2px' }}></div>
              </div>
              <span className="text-sm text-brand-soft-white">{t("Automation")}</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-3 bg-brand-purple/10 rounded-full mb-2 group-hover:bg-brand-purple/20 transition-all duration-300 magnetic-field">
                <Atom className="w-6 h-6 text-brand-purple group-hover:animate-pulse" />
                <div className="magnetic-wave" style={{ width: '60px', height: '2px' }}></div>
              </div>
              <span className="text-sm text-brand-soft-white">{t("Innovation")}</span>
            </div>
          </div>
        </div>

        {/* Quantum CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={(e) => scrollToSection(e, 'kontakt')}
            className="group relative px-8 py-4 bg-gradient-to-r from-brand-neon to-brand-cyan text-brand-dark font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden magnetic-field border-2 border-white"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              {t("Nawiąż współpracę")}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="magnetic-wave" style={{ width: '100%', height: '2px', top: '50%' }}></div>
          </button>

          <button
            onClick={(e) => scrollToSection(e, 'projekty')}
            className="group px-8 py-4 border-2 border-brand-neon/50 text-brand-neon font-semibold rounded-full hover:bg-brand-neon/10 hover:border-brand-neon transform hover:scale-105 transition-all duration-300 magnetic-field"
          >
            <span className="flex items-center gap-2">
              <Waves className="w-5 h-5" />
              {t("Obejrzyj projekty")}
            </span>
            <div className="magnetic-wave" style={{ width: '100%', height: '2px', top: '50%' }}></div>
          </button>
        </div>

        {/* Quantum Stats Preview */}
        <div className="grid grid-cols-3 gap-18 max-w-md mx-auto mb-12">
          <div className="text-center magnetic-field">
            <div className="text-2xl md:text-3xl font-bold text-brand-neon mb-1 crystal-text">5+</div>
            <div className="text-sm text-brand-soft-white">{t("Lat Doświadczenia")}</div>
            <div className="magnetic-wave" style={{ width: '60px', height: '1px', top: '100%', left: '50%', transform: 'translateX(-50%)' }}></div>
          </div>
          <div className="text-center magnetic-field">
            <div className="text-2xl md:text-3xl font-bold text-brand-cyan mb-1 crystal-text">10+</div>
            <div className="text-sm text-brand-soft-white">{t("Projektów")}</div>
            <div className="magnetic-wave" style={{ width: '60px', height: '1px', top: '100%', left: '50%', transform: 'translateX(-50%)' }}></div>
          </div>
          <div className="text-center magnetic-field">
            <div className="text-2xl md:text-3xl font-bold text-brand-purple mb-1 crystal-text">9+</div>
            <div className="text-sm text-brand-soft-white">{t("Certyfikatów")}</div>
            <div className="magnetic-wave" style={{ width: '60px', height: '1px', top: '100%', left: '50%', transform: 'translateX(-50%)' }}></div>
          </div>
        </div>
      </div>

      {/* Quantum Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group magnetic-field"
        aria-label={t("Przewiń w dół")}
      >
        <div className="p-3 bg-brand-neon/20 hover:bg-brand-neon/30 rounded-full transition-all duration-300 group-hover:scale-110">
          <ChevronDown className="w-6 h-6 text-brand-neon animate-bounce" />
        </div>
        <div className="magnetic-wave" style={{ width: '60px', height: '2px', top: '50%', left: '50%', transform: 'translateX(-50%)' }}></div>
      </button>

      {/* Additional Quantum Elements */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-brand-neon rounded-full animate-ping quantum-particle"></div>
      <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-brand-cyan rounded-full animate-pulse quantum-particle"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-brand-purple rounded-full animate-ping quantum-particle animation-delay-1000"></div>
  </section>
  );
};

export default HeroSection;
