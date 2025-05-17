
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="container mx-auto backdrop-blur-sm rounded-t-3xl bg-gradient-to-t from-blue-900/30 to-transparent py-8">
        <div className="max-w-lg mx-auto">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Natalia Nitychoruk. Wszystkie prawa zastrzeżone.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#oferta" className="text-white/50 hover:text-white/90 transition-colors">Oferta</a>
            <a href="#projekty" className="text-white/50 hover:text-white/90 transition-colors">Projekty</a>
            <a href="#kontakt" className="text-white/50 hover:text-white/90 transition-colors">Kontakt</a>
          </div>
          <p className="mt-6 text-xs text-white/40">
            📦 OUT OF THE BOX 📦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
