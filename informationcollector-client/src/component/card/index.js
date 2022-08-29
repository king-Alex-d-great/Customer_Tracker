import React, { useEffect } from "react";
import "../landingpage/index.css";

export default function Card({img, title, description, price}) {
  return (
    <div className="current-menu-foods-chicken foods">
      <div>
        <img
          className="foodsimg"
          src={img}
          alt="food-pic"
          width=""
        />
      </div>
      <div className="current-menu-foods-content">
        <h3 className="current-menu-foods-content-head">{title}</h3>
        <p className="current-menu-foods-content-para">
          {description}
        </p>
        <div className="current-menu-foods-content-foot">
          <p className="current-menu-foods-content-foot-price">{price}</p>
          <button className="current-menu-foods-content-foot-button">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
