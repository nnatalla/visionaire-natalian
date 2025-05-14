
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Wyższa Szkoła Bankowa",
      field: "Zarządzanie Zasobami Ludzkimi",
      period: "2016 - 2020",
      description: "Specjalizacja w rekrutacji i selekcji pracowników, zarządzaniu talentami oraz strategii HR.",
    },
    {
      degree: "Certyfikacja HRCI",
      field: "Professional in Human Resources",
      period: "2021",
      description: "Certyfikacja potwierdzająca kompetencje w obszarze zarządzania zasobami ludzkimi i rekrutacji specjalistów.",
    }
  ];
  
  const courses = [
    {
      name: "IT Recruitment Masterclass",
      provider: "Devskiller Academy",
      year: "2022",
      description: "Zaawansowane techniki rekrutacji specjalistów IT, ocena kompetencji technicznych i prowadzenie rozmów kwalifikacyjnych."
    },
    {
      name: "Technical Recruitment Fundamentals",
      provider: "LinkedIn Learning",
      year: "2021",
      description: "Podstawy rekrutacji technicznej, zrozumienie stanowisk IT i kluczowych kompetencji technicznych."
    },
    {
      name: "Advanced Sourcing Techniques",
      provider: "Sourcecon",
      year: "2021",
      description: "Zaawansowane metody wyszukiwania kandydatów w obszarze IT, techniki Boolean search i budowanie bazy talentów."
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Edukacja i Rozwój</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v10" />
              </svg>
              Wykształcenie
            </h3>
            {education.map((item, index) => (
              <Card key={index} className="mb-6">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900">{item.degree}</h4>
                  <p className="text-blue-600">{item.field}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.period}</p>
                  <p className="text-gray-700 mt-3">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Kursy i Certyfikaty
            </h3>
            {courses.map((course, index) => (
              <Card key={index} className="mb-6">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900">{course.name}</h4>
                  <p className="text-blue-600">{course.provider}</p>
                  <p className="text-gray-500 text-sm mt-1">{course.year}</p>
                  <p className="text-gray-700 mt-3">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
