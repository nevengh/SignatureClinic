import './PageHero.css'
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
// Fade from bottom (like fadeInUp)
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};
interface PageHeroProps {
    Image:string;
    PageName:string;
    pageSubhead:string;
    BookUrl:string;
}
const PageHero = ({Image,PageName,pageSubhead,BookUrl}:PageHeroProps) => {
  return (
    <div className="HomeSection-Container">
    <div className="image-holder">
      <img src={Image} alt={PageName} />
    </div>

    <motion.div
      className="content-holder"
      {...fadeInUp}
      viewport={{ once: false, amount: 0.4 }}
    >
      <p className="contact-subtitle">{PageName}</p>
      <h1 className="contact-Maintitle">
        {pageSubhead}
      </h1>

      <motion.div
        className="contact-btns"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <a href={BookUrl} className="contact-book">
          Book Online
        </a>
        <a className="contact-phone" href="tel: +971501447480">
          <span>
            <FaPhone />
          </span>
          Call:  0501447480
        </a>
      </motion.div>
    </motion.div>
  </div>
  )
}

export default PageHero