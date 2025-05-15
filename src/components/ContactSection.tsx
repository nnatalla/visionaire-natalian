
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="kontakt" className="container py-10 px-6 md:px-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00F2FE] pt-20 -mt-20">
        Kontakt
      </h2>

      <p className="text-xl mb-8">
        Chcesz dowiedzieć się więcej lub porozmawiać o współpracy?
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a 
          href="mailto:natalia.nitychoruk@gmail.com?subject=Zapytanie%20ze%20strony%20wizyt%C3%B3wki&body=Witaj%20Natalio%2C%0A%0AChcia%C5%82bym%20porozmawia%C4%87%20o%20wsp%C3%B3%C5%82pracy.%0A%0A(Prosz%C4%99%20o%20podanie%20szczeg%C3%B3%C5%82%C3%B3w%20przedmiotowej%20wsp%C3%B3%C5%82pracy%2C%20tj.%20typ%20projektu%2C%20oczekiwany%20czas%20realizacji%20np.%20tryb%20pilny%20oraz%20inne%20niezb%C4%99dne%20szczeg%C3%B3%C5%82y.)%0A%0APozdrawiam%2C%0A"
          className="contact-button flex items-center justify-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={20} />
          Napisz do mnie
        </a>

        <a 
          href="https://www.linkedin.com/in/natalianitychoruk/"
          className="contact-button flex items-center justify-center gap-2"
          style={{ background: '#00F2FE', color: '#7F00FF' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
