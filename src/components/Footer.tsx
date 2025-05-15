
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-white/70 text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Natalia Nitychoruk. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
