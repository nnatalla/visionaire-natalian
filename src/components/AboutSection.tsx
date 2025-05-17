
import React from 'react';

const AboutSection = () => {
  return (
    <section id="oferta" className="container py-10 px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#00F2FE] pt-20 -mt-20">
        Oferta
      </h2>

      <div className="text-sm md:text-base space-y-4 mb-10">
        <p>
          Pomagam przechodzić cyfrową transformację dzięki <strong>nowoczesnym rozwiązaniom AI</strong>. 
          Specjalizuję się w automatyzacji procesów, analizie danych, wdrażaniu rozwiązań opartych o AI.
        </p>
        <p className="font-bold mt-4">Dlaczego warto?</p>
        <ul className="list-none space-y-2 md:text-1xl">
          <li>🔘 Przyspieszenie procesów, oszczędność czasu i kosztów</li>
          <li>🔘 Nowatorskie rozwiązania dopasowane do Twoich potrzeb</li>
          <li>🔘 Usprawnienie operacji zarządzania procesami</li>
          <li>🔘 Współpraca na najwyższym poziomie</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-base font-bold mb-3">Automatyzacja procesów</h3>
          <ul className="text-sm list-none space-y-2">
            <li>○ Automatyzacja powtarzalnych zadań</li>
            <li>○ Integracje API</li>
            <li>○ Workflow AI</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-base font-bold mb-3">Analiza danych & predykcja</h3>
          <ul className="text-sm list-none space-y-2">
            <li>○ Analizy Big Data</li>
            <li>○ Predykcyjne modele ML</li>
            <li>○ Wizualizacje danych, raporty i inne</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
