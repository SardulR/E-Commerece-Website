import React from "react";
import "./Offers.css";
import exclucive_image from "../Assets/exclusive_image.png";
export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For Your</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
};
