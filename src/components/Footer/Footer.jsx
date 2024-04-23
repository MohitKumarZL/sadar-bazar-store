import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="prefooter">
      <div className="footer">
        <hr />
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>SBS</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Offices</li>
          <li>Product</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
            {/* Instagram */}
          </div>
          <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
            {/* Pintester */}
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
            {/* Whatsapp */}
          </div>
        </div>
        <hr />
      </div>

      <div className="footer-copyright">
        <p>Copyright @2024 All Right Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
