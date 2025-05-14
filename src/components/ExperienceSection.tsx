
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Właściciel / IT Recruiter & Executive Search",
      company: "Natalia Nitychoruk",
      period: "maj 2023 - obecnie",
      description: [
        "Prowadzenie własnej działalności w zakresie rekrutacji IT i executive search",
        "Współpraca z firmami produktowymi oraz agencjami IT",
        "Rekrutacja programistów, DevOps, PM/PO oraz kadry zarządzającej (m.in. CTO)",
        "Budowanie strategii sourcingowych dopasowanych do potrzeb klientów",
        "Kompleksowa obsługa procesów rekrutacyjnych"
      ],
    },
    {
      title: "IT Talent Acquisition Specialist",
      company: "Talent Place Sp. z o.o.",
      period: "lip 2022 - maj 2023",
      description: [
        "Prowadzenie rekrutacji technicznych na stanowiska seniorskie w projektach międzynarodowych",
        "Współpraca z klientami amerykańskimi i zachodnioeuropejskimi",
        "Onboarding nowych rekruterów w społeczności Talent Place",
        "Sourcing na platformach takich jak LinkedIn, GitHub i Stack Overflow",
        "Prowadzenie projektów w modelu RPO i rekrutacji stałych"
      ],
    },
    {
      title: "IT Recruitment Specialist",
      company: "Awareson People Sp. z o.o.",
      period: "sty 2022 - lip 2022",
      description: [
        "Prowadzenie kompleksowych rekrutacji na role Devops Engineer, Backend Developer, PHP Developer",
        "Tworzenie strategii pozyskiwania kandydatów",
        "Przeprowadzanie wywiadów rekrutacyjnych w języku polskim i angielskim",
        "Budowanie długofalowych relacji z kandydatami i klientami",
        "Doradztwo dla klientów w zakresie kształtowania oferty dopasowanej do realiów rynku"
      ],
    },
    {
      title: "IT Recruiter",
      company: "Emploway / Humano",
      period: "sie 2021 - gru 2021",
      description: [
        "Rekrutacja specjalistów IT na różne poziomy zaawansowania do projektów międzynarodowych",
        "Budowanie baz kandydatów wykorzystując metody sourcingowe",
        "Współpraca z działami HR po stronie klienta",
        "Przeprowadzanie screeningów technicznych",
        "Raportowanie procesów rekrutacyjnych"
      ],
    },
    {
      title: "Consultant",
      company: "HAYS Poland",
      period: "lip 2020 - sie 2021",
      description: [
        "Samodzielne prowadzenie projektów rekrutacyjnych dla wiodących firm z branży tech",
        "Budowanie strategii pozyskiwania talentów w obszarach IT i digital marketing",
        "Doradztwo dla klientów w zakresie trendów rynkowych i kształtowania oferty",
        "Zarządzanie bazą kandydatów w systemie CRM",
        "Aktywny networking i budowanie długotrwałych relacji w środowisku IT"
      ],
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Doświadczenie</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-300"></div>
          
          {experiences.map((job, index) => (
            <div 
              key={index} 
              className={`mb-16 relative animate-slide-up opacity-0`} 
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <Card className="overflow-hidden">
                  <div className="bg-blue-600 p-4 text-white">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-blue-100">{job.company} | {job.period}</p>
                  </div>
                  <CardContent className="p-6">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
