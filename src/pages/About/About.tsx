import "./About.css";
import aboutImage from '../../assets/beautiful-young-girl-touching-her-face-youth-skin-care-concept(2).webp'
import { useTranslation } from "react-i18next";
import PageHero from "../../Components/PageHero/PageHero";
const About = () => {



const {t} = useTranslation()
  return (
    <div>
      <PageHero BookUrl="/contact-us" Image={aboutImage} PageName={t('About')} pageSubhead={t('AboutUssubhead')}   />
    </div>
  );
};

export default About;
