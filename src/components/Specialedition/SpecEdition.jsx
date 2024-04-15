import React from "react";
import "./SpecEdition.css";
import exclusive_image from "../Assets/exclusive_image.png";

const SpecEdition = () => {
  return (
    <div className="specedition">
      <div className="specialedition">
        <h3>Limited Time Offer</h3>
        <h1>Special Edition</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          velit laudantium tempore magni autem enim quaerat illum expedita
          necessitatibus, ab sunt nemo. Sunt veniam vero necessitatibus eius
          quasi adipisci error?
        </p>
        <h3>Buy This Product At 20% Discount, Use Code OFF24</h3>
        <button className="shop-now">SHOP NOW</button>
      </div>
      <div className="specialedition-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
export default SpecEdition;
