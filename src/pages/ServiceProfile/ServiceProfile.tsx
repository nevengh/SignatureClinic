import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ServiceProfile.css";
import { useServiceDetails } from "../../DB/service";

const ServiceProfile = () => {
  const { id } = useParams<{ id: string }>();
  const services = useServiceDetails();
  const { t } = useTranslation();

  // البحث عن الفئة بناءً على id
  const selectedService = services.find(
    (service) => service.id === parseInt(id || "0")
  );

  if (!selectedService) {
    return <div>{t("ServiceNotFound")}</div>;
  }

  return (
    <div className="service-profile">
      <h1>{selectedService.category}</h1>
      <div className="service-profile-container">
        {selectedService.services.map((subService) => (
          <div key={subService.id} className="service-profile-box">
            <div className="service-profile-box-image">
              <img src={subService.img} alt={subService.name} />
              <Link to='/contact-us'>{t('bookVisit')}</Link>
            </div>
            <div className="service-profile-box-content">
              <h2>{subService.name}</h2>
              <p>{subService.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProfile;
