import React, { useEffect } from "react";
import "./index.css";

export default function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">Foods</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#" className="icon">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
