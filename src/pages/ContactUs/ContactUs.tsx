import "./ContactUs.css";
import contactImg from "../../assets/contacts-1.webp";
import { FaPhone } from "react-icons/fa6";
import Form from "../../Components/Form/Form";
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

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="HomeSection-Container">
        <div className="image-holder">
          <img src={contactImg} alt="" />
        </div>

        <motion.div
          className="content-holder"
          {...fadeInUp}
          viewport={{ once: false, amount: 0.4 }}
        >
          <p className="contact-subtitle">Contact Us</p>
          <h1 className="contact-Maintitle">
            Contact Us Easily Online, by Phone or by Dropping In
          </h1>

          <motion.div
            className="contact-btns"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <a href="#" className="contact-book">
              Book Online
            </a>
            <a className="contact-phone" href="tel:9999">
              <span>
                <FaPhone />
              </span>
              Call: 1-800-123-1234
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="contact-form">
        <Form />
      </div>

      <motion.div
        className="contact-information-container"
        {...fadeInDown}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="contact-information">
          <h1>Contact Information</h1>
          <p>
            Thank you for visiting our website. We are here to assist you with
            any inquiries you may have.
          </p>

          <div className="contact-details-container">
            <div className="contact-address">
              <h3>Address:</h3>
              <p>14960 Florence Trail Apple Valley, MN 55124</p>
            </div>
            <div className="contact-address">
              <h3>Service Times:</h3>
              <p>
                Saturdays 4 pm
                <br />
                Sundays 9 & 11 am
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.288396694153!2d-93.28771298445118!3d44.7860470771987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32c56e5f2c83d%3A0x2a7997a76bb66bb5!2s14960%20Florence%20Trail%2C%20Apple%20Valley%2C%20MN%2055124!5e0!3m2!1sen!2sus!4v1679596551257!5m2!1sen!2sus"
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
