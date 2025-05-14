
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O Mnie</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-700 mb-4">
                Jestem doświadczonym rekruterem IT specjalizującym się w wyszukiwaniu talentów technicznych. Mam bogate doświadczenie w rekrutacji specjalistów IT na różnych poziomach zaawansowania, w tym programistów, architektów, liderów technicznych i kadry zarządzającej.
              </p>
              
              <p className="text-gray-700 mb-4">
                Ukończyłam psychologię na SWPS w Warszawie, co pozwala mi doskonale rozumieć potrzeby kandydatów i organizacji. Posiadam ponad 6 lat doświadczenia w rekrutacji IT i executive search, pracując dla wiodących agencji rekrutacyjnych oraz prowadząc własną działalność.
              </p>
              
              <p className="text-gray-700 mb-4">
                Obecnie prowadzę własną działalność rekrutacyjną, współpracując zarówno z firmami produktowymi, jak i agencjami IT. Specjalizuję się w rekrutacji programistów, DevOps, Project Managerów, Product Ownerów, CTO oraz innych ról technicznych i zarządczych.
              </p>
              
              <p className="text-gray-700">
                Poza pracą, aktywnie rozwijam swoje umiejętności w obszarze nowych technologii i trendów IT, aby być na bieżąco z dynamicznie zmieniającym się rynkiem pracy w sektorze technologicznym. Jestem pasjonatką budowania długotrwałych relacji opartych na wzajemnym zaufaniu i transparentności.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="text-blue-600 text-4xl font-bold">6+</div>
              <div className="text-gray-700 mt-2">Lat doświadczenia</div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
              <div className="text-blue-600 text-4xl font-bold">500+</div>
              <div className="text-gray-700 mt-2">Przeprowadzonych rekrutacji</div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm animate-slide-up opacity-0" style={{ animationDelay: "0.6s" }}>
              <div className="text-blue-600 text-4xl font-bold">30+</div>
              <div className="text-gray-700 mt-2">Technologii</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
