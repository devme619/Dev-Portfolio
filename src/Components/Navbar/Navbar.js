import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <a href="#home">Devendra Pratap Singh</a>
      </div>
      <div className="navbarcomp">
        <div>
          <a href="#experience">Experience</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div id="contact">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
