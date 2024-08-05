import React from 'react';
import Navbar from './UI/Navbar.jsx';

const Header = () => {
  return (
    <header className="w-full  p-4 bg-scifi/50 rounded-lg bg-glow text-white mt-14">
      <div className="container mx-auto flex justify-center  p-4">
        <div className="flex items-center">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-3xl ml-2">My Profile</h1>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
