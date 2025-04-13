import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import BookNow from "../shared/BookNow/BookNow";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const TogglerHandler = () => {
    setToggle(!toggle);
  };
  const closeMenu = () => setToggle(false);
  return (
    <div className="Navbar">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>

    {/* Burger menu for small screens */}
    <div className="burger-menu" onClick={TogglerHandler}>
      {toggle ? <FaTimes /> : <FaBars />}
    </div>

    {/* Responsive Navigation Links */}
    <div className={`nav-menu ${toggle ? "active" : ""}`}>
      <Link onClick={closeMenu} to="/" className="nav-links">{t('Home')}</Link>
      <span className="separator">|</span>
      <Link onClick={closeMenu} to="/about-us" className="nav-links">{t('About')}</Link>
      <span  className="separator">|</span>
      <Link onClick={closeMenu} to="/services" className="nav-links">{t('Services')}</Link>
      <span className="separator">|</span>
      <Link onClick={closeMenu} to="/contact-us" className="nav-links">{t('ContactUs')}</Link>
      <LanguageSwitcher/>
      <BookNow />
    </div>
  </div>
  );
};

export default Navbar;
