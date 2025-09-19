
import React, { useState, useEffect } from 'react';
import { Award, Users, Code, TrendingUp, Heart, Target, Zap, Star, BookOpen, Briefcase, Lightbulb, Database, Brain, BarChart3, Link, RotateCcw, Settings, Workflow, Monitor, FileText, Globe, MessageSquare, HandHeart, Search, Calendar, CheckCircle, FileCheck, Timer, Wrench, Package, Sparkles, Atom, Network, Cpu, Shield, ChevronRight, Handshake, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: t("Przegląd"), icon: <Star className="w-4 h-4" /> },
    { id: 'technical', label: t("Techniczne umiejętności"), icon: <Code className="w-4 h-4" /> },
    { id: 'soft', label: t("Miękkie umiejętności"), icon: <Heart className="w-4 h-4" /> },
    { id: 'certificates', label: t("Certyfikaty"), icon: <Award className="w-4 h-4" /> }
  ];

  const stats = [
    { icon: <Award className="w-8 h-8" />, value: "5+", label: t("Lat doświadczenia"), color: "text-brand-neon" },
    { icon: <Code className="w-8 h-8" />, value: "10+", label: t("Ukończonych projektów"), color: "text-brand-cyan" },
    { icon: <Users className="w-8 h-8" />, value: "∞", label: t("Zadowolonych klientów"), color: "text-brand-purple" },
    { icon: <Star className="w-8 h-8" />, value: "9+", label: t("Certyfikatów branżowych"), color: "text-brand-neon" }
  ];

  const technicalSkills = [
    { skill: t("Automatyzacja procesów biznesowych"), icon: <Workflow className="w-5 h-5" />, level: 95 },
    { skill: t("Analiza danych (Python, R, SQL)"), icon: <Database className="w-5 h-5" />, level: 90 },
    { skill: t("Machine Learning"), icon: <Brain className="w-5 h-5" />, level: 85 },
    { skill: t("Deep Learning"), icon: <Zap className="w-5 h-5" />, level: 80 },
    { skill: t("Rozwiązania chmurowe (AWS, Azure)"), icon: <Package className="w-5 h-5" />, level: 88 },
    { skill: t("Data Visualization"), icon: <BarChart3 className="w-5 h-5" />, level: 92 },
    { skill: t("Integracja API"), icon: <Link className="w-5 h-5" />, level: 87 },
    { skill: t("CI/CD Pipelines"), icon: <RotateCcw className="w-5 h-5" />, level: 83 },
    { skill: t("Procesy ETL"), icon: <Settings className="w-5 h-5" />, level: 85 },
    { skill: t("Automatyzacja przepływów pracy"), icon: <Wrench className="w-5 h-5" />, level: 90 },
    { skill: t("Aplikacje webowe i desktopowe"), icon: <Monitor className="w-5 h-5" />, level: 88 },
    { skill: t("Wizualizacje, Analizy, raporty"), icon: <FileText className="w-5 h-5" />, level: 91 },
    { skill: t("Systemy webowe"), icon: <Globe className="w-5 h-5" />, level: 86 }
  ];

  const softSkills = [
    { skill: t("Komunikacja"), icon: <MessageSquare className="w-5 h-5" />, description: t("Efektywna wymiana informacji") },
    { skill: t("Budowanie relacji"), icon: <HandHeart className="w-5 h-5" />, description: t("Tworzenie trwałych partnerstw") },
    { skill: t("Strategiczne myślenie"), icon: <Target className="w-5 h-5" />, description: t("Planowanie długoterminowe") },
    { skill: t("Analiza potrzeb biznesowych"), icon: <Search className="w-5 h-5" />, description: t("Zrozumienie wymagań klienta") },
    { skill: t("Zarządzanie projektami"), icon: <Calendar className="w-5 h-5" />, description: t("Koordynacja i realizacja") },
    { skill: t("Odpowiedzialność i sumienność"), icon: <CheckCircle className="w-5 h-5" />, description: t("Rzetelność i precyzja") },
    { skill: t("Planowanie i organizacja pracy"), icon: <FileCheck className="w-5 h-5" />, description: t("Efektywne zarządzanie czasem") },
    { skill: t("Analityczne podejście"), icon: <Lightbulb className="w-5 h-5" />, description: t("Logiczne rozwiązywanie problemów") },
    { skill: t("Myślenie wizjonerskie"), icon: <Lightbulb className="w-5 h-5" />, description: t("Innowacyjne rozwiązania") },
    { skill: t("Praca pod presją czasu"), icon: <Timer className="w-5 h-5" />, description: t("Efektywność w stresujących sytuacjach") },
    { skill: t("Zorientowanie na szukanie rozwiązań"), icon: <Wrench className="w-5 h-5" />, description: t("Kreatywność i adaptacja") }
  ];

  const certificates = [
    { img: "icon1.png", title: t("Generator Pomysłów x Politechnika Wrocławska"), desc: t("/ część zespołowa / Artificial Intelligence & Machine Learning (including Big Data)"), category: t("Akademickie"), issuer: "PWR" },
    { img: "icon2.png", title: t("Generator Pomysłów x Politechnika Wrocławska"), desc: t("/ część indywidualna / Artificial Intelligence & Machine Learning (including Big Data)"), category: t("Akademickie"), issuer: "PWR" },
    { img: "icon3.png", title: t("AWS Educate"), desc: t("Introduction to Generative Artificial Intelligence"), category: t("Chmurowe"), issuer: "AWS" },
    { img: "icon5.png", title: t("Santander OA x Politechnika Łódzka"), desc: t("Artificial Intelligence & Machine Learning (including Big Data)"), category: t("Akademickie"), issuer: "PŁ" },
    { img: "icon6.png", title: t("Polski Fundusz Rozwoju"), desc: t("AI od podstaw & Chmura w biznesie"), category: t("Biznesowe"), issuer: "PFR" },
    { img: "icon7.png", title: t("Platforma szkoleniowa Udemy"), desc: t("Scrum Master"), category: t("Metodologie"), issuer: "Udemy" },
    { img: "icon8.png", title: t("Intel"), desc: t("High Performance Computing"), category: t("Techniczne"), issuer: "Intel" },
    { img: "icon9.png", title: t("Intel"), desc: t("Edge Artificial Intelligence"), category: t("AI"), issuer: "Intel" },
    { img: "icon10.png", title: t("Intel"), desc: t("Artificial Intelligence Fundamentals"), category: t("AI"), issuer: "Intel" }
  ];

  return (
    <section id="o-mnie" className="section-padding relative overflow-hidden -mt-16 pt-16">
      {/* Gradient Transition from HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-deep/70 pointer-events-none" style={{zIndex:1}}></div>

      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-deep to-brand-accent" style={{zIndex:0}}></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-neon/5 rounded-full blur-3xl" style={{zIndex:2}}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" style={{zIndex:2}}></div>

      <div className="section-container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-brand-neon/10 rounded-full">
              <User className="w-8 h-8 text-brand-neon" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-neon to-brand-cyan bg-clip-text text-transparent">
              {t("O mnie")}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl text-brand-soft-white leading-relaxed mb-6">
                  {t("Jestem założycielką")} <span className="text-brand-neon font-semibold">{t("VisionAIre")}</span> {t("firmy specjalizującej się w nowoczesnych rozwiązaniach AI, automatyzacji i analizie danych. Pomagam firmom wdrażać technologie, które")} <span className="text-brand-cyan">{t("usprawniają ich biznes")}</span> {t("i otwierają nowe możliwości rozwoju.")}
                </p>
                <p className="text-lg text-brand-soft-white/80 leading-relaxed">
                  {t("Moje doświadczenie obejmuje projekty z zakresu automatyzacji, predykcji, integracji API i wdrożeń chmurowych. Posiadam certyfikaty branżowe oraz szerokie umiejętności techniczne i miękkie, które pozwalają mi kompleksowo podchodzić do każdego wyzwania.")}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-professional p-2 magnetic-card">
                    <img
                      src="foto1.jpg"
                      alt={t("Natalia Nitychoruk - Założycielka VisionAIre")}
                      className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Data Flow Connections */}
                  <div className="data-connection absolute top-1/2 left-full w-32" style={{ transform: 'translateY(-50%)' }}></div>
                  <div className="data-connection absolute top-1/2 right-full w-32" style={{ transform: 'translateY(-50%)' }}></div>
                  <div className="data-connection absolute left-1/2 top-full h-32 w-0" style={{ transform: 'translateX(-50%) rotate(90deg)' }}></div>
                  <div className="data-connection absolute left-1/2 bottom-full h-32 w-0" style={{ transform: 'translateX(-50%) rotate(90deg)' }}></div>

                  {/* Neural Sparks Around Avatar */}
                  <div className="absolute -top-2 -right-2 neural-spark"></div>
                  <div className="absolute -bottom-2 -left-2 neural-spark" style={{ animationDelay: '0.7s' }}></div>
                  <div className="absolute top-1/2 -left-2 neural-spark" style={{ animationDelay: '1.3s' }}></div>
                  <div className="absolute top-1/2 -right-2 neural-spark" style={{ animationDelay: '1.9s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neural Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-professional p-6 text-center group magnetic-card stats-neural">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-neon/10 mb-4 group-hover:bg-brand-neon/20 transition-colors duration-300 skill-icon-morph ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-brand-white mb-2">{stat.value}</div>
              <div className="text-sm text-brand-soft-white/70">{stat.label}</div>

              {/* Neural Connections Between Stats */}
              {index < stats.length - 1 && (
                <div className="data-connection absolute top-1/2 right-full w-6" style={{ transform: 'translateY(-50%)' }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 tab-neural ${
                  activeTab === tab.id
                    ? 'bg-brand-neon text-brand-dark shadow-lg active'
                    : 'bg-brand-neon/10 text-brand-soft-white hover:bg-brand-neon/20'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-professional p-8">
                  <h3 className="text-2xl font-bold text-brand-neon mb-6 flex items-center gap-3">
                    <Briefcase className="w-6 h-6" />
                    {t("Moja Misja")}
                  </h3>
                  <p className="text-brand-soft-white leading-relaxed mb-6">
                    {t("Wierzę w siłę technologii do rozwiązywania rzeczywistych problemów biznesowych. Moja misja to pomaganie firmom w transformacji cyfrowej poprzez inteligentne wykorzystanie danych i automatyzacji.")}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-brand-neon/10 rounded-lg">
                        <User className="w-4 h-4 text-brand-neon" />
                      </div>
                      <span className="text-brand-soft-white">{t("Innowacyjne podejście do rozwiązań")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-brand-cyan/10 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <span className="text-brand-soft-white">{t("Skupienie na rezultatach biznesowych")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-brand-purple/10 rounded-lg">
                        <Handshake className="w-4 h-4 text-brand-purple" />
                      </div>
                      <span className="text-brand-soft-white">{t("Długoterminowe partnerstwo")}</span>
                    </div>
                  </div>
                </div>

                <div className="glass-professional p-8">
                  <h3 className="text-2xl font-bold text-brand-cyan mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6" />
                    {t("Moje Wartości")}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-neon/10 rounded-lg">
                        <Heart className="w-5 h-5 text-brand-neon" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-white mb-1">{t("Pasja do Innowacji")}</h4>
                        <p className="text-sm text-brand-soft-white/70">{t("Wierzę w siłę technologii do rozwiązywania rzeczywistych problemów")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-cyan/10 rounded-lg">
                        <Users className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-white mb-1">{t("Partnerstwo z Klientami")}</h4>
                        <p className="text-sm text-brand-soft-white/70">{t("Buduję długotrwałe relacje oparte na zaufaniu")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-purple/10 rounded-lg">
                        <Star className="w-5 h-5 text-brand-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-white mb-1">{t("Doskonałość Techniczna")}</h4>
                        <p className="text-sm text-brand-soft-white/70">{t("Dążę do najwyższych standardów jakości")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="glass-professional p-6 group magnetic-card hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-brand-neon skill-icon-morph">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="w-full bg-brand-neon/20 rounded-full h-2 mb-2">
                          <div
                            className="bg-gradient-to-r from-brand-neon to-brand-cyan h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-brand-soft-white/60">{skill.level}%</div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-brand-white text-sm leading-tight">{skill.skill}</h4>

                    {/* Neural Connections Between Skills */}
                    {index < technicalSkills.length - 1 && index % 3 !== 2 && (
                      <div className="data-connection absolute top-1/2 right-full w-8" style={{ transform: 'translateY(-50%)' }}></div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'soft' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="glass-professional p-6 group magnetic-card hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-brand-cyan skill-icon-morph">{skill.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-brand-white mb-2">{skill.skill}</h4>
                        <p className="text-sm text-brand-soft-white/70 leading-tight">{skill.description}</p>
                      </div>
                    </div>

                    {/* Neural Connections Between Soft Skills */}
                    {index < softSkills.length - 1 && index % 3 !== 2 && (
                      <div className="data-connection absolute top-1/2 right-full w-8" style={{ transform: 'translateY(-50%)' }}></div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="glass-professional p-6 group magnetic-card certificate-hologram hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-brand-neon font-medium mb-1">{cert.category}</div>
                        <div className="text-xs text-brand-soft-white/60 mb-2">{cert.issuer}</div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-brand-white text-sm mb-2 leading-tight">{cert.title}</h4>
                    <p className="text-xs text-brand-soft-white/70 leading-tight">{cert.desc}</p>

                    {/* Neural Connections Between Certificates */}
                    {index < certificates.length - 1 && index % 3 !== 2 && (
                      <div className="data-connection absolute top-1/2 right-full w-8" style={{ transform: 'translateY(-50%)' }}></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
