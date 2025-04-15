import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';

import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Preloader from './Components/Preloader/Preloader';
import { useTranslation } from "react-i18next";
import BackToTop from './Components/BackToTop/BackToTop';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ServiceProfile from './pages/ServiceProfile/ServiceProfile';
const App = () => {
  const [loading, setLoading] = useState(true);
  const [hidePreloader, setHidePreloader] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHidePreloader(true); // Trigger fade-out
      setTimeout(() => setLoading(false), 800); // Wait for fade-out to finish
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader fadeOut={hidePreloader} />
      ) : (
        <motion.div
          className="page-transition"
          
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <BrowserRouter>
          <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />

              <Route path="/service/:id" element={<ServiceProfile />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
            </Routes>
            
            <Footer />
            <BackToTop />
          </BrowserRouter>
        </motion.div>
      )}
    </>
  );
};

export default App;
