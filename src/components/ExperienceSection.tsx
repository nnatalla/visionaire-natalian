
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Technical Recruiter",
      company: "PeopleBox",
      period: "2022 - obecnie",
      description: [
        "Rekrutacja specjalistów IT (Java, .NET, Python, DevOps, itp.) na różne poziomy zaawansowania",
        "Budowanie strategii sourcingowych i prowadzenie kampanii rekrutacyjnych",
        "Ocena umiejętności technicznych kandydatów we współpracy z zespołami IT",
        "Współpraca z klientami w celu zrozumienia ich potrzeb rekrutacyjnych",
        "Budowanie i utrzymywanie bazy talentów IT"
      ],
    },
    {
      title: "IT Recruiter",
      company: "Adecco Poland",
      period: "2021 - 2022",
      description: [
        "Rekrutacja specjalistów na stanowiska techniczne",
        "Przeprowadzanie screeningów telefonicznych i rozmów kwalifikacyjnych",
        "Współpraca z menedżerami działów IT przy selekcji kandydatów",
        "Aktywne poszukiwanie kandydatów poprzez różne kanały sourcingowe",
        "Koordynowanie procesów rekrutacyjnych i komunikacja z kandydatami"
      ],
    },
    {
      title: "Junior Recruiter",
      company: "InSol IT",
      period: "2020 - 2021",
      description: [
        "Rekrutacja na stanowiska juniorskie w obszarze IT",
        "Wsparcie w organizacji i przeprowadzeniu procesów rekrutacyjnych",
        "Budowanie marki pracodawcy w mediach społecznościowych",
        "Screening CV i prowadzenie wstępnych rozmów z kandydatami",
        "Przygotowywanie raportów rekrutacyjnych"
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
