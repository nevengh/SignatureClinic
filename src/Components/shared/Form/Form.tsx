import { useTranslation } from "react-i18next";
import "./Form.css";
import { useServiceDetails } from "../../../DB/service";

const Form = () => {
  const {t} = useTranslation();
  const services =useServiceDetails();
  return (
    <div className="Form">
      <form action="">
        <p className="form-subtitle">{t('FormSubTitle')}</p>
        <h1 className="form-Maintitle">
          {t('FormMainTitle')}
        </h1>
        <div className="FORMcontainer">
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="">{t('Name')}</label>
              <input type="text" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="">{t('Phone')}</label>
              <input type="text" required />
            </div>
          </div>
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="">{t('EMAIL')}</label>
              <input type="email" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="">{t('Treatment')}</label>
              <select>
                {
                  services.map((service)=>{
                    return(
                      <option key={service.id} value="servie1">{service.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="">{t('Time')}</label>
              <input type="time" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="">{t('Date')}</label>
                <input type="date" />
            </div>
          </div>
        <button className="submit" type="submit">{t('MakeanAppointment')}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
