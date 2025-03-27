import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';

import './App.css';
import 'aos/dist/aos.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import ServiceProfile from './pages/ServiceProfile/ServiceProfile';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Preloader from './Components/Preloader/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidePreloader(true); // Trigger fade-out
      setTimeout(() => setLoading(false), 800); // Wait for fade-out to finish
    }, 2000);

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
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/service-profile" element={<ServiceProfile />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
            </Routes>
            
            <Footer />
          </BrowserRouter>
        </motion.div>
      )}
    </>
  );
};

export default App;
