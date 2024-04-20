import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Upcoming Offers On Your Email</h1>
      <p>Suscribe to our newsletter and stay updated</p>
      <div className="login">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default NewsLetter;
