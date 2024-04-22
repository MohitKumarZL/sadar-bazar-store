import React from "react";
import "./Mainview.css";
import mainview from "../Assets/mainview.png";

const Mainview = () => {
  return (
    <div className="main">
      <div className="mainview">
        <div className="mainleft">
          <p>Raining Offers for Hot Summers!</p>
          <p>25% Off on All Products</p>
        </div>

        <button className="latest-btn">Latest Collection</button>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};
export default Mainview;
