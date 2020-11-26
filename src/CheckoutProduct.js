import React from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const removefrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <p>{title.substring(0, 40)}</p>
      <p className="product__price">
        <div className="product__price">
          <small>$</small> <strong>{price}</strong>
        </div>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>
              <StarIcon />
            </p>
          ))}
      </div>
      <img src={image} alt="" />
      <button className="remove" onClick={removefrombasket}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CheckoutProduct;
