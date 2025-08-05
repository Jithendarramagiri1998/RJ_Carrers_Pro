// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RJ Careers Pro</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
          <Link to="/services" className="hover:text-yellow-400 transition duration-300">Services</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="hover:text-yellow-400 transition duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-yellow-400 transition duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="hover:text-yellow-400 transition duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-yellow-400 transition duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;