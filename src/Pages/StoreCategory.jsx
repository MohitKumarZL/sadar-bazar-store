import React, { useContext } from "react";
import "./CSS/StoreCategory.css";
import { ShopContext } from "../Context/ShopContext";

const StoreCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="store-category">
      <img src={props.banner} alt="" />
      <div></div>
    </div>
  );
};
export default StoreCategory;
