
import './ServiceBox.css';
// import { Link } from "react-router-dom";
interface serviceBoxProps {
    imageUrl :string;
    serviceCategory:string;
    ServiceName:string;
    imgAlt:string;
    ServiceDescription ?:string;
}
const ServiceBox = ({imageUrl,serviceCategory,ServiceName,imgAlt,ServiceDescription}:serviceBoxProps) => {
  return (
    <div className="serviceBox">
      <img src={imageUrl} alt={imgAlt} />
      <div className="box-container">
        <div className="serviceTitle">
          <p className="category">{serviceCategory}</p>
          <p className="serviceName">{ServiceName}</p>
        </div>
        <div className="viewDetails-BTN">
          <p>
            {ServiceDescription}
          </p>
          {/* <Link to="">{t('ViewDetails')}</Link> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
