import React from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-sans">
        <NavLink to="/" className="text-2xl font-bold text-primary">RJ Careers Pro</NavLink>
        <ul className="flex space-x-6 text-gray-700">
          {NAV_ITEMS.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? 'text-primary underline' : ''
                  }`
                }
              >{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
