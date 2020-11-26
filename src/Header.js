import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="parent__nav">
      <div className="header">
        <Link to="/">
          <img
            className="brandlogo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="search__bar">
          <input
            type="text"
            className="search__handlebar"
            placeholder="Search for any products"
          />
          <SearchIcon className="search__icon" />
        </div>

        <div className="header__nav">
          <Link to="#" className="header__link">
            <div className="header__option">
              <span className="small">hello</span>
              <span className="headeroptionspan">Sign-in</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="small">Returns &</span>
              <span className="headeroptionspan">Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="small">Your</span>
              <span className="headeroptionspan">Prime</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__option">
              <span className="small__count">{basket?.length}</span>

              <AddShoppingCartIcon className="carticon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
