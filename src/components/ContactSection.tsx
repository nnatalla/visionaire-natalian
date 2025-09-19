
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, MessageSquare, Send, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Uzupełnij poniższe wartości swoimi danymi z EmailJS
    const SERVICE_ID = 'visionaire_formularz';
    const TEMPLATE_ID = 'visionaire_formularz';
    const USER_ID = 'omFE4XR8eRy1RdNOq';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'nitychoruknatalia.office@gmail.com'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      setIsSubmitting(false);
      setError(t('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub napisz bezpośrednio na nitychoruknatalia.office@gmail.com.'));
    }
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t("Szybka wiadomość"),
      description: t("Odpowiem najszybciej jak to możliwe"),
      action: t("Napisz do mnie"),
      href: "https://mail.google.com/mail/?view=cm&to=nitychoruknatalia.office@gmail.com&su=Furmularz%20VisionAIre:%20Zapytanie%20ze%20strony%20wizyt%C3%B3wki&body=Dzień%20dobry%20Pani%20Natalio%2C%0A%0AChcia%C5%82bym%20porozmawia%C4%87%20o%20wsp%C3%B3%C5%82pracy.%0A%0A(Prosz%C4%99%20o%20podanie%20szczeg%C3%B3%C5%82%C3%B3w%20przedmiotowej%20wsp%C3%B3%C5%82pracy%2C%20tj.%20typ%20projektu%2C%20oczekiwany%20czas%20realizacji%20np.%20tryb%20pilny%20oraz%20inne%20niezb%C4%99dne%20szczeg%C3%B3%C5%82y.)%0A%0APozdrawiam%2C%0A",
      email: "nitychoruknatalia.office@gmail.com",
      color: "brand-neon"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: t("LinkedIn"),
      description: t("Zapraszam do nawiązania kontaktu"),
      action: t("Połącz się"),
      href: "https://www.linkedin.com/in/natalianitychoruk/",
      color: "blue-500"
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("Lokalizacja"),
      value: t("Warszawa, Polska")
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("Telefon"),
      value: t("+48 514 920 431")
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: t("Czas odpowiedzi"),
      value: t("< 24 h")
    }
  ];

  return (
    <section id="kontakt" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-deep to-brand-accent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>

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

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-brand-purple/10 rounded-full">
              <Mail className="w-10 h-9 text-brand-purple margin-left: 100px" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
              {t("Kontakt")}
            </h2>
          </div>
          <p className="text-xl text-brand-soft-white/80 max-w-3xl mx-auto">
            {t("Chcesz dowiedzieć się więcej lub porozmawiać o współpracy? Skontaktuj się ze mną!")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="glass-professional p-8">
              <h3 className="text-2xl font-bold text-brand-white mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-brand-cyan" />
                {t("Wyślij wiadomość")}
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-brand-white mb-2">{t("Wiadomość wysłana!")}</h4>
                  <p className="text-brand-soft-white/70">{t("Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="text-center text-red-500 font-semibold mb-4">{error}</div>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-soft-white mb-2">
                        {t("Imię i nazwisko")} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-brand-neon/5 border border-brand-neon/20 rounded-lg text-black placeholder-gray-600 focus:border-brand-neon focus:outline-none transition-colors duration-300"
                        placeholder={t("Twoje imię")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-soft-white mb-2">
                        {t("Email")} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-brand-neon/5 border border-brand-neon/20 rounded-lg text-black placeholder-gray-600 focus:border-brand-neon focus:outline-none transition-colors duration-300"
                        placeholder={t("twoj@email.com")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-soft-white mb-2">
                      {t("Temat")} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-brand-neon/5 border border-brand-neon/20 rounded-lg text-black placeholder-gray-600 focus:border-brand-neon focus:outline-none transition-colors duration-300"
                      placeholder={t("Temat wiadomości")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-soft-white mb-2">
                      {t("Wiadomość")} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-brand-neon/5 border border-brand-neon/20 rounded-lg text-black placeholder-gray-600 focus:border-brand-neon focus:outline-none transition-colors duration-300 resize-none"
                      placeholder={t("Opisz swój projekt lub zapytanie...")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-brand-neon to-brand-cyan text-brand-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-brand-neon/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></div>
                        {t("Wysyłanie...")}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t("Wyślij wiadomość")}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="glass-professional p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${method.color}/10 rounded-full group-hover:bg-${method.color}/20 transition-colors duration-300`}>
                      <div className={`text-${method.color}`}>{method.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-brand-white mb-2">{method.title}</h4>
                      <p className="text-brand-soft-white/70 mb-4">{method.description}</p>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-2 bg-${method.color} text-white font-medium rounded-full hover:bg-opacity-90 transition-colors duration-300`}
                      >
                        {method.action}
                        <Send className="w-4 h-4" />
                      </a>
                      {method.email && (
                        <p className="text-sm text-brand-soft-white/60 mt-2">{method.email}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="glass-professional p-6">
              <h4 className="text-lg font-semibold text-brand-white mb-6">{t("Informacje kontaktowe")}</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-brand-purple/10 rounded-lg">
                      <div className="text-brand-purple">{info.icon}</div>
                    </div>
                    <div>
                      <div className="text-sm text-brand-soft-white/60">{info.label}</div>
                      <div className="text-brand-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-professional p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-brand-white font-medium">{t("Aktualnie dostępna")}</span>
              </div>
              <p className="text-brand-soft-white/70 text-sm">
                {t("Przyjmuję nowe projekty i jestem otwarta na współpracę. Zapraszam do kontaktu!")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
