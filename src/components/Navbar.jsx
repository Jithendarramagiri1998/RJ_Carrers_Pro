// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RJ Careers Pro</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/services" className="hover:text-yellow-400">Services</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
