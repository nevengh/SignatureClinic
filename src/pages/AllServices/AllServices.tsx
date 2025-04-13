import PageHero from "../../Components/shared/PageHero/PageHero";
import "./AllServices.css";
import AllServicesImage from "../../assets/beautiful-young-girl-touching-her-face-youth-skin-care-concept(2).webp";
import { t } from "i18next";
import { useServiceDetails } from "../../DB/service";
import { ServiceBox } from "../../Components";
const AllServices = () => {
  const services = useServiceDetails();
  return (
    <div className="AllServices">
      <PageHero
        BookUrl="/contact-us"
        Image={AllServicesImage}
        PageName={t("Services")}
        pageSubhead={t("ServicesSubhead")}
      />
      <div className="AllServicesContainer">
        {services.map((service) => {
          return (
            <ServiceBox
              key={service.id}
              ServiceName={service.name}
              imageUrl={service.img}
              imgAlt={service.name}
              serviceCategory={service.category}
              ServiceDescription={service.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
