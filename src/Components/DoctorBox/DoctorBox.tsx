import ArrowBTN from "../ArrowBTN/ArrowBTN";
import "./DoctorBox.css";
interface DoctorBoxProps{
    DoctorName:string;
    DoctorSpec:string;
    image:string;
    imgAlt:string;

}
const DoctorBox = ({DoctorName,DoctorSpec,image,imgAlt}:DoctorBoxProps) => {
  return (
    <div className="doctor-box">
      <div className="doctor-box-head">
        <p className="DoctorName">{DoctorName}</p>
        <p className="DoctorSpec">{DoctorSpec}</p>
      </div>
      <div className="doctor-img">
        <img src={image} alt={imgAlt} />
      </div>
      <div className="doctor-btn">
        <ArrowBTN BTN_Name="Open Profile" />
      </div>
    </div>
  );
};

export default DoctorBox;
