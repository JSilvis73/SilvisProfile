import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className=" navbar-light fixed top-2 left-1/4  w-1/2 p-4 bg-neutral-300/75 rounded-lg bg-glow ">
    <div className="container mx-auto flex justify-center  ">
      <a href="#about" className="mx-2">About</a>
      <a href="#skills" className="mx-2">Skills</a>
      <a href="#portfolio" className="mx-2">Portfolio</a>
      <a href="#contact" className="mx-2">Contact</a>
    </div>
  </nav>
  );
};

export default Navbar;
