import { FaCheck } from "react-icons/fa";
import Hero from "../../Components/Hero/Hero";
import { serviceDetailes } from "../../DB/service";
import "./Home.css";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import ArrowBTN from "../../Components/ArrowBTN/ArrowBTN";
import Women from "../../assets/Women.webp";
import Form from "../../Components/Form/Form";
import DoctorBox from "../../Components/DoctorBox/DoctorBox";
import Slider from "../../Components/Slider/Slider";
import { doctors } from "../../DB/Doctors";
import { motion } from "framer-motion";

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
  return (
    <div>
      <Hero />

      <div className="aboutUs-Home">
        <motion.p
          className="about-title"
          {...fadeInUp}
          viewport={{ once: false }}
        >
          Welcome to Our Clinic!
          <br />
          <span>Signature</span>
        </motion.p>

        <motion.p
          className="about-text"
          {...fadeInUp}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          We help you be the best version of yourself by delivering bespoke
          treatment plans featuring the world's best beauty products backed by
          scientific data to ensure natural-looking, gorgeous results.
        </motion.p>
      </div>

      {/* services */}
      <div className="PopularTreatment">
        <motion.div
          className="popularTreatment_Head"
          {...fadeInUp}
          viewport={{ once: false }}
        >
          <h1>Our Services</h1>
          <ArrowBTN BTN_Name="View All Services" />
        </motion.div>

        <Slider
          items={serviceDetailes}
          renderItem={(service) => (
            <ServiceBox
              key={service.id}
              ServiceName={service.name}
              imageUrl={service.img}
              serviceCategory={service.category}
              imgAlt={service.name}
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
            <p className="miny-title">Enhance Your Natural Glow</p>
            <h1>Feel Your Best With Advanced Aesthetic Medicine</h1>
            <p className="miny-text">
              We are a modern clinic of aesthetic and anti-aging medicine for
              people who want to enjoy an attractive appearance for a long time.
            </p>

            <div className="treatment-list">
              <div className="List">
                <p>
                  <span><FaCheck /></span> Neuromodulators;
                </p>
                <p>
                  <span><FaCheck /></span> Dermal Fillers;
                </p>
                <p>
                  <span><FaCheck /></span> Collagen Stimulation;
                </p>
              </div>
              <div className="List">
                <p>
                  <span><FaCheck /></span> PDO Threads;
                </p>
                <p>
                  <span><FaCheck /></span> Body Treatments;
                </p>
                <p>
                  <span><FaCheck /></span> Laser Technology;
                </p>
              </div>
            </div>

            <ArrowBTN BTN_Name="Find Our More" />
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
          <h1>Our Team</h1>
          <ArrowBTN BTN_Name="View All Doctors" />
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

      {/* Contact Form */}
      <div className="home-contact">
        <Form />
      </div>
    </div>
  );
};

export default Home;
