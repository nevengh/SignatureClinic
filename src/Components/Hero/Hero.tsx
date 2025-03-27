import ArrowBTN from "../ArrowBTN/ArrowBTN";
import "./Hero.css";
import hero1 from '../../assets/hero.webp'
import hero2 from '../../assets/hero2.webp'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Hero = () => {
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
          Bespoke Treatments.
          <br />
          Natural Results.
          <br />
          <span>The Best of You.</span>
        </motion.h1>
        <ArrowBTN BTN_Name="Get Your Free Consultation" />
      </div>
      <div className="Subtitle">
        <span>Enhance Your Natural Glow</span>
        <motion.p  {...fadeInUp}
          viewport={{ once: false }} >
          Feel Your Best With Advanced
          <br />
          Aesthetic Medicine.
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
