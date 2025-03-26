import "./Form.css";

const Form = () => {
  return (
    <div className="Form">
      <form action="">
        <p className="form-subtitle">Schedule your visit online</p>
        <h1 className="form-Maintitle">
          Take the next step and schedule an appointment today
        </h1>
        <div className="FORMcontainer">
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="">Name</label>
              <input type="text" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="">Phone</label>
              <input type="text" required />
            </div>
          </div>
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="">EMAIL</label>
              <input type="email" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="">Treatment</label>
              <select>
                <option value="servie1">Service one</option>
                <option value="servie1">Service one</option>
                <option value="servie1">Service one</option>
              </select>
            </div>
          </div>
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="">Time</label>
              <input type="time" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="">Date</label>
                <input type="date" />
            </div>
          </div>
        <button className="submit" type="submit">Make an Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
