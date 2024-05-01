import React, { useContext } from "react";
import "./CSS/StoreCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Items from "../components/Items/Items";

const StoreCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="store-category">
      <img className="storecategory-banner" src={props.banner} alt="" />
      <div className="storecategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="dropdown">
          <div className="storecategory-short">
            Sort by <img src={dropdown_icon} alt="" />
            <div className="dropdown-content">
              <a href="#">Price</a>
              <a href="#">Latest</a>
              <a href="#">Size</a>
            </div>
          </div>
        </div>
      </div>
      <div className="storecategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="storecategory-loadmore">
        <button>Explore more</button>
      </div>
    </div>
  );
};
export default StoreCategory;
