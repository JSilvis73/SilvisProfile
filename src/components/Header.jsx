import React from 'react';
import Navbar from './UI/Navbar.jsx';

const Header = () => {
  return (
    <header className="relative bg-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-3xl ml-2">My Profile</h1>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
