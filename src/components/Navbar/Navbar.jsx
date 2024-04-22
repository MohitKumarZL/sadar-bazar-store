import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("store");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="" onClick={() => setMenu("store")} />
        </Link>
        <Link to="/">
          <p onClick={() => setMenu("store")}>SBS</p>
        </Link>
      </div>
      <div className="nav-menu">
        <li
          onClick={() => {
            setMenu("store");
          }}
        >
          <Link to="/">Store</Link> {menu === "store" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Women</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button onClick={() => setMenu(" ")}>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" onClick={() => setMenu(" ")} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
