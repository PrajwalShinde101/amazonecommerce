import React from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Product({ id, title, price, image, rating }) {
  const [{}, dispatch] = useStateValue();
  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
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
      <button className="buttonproduct" onClick={addtobasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
