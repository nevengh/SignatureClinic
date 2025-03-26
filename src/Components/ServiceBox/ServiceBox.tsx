import './ServiceBox.css';
import { Link } from "react-router-dom";
interface serviceBoxProps {
    imageUrl :string;
    serviceCategory:string;
    ServiceName:string;
    imgAlt:string
}
const ServiceBox = ({imageUrl,serviceCategory,ServiceName,imgAlt}:serviceBoxProps) => {
  return (
    <div className="serviceBox">
      <img src={imageUrl} alt={imgAlt} />
      <div className="box-container">
        <div className="serviceTitle">
          <p className="category">{serviceCategory}</p>
          <p className="serviceName">{ServiceName}</p>
        </div>
        <div className="viewDetails-BTN">
          <Link to="">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
