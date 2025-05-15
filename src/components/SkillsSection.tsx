
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const SkillsSection = () => {
  const isMobile = useIsMobile();

  const technicalSkills = [
    "Automatyzacja procesów biznesowych",
    "Analiza danych (Python, R, SQL)",
    "Machine Learning",
    "Deep Learning (NLP, Computer Vision)",
    "Cloud AI (Google Cloud, Azure)",
    "Data Visualization",
    "Integracja API",
    "CI/CD Pipelines",
    "Workflow Automation",
    "ETL Processes"
  ];

  const softSkills = [
    "Komunikacja",
    "Budowanie relacji",
    "Critical thinking",
    "Analiza potrzeb biznesowych",
    "Doradztwo strategiczne",
    "Zarządzanie projektami AI",
    "Prezentacje techniczne",
    "Networking",
    "Myślenie kreatywne",
    "Praca w dynamicznym środowisku"
  ];

  return (
    <section id="umiejetnosci" className="container py-10 px-6 md:px-10 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 pt-20 -mt-20">
        Umiejętności
      </h2>
      
      <div className={`${isMobile ? 'space-y-12' : 'grid grid-cols-2 gap-10'}`}>
        <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-blue-500/20 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            Umiejętności techniczne
          </h3>
          
          <div className="flex flex-wrap">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index}
                className="skill-tag"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-blue-500/20 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </span>
            Umiejętności miękkie
          </h3>
          
          <div className="flex flex-wrap">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="skill-tag"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
