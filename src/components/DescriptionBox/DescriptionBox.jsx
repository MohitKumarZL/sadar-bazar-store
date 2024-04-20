import React, { useContext } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox-fade">Reviews (122)</div>
      </div>
      .
      <div className="descriptionbox-description">
        <p>
          An E-commerce website is an online plateform that facilate buying and
          selling of products or services on the Internet servers.
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
