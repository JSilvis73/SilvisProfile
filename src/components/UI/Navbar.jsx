import React from "react";
import "../styles/Navbar.css";
import {faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" backdrop-blur-sm  navbar-light fixed top-0 p-4 w-full left-0 z-50 md:bg-slate-500/95  md:w-1/2 md:left-1/4 rounded-b-lg ">
      <div className="container mx-auto flex flex-row ">
        <div className="">
        <Link to="/"  className="mx-2">
          Home
        </Link>
        <Link to="/about" className="mx-2">
          About
        </Link>
        <Link to="/skills"  className="mx-2">
          Skills
        </Link>
        <Link to="/portfolio"  className="mx-2">
          Portfolio
        </Link>
        <Link to="/contact"  className="mx-2">
          Contact
        </Link>

        </div>
        <div className="ml-auto  flex border-2 border-scifi/50 rounded-xl">
          <a><FontAwesomeIcon className="mx-2" icon={faFacebook} /></a>
          <a><FontAwesomeIcon className="mx-2" icon={faDiscord} /></a>
          <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
