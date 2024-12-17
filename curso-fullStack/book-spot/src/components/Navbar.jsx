import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">BookSpot</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
