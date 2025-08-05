import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0f172a] py-6 text-center border-t border-gray-700 mt-10">
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} RJ Careers. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
