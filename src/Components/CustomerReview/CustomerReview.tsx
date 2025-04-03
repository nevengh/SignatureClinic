import { Customer } from "../../DB/Customer";
import CustomerReviewBox from "../shared/CustomerReviewBox/CustomerReviewBox";
import Slider from "../Slider/Slider";
import "./CustomerReview.css";

const CustomerReview = () => {
    const customers = Customer()
  return (
    <div className="CustomerReview">
    <Slider
      items={customers}
      renderItem={(customer) => (
        <CustomerReviewBox
          key={customer.id}
          name={customer.name}
          altImage={customer.name}
          image={customer.image}
          review={customer.review}
          star={customer.stars} // <- ✅ this was missing
        />
      )}
    />
  </div>
   /*
    
    <div className="CustomerReview">
      {Customer.map((ele) => {
        return (
          <CustomerReviewBox
            key={ele.id}
            altImage={ele.name}
            image={ele.image}
            name={ele.name}
            review={ele.review}
            star={ele.stars}
          />
        );
      })}
    </div>
   */
  );
};

export default CustomerReview;
