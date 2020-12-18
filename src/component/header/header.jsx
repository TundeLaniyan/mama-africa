import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const basketItem = 2;
  return (
    <header>
      <img className="logo" src="/img/logo-two.png" alt="" />
      <input className="search-bar" type="search" />
      <button className="btn">
        <Link className="btn-text" to="/">
          search
        </Link>
      </button>
      <div className="icon-box">
        <Link className="text" to="sign-in.html">
          {" "}
          login/register
        </Link>
        <div className="icon icon-1 "></div>
        <div className="text">
          <Link to="item-page.html">cart</Link>
        </div>
        <div className="icon icon-2"></div>
        {basketItem > 0 && (
          <div className="cart-amount">
            <div className="cart-figure">{basketItem}</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
