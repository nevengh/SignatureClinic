import "./Navbar.css";
import logo from "../../assets/SVGGOLD.svg";
import { Link } from "react-router-dom";
import BookNow from "../BookNow/BookNow";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const TogglerHandler = () => {
    setToggle(!toggle);
  };
  
  return (
    <div className="Navbar">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>

    {/* Burger menu for small screens */}
    <div className="burger-menu" onClick={TogglerHandler}>
      {toggle ? <FaTimes /> : <FaBars />}
    </div>

    {/* Responsive Navigation Links */}
    <div className={`nav-menu ${toggle ? "active" : ""}`}>
      <Link to="/" className="nav-links">Home</Link>
      <span className="separator">|</span>
      <Link to="/" className="nav-links">About Us</Link>
      <span className="separator">|</span>
      <Link to="/" className="nav-links">Services</Link>
      <span className="separator">|</span>
      <Link to="/contact-us" className="nav-links">Contact Us</Link>
      <BookNow />
    </div>
  </div>
  );
};

export default Navbar;
