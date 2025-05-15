
import React from 'react';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="kontakt" className="container py-16 px-6 md:px-10">
      <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-blue-500/20 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 pt-20 -mt-20 text-center">
          Kontakt
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl mb-6">
              Chcesz dowiedzieć się więcej lub porozmawiać o współpracy?
            </p>
            
            <div className={`${isMobile ? 'space-y-4' : 'flex justify-center gap-8'}`}>
              <div className="backdrop-blur-md bg-blue-500/10 p-6 rounded-xl border border-blue-500/30 transition-all duration-300 hover:bg-blue-500/20">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500/30 p-3 rounded-full mb-4">
                    <MessageSquare size={24} className="text-blue-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Szybka wiadomość</h3>
                  <p className="mb-4 text-sm text-white/70">
                    Odpowiem najszybciej jak to możliwe
                  </p>
                  <a 
                    href="mailto:natalia.nitychoruk@gmail.com?subject=Zapytanie%20ze%20strony%20wizyt%C3%B3wki&body=Witaj%20Natalio%2C%0A%0AChcia%C5%82bym%20porozmawia%C4%87%20o%20wsp%C3%B3%C5%82pracy.%0A%0A(Prosz%C4%99%20o%20podanie%20szczeg%C3%B3%C5%82%C3%B3w%20przedmiotowej%20wsp%C3%B3%C5%82pracy%2C%20tj.%20typ%20projektu%2C%20oczekiwany%20czas%20realizacji%20np.%20tryb%20pilny%20oraz%20inne%20niezb%C4%99dne%20szczeg%C3%B3%C5%82y.)%0A%0APozdrawiam%2C%0A"
                    className="contact-button flex items-center justify-center gap-2 mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={18} />
                    Napisz do mnie
                  </a>
                </div>
              </div>

              <div className="backdrop-blur-md bg-blue-500/10 p-6 rounded-xl border border-blue-500/30 transition-all duration-300 hover:bg-blue-500/20">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500/30 p-3 rounded-full mb-4">
                    <Linkedin size={24} className="text-blue-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                  <p className="mb-4 text-sm text-white/70">
                    Zapraszam do nawiązania kontaktu
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/natalianitychoruk/"
                    className="contact-button flex items-center justify-center gap-2 mt-2"
                    style={{ background: 'linear-gradient(90deg, #0077B5, #00a0dc)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                    Połącz się
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
