
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Code, Users, Calendar, Star, Layers, Zap, Atom, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  duration: string;
  teamSize: string;
  impact: string;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 7000; // 7 seconds per slide

  const projects: Project[] = [
    {
      title: "Automatyzacja generowania typowych dokumentów",
      description: "Zaawansowany system automatyzacji wykorzystujący AI do generowania typowych dokumentów biznesowych. Implementacja algorytmów do rozpoznawania wzorców i automatycznego wypełniania formularzy. Generowanie dokumentów takich jak: faktura, raport, prezentacja, umowa.",
      image: "n8n.jpeg",
      technologies: ["JavaScript", "n8n", "API", "HTML"],
      category: "Automatyzacja + AI",
      duration: "2 tygodnie",
      teamSize: "Autorski projekt",
      impact: "97% redukcja czasu generowania dokumentów",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "System webowy z zaawansowanym przetwarzaniem obrazów",
      description: "Innowacyjny system do analizy angiograficznych badań dna oka. Automatyczna segmentacja naczyń krwionośnych i wykrywanie patologii.",
      image: "eye1.png",
      technologies: ["PostgreSQL", "Python", "OpenCV", "Amazon S3", "Amazon EC2", "Gunicorn", "Nginx", "Django"],
      category: "Medyczne systemy",
      duration: "5 miesięcy",
      teamSize: "Autorski projekt",
      impact: "95% dokładności diagnozy wstępnej chorób, szybsze wykrycie patologii",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analiza danych i prognozowanie biznesowe",
      description: "Kompleksowy system analizy predykcyjnej wykorzystujący zaawansowane algorytmy ML. Implementacja drzew decyzyjnych, regresji logistycznej i sieci neuronowych dla prognozowania trendów biznesowych.",
      image: "rstudio.jpeg",
      technologies: ["R", "Python", "scikit-learn", "PowerBI", "SQL"],
      category: "Business Intelligence",
      duration: "3 miesiące",
      teamSize: "Autorski projekt",
      impact: "Wsparcie prognozowania i decyzji biznesowych",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "System generujący pisma do komorników",
      description: "Automatyczny system generowania profesjonalnych pism prawnych na podstawie automatycznie odczytanych danych z pism przychodzących. Integracja z bazami danych i automatyczna walidacja dokumentów. Dzienne raportu wysłanych pism.",
      image: "flask.jpeg",
      technologies: ["Flask", "Nginx", "SQLite", "Google Sheets", "AI API", "Tesseract OCR"],
      category: "Automatyzacja + AI",
      duration: "1 miesiąc",
      teamSize: "Autorski projekt",
      impact: "90% redukcja czasu odpowiedzi i 100% dokładności danych",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
    // Zawsze resetuj progress po ręcznym przełączeniu
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
    // Zawsze resetuj progress po ręcznym przełączeniu
    setProgress(0);
  };

  const handleCardClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Wznawiaj timer bez resetowania progress
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / (duration / 100));
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);
    } else {
      // Zatrzymaj timer bez resetowania progress
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resetTimer = () => {
    // Nie resetuj progress do 0, tylko kontynuuj od aktualnego miejsca
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / (duration / 100));
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);
    }
  };

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (progress >= 100 && isPlaying) {
      setProgress(0); // Resetuj progress po automatycznym przełączeniu
      nextSlide();
    }
  }, [progress, isPlaying]);

  return (
    <section id="projekty" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent via-brand-deep to-brand-dark"></div>
      <div className="absolute top-10 right-20 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-brand-neon/5 rounded-full blur-3xl"></div>

      {/* Neural Network Overlay */}
      <div className="neural-network-overlay">
        {/* Neural Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="neural-node"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `5%`,
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
              left: `${10 + (i * 12)}%`,
              top: `5%`,
              width: `${80 + (i * 15)}px`,
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
            className="quantum-particle1"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `5%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-brand-neon/10 rounded-full">
              <Code className="w-8 h-8 text-brand-neon" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-neon to-brand-purple bg-clip-text text-transparent">
              Moje Projekty
            </h2>
          </div>
          <p className="text-xl text-brand-soft-white/80 max-w-3xl mx-auto">
            Odkryj moje najnowsze realizacje – od automatyzacji procesów biznesowych po innowacyjne rozwiązania AI
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Play/Pause Button - Centered */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleCardClick}
              className="p-4 bg-brand-neon/20 hover:bg-brand-neon/30 rounded-full transition-all duration-300 border border-brand-neon/30 hover:border-brand-neon/50"
            >
              {isPlaying ? <Pause className="w-6 h-6 text-brand-neon" /> : <Play className="w-6 h-6 text-brand-neon" />}
            </button>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSlide(index);
                    // Zawsze resetuj progress po ręcznym przełączeniu
                    setProgress(0);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'bg-brand-neon scale-125' : 'bg-brand-neon/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            className={`relative overflow-hidden rounded-2xl glass-professional carousel-container ${isPlaying ? 'progress-active' : ''}`}
            style={{
              '--progress-angle': `${(progress / 100) * 360}deg`
            } as React.CSSProperties}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-slide cursor-pointer ${
                  index === activeSlide ? 'active' : 'hidden'
                }`}
                onClick={handleCardClick}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-brand-neon/10 text-brand-neon text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-brand-soft-white/60 text-sm">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-4 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-lg text-brand-soft-white/80 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-professional p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-brand-cyan" />
                          <span className="text-sm text-brand-soft-white/60">Zespół</span>
                        </div>
                        <div className="text-lg font-semibold text-brand-white">{project.teamSize}</div>
                      </div>
                      <div className="glass-professional p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 text-brand-purple" />
                          <span className="text-sm text-brand-soft-white/60">Wpływ</span>
                        </div>
                        <div className="text-lg font-semibold text-brand-white">{project.impact}</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-brand-white mb-3">Technologie</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-sm rounded-full border border-brand-purple/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href="#kontakt"
                          className="flex items-center gap-2 px-6 py-3 font-medium border border-brand-neon/20 rounded-full hover:bg-brand-blue/30 transition-colors duration-300"
                          style={{
                            background: "linear-gradient(90deg, #1e3a8a 0%, #0a2540 100%)",
                            color: "#fff"
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Chcę mieć to u siebie!
                        </a>
                      )}
                     {/* {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 px-6 py-3 bg-brand-neon/10 text-brand-neon border border-brand-neon/20 rounded-full hover:bg-brand-neon/20 transition-colors duration-300"
                        >
                          <Code className="w-4 h-4" />
                          Kod źródłowy
                        </a>
                      )}*/}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-brand-neon/20 to-brand-purple/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              className="absolute left-1 top-1/2 -translate-y-1/2 p-3 hover:bg-brand-neon/10 rounded-full transition-all duration-300 z-20"
              onClick={prevSlide}
              aria-label="Poprzedni projekt"
            >
              <ChevronLeft className="w-6 h-6 text-brand-neon" />
            </button>
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 p-3 hover:bg-brand-neon/10 rounded-full transition-all duration-300 z-20"
              onClick={nextSlide}
              aria-label="Następny projekt"
            >
              <ChevronRight className="w-6 h-6 text-brand-neon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
