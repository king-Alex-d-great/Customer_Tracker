import React, { useEffect } from "react";
import { data } from "../../Assets/data";
import "./index.css";

import Card from "../card";
import Navbar from "../navbar";

export default function LandingPage() {
  let cards = data.map((datum) => {
    return (
      <Card
        img={datum.image}
        title={datum.title}
        description={datum.description}
        price={datum.price}
        key={datum.id}
      />
    );
  });
  return (
    <>
      <section className="current-menu">
        <Navbar />
        <div className="current-menu-text">
          <p className="current-menu-text-para">Menu</p>
        </div>
        <div className="current-menu-filters">
          <header className="current-menu-filters-header">
            <h2>Current menu</h2>
          </header>
          <div className="current-menu-filters-lists">
            <ul className="current-menu-filters-lists-">
              <li className="current-menu-filters-lists-All">All</li>
              <li className="current-menu-filters-lists-Rice">Rice</li>
              <li className="current-menu-filters-lists-Beans">Beans</li>
              <li className="current-menu-filters-lists-Fries">Fries</li>
              <li className="current-menu-filters-lists-Swallow">Swallow</li>
              <li className="current-menu-filters-lists-Others">Others</li>
            </ul>
          </div>
        </div>
        <section className="current-menu-foods">{cards}</section>
        <section className="current-menu-footer">
          <button className="current-menu-footer-button">Full Menu</button>
        </section>
      </section>
    </>
  );
}
