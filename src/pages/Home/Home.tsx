import { FaCheck } from "react-icons/fa";
import Hero from "../../Components/Hero/Hero";
import { serviceDetailes } from "../../DB/service";
import "./Home.css";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import ArrowBTN from "../../Components/ArrowBTN/ArrowBTN";
import Women from "../../assets/Women.webp";
import Form from "../../Components/Form/Form";
import doctor from "../../assets/doctor.webp";
import DoctorBox from "../../Components/DoctorBox/DoctorBox";
import Slider from "../../Components/Slider/Slider";

const Home = () => {

  const doctors = [
    { id: 1, name: "Miranda Kellers", spec: "Cosmetologist", img: doctor },
    { id: 2, name: "John Smith", spec: "Dermatologist", img: doctor },
    { id: 3, name: "Sara Ahmed", spec: "Laser Specialist", img: doctor },
    { id: 4, name: "Sara Ahmed", spec: "Laser Specialist", img: doctor },
    { id: 5, name: "Sara Ahmed", spec: "Laser Specialist", img: doctor },
  ];




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
      {/* Doctors */}
      <div className="PopularTreatment">
        <div className="popularTreatment_Head">
          <h1>Our Team</h1>
          <ArrowBTN BTN_Name="View All Doctors" />
        </div>
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
      {/* Contatc  */}
      <div className="home-contact">
        <Form />
      </div>
    </div>
  );
};

export default Home;
