import './Footer.css'
import logo from '../../assets/لوجو.png'
import { Link } from 'react-router-dom'
import { FaCircle, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-section">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-column">
          <div className="column">
            <h2>Address</h2>
            <p className='address'>9 E 68th Street, 1C, New York, NY 10065</p>
            <p className='address'>
            Mon-Fri: 9am – 5pm; Sat: By Appointment Only
            </p>
          </div>
          <div className="column">
            <h2>Say Hello</h2>
            <div>
            <Link className='tele' to='tel:+1 800-123-1234'> <span><FaCircle/></span> +1 800-123-1234</Link>
            <p className='tele'>
              <span><FaCircle/></span> example@gmail.com
            </p>
            </div>
            <div className="social">
              <p className="iconSocial">
                <FaFacebook/>
              </p>
              <p className="iconSocial">
              <FaInstagram/>
              </p>
              <p className="iconSocial">
              <FaTwitter/>
              </p>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer