import PageHero from "../../Components/shared/PageHero/PageHero";
import "./AllServices.css";
import AllServicesImage from "../../assets/front-view-woman-posing-with-gold-body-painting_11zon.webp";
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
