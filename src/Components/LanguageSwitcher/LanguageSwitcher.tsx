import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="lang-toggle-container" onClick={toggleLanguage}>
      <div className={`lang-toggle-switch ${currentLang === "ar" ? "rtl" : "ltr"}`}>
        {currentLang === "ar" ? "العربية" : "English"}
      </div>
      <div className="lang-toggle-labels">
        <span>English</span>
        <span>العربية</span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
