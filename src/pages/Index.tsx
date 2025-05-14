
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Natalia Nitychoruk - IT Recruiter | Executive Search";

    // Update metadata
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Natalia Nitychoruk - IT Recruiter specjalizujący się w rekrutacji specjalistów IT i executive search. Ponad 6 lat doświadczenia w branży IT.");
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
