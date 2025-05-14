
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "LinkedIn Recruiter", level: 95 },
    { name: "Boolean Search", level: 90 },
    { name: "Applicant Tracking Systems", level: 85 },
    { name: "Technical Screening", level: 80 },
    { name: "Recruitment Marketing", level: 75 },
  ];

  const itKnowledge = [
    { name: "Java Ecosystem", level: 70 },
    { name: "JavaScript Frameworks", level: 65 },
    { name: ".NET Technologies", level: 60 },
    { name: "DevOps Practices", level: 55 },
    { name: "Cloud Computing", level: 50 },
  ];

  const softSkills = [
    "Komunikacja",
    "Negocjacje",
    "Zarządzanie procesami",
    "Analiza CV",
    "Employer branding",
    "Budowanie relacji",
    "Praca zespołowa",
    "Organizacja czasu",
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Umiejętności</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Umiejętności rekrutacyjne</h3>
            
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Wiedza z obszaru IT</h3>
            
            {itKnowledge.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 animate-slide-up opacity-0" style={{ animationDelay: "0.7s" }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Umiejętności miękkie</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
