import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div>
      <h1>Get Upcoming Offers On Your Email</h1>
      <p>Suscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Youe Email id" />
        <button>Suscribe</button>
      </div>
    </div>
  );
};
export default NewsLetter;
