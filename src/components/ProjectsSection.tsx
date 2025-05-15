
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
      title: "Najczęstsze błędy początkujących w AI",
      description: "Jak ich unikać?",
      image: "/placeholder.svg"
    },
    {
      title: "System rekomendacji produktów",
      description: "Personalizowane sugestie zwiększające sprzedaż o 18%.",
      image: "/placeholder.svg"
    },
    {
      title: "Analiza sentymentu w social media",
      description: "Monitorowanie opinii klientów z 92% skutecznością.",
      image: "/placeholder.svg"
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
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00F2FE] pt-20 -mt-20">
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
