import "./About.css";
import aboutImage from "../../assets/clinic3_11zon.webp";
import { useTranslation } from "react-i18next";
import PageHero from "../../Components/shared/PageHero/PageHero";
import { motion } from "framer-motion";
import { doctors } from "../../DB/Doctors";
import { ArrowBTN, DoctorBox, Slider } from "../../Components";
// Fade from bottom (like fadeInUp)
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

// Fade from top (like fadeInDown)
const fadeInDown = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};
const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PageHero
        BookUrl="/contact-us"
        Image={aboutImage}
        PageName={t("About")}
        pageSubhead={t("AboutUssubhead")}
      />
      <div className="aboutUs-Home">
        <motion.p
          className="about-title"
          {...fadeInUp}
          viewport={{ once: false }}
        >
          {t("WelcometoOurClinic")}
          <br />
          <span>{t("ClinicName")}</span>
        </motion.p>

        <motion.p
          className="about-text"
          {...fadeInUp}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {t("WelcometoOurClinic_text")}
        </motion.p>
      </div>
      <div className="PopularTreatment">
        <motion.div
          className="popularTreatment_Head"
          {...fadeInDown}
          viewport={{ once: false }}
        >
          <h1>{t("OurTeam")}</h1>
          <ArrowBTN URL="" BTN_Name={t("ViewAllDoctors")} />
        </motion.div>

        <Slider
          items={doctors}
          renderItem={(doc) => (
            <DoctorBox
              key={doc.id}
              DoctorName={doc.name}
              DoctorSpec={doc.spec}
              image={doc.img}
              imgAlt={doc.name}
            />
          )}
        />
      </div>
    </div>
  );
};

export default About;
