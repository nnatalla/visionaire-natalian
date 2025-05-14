
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
                Jestem Technical Recruiterem z pasją do znajdowania utalentowanych specjalistów IT. Moje doświadczenie obejmuje rekrutację programistów, testerów, DevOps i innych specjalistów technicznych.
              </p>
              
              <p className="text-gray-700 mb-4">
                Ukończyłam Wyższą Szkołę Bankową i posiadam rozległe doświadczenie w rekrutacji na stanowiska IT różnych poziomów, od juniorów po seniorów i liderów technicznych. Specjalizuję się w rozumieniu potrzeb firm technologicznych i dopasowywaniu do nich odpowiednich kandydatów.
              </p>
              
              <p className="text-gray-700 mb-4">
                Obecnie pracuję jako Technical Recruiter w PeopleBox, gdzie zajmuję się kompleksową rekrutacją specjalistów IT dla klientów z różnych branż. Jestem odpowiedzialna za identyfikację talentów, prowadzenie rozmów kwalifikacyjnych, ocenę umiejętności technicznych oraz prezentację kandydatów klientom.
              </p>
              
              <p className="text-gray-700">
                Poza pracą, rozwijam swoje umiejętności w obszarze nowych technologii, aby lepiej rozumieć potrzeby rekrutacyjne firm IT. Jestem również pasjonatką budowania pozytywnych doświadczeń kandydatów w procesie rekrutacji.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="text-blue-600 text-4xl font-bold">3+</div>
              <div className="text-gray-700 mt-2">Lata doświadczenia</div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
              <div className="text-blue-600 text-4xl font-bold">100+</div>
              <div className="text-gray-700 mt-2">Przeprowadzonych rekrutacji</div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm animate-slide-up opacity-0" style={{ animationDelay: "0.6s" }}>
              <div className="text-blue-600 text-4xl font-bold">20+</div>
              <div className="text-gray-700 mt-2">Technologii</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
