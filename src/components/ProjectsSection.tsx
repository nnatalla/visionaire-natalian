
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Story {
  title: string;
  description: string;
  image: string;
}

const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 10000; // 10 seconds per slide

  const stories: Story[] = [
    {
      title: "Automatyzacja procesu generowania dokumentów",
      description: "Projekt dotyczący zastosowania automatyzacji oraz AI w procesie generowania typowych dokumentów dla firm typu: faktura, umowa,raport, prezentacja itp.",
      image: "n8n1.png"
    },
    {
      title: "System webowy z zaawansowanym przetwarzaniem obrazów",
        description: "System webowy służący do separacji sieci naczyń krwionośnych z badania angiograficznego dna oka",
      image: "eye1.png"
    },
    {
        title: "Analiza danych i prognozowanie",
      description: "Czyszczenie danych, przygotowanie do przetwarzania oraz kompleksowa analiza predykcyjna (drzewa decyzyjne, regresja logistyczna itd.)",
      image: "rstudio.jpg"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % stories.length);
    resetTimer();
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + stories.length) % stories.length);
    resetTimer();
  };

  const resetTimer = () => {
    setProgress(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (duration / 100));
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);
  };

  useEffect(() => {
    resetTimer();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
    }
  }, [progress]);

  return (
    <section id="projekty" className="container py-10 px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#00F2FE] pt-20 -mt-20">
        Moje Projekty
      </h2>

      <div className="story-container">
        <div className="story-progress">
          <div className="story-bar" style={{ width: `${progress}%` }}></div>
        </div>

        {stories.map((story, index) => (
          <div 
            key={index} 
            className={`story-slide ${index === activeSlide ? 'active' : ''}`}
          >
            <div className="story-content">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
            <div className="story-img-bg">
              <img src={story.image} alt={story.title} className="story-img" />
            </div>
          </div>
        ))}

        <button 
          className="story-nav prev"
          onClick={prevSlide}
          aria-label="Poprzedni slajd"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="story-nav next" 
          onClick={nextSlide}
          aria-label="Następny slajd"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
