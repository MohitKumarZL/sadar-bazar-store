import React from "react";
import "./Items.css";

const Items = (props) => {
  console.log(props.new_price);
  console.log(props.old_price);
  return (
    <div className="items">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${props.new_price}</div>
        <div className="item-prices-old">${props.old_price}</div>
      </div>
    </div>
  );
};
export default Items;
