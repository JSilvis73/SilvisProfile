import React from "react";
import "../styles/Navbar.css";
import {faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className=" backdrop-blur-sm navbar-light fixed top-2 left-1/4  w-1/2 p-4 bg-neutral-300/75 rounded-lg bg-glow ">
      <div className="container mx-auto flex justify-center ">
        <a href="#about" className="mx-2">
          About
        </a>
        <a href="#skills" className="mx-2">
          Skills
        </a>
        <a href="#portfolio" className="mx-2">
          Portfolio
        </a>
        <a href="#contact" className="mx-2">
          Contact
        </a>
        <div className=" flex border-2 border-scifi/50 rounded-xl">
          <a><FontAwesomeIcon className="mx-2" icon={faFacebook} /></a>
          <a><FontAwesomeIcon className="mx-2" icon={faDiscord} /></a>
          <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
