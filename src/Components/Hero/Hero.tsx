import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ArrowBTN from "../shared/ArrowBTN/ArrowBTN";
import hero1 from '../../assets/hero.webp';
import hero2 from '../../assets/hero2.webp';
import slide1 from '../../assets/home-2-1.webp'; // background for first slide

import './Hero.css';

const slides = [
  { background: slide1 },
];

const Hero = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 2 },
  };

  return (
    <div className="HeroSlider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="Hero"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="MainTitle">
                <motion.h1 {...fadeInUp} viewport={{ once: false }}>
                  {t('ClinicName')}
                  <br />
                  {t('MainTitleHero')} <br />
                  <span>{t('MainTitleHero2')}</span>
                </motion.h1>
                <ArrowBTN BTN_Name={t('GetYourFreeConsultation')} URL="/contact-us" />
              </div>
              <div className="Subtitle">
                <span>{t('subtitleHero')}</span>
                <motion.p {...fadeInUp} viewport={{ once: false }}>
                  {t('subtitleHero2')} <br />
                  {t('subtitleHero3')}
                </motion.p>
              </div>
              <div className="hero-image">
                <img
                  src={hero1}
                  alt="Woman receiving a cosmetic facial injection treatment at a clinic"
                  loading='lazy'
                />
              </div>
              <div className="hero-image-two">
                <img src={hero2} alt=""  loading='lazy' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
