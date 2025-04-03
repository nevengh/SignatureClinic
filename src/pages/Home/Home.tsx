import { FaCheck } from "react-icons/fa";
import case1 from '../../assets/BeforeAndAfter/antiaging-beauty-treatment(1)_11zon.webp'
import case2 from '../../assets/BeforeAndAfter/antiaging-beauty-treatment_11zon.webp'
import case3 from '../../assets/BeforeAndAfter/high-angle-view-25yearold-womans-dark-hair-before-after-hair-growth-treatment-portrait-st_11zon.webp'
import case4 from '../../assets/BeforeAndAfter/man-is-revealing-remarkable-progress-his-hair-regrowth-journey_11zon.webp'
import case5 from '../../assets/BeforeAndAfter/woman-face-before-after-cosmetic-procedure-cleaning-face_11zon.webp'
import "./Home.css";
import Women from "../../assets/Women.webp";
import {
  Slider,
  DoctorBox,
  Form,
  ArrowBTN,
  ServiceBox,
  Hero,
} from "../../Components/index";
import { doctors } from "../../DB/Doctors";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useServiceDetails } from "../../DB/service";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import BFAfter from "../../Components/shared/BFAfter/BFAfter";

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

const Home = () => {
  const beforeandafter =[
    {
      id:1,
      image:case1,
      name:"",
    },
    {
      id:2,
      image:case2,
      name:""
    },
    {
      id:3,
      image:case3,
      name:""
    },
    {
      id:4,
      image:case4,
      name:""
    },
    {
      id:5,
      image:case5,
      name:""
    }
  ]
  const services = useServiceDetails();
  const { t } = useTranslation();
  return (
    <div>
      <Hero />

      <div className="aboutUs-Home">
        <motion.p
          className="about-title"
          {...fadeInUp}
          viewport={{ once: false }}
        >
          {t("WelcometoOurClinic")}
          <br />
          <span>The S</span>
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

      {/* services */}
      <div className="PopularTreatment">
        <motion.div
          className="popularTreatment_Head"
          {...fadeInUp}
          viewport={{ once: false }}
        >
          <h1>{t("Service")}</h1>
          <ArrowBTN BTN_Name={t("ViewAllServices")} URL="/services" />
        </motion.div>

        <Slider
          items={services}
          renderItem={(service) => (
            <ServiceBox
              key={service.id}
              ServiceName={service.name}
              imageUrl={service.img}
              serviceCategory={service.category}
              imgAlt={service.name}
              ServiceDescription={service.description}
            />
          )}
        />
      </div>

      {/* Enhance Your Natural Glow */}
      <div className="Home-Section">
        <div className="HomeSection-Container">
          <motion.div
            className="content-holder"
            {...fadeInUp}
            viewport={{ once: false }}
          >
            <p className="miny-title">{t("About")} </p>
            <h1>{t("ANewChapterinSkinHairCare")}</h1>
            <p className="miny-text">{t("OurStory")}</p>

            <div className="treatment-list">
              <h3>{t("WhyUS")}</h3>
              <div className="List">
                <p>
                  <span>
                    <FaCheck />
                  </span>{" "}
                  {t("whyus_1")}
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>{" "}
                  {t("whyus_2")}
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>{" "}
                  {t("whyus_3")}
                </p>
              </div>
            </div>

            <ArrowBTN BTN_Name={t("FindOurMore")} URL="/about-us" />
          </motion.div>

          <motion.div
            className="image-holder"
            {...fadeInDown}
            viewport={{ once: false }}
          >
            <img src={Women} alt="" />
          </motion.div>
        </div>
      </div>

      {/* Doctors */}
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
      {/* Customer Review */}
      <div className="PopularTreatment">
        <motion.div
          className="popularTreatment_Head"
          {...fadeInUp}
          viewport={{ once: false }}
        >
          <h1>{t("CustomerReview")}</h1>
          {/* <ArrowBTN BTN_Name={t('ViewAllServices')} URL="/services" /> */}
        </motion.div>
        <CustomerReview />
      </div>
      {/* Befor And After */}
      <div className="BeforeAndAfter">
        <div className="PopularTreatment">
          <h1>{t('BeforeAndAfter')}</h1>
          <Slider
      items={beforeandafter}
      renderItem={(ele) => (
        <BFAfter
          image={ele.image}
          imageAlt={ele.name}
        />
      )}
      />
        </div>
      </div>
      {/* Contact Form */}
      <div className="home-contact">
        <Form />
      </div>
    </div>
  );
};

export default Home;
