import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import Hero from "../../Components/Hero/Hero";
import { serviceDetailes } from "../../DB/service";
import "./Home.css";
import { useState, useEffect } from "react";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import ArrowBTN from "../../Components/ArrowBTN/ArrowBTN";
import Women from "../../assets/Women.webp";
import { useSwipeable } from "react-swipeable";
import Form from "../../Components/Form/Form";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const totalItems = serviceDetailes.length;

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handleNext = () => {
    if (currentIndex < totalItems - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true, // to allow desktop swipe
  });

  return (
    <div>
      <Hero />
      <div className="aboutUs-Home">
        <p className="about-title">
          Welcome to Our Clinic!
          <br />
          <span>Signature</span>
        </p>
        <p className="about-text">
          We help you be the best version of yourself by delivering bespoke
          treatment plans featuring the world's best beauty products backed by
          scientific data to ensure natural-looking, gorgeous results.
        </p>
      </div>

      {/* services */}
      <div className="PopularTreatment">
        <div className="popularTreatment_Head">
          <h1>Our Services</h1>
          <ArrowBTN BTN_Name="View All Services" />
        </div>
        <div className="arrow-container">
          <div className="icon" onClick={handlePrev}>
            <FaArrowLeft />
          </div>
          <div className="icon" onClick={handleNext}>
            <FaArrowRight />
          </div>
        </div>

        <div className="popularTreatment-Container" {...handlers}>
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {serviceDetailes.map((ele) => (
              <div key={ele.id} style={{ flex: `0 0 ${100 / itemsPerView}%` }}>
                <ServiceBox
                  ServiceName={ele.name}
                  imageUrl={ele.img}
                  serviceCategory={ele.category}
                  imgAlt={ele.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhance Your Natural Glow */}
      <div className="Home-Section">
        <div className="HomeSection-Container">
          <div className="content-holder">
            <p className="miny-title">Enhance Your Natural Glow</p>
            <h1>Feel Your Best With Advanced Aesthetic Medicine</h1>
            <p className="miny-text">
              We are a modern clinic of aesthetic and anti-aging medicine for
              people who want to enjoy an attractive appearance for a long time.
            </p>
            <div className="treatment-list">
              <div className="List">
                <p>
                  <span>
                    <FaCheck />
                  </span>
                  Neuromodulators;
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>
                  Dermal Fillers;
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>
                  Collagen Stimulation;
                </p>
              </div>
              <div className="List">
                <p>
                  <span>
                    <FaCheck />
                  </span>
                  PDO Threads;
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>
                  Body Treatments;
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>
                  Laser Technology;
                </p>
              </div>
            </div>
            <ArrowBTN BTN_Name="Find Our More" />
          </div>
          <div className="image-holder">
            <img src={Women} alt="" />
          </div>
        </div>
      </div>
      {/* Contatc  */}
      <div className="home-contact">
        <Form/>
      </div>
    </div>
  );
};

export default Home;
