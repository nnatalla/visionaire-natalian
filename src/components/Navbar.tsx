
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, User, Mail, Sparkles, LightbulbIcon, LucideLightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
  handleNav?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ handleNav }) => {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState<string>("#hero");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 50);
      setIsScrolled(scrollY > 100);

      // Determine active section based on scroll position
      const sections = ["#hero", "#projekty", "#o-mnie", "#kontakt"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]) as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = window.pageYOffset + rect.top;
          if (scrollY >= absoluteTop - 110) {
            setActiveLink(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (handleNav) {
      handleNav(event, href);
      setMobileMenuOpen(false);
      return;
    }
    if (href.startsWith("/")) {
      event.preventDefault();
      window.location.href = href;
      setMobileMenuOpen(false);
      return;
    }
    event.preventDefault();
    setActiveLink(href);
    setMobileMenuOpen(false);
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      // Use getBoundingClientRect for accurate positioning with scaling
      const rect = element.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + rect.top;
      window.scrollTo({
        top: absoluteTop - 10,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { href: "#hero", label: t("Start"), icon: <Home className="w-4 h-4" /> },
    { href: "#projekty", label: t("Projekty"), icon: <Briefcase className="w-4 h-4" /> },
    { href: "#o-mnie", label: t("O mnie"), icon: <User className="w-4 h-4" /> },
    { href: "#kontakt", label: t("Kontakt"), icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transform-gpu backface-hidden navbar-force-fixed ${
          isSticky
            ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-brand-neon/20 shadow-2xl shadow-brand-neon/10'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-neon/10 rounded-full">
                <LucideLightbulb className="w-6 h-6 text-brand-neon" />
              </div>
              <div className="hidden md:block">
                <p className="text-xl font-bold text-brand-soft-white">
                  {t("VisionAIre")}
                </p>
                <p className="text-xs text-brand-soft-white/60">{t("Natalia Nitychoruk")}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? 'bg-brand-neon text-brand-dark shadow-lg shadow-brand-neon/30'
                      : 'text-brand-soft-white hover:bg-brand-neon/10 hover:text-brand-neon'
                  }`}
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-brand-neon/10 text-brand-neon rounded-full font-medium hover:bg-brand-neon/20 transition-colors duration-300"
            >
              <span className="text-sm font-bold">{i18n.language === 'pl' ? 'ENG' : 'PL'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 bg-brand-neon/10 rounded-full text-brand-neon hover:bg-brand-neon/20 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-neon/20">
            <div
              className="h-full bg-gradient-to-r from-brand-neon to-brand-cyan transition-all duration-300"
              style={{
                width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
              }}
            ></div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden">
          <div className="absolute top-20 left-6 right-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand-neon/10 rounded-full">
                <Sparkles className="w-8 h-8 text-brand-neon" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-neon to-brand-cyan bg-clip-text text-transparent">
                  {t("VisionAIre")}
                </h1>
                <p className="text-sm text-brand-soft-white/60">{t("Natalia Nitychoruk")}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-sm px-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 w-full p-4 rounded-2xl font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? 'bg-brand-neon text-brand-dark shadow-lg shadow-brand-neon/30'
                    : 'bg-brand-neon/10 text-brand-soft-white hover:bg-brand-neon/20'
                }`}
                onClick={(e) => handleClick(e, link.href)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-2 rounded-full ${
                  activeLink === link.href ? 'bg-brand-dark/20' : 'bg-brand-neon/10'
                }`}>
                  {link.icon}
                </div>
                <span className="text-lg">{link.label}</span>
              </a>
            ))}

            <button
              onClick={() => {
                i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-brand-neon/10 text-brand-neon py-4 rounded-2xl font-medium hover:bg-brand-neon/20 transition-colors duration-300"
            >
              {i18n.language === 'pl' ? 'English' : 'Polski'}
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-40 left-10 w-20 h-20 bg-brand-cyan/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-xl"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
