
import React from 'react';

const EducationSection = () => {
  return (
    <section id="certyfikaty" className="container py-10 px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00F2FE] pt-20 -mt-20">
        Certyfikaty
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="cert-card">
          <img src="/placeholder.svg" alt="Google AI" className="mb-4" />
          <span className="block mb-2">Google Cloud Certified – Professional Data Engineer</span>
          <small>Zaawansowane wdrożenia AI i analizy danych</small>
        </div>

        <div className="cert-card">
          <img src="/placeholder.svg" alt="Microsoft AI" className="mb-4" />
          <span className="block mb-2">Microsoft Certified: Azure AI Engineer</span>
          <small>Projektowanie i wdrażanie rozwiązań AI w chmurze</small>
        </div>

        <div className="cert-card">
          <img src="/placeholder.svg" alt="DataCamp" className="mb-4" />
          <span className="block mb-2">DataCamp – Machine Learning Scientist</span>
          <small>Budowa modeli ML, analiza danych</small>
        </div>

        <div className="cert-card">
          <img src="/placeholder.svg" alt="PMI" className="mb-4" />
          <span className="block mb-2">PMI Agile Certified Practitioner</span>
          <small>Zarządzanie projektami AI i IT</small>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
