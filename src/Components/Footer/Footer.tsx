import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaCircle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className="Footer">
      <div className="footer-section">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-column">
          <div className="column">
            <h2>{t('Address')}</h2>
            <p className="address">{t('location')}</p>
            <p className="address">
              {t('daily')}
            </p>
          </div>
          <div className="column">
            <div>
              <Link className="tele" to="tel:+971501447480">
                {" "}
                <span>
                  <FaCircle />
                </span>{" "}
                0501447480
              </Link> <br />
              <Link className="tele" to="tel:+971553206022">
                {" "}
                <span>
                  <FaCircle />
                </span>{" "}
                0553206022
              </Link><br />
              <Link className="tele" to="tel:+971092286004">
                {" "}
                <span>
                  <FaCircle />
                </span>{" "}
                092286004
              </Link>
              <p className="tele">
                <span>
                  <FaCircle />
                </span>{" "}
                example@gmail.com
              </p>
            </div>
            <div className="social">
              <p className="iconSocial">
                <FaFacebook />
              </p>
              <p className="iconSocial">
                <FaInstagram />
              </p>
              <p className="iconSocial">
                <FaTwitter />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-1">
        <div className="footer-menu">
          <Link to="/" className="nav-links">
            {t('Home')}
          </Link>

          <Link to="/" className="nav-links">
            {t('About')}
          </Link>

          <Link to="/" className="nav-links">
            {t('Service')}
          </Link>

          <Link to="/contact-us" className="nav-links">
            {t('contact')}
          </Link>
        </div>
        <p className="copywrite">
        © 2025 The S Clinic. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
