
import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="doswiadczenie" className="container py-10 px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#00F2FE] pt-20 -mt-20">
        Doświadczenie
      </h2>

      <ul className="space-y-4 text-lg">
        <li className="border-l-4 border-[#00F2FE] pl-4 transition-all duration-300 hover:border-[#FF61A6]">
          <strong>AI Consultant, Data Scientist</strong> – 6+ lat doświadczenia w branży IT i AI
        </li>
        <li className="border-l-4 border-[#00F2FE] pl-4 transition-all duration-300 hover:border-[#FF61A6]">
          Współpraca z firmami z branż: e-commerce, finanse, edukacja, logistyka
        </li>
        <li className="border-l-4 border-[#00F2FE] pl-4 transition-all duration-300 hover:border-[#FF61A6]">
          Certyfikowana specjalistka AI (Google, Microsoft, DataCamp)
        </li>
        <li className="border-l-4 border-[#00F2FE] pl-4 transition-all duration-300 hover:border-[#FF61A6]">
          Prelegentka na konferencjach branżowych
        </li>
      </ul>
    </section>
  );
};

export default ExperienceSection;
