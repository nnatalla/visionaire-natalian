
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSection";
import MemoryGame from "@/components/MemoryGame";
import BubbleBackground from "@/components/BubbleBackground";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Natalia Nitychoruk - AI & Automatyzacja";

    // Update metadata
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natalia Nitychoruk - Specjalista AI, automatyzacja procesów i data science. Transformuję biznes poprzez innowacyjne rozwiązania.");
    }
    
    // Animation observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = "1";
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with fade-in animation
    document.querySelectorAll(".animate-fade-in, .animate-slide-up").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <BubbleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
     {/* wyłączenie sekcji doświadczenie
         <ExperienceSection />
         */}
      <EducationSection />
      <SkillsSection />
      
      <div className="container py-16 px-6 md:px-10">
        <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-blue-500/20 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-400">
            Rozrywka - Memory Game
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Odpocznij na chwilę i sprawdź swoją pamięć w tej prostej grze. Znajdź wszystkie pary ikon w jak najmniejszej liczbie ruchów!
          </p>
          <MemoryGame />
        </div>
      </div>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
