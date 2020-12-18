import React from "react";
import CategoryFilter from "../../component/categoryFilter/categoryFilter";
import LatestProducts from "../../component/latestProducts/latestProducts";
import LatestProductsSmall from "../../component/latestProductsSmall/latestProductsSmall";
import Services from "../../component/services/services";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <CategoryFilter />
      <div className="home-img">
        <div className="home-img__container">
          <h1 className="home-img__header">Bringing Africa to your doorstep</h1>
        </div>
      </div>
      <Services />
      <div className="social">
        <img
          className="social__icon"
          src="/img/icons8-facebook-96.png"
          alt=""
        />
        <img
          className="social__icon"
          src="/img/icons8-facebook-96.png"
          alt=""
        />
        <img
          className="social__icon"
          src="/img/icons8-facebook-96.png"
          alt=""
        />
      </div>
      <LatestProducts />
      <LatestProducts />
      <img className="banner" src="/img/free home dilvery.png.png" alt="" />
      <LatestProducts />
      <LatestProductsSmall />
      <div className="flyer-container">
        <img src="img/flyer.jpg" alt="" className="flyer" />
        <img src="img/flyer-two.jpg" alt="" className="flyer" />
        <img src="img/flyer-three.jpg" alt="" className="flyer" />
        <img src="img/flyer-four.jpg" alt="" className="flyer" />
      </div>
    </div>
  );
}

export default Home;
