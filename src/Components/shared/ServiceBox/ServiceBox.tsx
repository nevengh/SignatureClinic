import './ServiceBox.css';
import { useTranslation } from 'react-i18next';

interface ServiceBoxProps {
  imageUrl: string;
  serviceCategory: string;
  ServiceName: string;
  imgAlt: string;
  ServiceDescription?: string;
}

const ServiceBox = ({
  imageUrl,
  serviceCategory,
  ServiceName,
  imgAlt,

}: ServiceBoxProps) => {
  const { t } = useTranslation();

  return (
    <div className="serviceBox">
      <img src={imageUrl} alt={imgAlt} loading="lazy" />
      <div className="box-container">
        <div className="serviceTitle">
          <p className="category">{serviceCategory}</p>
          <p className="serviceName">{ServiceName}</p>
        </div>
        <div className="viewDetails-BTN">
          <a href="#">{t('ViewDetails')}</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;