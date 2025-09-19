import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const AboutMePage = () => {
  useEffect(() => {
    document.title = "O mnie - Natalia Nitychoruk";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "O mnie, umiejętności i certyfikaty - Natalia Nitychoruk, VisionAIre");
    }
  }, []);

  const navigate = useNavigate();

  // Obsługa kliknięć w menu i stopce na podstronie AboutMe
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    if (href.startsWith('/')) {
      e.preventDefault();
      if (href === '/aboutme') return; // już jesteś na tej stronie
      navigate(href);
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href) as HTMLElement;
        if (el) {
          const rect = el.getBoundingClientRect();
          const absoluteTop = window.pageYOffset + rect.top;
          window.scrollTo({
            top: absoluteTop - 10,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-accent"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>

      <Navbar handleNav={handleNav} />

      <div className="relative z-10 pt-32 pb-16">
        <div className="section-container">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-neon/10 rounded-full">
                <svg className="w-8 h-8 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-neon to-brand-cyan bg-clip-text text-transparent">
                O mnie
              </h1>
            </div>
            <p className="text-xl text-brand-soft-white/80 max-w-3xl mx-auto">
              Poznaj moją historię, umiejętności i doświadczenie w świecie AI i automatyzacji
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-professional p-2">
                  <img
                    src="foto1.jpg"
                    alt="Natalia Nitychoruk - Założycielka VisionAIre"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-neon rounded-full opacity-60 float-animation"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-cyan rounded-full opacity-40 float-animation" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-brand-white mb-4">Natalia Nitychoruk</h2>
                <p className="text-xl text-brand-cyan font-medium mb-6">Założycielka VisionAIre</p>
                <p className="text-lg text-brand-soft-white leading-relaxed mb-6">
                  Jestem założycielką <span className="text-brand-neon font-semibold">VisionAIre</span> – firmy specjalizującej się
                  w nowoczesnych rozwiązaniach AI, automatyzacji i analizie danych. Pomagam firmom wdrażać technologie,
                  które <span className="text-brand-cyan">usprawniają ich biznes</span> i otwierają nowe możliwości rozwoju.
                </p>
                <p className="text-lg text-brand-soft-white/80 leading-relaxed">
                  Moje doświadczenie obejmuje projekty z zakresu automatyzacji, predykcji, integracji API i wdrożeń chmurowych.
                  Posiadam certyfikaty branżowe oraz szerokie umiejętności techniczne i miękkie, które pozwalają mi kompleksowo
                  podchodzić do każdego wyzwania.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-professional p-4 text-center">
                  <div className="text-2xl font-bold text-brand-neon mb-1">5+</div>
                  <div className="text-sm text-brand-soft-white/70">Lat doświadczenia</div>
                </div>
                <div className="glass-professional p-4 text-center">
                  <div className="text-2xl font-bold text-brand-cyan mb-1">50+</div>
                  <div className="text-sm text-brand-soft-white/70">Projektów</div>
                </div>
                <div className="glass-professional p-4 text-center">
                  <div className="text-2xl font-bold text-brand-purple mb-1">25+</div>
                  <div className="text-sm text-brand-soft-white/70">Klientów</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="glass-professional p-8">
              <h3 className="text-2xl font-bold text-brand-neon mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Umiejętności techniczne
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Automatyzacja procesów biznesowych",
                  "Analiza danych (Python, R, SQL)",
                  "Machine Learning",
                  "Deep Learning",
                  "Rozwiązania chmurowe (AWS, Azure)",
                  "Data Visualization",
                  "Integracja API",
                  "CI/CD Pipelines",
                  "Procesy ETL",
                  "Automatyzacja przepływów pracy",
                  "Aplikacje webowe i desktopowe",
                  "Wizualizacje, Analizy, raporty",
                  "Systemy webowe"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-neon rounded-full"></div>
                    <span className="text-brand-soft-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-professional p-8">
              <h3 className="text-2xl font-bold text-brand-cyan mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Umiejętności miękkie
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Komunikacja",
                  "Budowanie relacji",
                  "Strategiczne myślenie",
                  "Analiza potrzeb biznesowych",
                  "Zarządzanie projektami",
                  "Odpowiedzialność i sumienność",
                  "Planowanie i organizacja pracy",
                  "Analityczne podejście",
                  "Myślenie wizjonerskie",
                  "Praca pod presją czasu",
                  "Zorientowanie na szukanie rozwiązań"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    <span className="text-brand-soft-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-white mb-4">Certyfikaty</h3>
            <p className="text-lg text-brand-soft-white/80 max-w-2xl mx-auto">
              Moje kwalifikacje potwierdzone certyfikatami branżowymi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "icon1.png", title: "Generator Pomysłów x Politechnika Wrocławska", desc: "/ część zespołowa / Artificial Intelligence & Machine Learning (including Big Data)", category: "Akademickie", issuer: "PWR" },
              { img: "icon2.png", title: "Generator Pomysłów x Politechnika Wrocławska", desc: "/ część indywidualna / Artificial Intelligence & Machine Learning (including Big Data)", category: "Akademickie", issuer: "PWR" },
              { img: "icon3.png", title: "AWS Educate", desc: "Introduction to Generative Artificial Intelligence", category: "Chmurowe", issuer: "AWS" },
              { img: "icon5.png", title: "Santander OA x Politechnika Łódzka", desc: "Artificial Intelligence & Machine Learning (including Big Data)", category: "Akademickie", issuer: "PŁ" },
              { img: "icon6.png", title: "Polski Fundusz Rozwoju", desc: "AI od podstaw & Chmura w biznesie", category: "Biznesowe", issuer: "PFR" },
              { img: "icon7.png", title: "Platforma szkoleniowa Udemy", desc: "Scrum Master", category: "Metodologie", issuer: "Udemy" },
              { img: "icon8.png", title: "Intel", desc: "High Performance Computing", category: "Techniczne", issuer: "Intel" },
              { img: "icon9.png", title: "Intel", desc: "Edge Artificial Intelligence", category: "AI", issuer: "Intel" },
              { img: "icon10.png", title: "Intel", desc: "Artificial Intelligence Fundamentals", category: "AI", issuer: "Intel" }
            ].map((cert, index) => (
              <div key={index} className="glass-professional p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-brand-neon font-medium mb-1">{cert.category}</div>
                    <div className="text-xs text-brand-soft-white/60 mb-2">{cert.issuer}</div>
                  </div>
                </div>
                <h4 className="font-semibold text-brand-white text-sm mb-2 leading-tight">{cert.title}</h4>
                <p className="text-xs text-brand-soft-white/70 leading-tight">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer handleNav={handleNav} />
    </div>
  );
};

export default AboutMePage;
