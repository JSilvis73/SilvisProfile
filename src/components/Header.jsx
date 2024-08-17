import React from 'react';
import Navbar from './UI/Navbar.jsx';

const Header = () => {
  return (
    <header className="w-full  p-4 bg-scifi/50 rounded-lg bg-glow text-white">
      <div className="container mx-auto flex justify-center  p-4">
        <div className="flex items-center">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10 w-10" />
          <h2 className="text-3xl font-bold ml-2 ">Imagination to Creation</h2>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
