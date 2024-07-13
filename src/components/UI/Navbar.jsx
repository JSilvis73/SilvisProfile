import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-75 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-end p-4">
        <a href="#about" className="mx-2">About</a>
        <a href="#portfolio" className="mx-2">Portfolio</a>
        <a href="#contact" className="mx-2">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
