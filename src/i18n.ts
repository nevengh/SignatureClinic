import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          Home:"Home",
          About:"About",
          contact: "Contact Us",
          Services:"Services",
          ContactUs:"Contact Us",
          bookVisit:"Book a Visit"
        },
      },
      ar: {
        translation: {
          welcome: "مرحبًا بكم في عيادتنا!",
          Home:"الصفحة الرئيسية",
          About:"من نحن",
          contact: "تواصل معنا",
          bookVisit:"احجز زيارة"
        },
      },
    },
  });

export default i18n;
