
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="md:w-1/2 mt-8 md:mt-0 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Natalia Nitychoruk
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mt-2">
              Technical Recruiter
            </h2>
            <p className="text-lg text-gray-600 mt-6 max-w-lg">
              Rekruter IT z doświadczeniem w pozyskiwaniu talentów technicznych.
              Specjalizuję się w budowaniu skutecznych strategii rekrutacyjnych
              i znajdowaniu najlepszych specjalistów dla firm IT.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#contact">Kontakt</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#about">Więcej o mnie</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in opacity-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Natalia Nitychoruk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
