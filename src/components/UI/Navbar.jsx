import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar-light fixed top-0 left-0 w-full p-4 bg-neutral-300 rounded-lg bg-glow text-white">
    <div className="container mx-auto flex justify-end ">
      <a href="#about" className="mx-2">About</a>
      <a href="#portfolio" className="mx-2">Portfolio</a>
      <a href="#contact" className="mx-2">Contact</a>
    </div>
  </nav>
  );
};

export default Navbar;
