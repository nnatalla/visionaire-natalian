
import React from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Sparkles, ArrowUp, BrainIcon, CloudLightning, LightbulbIcon } from 'lucide-react';

type FooterProps = {
  handleNav?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Footer: React.FC<FooterProps> = ({ handleNav }) => {
  const handleFooterNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (handleNav) {
      handleNav(e);
      return;
    }
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    if (href.startsWith('/')) {
      e.preventDefault();
      window.location.href = href;
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href) as HTMLElement;
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { href: "#oferta", label: "Oferta" },
    { href: "#projekty", label: "Projekty" },
    { href: "#o-mnie", label: "O mnie" },
    { href: "#kontakt", label: "Kontakt" }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "nitychoruknatalia.office@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=nitychoruknatalia.office@gmail.com&su=Furmularz%20VisionAIre:%20Zapytanie%20ze%20strony%20wizyt%C3%B3wki&body=Dzień%20dobry%20Pani%20Natalio%2C%0A%0AChcia%C5%82bym%20porozmawia%C4%87%20o%20wsp%C3%B3%C5%82pracy.%0A%0A(Prosz%C4%99%20o%20podanie%20szczeg%C3%B3%C5%82%C3%B3w%20przedmiotowej%20wsp%C3%B3%C5%82pracy%2C%20tj.%20typ%20projektu%2C%20oczekiwany%20czas%20realizacji%20np.%20tryb%20pilny%20oraz%20inne%20niezb%C4%99dne%20szczeg%C3%B3%C5%82y.)%0A%0APozdrawiam%2C%0A",

    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telefon",
      value: "+48 514 920 431",
      href: "tel:+48514920431"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lokalizacja",
      value: "Warszawa, Polska",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/natalianitychoruk/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-300"
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-deep to-brand-accent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>

      {/* Neural Network Overlay */}
      <div className="neural-network-overlay">
        {/* Neural Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="neural-node"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `5%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}

        {/* Neural Connections */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`connection-${i}`}
            className="neural-connection"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `5%`,
              width: `${80 + (i * 15)}px`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="particle-system">
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="quantum-particle1"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `5%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-neon/10 rounded-full">
                    <LightbulbIcon className="w-8 h-8 text-brand-neon" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-neon to-brand-cyan bg-clip-text ">
                      VisionAIre
                    </h3>
                    <p className="text-brand-soft-white/60">Natalia Nitychoruk</p>
                  </div>
                </div>

                <p className="text-brand-soft-white/80 leading-relaxed mb-6 max-w-md">
                  Specjalizuję się w nowoczesnych rozwiązaniach AI, automatyzacji i analizie danych.
                  Pomagam firmom wdrażać technologie, które usprawniają ich biznes i otwierają nowe możliwości rozwoju.
                </p>

                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-brand-neon/10 rounded-full text-brand-soft-white/70 transition-all duration-300 hover:bg-brand-neon/20 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-brand-white mb-6">Szybkie linki</h4>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={handleFooterNav}
                      className="block text-brand-soft-white/70 hover:text-brand-neon transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-brand-white mb-6">Kontakt</h4>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-3 text-brand-soft-white/70 hover:text-brand-cyan transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-brand-neon/10 rounded-lg group-hover:bg-brand-cyan/10 transition-colors duration-300">
                        <div className="text-brand-cyan">{info.icon}</div>
                      </div>
                      <div>
                        <div className="text-sm text-brand-soft-white/60">{info.label}</div>
                        <div className="text-brand-white font-medium">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter/CTA Section */}
            <div className="glass-professional p-8 text-center mb-12">
              <h4 className="text-2xl font-bold text-brand-white mb-4">Zainteresowany współpracą?</h4>
              <p className="text-brand-soft-white/80 mb-6 max-w-2xl mx-auto">
                Skontaktuj się ze mną, aby omówić Twój projekt i zobaczyć, jak mogę pomóc w transformacji cyfrowej Twojej firmy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#kontakt"
                  onClick={handleFooterNav}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-brand-neon to-brand-cyan text-brand-dark font-semibold rounded-full hover:shadow-lg hover:shadow-brand-neon/25 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Napisz do mnie
                </a>
                <a
                  href="https://www.linkedin.com/in/natalianitychoruk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-brand-neon/10 text-brand-neon border border-brand-neon/20 rounded-full hover:bg-brand-neon/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-neon/10">
          <div className="section-container py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-brand-soft-white/60 text-sm">
                <span>&copy; {new Date().getFullYear()} Natalia Nitychoruk.</span>
                <span>Wszystkie prawa zastrzeżone.</span>
              {/*  <Heart className="w-4 h-4 text-brand-neon"> */}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-brand-soft-white/60 text-sm">OUT OF THE BOX.</span>
                <button
                  onClick={scrollToTop}
                  className="p-3 bg-brand-neon/10 rounded-full text-brand-neon hover:bg-brand-neon/20 transition-colors duration-300 group"
                  aria-label="Powrót do góry"
                >
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
