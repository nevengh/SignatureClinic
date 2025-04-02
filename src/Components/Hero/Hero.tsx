import ArrowBTN from "../ArrowBTN/ArrowBTN";
import "./Hero.css";
import hero1 from '../../assets/hero.webp'
import hero2 from '../../assets/hero2.webp'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const {t} = useTranslation();
  // Fade from top (like fadeInDown)
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 2 },
  };
  return (
    <div className="Hero">
      <div  className="MainTitle">
        <motion.h1  {...fadeInUp}
          viewport={{ once: false }}>
          {t('ClinicName')}
          <br />
          {t('MainTitleHero')} {" "}
          <br />
          <span>{t('MainTitleHero2')}
           </span>
        </motion.h1>
        <ArrowBTN BTN_Name="Get Your Free Consultation" URL="" />
      </div>
      <div className="Subtitle">
        <span>{t('subtitleHero')}</span>
        <motion.p  {...fadeInUp}
          viewport={{ once: false }} >
          {t('subtitleHero2')}  
          <br />
          {t('subtitleHero3')}
        </motion.p>
      </div>
      <div className="hero-image">
        <img src={hero1} alt="Woman receiving a cosmetic facial injection treatment at a clinic" />
      </div>
      <div className="hero-image-two">
        <img src={hero2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
