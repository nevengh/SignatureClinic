import ArrowBTN from "../ArrowBTN/ArrowBTN";
import "./Hero.css";
import hero1 from '../../assets/hero.webp'
import hero2 from '../../assets/hero2.webp'
const Hero = () => {
  return (
    <div className="Hero">
      <div className="MainTitle">
        <h1>
          Bespoke Treatments.
          <br />
          Natural Results.
          <br />
          <span>The Best of You.</span>
        </h1>
        <ArrowBTN BTN_Name="Get Your Free Consultation" />
      </div>
      <div className="Subtitle">
        <span>Enhance Your Natural Glow</span>
        <p>
          Feel Your Best With Advanced
          <br />
          Aesthetic Medicine.
        </p>
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
