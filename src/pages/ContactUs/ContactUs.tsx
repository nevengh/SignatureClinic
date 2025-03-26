import './ContactUs.css'
import contactImg from '../../assets/contacts-1.webp'
import { FaPhone } from 'react-icons/fa6'
import Form from '../../Components/Form/Form'

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="HomeSection-Container">
        <div className="image-holder">
          <img src={contactImg} alt="" />
        </div>
        <div className="content-holder">
          <p className="contact-subtitle">Contact Us</p>
          <h1 className='contact-Maintitle'>Contact Us Easily Online, by Phone or by Dropping In</h1>
          <div className="contact-btns">
            <a href="#" className='contact-book'>Book Online</a>
            <a className='contact-phone' href="tel:9999"> <span><FaPhone/></span>  Call: 1-800-123-1234</a>
          </div>
        </div>

      </div>
      <div className="contact-form">
        <Form/>
      </div>
    </div>
  )
}

export default ContactUs