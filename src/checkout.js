import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkoutbanner"
        src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ"
        alt=""
      />

      {state.basket?.length === 0 ? (
        <div>
          <h2>Your shopping basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your total is $ {state.total}</h2>
          <button id="checkout-button"> Proceed to checkout</button>
          {state.basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
