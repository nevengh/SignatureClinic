import "./ContactUs.css";
import contactImg from "../../assets/contacts-1.webp";
import Form from "../../Components/shared/Form/Form";
import { motion } from "framer-motion";
import PageHero from "../../Components/shared/PageHero/PageHero";
import { useTranslation } from "react-i18next";


// Fade from top (like fadeInDown)
const fadeInDown = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

const ContactUs = () => {
  const {t} = useTranslation();
  return (
    <div className="ContactUs">
      <PageHero BookUrl="#contact" Image={contactImg} PageName="Contact Us" pageSubhead={t('ContactUsSubhead')}  />

      <div id="contact" className="contact-form">
        <Form />
      </div>

      <motion.div
        className="contact-information-container"
        {...fadeInDown}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="contact-information">
          <h1>{t('ContactInformation')}</h1>
          <p>
           {t('')}
          </p>

          <div className="contact-details-container">
            <div className="contact-address">
              <h3>{t('Address')}:</h3>
              <p>{t('location')}</p>
            </div>
            <div className="contact-address">
              <h3>{t('ServiceTimes')}:</h3>
              <p>
              {t('daily')}
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.848487508625!2d56.34998147513652!3d25.140812733982596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f99dcdc03ca1%3A0xfd38bda07c13a79!2sSignature%20clinic!5e0!3m2!1sen!2sae!4v1743595281751!5m2!1sen!2sae"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
